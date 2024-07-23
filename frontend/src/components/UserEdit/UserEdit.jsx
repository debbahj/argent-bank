import PropTypes from 'prop-types'
import Button from '../Button/Button'

const UserEdit = ({ firstName, lastName }) => {
    if (!firstName || !lastName) {
        return <></>
    }

    const handleClick = () => {
        console.log('Edit Name')
    }

    return (
        <div className="header">
            <h1>
                Welcome back
                <br />
                {firstName} {lastName}
            </h1>
            <Button
                className="edit"
                type="button"
                handleClick={handleClick}
                children="Edit Name"
            />
        </div>
    )
}

UserEdit.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
}

export default UserEdit
