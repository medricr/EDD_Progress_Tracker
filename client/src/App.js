import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import API from './utils/API';

// Imported Components
import UserLogin from './components/UserLogin';
import UserSignup from './components/UserSignup';
import NavBar from './components/NavBar';
import UserProfile from './components/UserProfile';
import Splashpage from './components/Splashpage';

class App extends React.Component {

	state = {
		username: "",
		password: "",
		bio: "",
		isLoggedIn: false,
		isSignedUp: false,
		currentUser: {},
		allUsers: []
	}
	componentDidMount(){
		console.log('app mounted');
	}
	// Captures info from form and places it in state
	handleInputChange = (event) => {
		let name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value
		});
	}
	// used to run the user object through passport, hashing the password before storing it in the database
	registerUser = () => {
		API.registerUser({
			username: this.state.username,
			password: this.state.password
		}).then((result)=> {
			console.log("registration result: ", result)
			this.setState({ isSignedUp: true, currentUser: result.data });
			API.loginUser({
				username: this.state.username,
				password: this.state.password
			}).then((result)=> {
				this.setState({isLoggedIn: true, currentUser: result.data})
			})
		})
	}
	// Handles logging in of user, sets the currentUser state object to the logged in user
	loginUser = () => {
		API.loginUser({
			username: this.state.username,
			password: this.state.password
		}).then((result)=> {
			console.log(result)
			console.log("leaving login");
			console.log(result.data);
			this.setState({isLoggedIn: true, currentUser: result.data})
		})
	}
	// Handles the loggin out of the user, clears state
	logoutUser = () => {
		API.logoutUser().then((result) => {
			console.log("user logged out")
			this.setState({isLoggedIn: false, currentUser: {}, username: "", password: ""});
		})
	}

	render() {
		return (	
			<Router>
			  <NavBar currentUser={this.state.currentUser} userStatus={this.state.isLoggedIn ? true : false} logoutUser={this.logoutUser}/>
				<Switch>
					<Route exact path='/' component={Splashpage} />					
					<Route exact path='/login' render={() => 
						<UserLogin 
							handleInputChange={this.handleInputChange} 
							userStatus={this.state.isLoggedIn}
							loginUser={this.loginUser}
							registerUser={this.registerUser}
						/>} 
					/>
					<Route exact path='/register' render={(props) =>
						<UserSignup 
							userStatus={this.state.isLoggedIn}
							handleInputChange={this.handleInputChange}
							registerUser={this.registerUser}
						/>} 
					/>
					<Route exact path='/profile' render={(props) => <UserProfile handleInputChange={this.handleInputChange}/>} />
				</Switch>
			</Router>
		)
	}
}

export default App;