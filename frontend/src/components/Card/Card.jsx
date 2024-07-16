import PropTypes from 'prop-types'

const Card = ({icon, title, text}) => {
    return (
        <div className="feature-item">
            <img src={icon} alt='icon' className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
    )
}

Card.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
}

export default Card
