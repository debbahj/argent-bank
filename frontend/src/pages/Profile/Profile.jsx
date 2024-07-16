import UserEdit from '../../components/UserEdit/UserEdit'
import Account from '../../components/Account/Account'
import Loader from '../../components/Loader/Loader'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    const [user, setUser] = useState(null)

    if (!token) {
        navigate('/')
    }

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(
                    'http://localhost:3001/api/v1/user/profile',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )

                if (!response.ok) {
                    navigate('/error/' + response.status)
                } else {
                    const data = await response.json()
                    console.log(data)
                    setUser({
                        ...data.body,
                    })
                }
            } catch (error) {
                console.error('Error:', error)
            }
        }
        setTimeout(() => {
            fetchProfile()
        }, 2000)
    }, [navigate, token])

    if (!user) return <Loader />

    return (
        <>
            <UserEdit firstName={user.firstName} lastName={user.lastName} />
            <Account />
        </>
    )
}

export default Profile
