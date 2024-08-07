import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import RouterLayout from '../layout/RouterLayout/RouterLayout'
import Home from '../pages/Home/Home'
import Error from '../pages/Error/Error'
import SignIn from '../pages/SignIn/SignIn'
import Profile from '../pages/Profile/Profile'
// import UserTransaction from "../pages/User-transaction/UserTransaction"

const Dispatcher = () => {
    const { token } = useSelector((state) => state.user)
    if (!token) return <Navigate to="/" replace />
    console.log('router dispatcher')
    return <Outlet />
}

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RouterLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/error/:code" element={<Error />} />
                    <Route path="/signin" element={<SignIn />} />

                    <Route path="profile" element={<Dispatcher />}>
                        <Route index element={<Profile />} />
                        <Route path="*" element={<>Ou ça ???</>} />
                        {/* TODO: implement transactions */}
                        {/* <Route path='/transaction' element={ <UserTransaction /> } /> */}
                    </Route>

                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
