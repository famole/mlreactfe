import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import AppBar from './AppBar';
import classes from '../assets/styles/common.scss'

class MainLayout extends Component {
	render() {
		MainLayout.propTypes = {
			children: React.PropTypes.object.isRequired
		};
		return (
      		<div >
				<AppBar />
				<div className={classes.main_layout}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default MainLayout;
