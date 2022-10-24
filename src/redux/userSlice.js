import { createSlice } from "@reduxjs/toolkit";
import UserData from "../shared/Users";
import { localStorageService } from "../utils/localStorage.util";
const getInitState = () => {
    const userLocal = localStorageService.getUserList();
    if (userLocal)
        return {
            value: userLocal,
        };
    else
        return {
            value: UserData,
        };
};
const initialState = getInitState();
export const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        addUser: (state, { payload }) => {
            let newIndex = -1;
            // find max index
            let newUsers = state?.value;
            const currMaxIndex = -1;
            for (let i = 0; i < newUsers.length; i++) {
                if (newUsers[i].id > newIndex) newIndex = newUsers[i].id;
            }

            newIndex = currMaxIndex + 1;
            //
            newUsers.push({
                ...payload,
                id: newIndex,
            });
            state.value = newUsers;
            localStorageService.setUserList(newUsers);
            // Write code for addUser function
        },
        deleteUser: (state, { payload }) => {
            // payload is user id
            let index = -1;
            let newUsers = [];
            newUsers = state?.value.filter((user) => user.id !== payload);
            state.value = newUsers;
            localStorageService.setUserList(newUsers);

            // Write code for deleteUser fuction
        },
        updateUsername: (state, { payload }) => {
            // payload is new user object
            let newUsers = state?.value.map((user) => {
                if (user.id == payload.id)
                    return {
                        ...user,
                        username: payload.username,
                    };
                return user;
            });
            state.value = newUsers;
            localStorageService.setUserList(newUsers);

            // Write code for updateUsername function
        },
    },
});
export default userSlice.reducer;
export const { addUser, deleteUser, updateUsername } = userSlice.actions;
