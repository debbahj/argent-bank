import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../store/slices/userSlice'

const Nav = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
    const userInfo = useSelector((state) => state.user.userInfo)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logOut())
        localStorage.removeItem('token')
        sessionStorage.removeItem('token')
    }

    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img
                    src="../assets/img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                    className="main-nav-logo-image"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {isLoggedIn ? (
                    <>
                        <NavLink to="/profile" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>{' '}
                            {userInfo?.firstName}
                        </NavLink>
                        <button
                            onClick={handleLogOut}
                            className="main-nav-item"
                        >
                            <i className="fa fa-sign-out"></i> Sign Out
                        </button>
                    </>
                ) : (
                    <NavLink to="/signin" className="main-nav-item">
                        <i className="fa fa-user-circle"></i> Sign In
                    </NavLink>
                )}
            </div>
        </nav>
    )
}

export default Nav
