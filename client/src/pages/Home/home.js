import React, { Component } from "react"
import { Input, TextArea, FormBtn } from "../../Components/Form"
import Header from "../../Components/Header"

class Home extends Component {
	render() {
		return (
			<div>
				<div class ="container">
					<p>Login or Signup!</p>

			      <a href="/signin" class="btn btn-default"><span class="fa fa-user"></span> Local Login</a>
			      <a href="/signup" class="btn btn-default"><span class="fa fa-user"></span> Local Signup</a>
			
				</div>
				</div>
			)
	}
}

export default Home;