import React, { Component } from "react";

class Home extends Component {
	render() {
		return (
			<div>Home</div>
			<div class ="container">
			<p>Login or Signup!</p>

				<a href="/login" class="btn btn-default"><span class="fa fa-user"></span> Local Login</a>
    		<a href="/signup" class="btn btn-default"><span class="fa fa-user"></span> Local Signup</a>
			
			</div>
		)
	}
}

export default Home;