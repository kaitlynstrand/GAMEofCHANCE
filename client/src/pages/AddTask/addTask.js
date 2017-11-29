import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../../Components/Form";

class AddTask extends Component {
	state = {
		description: "",
		due_date: "",
		points: ""
	}

	handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

	render() {
		return (
			<div className="container">
			<label className="label">Description</label>
				<Input 
				value={this.state.description}
				name="description"
				onChange={this.handleInputChange}/>
			<label className="label">Due Date</label>
				<Input 
				value={this.state.due_date}
				name="due_date"
				onChange={this.handleInputChange}/>
			<label className="label">Points</label>
				<Input 
				value={this.state.points}
				name="points"
				onChange={this.handleInputChange}/>

				<FormBtn>Submit</FormBtn>
			</div>
		)
	}
}

export default AddTask