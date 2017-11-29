import axios from "axios"

export default {

	getTasks: function() {
		return axios.get("api/tasks")
	},
	claimTasks: function(id) {
		return axios.put("api/tasks" + id)
	}
}