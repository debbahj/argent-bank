import { Outlet, useLocation } from 'react-router-dom'
import AppLayout from '../AppLayout/AppLayout'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

const RouterLayout = () => {
    const location = useLocation()
    const isDarkBg = location.pathname !== '/'

    return (
        <AppLayout
            nav={<Nav />}
            main={<Outlet />}
            footer={<Footer />}
            darkBg={isDarkBg}
        />
    )
}

export default RouterLayout
