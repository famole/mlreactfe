import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import GridItems from '../components/GridItems';
import { fetch_items, find_item } from '../actions/search_actions';
import { parse_search } from '../utils/utils';
import { itemDetail } from '../data/global_paths';

export class Home extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			items: [],
			breadcrumb: [],
			search: undefined
		};  
		this.handleItemClick = this.handleItemClick.bind(this);
	}

	componentWillMount() {
		if (this.props.location.search) {
			const search_for = parse_search(this.props.location.search);
			this.props.find_item(search_for);
		}

	}

	componentWillReceiveProps(newProps) {
		if (newProps.search !== this.state.search) {
			this.setState({ search: newProps.search });
			this.props.fetch_items(newProps.search);
		}
		this.setState({ items: newProps.items, breadcrumb: newProps.breadcrumb });
	}

	handleItemClick(id) {
		this.props.history.push(itemDetail(id));
	}

	render() {		
		return (
			<GridItems
				items={this.state.items}
				breadcrumb={this.state.breadcrumb}
				handleItemClick={this.handleItemClick}
			/>	
		);
	}
}

Home.propTypes = {
	items: React.PropTypes.array,
	breadcrumb: React.PropTypes.array
};

const mapStateToProps = (state) => ({
	items: state.items_state.items,
	breadcrumb: state.items_state.breadcrumb,
	search: state.items_state.search
});

const mapDispatchToProps = (dispatch) => ({
  fetch_items: (data) => {
		dispatch(fetch_items(data));
  },
  find_item: (data) => {
	  dispatch(find_item(data));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
