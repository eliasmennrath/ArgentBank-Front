import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: "",
        firstName: "",
        lastName: "",
        email: ""
    },
    reducers: {
        login: (state, action) => {
            state.token = action.payload;
        },
        profile: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
        },
        logout: state => {
            state.token = "";
        }
    }
})

export const { login, profile, logout } = userSlice.actions
export default userSlice.reducer;