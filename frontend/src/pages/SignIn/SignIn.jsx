import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logIn } from '../../store/slices/userSlice'

const SignIn = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault()
            try {
                const response = await fetch(
                    'http://localhost:3001/api/v1/user/login',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: username,
                            password: password,
                        }),
                    }
                )
                if (!response.ok) {
                    const errorData = await response.json()
                    setError(
                        errorData.message || 'An error occurred during sign in'
                    )
                } else {
                    const data = await response.json()
                    console.log('login response data:', data)
                    const token = data.body.token
                    const userInfo = data.body.firstName
                    sessionStorage.setItem('token', token)
                    if (rememberMe) {
                        localStorage.setItem('token', token)
                    }
                    dispatch(logIn({ token, userInfo }))
                    navigate('/profile')
                }
            } catch (error) {
                console.error('Error:', error)
            }
        },
        [username, password, rememberMe, navigate, dispatch]
    )

    return (
        <>
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form autoComplete="on" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-remember">
                        <input
                            type="checkbox"
                            id="remember-me"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit">
                        Sign In
                    </button>
                    {error && <p className="error-message">{error}</p>}
                </form>
            </section>
        </>
    )
}

export default SignIn
