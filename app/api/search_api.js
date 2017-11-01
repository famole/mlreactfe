import NetworkClient from '../utils/network_layer/NetworkClient';
import { search_items, item } from '../utils/network_layer/NetworkApiDefinition';

export function get_items(q) {
	return  NetworkClient.observableClient(search_items(q));
}

export function get_item(id) {
	return  NetworkClient.observableClient(item(id));
}