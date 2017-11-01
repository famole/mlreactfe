import { browserHistory } from 'react-router';

export const SEARCH_PATH = '?search=';
export const ITEM_PATH ='/items';
export const SEARCH_URL_PATH = '/items' + SEARCH_PATH;

export function itemDetail(id) {
    return ITEM_PATH + '/' + id;
}

export function searchURL(text) {
    return SEARCH_URL_PATH + text;
}
