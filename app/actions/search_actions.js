import * as search_api from '../api/search_api';
import { SEARCH_ITEMS, GET_ITEM, FIND_ITEM } from './action_types';

export const fetch_items = (q) => (dispatch) => {
  search_api.get_items(q).subscribe(
    (data) => {
        dispatch({ type: SEARCH_ITEMS, data });
      },
      (error) => {
        // Deberiamos implementar un control de errores aqui.
        console.log('Error:' + error)
      },
      () => {}
  );
};

export const fetch_item = (id) => (dispatch) => {
	search_api.get_item(id).subscribe(
			(data) => {
					dispatch({ type: GET_ITEM, data });
			},
			(error) => {
					// Deberiamos implementar un control de errores aqui.
					console.log('Error:' + error)
			},
			() => {}
	);
};

export const find_item = (q) => (dispatch) => {
  dispatch({
    type: FIND_ITEM,
    data: q
  })
};
