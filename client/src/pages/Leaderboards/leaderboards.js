import React, { Component } from "react"
import Nav from "../../Components/Nav"
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../Components/Form"
import { List, ListItem } from "../../Components/List"
import Btn from "../../Components/Btn"
import Header from "../../Components/Header"

class Leaderboards extends Component {
	state = {
		users: [],
		name: "",
		points_earned: "",
	}

	componentDidMount() {
		this.loadUsers()
	}

	loadUsers() {
		API.getUsers()
		.then(res => {
			this.setState({
				users: res.data
			})

			}).catch(err => console.log(err))
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
            		{(this.state.users || []).map(users => {
            			<ListItem key={users._id}>
            				<tr>
            					<td>{users.name}</td>
            					<td>{users.points_earned}</td>
            				</tr>
            			</ListItem>
            			})}
      			</List>
            </div>
            </div>
		)
	}
}

export default Leaderboards