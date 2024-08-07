import PropTypes from 'prop-types'

const Button = ({ variant = 'primary', children, ...props }) => {
    return (
        <button
            {...props}
            className={[
                'button',
                `${variant}-button`,
                props.className ? props.className + '-button' : '',
            ].join(' ')}
            type={props.type ?? 'button'}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
}

export default Button
