import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

const UserEdit = ({ firstName, lastName, userName, onSave }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [newUserName, setNewUserName] = useState(userName)
    const [error, setError] = useState('')

    const handleEdit = () => {
        setIsEditing(true)
        setError('')
    }

    const validateUserName = (name) => {
        if (name.length < 3) {
            setError('Username must be at least 3 characters or more')
            return false
        }
        setError('')
        return true
    }

    const handleSave = () => {
        if (validateUserName(newUserName)) {
            onSave(newUserName)
            setIsEditing(false)
        }
    }

    const handleCancel = () => {
        setNewUserName(userName)
        setIsEditing(false)
        setError('')
    }

    const handleUserNameChange = (e) => {
        const value = e.target.value
        setNewUserName(value)
        validateUserName(value)
    }

    return (
        <div className="header">
            {isEditing ? (
                <>
                    <h1>Edit user info</h1>
                    <form className="edit-user-form">
                        <div>
                            <label>User name: </label>
                            <input
                                type="text"
                                value={newUserName}
                                onChange={handleUserNameChange}
                            />
                        </div>
                        <div>
                            <label>First name: </label>
                            <input type="text" value={firstName} disabled />
                        </div>
                        <div>
                            <label>Last name: </label>
                            <input type="text" value={lastName} disabled />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                    </form>
                    <div className="button-group">
                        <Button
                            className={'save-button edit'}
                            handleClick={handleSave}
                            children="Save"
                        />
                        <Button
                            className={'cancel-button edit'}
                            handleClick={handleCancel}
                            children="Cancel"
                        />
                    </div>
                </>
            ) : (
                <>
                    <h1>
                        Welcome back
                        <br />
                        {firstName} {lastName}
                    </h1>
                    <Button
                        className={'edit'}
                        handleClick={handleEdit}
                        children={'Edit Name'}
                    />
                </>
            )}
        </div>
    )
}

UserEdit.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    userName: PropTypes.string,
    onSave: PropTypes.func,
}

export default UserEdit
