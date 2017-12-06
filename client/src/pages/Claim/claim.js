import React, { Component } from "react"
import Nav from "../../Components/Nav"
import API from "../../utils/API";
import { FormBtn } from "../../Components/Form"
import { List, ListItem } from "../../Components/List"
import Btn from "../../Components/Btn"
import Header from "../../Components/Header"
import TimeDue from "../AddTask/taskDue.js"
import AddTask from "../AddTask/addTask.js"

class Claim extends Component {
	state = {
		tasks: [],
		description: "",
		time_due: "",
		points: "",
	}

	componentDidMount() {
		this.loadTasks()
	}

	loadTasks = () => {
		API.getClaimTasks()
		.then(res =>
			this.setState({
				tasks: res.data
			})).catch(err => console.log(err))
	}

	claimTask = id => {
		API.updateClaim(id)
			.then(window.location.href = "/tasks")
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
            					<td><TimeDue value={ tasks.time_due }></TimeDue></td>
            					<td>{tasks.points}</td>
            					<td><Btn 
            					onClick={() => this.claimTask(tasks._id)}>Claim</Btn></td>
            				</tr>
            			</ListItem>
            			))}
      			</List>
            </div>
            </div>
		)
	}
}

export default Claim