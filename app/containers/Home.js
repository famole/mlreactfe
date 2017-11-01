import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { GridList } from 'material-ui/GridList';
import GridItemList from '../components/GridItemList';
import { fetch_items, find_item } from '../actions/search_actions';
import { parse_search } from '../utils/utils';
import { itemDetail } from '../data/global_paths';

export class Home extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			items: [],
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
		this.setState({ items: newProps.items });
	}

	handleItemClick(id) {
		this.props.history.push(itemDetail(id));
	}

	render() {
		console.log(this.state.items);
		return (
			<div style={{paddingTop: 50, paddingBottom: 50}}>
				<GridList padding={0} cols={1} cellHeight={221} >
					{this.state.items.map((item, i) => (
						<GridItemList
							key={item.id}
							id={item.id}
							price={item.price.amount}
  							image={item.picture}
  							title={item.title}
  							condition={item.condition}
							free_shipping={item.free_shipping}
							handleItemClick={this.handleItemClick}
							/>
						))}
				</GridList>
			</div>
		);
	}
}

Home.propTypes = {
	items: React.PropTypes.array
};

const mapStateToProps = (state) => ({
	items: state.items_state.items,
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
