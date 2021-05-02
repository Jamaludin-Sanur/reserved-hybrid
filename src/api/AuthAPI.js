import { FetchUtility } from "../utilities";
import { APP_CONFIG } from "../config";

export async function register(name, email, password) {
    const url = `${APP_CONFIG.URL_REST_API}/api/register`;
    const data = {
        name, email, password
    };
    return FetchUtility.post(url, data);
}

export async function login(email, password) {
    const url = `${APP_CONFIG.URL_REST_API}/api/login`;
    const data = {
        email, password
    };
    return FetchUtility.post(url, data);
}