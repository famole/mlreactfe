import { HTTPMethods } from './HTTPMethods';

export function search_items(q) {
    return {
        method: HTTPMethods.GET,
        path: `items?q=${q}`
    };
}

export function item(id) {
    return {
        method: HTTPMethods.GET,
        path: `items/${id}`
    };
}
