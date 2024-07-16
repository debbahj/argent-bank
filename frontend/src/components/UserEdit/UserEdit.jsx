import PropTypes from 'prop-types'

const UserEdit = ({ firstName, lastName }) => {
    if (!firstName || !lastName) {
        return <></>
    }

    return (
        <div className="header">
            <h1>
                Welcome back
                <br />
                {firstName} {lastName}
            </h1>
            <button className="edit-button">Edit Name</button>
        </div>
    )
}

UserEdit.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
}

export default UserEdit
