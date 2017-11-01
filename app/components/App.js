import React from 'react';
import { Link } from 'react-router-dom';
import { common } from '../assets/styles/common.scss';
import Routes from '../routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MainLayout from '../containers/MainLayout';
import { muiTheme } from '../assets/MuiThemeProvider';

const App = () =>
    <div>
        <MuiThemeProvider muiTheme={muiTheme}>
            <MainLayout>
                { Routes }
            </MainLayout>
        </MuiThemeProvider>
    </div>;

export default App;
