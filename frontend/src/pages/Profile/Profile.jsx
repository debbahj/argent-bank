import UserEdit from '../../components/UserEdit/UserEdit'
import Account from '../../components/Account/Account'
import Loader from '../../components/Loader/Loader'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from '../../store/slices/userSlice'

const Profile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector((state) => state.user.token)

    const [user, setUser] = useState(null)

    useEffect(() => {
        if (!token) {
            navigate('/')
            return
        }

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
                    console.log(data)
                    setUser({
                        ...data.body,
                    })
                    dispatch(logIn({ token, userInfo: data.body }))
                }
            } catch (error) {
                console.error('Error:', error)
            }
        }
        setTimeout(() => {
            fetchProfile()
        }, 2000)
    }, [navigate, dispatch, token])

    const handleSaveUserName = async (newUserName) => {
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
            setUser(updatedUser.body)
            dispatch(logIn({ token, userInfo: updatedUser.body }))
        } catch (error) {
            console.error('Error updating username:', error)
        }
    }

    const accounts = [
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

    if (!user) return <Loader />

    return (
        <>
            <UserEdit
                firstName={user.firstName}
                lastName={user.lastName}
                userName={user.userName}
                onSave={handleSaveUserName}
            />
            {accounts.map((account, index) => (
                <Account
                    key={index}
                    accountTitle={account.title}
                    accountId={account.id}
                    accountBalance={account.balance}
                    accountDescription={account.description}
                />
            ))}
        </>
    )
}

export default Profile
