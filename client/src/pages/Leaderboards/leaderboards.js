import React, { Component } from "react"
import Nav from "../../Components/Nav"
import API from "../../utils/API";
import { FormBtn } from "../../Components/Form"
import { List, ListItem } from "../../Components/List"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import "../Tasks/main.css"

class Leaderboards extends Component {
	state = {
		users: [],
		username: "",
		points_earned: ""
	}

	componentDidMount() {
		this.loadUsers()
	}

	loadUsers = () => {
		API.getUsers()
		.then(res =>
			this.setState({
				users: res.data
			})).catch(err => console.log(err))
	}

	render() {
		return (
			<div>
			<Header />
			<div className="container">
            	<Nav />
            	<List>
            		{this.state.users.map(users => (
            			<ListItem key={users._id}>
            				<tr>
            					<td>{users.username}</td>
            					<td>{users.points_earned}</td>
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

export default Leaderboards