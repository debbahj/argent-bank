import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

const FormUserEdit = ({ firstName, lastName, userName, editing, onSave }) => {
    const [newUserName, setNewUserName] = useState(userName)
    const [error, setError] = useState('')
    const [editable, setEditable] = useState(false)

    const handleEdit = () => {
        setError('')
        setEditable(true)
    }

    const validateUserName = (name) => {
        if (name.length < 3) {
            setError('Username must be at least 3 characters or more')
            return false
        }
        setError('')
        return true
    }

    const handleSubmit = () => {
        if (validateUserName(newUserName)) {
            console.log('on submit')
            setEditable(false)
            onSave(newUserName)
        }
    }

    const handleCancel = () => {
        setNewUserName(userName)
        setEditable(false)
        setError('')
    }

    const handleUserNameChange = (e) => {
        const value = e.target.value
        setNewUserName(value)
        validateUserName(value)
    }

    return (
        <div className="header">
            {(editing || editable) && (
                <div
                    className="modal-clickawaylistener"
                    onClick={() => {
                        handleCancel()
                    }}
                >
                    <div
                        className="modal"
                        onClick={(ev) => {
                            ev.stopPropagation()
                        }}
                    >
                        <h1>Edit user info</h1>
                        <form
                            className="edit-user-form"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label htmlFor="username">User name: </label>
                                <input
                                    name="username"
                                    id="username"
                                    type="text"
                                    value={newUserName}
                                    onChange={handleUserNameChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="firstname">First name: </label>
                                <input
                                    name="firstname"
                                    id="firstname"
                                    type="text"
                                    value={firstName}
                                    disabled
                                />
                            </div>
                            <div>
                                <label htmlFor="lastname">Last name: </label>
                                <input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    value={lastName}
                                    disabled
                                />
                            </div>
                            {error && <p className="error-message">{error}</p>}
                            <div className="button-group">
                                <Button
                                    type="submit"
                                    className={'save-button edit'}
                                    disabled={editing}
                                >
                                    Save
                                </Button>
                                <Button
                                    className={'cancel-button edit'}
                                    onClick={handleCancel}
                                    variant="secondary"
                                    disabled={editing}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <>
                <h1>
                    Welcome back
                    <br />
                    {firstName} {lastName}
                </h1>
                <Button
                    className={'edit'}
                    onClick={handleEdit}
                    disabled={editing || editable}
                >
                    Edit Name
                </Button>
            </>
        </div>
    )
}

FormUserEdit.propTypes = {
    editing: PropTypes.bool,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    userName: PropTypes.string,
    onSave: PropTypes.func,
}

export default FormUserEdit
