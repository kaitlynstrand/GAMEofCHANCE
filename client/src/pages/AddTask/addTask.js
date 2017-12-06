import React, { Component } from "react";
import { Input, FormBtn } from "../../Components/Form";
import API from "../../utils/API"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import TimeDue from "./taskDue.js"
import "./addTask.css"


class AddTask extends Component {
	state = {
		description: "",
		time_due: "",
		points: ""
	}

	handleInputChange = event => {
    const { name, value } = event.target;
    	this.setState({
      		[name]: value
    	})
    }

    handleFormSubmit = event => {
    	event.preventDefault();
    	if (this.state.description && this.state.time_due && this.state.points) {
    		API.saveTasks({
    			description: this.state.description,
    			time_due: this.state.time_due,
    			points: this.state.points
    		})
    		.then(window.location.href = "/claim")
    		.catch(err => console.log(err))
    	}
    }

	render() {
		return (
		<div>
			<Header></Header>
			<div className="container">
				<br></br>
				<label className="label">Description</label>
					<Input 
					value={this.state.description}
					name="description"
					onChange={this.handleInputChange} />
				<br></br>
				<label className="label">Time Due</label>
					<Input
					type="date"
					value={this.state.time_due}
					name="time_due"
					onChange={this.handleInputChange}/>
				<br></br>
				<label className="label">Points</label>
					<Input 
					type="tel"
					value={this.state.points}
					name="points"
					onChange={this.handleInputChange}/>
			</div>
			 	<Footer>
            		<div className="buttons has-addons is-right">
						<FormBtn id="addTask"
							onClick={this.handleFormSubmit}>
							Submit
						</FormBtn>
					</div>
            	</Footer>
            </div>
		)
	}
}

export default AddTask