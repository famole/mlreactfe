import { SEARCH_PATH } from '../data/global_paths';

export function parse_search(q) {
    return q.replace(SEARCH_PATH, "").trim();
}