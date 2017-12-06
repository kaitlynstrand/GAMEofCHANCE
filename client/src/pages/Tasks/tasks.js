import React, { Component } from "react"
import Nav from "../../Components/Nav"
import API from "../../utils/API";
import { FormBtn } from "../../Components/Form"
import { List, ListItem } from "../../Components/List"
import Btn from "../../Components/Btn"
import Header from "../../Components/Header"

class Tasks extends Component {
	state = {
		tasks: [],
		description: "",
		time_due: "",
		points: ""
	}

	componentDidMount() {
		this.loadTasks()
	}

	loadTasks = () => {
		API.getCompleteTasks()
		.then(res =>
			this.setState({
				tasks: res.data
			})).catch(err => console.log(err))

	}

	completeTask = (id) => {
		API.updateComplete(id)
			.then(window.location.href = "/leaderboards")
			.catch(err => console.log(err))
	}
	
	render() {
		return (
			<div>
			<Header>
				<div className="buttons has-addons is-right">
					<FormBtn><a href="/addTask">Add Task</a></FormBtn>
				</div>
			</Header>
			<div className="container">
            	<Nav />
            	<List>
            		{this.state.tasks.map(tasks => (
            			<ListItem key={tasks._id}>
            				<tr>
            					<td>{tasks.description}</td>
            					<td>{tasks.time_due}</td>

            					<td>{tasks.points}</td>
            					<td><Btn onClick={() => this.completeTask(tasks._id)}>Completed</Btn></td>
            				</tr>
            			</ListItem>
            			))}
      			</List>
            </div>
            </div>
		)
	}
}

export default Tasks