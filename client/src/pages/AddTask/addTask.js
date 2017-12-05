import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../../Components/Form";
import API from "../../utils/API"
import Header from "../../Components/Header"
import TimeDue from "./taskDue.js"


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
				<label className="label">Description</label>
					<Input 
					value={this.state.description}
					name="description"
					onChange={this.handleInputChange} />
				<label className="label">Time Due</label>
					<Input
					type="date"
					value={this.state.time_due}
					name="time_due"
					onChange={this.handleInputChange}/>
					<TimeDue value={this.state.time_due}>
</TimeDue>
				<label className="label">Points</label>
					<Input 
					type="tel"
					value={this.state.points}
					name="points"
					onChange={this.handleInputChange}/>
				<FormBtn
				onClick={this.handleFormSubmit}>
					Submit
				</FormBtn>
			</div>
			</div>
		)
	}
}

export default AddTask