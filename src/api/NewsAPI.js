import { FetchUtility } from "../utilities";
import { APP_CONFIG } from "../config";

export async function getAllNews(filter){
    const url = `${APP_CONFIG.URL_REST_API}/api/news`;
    return FetchUtility.get(url, { params: filter });
}

export async function getSingleNews(idNews){
    const url = `${APP_CONFIG.URL_REST_API}/api/news/${idNews}`;
    return FetchUtility.get(url);
}

export async function createNews(news){
    const url = `${APP_CONFIG.URL_REST_API}/api/news`;
    return FetchUtility.post(url, news);
}

export async function editNews(idNews, news){
    const url = `${APP_CONFIG.URL_REST_API}/api/news/${idNews}`;
    return FetchUtility.put(url, news);
}

export async function deleteNews(idNews){
    const url = `${APP_CONFIG.URL_REST_API}/api/news/${idNews}`;
    return FetchUtility.delete(url);
}