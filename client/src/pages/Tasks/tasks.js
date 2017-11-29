import React, { Component } from "react"
import Nav from "../../Components/Nav"
import API from "../../utils/API";
import { List, ListItem } from "../../Components/List"

class Tasks extends Component {
	state = {
		tasks: [],
		description: "",
		dueDate: "",
		points: "",
	}

	componentDidMount() {
		this.loadTasks()
	}

	loadTasks = () => {
		API.getTasks()
		.then(res =>
			this.setState({
				tasks: res.data
			})).catch(err => console.log(err))

	}
	render() {
		return (
			<div className="container">
            	<Nav />
            	<List>
            		{this.state.tasks.map(tasks => (
            			<ListItem key={tasks._id}>
            				<tr>
            					<td>{tasks.description}</td>
            					<td>{tasks.dueDate}</td>
            					<td>{tasks.points}</td>
            				</tr>
            			</ListItem>
            			))}
      			</List>
            </div>
		)
	}
}

export default Tasks