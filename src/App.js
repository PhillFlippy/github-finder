import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Alert from './components/layout/Alert';

import NotFound from './components/pages/NotFound';
import About from './components/pages/About';
import User from './components/users/User';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className='App'>
						<div className='container'>
							<Navbar title='Github tracker' />
							<Alert />
							<Switch>
								<Route exact path='/' component={Home}></Route>
								<Route exact path='/about' component={About} />
								<Route path='/user/:login' component={User} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
