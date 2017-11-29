import React, { Component } from "react"
import { Input, TextArea, FormBtn } from "../../Components/Form"

class Group extends Component {
	state = {
		searchGroup: "",
		addGroup: ""
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
				<label className="label">Search Groups</label>
					<Input 
					value={this.state.searchGroup}
					name="searchGroup"
					onChange={this.handleInputChange}/>
				<label className="label">Add a Group</label>
					<Input 
					value={this.state.addGroup}
					name="addGroup"
					onChange={this.handleInputChange}/>
			</div>
			
		)
	}
}

export default Group