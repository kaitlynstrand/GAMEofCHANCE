import axios from "axios"

export default {

	getTasks: function() {
		return axios.get("api/tasks")
	},

	getUsers: function() {
		return axios.get("api/users")
	},
	updatePoints: function(id) {
		return axios.put("api/users/points_earned/" + id)
	},

	getGroups: function() {
		return axios.get("api/groups")
	},

	getClaimTasks: function() {
		return axios.get("api/tasks/claim")
	},

	getCompleteTasks: function() {
		return axios.get("api/tasks/complete")
	},

	updateClaim: function(id) {
		return axios.put("api/tasks/claim/" + id)
	},

	updateComplete: function(id) {
		return axios.put("api/tasks/complete/" + id)
	},

	saveTasks: function(taskData) {
		return axios.post("api/tasks", taskData)
	},
	
	saveGroups: function(groupsData) {
		return axios.post("api/groups", groupsData)
	},
	
	securedPing: function() {
		const { getAccessToken } = this.props.auth
		const API_URL = 'https://gameofchance.auth0.com/api/v2';
    	const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
    	axios.get(`${API_URL}/private`, { headers })
      		.then(response => this.setState({ message: response.data.message }))
      		.catch(error => this.setState({ message: error.message }));
  	}
}