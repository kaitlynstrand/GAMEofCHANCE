import React, { Component } from "react"
import Nav from "../../Components/Nav"
import API from "../../utils/API";
import { FormBtn } from "../../Components/Form"
import { List, ListItem } from "../../Components/List"
import Btn from "../../Components/Btn"
import TimeDue from "../AddTask/taskDue.js"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import "./main.css"

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
			.then(window.location.href = "/tasks")
			.catch(err => console.log(err))
		API.updatePoints(id)
	}
	
	render() {
		return (
			<div>
			<Header>
			</Header>
			<div className="container">
            	<Nav />
            	<List>
            		{this.state.tasks.map(tasks => (
            			<ListItem key={tasks._id}>
            				<tr>
            					<td>{tasks.description}</td>
								<td><TimeDue value={tasks.time_due}>
									</TimeDue></td>
            					<td>{tasks.points}</td>
            					
            					<td><Btn id="task"
            					onClick={() => this.completeTask(tasks._id)}>Complete</Btn></td>
            				</tr>
            			</ListItem>
            			))}
      			</List>
            </div>
            <Footer>
            	<div className="buttons has-addons is-right">
					<FormBtn id="addTask"><a href="/addTask">Add Task</a></FormBtn>
				</div>
            </Footer>
            </div>
		)
	}
}

export default Tasks