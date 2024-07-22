import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: { isLoggedIn: false, token: null, userInfo: null },
    reducers: {
        logIn: (state, action) => {
            state.isLoggedIn = true
            state.token = action.payload.token
            state.userInfo = action.payload.userInfo
        },
        logOut: (state) => {
            state.isLoggedIn = false
            state.token = null
            state.userInfo = null
        },
    },
})

export const { logIn, logOut } = userSlice.actions
export default userSlice.reducer
