import PropTypes from 'prop-types'

const AppLayout = ({nav, main, footer, darkBg = false, flex = false}) => {
    return (
        <div className="layout">
            {nav}
            <main className={'main' + (darkBg ? ' bg-dark' : '') + (flex ? ' no-flex' : '' )}>{main}</main>
            <footer className="footer">{footer}</footer>
        </div>
    )
}

AppLayout.propTypes = {
    nav: PropTypes.object.isRequired,
    main: PropTypes.object.isRequired,
    footer: PropTypes.object.isRequired,
    darkBg: PropTypes.bool,
    flex: PropTypes.bool,
}


export default AppLayout
