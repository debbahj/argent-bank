import PropTypes from 'prop-types'

const HomeLayout = ({ hero, feature }) => {
    return (
        <>
            <div className="hero">{hero}</div>
            <section className="features">{feature}</section>
        </>
    )
}

HomeLayout.propTypes = {
    hero: PropTypes.object.isRequired,
    feature: PropTypes.object.isRequired,
}

export default HomeLayout
