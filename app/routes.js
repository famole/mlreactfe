import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import ItemDetail from './containers/ItemDetail';
import NotFound from './components/NotFound';

export default (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/items" component={Home} />
		<Route path="/items/:id" component={ItemDetail} />
		<Route component={NotFound} />  
	</Switch>
);
