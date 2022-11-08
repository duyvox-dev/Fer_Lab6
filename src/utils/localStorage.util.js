const USER_LIST = "user_list";
const CONTACT_LIST = "contact_list";

export const localStorageService = {
    setUserList: (data) => {
        let dataJson = JSON.stringify(data);
        localStorage.setItem(USER_LIST, dataJson);
    },
    getUserList: () => {
        let dataJson = localStorage.getItem(USER_LIST);
        if (dataJson) {
            return JSON.parse(dataJson);
        }
        return null;
    },
    removeUserList: () => {
        let dataJson = localStorage.getItem(USER_LIST);
        if (dataJson) {
            localStorage.removeItem(USER_LIST);
        }
    },
    setContactList: (data) => {
        let dataJson = JSON.stringify(data);
        localStorage.setItem(CONTACT_LIST, dataJson);
    },
    getContactList: () => {
        let dataJson = localStorage.getItem(CONTACT_LIST);
        if (dataJson) {
            return JSON.parse(dataJson);
        }
        return null;
    },
    removeContactList: () => {
        let dataJson = localStorage.getItem(CONTACT_LIST);
        if (dataJson) {
            localStorage.removeItem(CONTACT_LIST);
        }
    },
};
