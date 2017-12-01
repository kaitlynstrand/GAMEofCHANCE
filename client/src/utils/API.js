import axios from "axios"

export default {

	getTasks: function() {
		return axios.get("api/tasks")
	},

	getUsers: function() {
		return axios.get("api/users")
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
}