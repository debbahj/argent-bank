import { createSlice } from '@reduxjs/toolkit'

const ls = localStorage.getItem("user")
const userLS = ls ? JSON.parse(ls) : null

const userSlice = createSlice({
    name: 'user',
    initialState: userLS ? {
        isLoggedIn: true,
        token: userLS.token,
        userInfo: userLS.userInfo,
    } : {
        isLoggedIn: false,
        token: null,
        userInfo: null,
    },
    reducers: {
        logIn: (state, action) => {
            const userStr = JSON.stringify({ ...action.payload })
            sessionStorage.setItem('user', userStr)
            if (action.payload.rememberMe) {
                localStorage.setItem('user', userStr)
            } else {
                localStorage.removeItem('user')
            }
            state.isLoggedIn = true
            state.token = action.payload.token
            state.userInfo = null
        },
        setProfile: (state, action) => {
            state.token = action.payload.token
            state.userInfo = action.payload.userInfo
            const ls = sessionStorage.getItem("user")
            const userLS = JSON.parse(ls)
            const userStr = JSON.stringify({
                ...userLS,
                token: action.payload.token,
                userInfo: action.payload.userInfo
            })
            sessionStorage.setItem('user', userStr)
            if (ls) localStorage.setItem("user", userStr)
        },
        logOut: (state) => {
            state.isLoggedIn = false
            state.token = null
            state.userInfo = null
            sessionStorage.removeItem('user')
            localStorage.removeItem('user')
        },
    },
})

export const { logIn, setProfile, logOut } = userSlice.actions
export default userSlice.reducer
