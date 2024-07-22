import { Outlet, useLocation } from 'react-router-dom'
import AppLayout from '../AppLayout/AppLayout'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

const RouterLayout = () => {
    const location = useLocation()
    const isDarkBg = location.pathname !== '/'
    const noFlex = location.pathname == '/'

    return (
        <AppLayout
            nav={<Nav />}
            main={<Outlet />}
            footer={<Footer />}
            darkBg={isDarkBg}
            flex={noFlex}
        />
    )
}

export default RouterLayout
