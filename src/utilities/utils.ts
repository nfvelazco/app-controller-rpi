import { BACK_URL } from "../constants/constant"
import { AzureAuth } from "../models/AzureAuth";

export const getUserNameFromWindowsLogin = (windowsJson : AzureAuth) => {
    const {user_claims} = windowsJson
    const userName = user_claims.find(claim => claim.typ == "name")
    if (userName) {
        return userName.val
    }
}

export const getIdFromMail = (windowsJson : AzureAuth) => {
    const {user_id} = windowsJson
    const user = user_id.substring(0,user_id.indexOf("@"))
    return user
}

export const getRolesFromWindowsLogin = (windowsJson : AzureAuth) => {
    const {user_claims} = windowsJson
    const userRoles = user_claims.filter(claim => claim.typ == "roles").map(claim => claim.val)
    return userRoles
}

export const renderRedirect = () => {
    let host = window.location.protocol + "//" + window.location.host;
    host = host.replace('localhost', "127.0.0.1")
    window.location.replace(BACK_URL + "/.auth/login/aad?post_login_redirect_uri="+ host)
    return null;
}