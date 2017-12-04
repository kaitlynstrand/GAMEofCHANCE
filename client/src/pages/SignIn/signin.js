import React, { Component } from "react"
import { Input, TextArea, FormBtn } from "../../Components/Form"
import Header from "../../Components/Header"

class SignIn extends Component {
	state = {
		username: "",
		email: "",
		password: "",
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
			<div className="field">
				<div className="control">
					<label className="checkbox">
						<input type="checkbox"></input>I agree to the <a href="#">terms and conditions</a>
					</label>
			</div>
		</div>
			<div className="field is-grouped">
				<div className="control">
					<FormBtn><a href="/groups">Submit</a></FormBtn>
				</div>
			</div>
		</div>
		</div>
		)
				<br></br>
			<p>Create A New Account <a href="/signup"> Sign Up</a></p>
			<p>Or go <a href="/"> Home</a></p>
			</div>
			)
		}
	}

	export default SignIn