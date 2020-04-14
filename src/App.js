import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

import About from './components/pages/About';
import User from './components/users/User';

import GithubState from './context/github/GithubState';
const App = () => {
	const [alert, setAlert] = useState(null);

	const showAlert = (msg, type) => {
		setAlert(msg);
		setType(type);

		setTimeout(() => {
			setAlert(null);
			setType(null);
		}, 5000);
	};

	return (
		<GithubState>
			<Router>
				<div className='App'>
					<div className='container'>
						<Navbar title='Github tracker' />
						<Alert alert={alert} type={type} />
						<Switch>
							<Route
								exact
								path='/'
								render={(props) => (
									<Fragment>
										<Search setAlert={showAlert} />
										<Users
											loading={loading}
											users={users}
											clearInput={clearInput}
										/>
									</Fragment>
								)}></Route>
							<Route exact path='/about' component={About} />
							<Route path='/user/:login' component={User} />
						</Switch>
					</div>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;
