// convert object to string and store in localStorage
function saveToLocalStorage(userData) {
    try {
        var user = {
            "loggedIn": true,
            "userData": userData,
            "token": userData.token
        }
        localStorage.setItem('projectUser', JSON.stringify(user));
    } catch (e) {
        console.error(e);
        return undefined;
    }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
    try {
        const user = localStorage.getItem("projectUser");
        if (user === null) return undefined;
        return JSON.parse(user);
    } catch (e) {
        console.error(e);
        return undefined;
    }
}

// function getLocalRefreshToken() {
//     const user = JSON.parse(localStorage.getItem("projectUser"));
//     return user?.userData?.refreshToken;
// };

function getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem("projectUser"));
    return user?.userData?.token;
};


export {
    saveToLocalStorage,
    loadFromLocalStorage,
    // getLocalRefreshToken,
    getLocalAccessToken
}