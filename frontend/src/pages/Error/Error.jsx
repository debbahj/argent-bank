import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

// const errorMap = new Map([])
// ["404", "page not Found],
// ["500", "Server error"]
// ]
// const getErrorMessage = (code) => errorMap.get(code) || "unknown error"

const Error = ({ code = '404' }) => {
    const { code: codeParam } = useParams()

    if (!code) {
        code = codeParam
    }

    return (
        <div className="err404">
            <h1>{code}</h1>
            {/* <p>{getErrorMessage(code)}</p> */}
            <p>Page not found</p>
            <Link to="/">Go to home🏠</Link>
        </div>
    )
}

Error.propTypes = {
    code: PropTypes.string,
}

export default Error
