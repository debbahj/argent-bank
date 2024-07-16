import PropTypes from 'prop-types'

const Hero = ({ title, subtitles, text }) => {
    return (
        <section className="hero-content">
            <h2 className="sr-only">{title}</h2>
            {subtitles.map((subtitle, index) => (
                <p key={index} className="subtitle">
                    {subtitle}
                </p>
            ))}
            <p className="text">{text}</p>
        </section>
    )
}

Hero.propTypes = {
    title: PropTypes.string,
    subtitles: PropTypes.arrayOf(PropTypes.string),
    text: PropTypes.string,
}

export default Hero
