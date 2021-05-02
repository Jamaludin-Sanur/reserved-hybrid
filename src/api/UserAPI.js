import { FetchUtility } from "../utilities";
import { APP_CONFIG } from "../config";

export async function getAllUser(){
    const url = `${APP_CONFIG.URL_REST_API}/api/users`;
    return FetchUtility.get(url);
}

export async function getSingleUser(idUser){
    const url = `${APP_CONFIG.URL_REST_API}/api/user/${idUser}`;
    return FetchUtility.get(url);
}

export async function editUser(userData){
    const url = `${APP_CONFIG.URL_REST_API}/api/user`;
    return FetchUtility.put(url, userData);
}