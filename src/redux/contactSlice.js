import { createSlice } from "@reduxjs/toolkit";
import ContactsData from "../shared/Contacts";
import { localStorageService } from "../utils/localStorage.util";
import { v4 as uuidv4 } from "uuid";

const getInitState = () => {
    const contactLocal = localStorageService.getContactList();
    if (contactLocal)
        return {
            value: contactLocal,
        };
    else
        return {
            value: ContactsData,
        };
};
const initialState = getInitState();
export const contactSlice = createSlice({
    name: "contactSlice",
    initialState: initialState,
    reducers: {
        addContact: (state, { payload }) => {
            let newIndex = uuidv4();

            // // find max index
            let newContacts = state?.value;
            // const currMaxIndex = -1;
            // for (let i = 0; i < newContacts.length; i++) {
            //     if (newContacts[i].id > newIndex) {
            //         newIndex = newContacts[i].id;
            //     }
            // }
            // newIndex = currMaxIndex + 1;
            // console.log(newIndex);
            // //
            newContacts.push({
                ...payload,
                id: newIndex,
            });
            newContacts.reverse();
            state.value = newContacts;
            localStorageService.setContactList(newContacts);
            // Write code for addUser function
        },
        deleteContact: (state, { payload }) => {
            // payload is user id
            console.log(payload);
            let newContacts = [];
            newContacts = state?.value.filter(
                (contact) => contact.id !== payload
            );
            state.value = newContacts;
            localStorageService.setContactList(newContacts);
            // Write code for deleteUser fuction
        },
        updateMessage: (state, { payload }) => {
            // console.log(payload);
            // payload is new user object
            let newContacts = state?.value.map((contact) => {
                if (contact.id == payload.id)
                    return { ...contact, message: payload.message };
                return contact;
            });
            state.value = newContacts;
            localStorageService.setContactList(newContacts);
            // // Write code for updateUsername function
        },
    },
});
export default contactSlice.reducer;
export const { addContact, deleteContact, updateMessage } =
    contactSlice.actions;
