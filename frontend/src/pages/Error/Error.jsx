import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

const errorMap = new Map([
    ['401', 'Unauthorized'],
    ['403', 'Forbidden'],
    ['404', 'page not Found'],
    ['500', 'Server error'],
    ['502', 'Bad gateway'],
    ['503', 'Service unavailable'],
    ['504', 'Gateway timeout'],
])

const getErrorMessage = (code) => errorMap.get(code) || 'unknown error'

const Error = ({ code }) => {
    const { code: codeParam } = useParams()

    if (!code) {
        code = codeParam
    }

    return (
        <div className="error-code">
            <h1>{code}</h1>
            <p>{getErrorMessage(code)}</p>
            <Link to="/">Go to home🏠</Link>
        </div>
    )
}

Error.propTypes = {
    code: PropTypes.string,
}

export default Error
