import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import { find_item } from '../actions/search_actions';
import { searchURL } from '../data/global_paths';
import classes from '../assets/styles/common.scss';
import { PLACEHOLDER } from '../data/global_constants';

export class AppBar extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			search: undefined
		};
		this.handle_change = this.handle_change.bind(this);
		this.handle_search = this.handle_search.bind(this);
		this.handle_key_press = this.handle_key_press.bind(this);
	}
	
	componentWillReceiveProps(newProps) {
		if(this.state.search !== newProps.search){
			this.setState({ search: newProps.search });
		}
	}

	handle_change(q) {
		console.log(q.target.value);
		this.setState({ search: q.target.value });
	}

	handle_search() {
		if (this.state.search !== undefined) {			
			this.props.history.push(searchURL(this.state.search));
			this.props.find_item(this.state.search);
		}
	}

	handle_key_press(e) {
		if (e.key === 'Enter') {
			this.handle_search();
		}
	}

	render() {
		const style = {
			icon: {
				width: 25,
				height: 25,
				left: 9,
				bottom: 6,
				position: "absolute"
			},
			iconContainer: {
				position: "absolute",
				float: "left",
				clear: "both",
				width: 42,
				height: 42,
				backgroundColor: "#f1f1f1",
				borderRadius: "0px 3px 3px 0px",
				border: "1px solid #ccc"
			}
		};
		
		return (
			<div>
				<div className={classes.top_bar} >
					<div className={classes.top_bar_input_container}>
						<div className={classes.logo} />
						<input 
							type="text"
							placeholder={PLACEHOLDER}
							value={this.state.search}
							onChange={this.handle_change}
							onKeyPress={this.handle_key_press}	
						/>
						<IconButton style={style.iconContainer} iconStyle={style.icon} onClick={this.handle_search}>
								<ActionSearch />
						</IconButton>
					</div>
				</div>        
			</div>
		);
	};
}

const mapStateToProps = (state) => ({
	search: state.items_state.search
});

const mapDispatchToProps = (dispatch) => ({
  find_item: (data) => {
		dispatch(find_item(data));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppBar));