const USER_LIST = "user_list";

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
};
