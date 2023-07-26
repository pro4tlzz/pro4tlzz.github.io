function getAccessToken() {
    const authInfo = JSON.parse(localStorage.authToken);
    if (authInfo) {
        return authInfo.token;
    } else {
        return null;
    }
}

const accessToken = getAccessToken();