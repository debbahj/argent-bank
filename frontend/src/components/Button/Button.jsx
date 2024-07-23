import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ handleClick, className, type = 'button', children }) => {
    return (
        <button
            onClick={handleClick}
            className={`${className}-button`}
            type={type}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    handleClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
}

export default Button
