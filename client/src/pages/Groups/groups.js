import React, { Component } from "react"
import { Input, TextArea, FormBtn } from "../../Components/Form"
import Header from "../../Components/Header"
import API from "../../utils/API"
import Select from 'react-select'
import fetch from 'isomorphic-fetch'

class Group extends Component {
	state = {
		groups: [],
		addGroup: ""
	}

	componentDidMount() {
		this.loadGroups()
	}

	loadGroups() {
		API.getGroups()
		.then(res =>
			this.setState({
				groups: res.data
			}))
			.then(res => console.log(this.state.groups))
			.catch(err => console.log(err))
	}

	// displayGroups (input) {
	// 	console.log(input)
	// 	if (!input) {
	// 		return Promise.resolve({ options: [] });
	// 	}

	// 	.then((response) => response.json())
	// 	.then((json) => {
	// 		return { options: json };
	// 	})
	// }

	handleInputChange = event => {
    	const { name, value } = event.target;
    		this.setState({
      			[name]: value
    		});
  	};

  	handleFormSubmit = event => {
  		event.preventDefault()
  		if (this.state.addGroup) {
  			API.saveGroups({
  				name: this.state.addGroup
  			}).then(res => console.log(res))
  		}
  	}
	render() {			
		return (
			<div>
			<Header></Header>
			<div className="container">
				<label className="label">Search Groups</label>
					<div className="field has-addons">
  						<div className="control is-expanded">
    						<div className="select is-fullwidth">
      							<select>
      								{this.state.groups.map(groups => {
      									<option key={groups._id}>{groups.name}</option>
      								})}
      							</select>
    						</div>
  						</div>
  						<div className="control">
    						<button type="submit" className="button is-primary">Choose</button>
  						</div>
					</div>
				<label className="label">Add a Group</label>
					<Input 
					value={this.state.addGroup}
					name="addGroup"
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

export default Group