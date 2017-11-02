import * as search_actions from '../actions/search_actions';
import { SEARCH_ITEMS, GET_ITEM, FIND_ITEM } from '../actions/action_types';

export default function items_reducer(
	state = {
		categories: [],
		items: [],
		breadcrumb: [],
		search: undefined,
		current_item: undefined
	}, action) {

		switch (action.type) {
			case SEARCH_ITEMS:
			{
				return Object.assign({}, state, { categories: action.data.categories, items: action.data.items, breadcrumb: action.data.path_from_root });
			}
			case GET_ITEM:
			{
				return Object.assign({}, state, { current_item: action.data.item });
			}
			case FIND_ITEM:
			{
				return Object.assign({}, state, { search: action.data });
			}
		}
		return state;
}
