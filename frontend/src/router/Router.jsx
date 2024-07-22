import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RouterLayout from '../layout/RouterLayout/RouterLayout'
import Home from '../pages/Home/Home'
import Error from '../pages/Error/Error'
import SignIn from '../pages/SignIn/SignIn'
import Profile from '../pages/Profile/Profile'
// import UserTransaction from "../pages/User-transaction/UserTransaction"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RouterLayout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/error/:code" element={<Error />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/profile" element={<Profile />} />
                    {/* <Route path='/profile/transaction' element={ <UserTransaction /> } /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
