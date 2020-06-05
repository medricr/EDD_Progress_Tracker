import axios from 'axios';

export default {
	// Testing Routes
	// createUser: function(info) {
	// 	console.log(info);

	// 	return axios.post("/api/user/insert", info);
	// },

	// getAllUsers: function(info) {

	// 	return axios.get('/api/user/getall', info);
	// },

	// Application Rotues
	registerUser: function(info){
		console.log("registration info: " + info); 
		return axios.post('/api/user/register', info)
	},

	loginUser: function(info){
		console.log("login info: " + info);
		return axios.post('/api/user/login', info)
		// return axios.post('/login', info);
	},

	logoutUser: function(){
		return axios.get('/api/user/logout');
	},

	getCurrentUser: function(){
		return axios.get('/api/user/profile');
	},

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	saveNewDay: function(info){
		return axios.post('/api/days/save', info);
	},

	getDays: function(){
		console.log("getting days")
		return axios.get('/api/days/display')
	},

	deleteDay: function(info){
		return axios.post('/api/days/delete', info)
	},

	updateDay: function(info){
		console.log("API.js update info entered=> ", info);
		return axios.put('/api/days/update', info)
	}



	
}