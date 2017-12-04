import React, { Component } from "react"
import { Input, TextArea, FormBtn } from "../../Components/Form"



class SignUp extends Component {
		state = {
			username: "",
			email: "",
			password: ""
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
				<label className="label">Username</label>
					<Input 
					type="username"
					value={this.state.username}
					name="username"
					onChange={this.handleInputChange}/>
				<label className="label">Email</label>
					<Input 
					type="email"
					value={this.state.email}
					name="email"
					onChange={this.handleInputChange}/>
				<label className="label">Password</label>
					<Input 
					type="password"
					value={this.state.password}
					name="password"
					onChange={this.handleInputChange}/>
				<div className="field is-grouped">
					<div className="control">
						<FormBtn><a href="/tasks">Submit</a></FormBtn>
					</div>
				</div>
				<br></br>
					<p>Already have an account?<a href="/signin">Sign In</a></p>
    			<p>Or go <a href="/">Home</a></p>
			</div>
		)
	}
}

export default SignUp;
