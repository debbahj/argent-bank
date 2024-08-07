import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { setProfile } from '../../store/slices/userSlice'

import UserEdit from '../../components/UserEdit/FormUserEdit'
import Account from '../../components/Account/Account'
import Loader from '../../components/Loader/Loader'

const mockedAccounts = [
    {
        title: 'Checking',
        id: 'x8349',
        balance: '2,082.79',
        description: 'Available',
    },
    {
        title: 'Savings',
        id: 'x6712',
        balance: '10,928.42',
        description: 'Available',
    },
    {
        title: 'Credit Card',
        id: 'x8349',
        balance: '184.30',
        description: 'Current',
    },
]

const Profile = () => {
    console.log('profile')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { token, userInfo } = useSelector((state) => state.user)
    const [editing, setEditing] = useState(false)
    const accounts = useState(mockedAccounts)[0]

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(
                    'http://localhost:3001/api/v1/user/profile',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )

                if (!response.ok) {
                    navigate('/error/' + response.status)
                } else {
                    const data = await response.json()
                    dispatch(setProfile({ token, userInfo: data.body }))
                }
                setEditing(false)
            } catch (error) {
                console.error('Error:', error)
                setEditing(false)
            }
        }
        if (!userInfo) {
            setEditing(true)
            setTimeout(() => {
                fetchProfile()
            }, 2000)
        }
    }, [navigate, dispatch, userInfo, token])

    const handleSaveUserName = async (newUserName) => {
        setEditing(true)
        setTimeout(async () => {
            try {
                const response = await fetch(
                    'http://localhost:3001/api/v1/user/profile',
                    {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({ userName: newUserName }),
                    }
                )

                if (!response.ok) {
                    throw new Error('Failed to update username')
                }

                const updatedUser = await response.json()
                dispatch(setProfile({ token, userInfo: updatedUser.body }))
                setEditing(false)
            } catch (error) {
                console.error('Error updating username:', error)
                setEditing(false)
            }
        }, 5000)
    }

    if (!userInfo) return <Loader />

    return (
        <>
            <UserEdit
                firstName={userInfo.firstName}
                lastName={userInfo.lastName}
                userName={userInfo.userName}
                onSave={handleSaveUserName}
                editing={editing}
            />
            {accounts &&
                accounts.length > 0 &&
                accounts.map((account, index) => (
                    <Account
                        key={index}
                        accountTitle={account.title}
                        accountId={account.id}
                        accountBalance={account.balance}
                        accountDescription={account.description}
                    />
                ))}

            {/* Empty state */}
            {!accounts || (accounts.length < 1 && <div>empty ...</div>)}
        </>
    )
}

export default Profile
