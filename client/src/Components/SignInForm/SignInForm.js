import React from "react";

const SignInForm = props => (
<div>
	<br></br>
	<div className="field">
		<label className="label">Name</label>
			<div className="control">
				<input className="input"></input>
			</div>
	</div>

	<div className="field">
		<label className="label">Email</label>
			<div className="control has-icons-left">
				<input className="input" type="email"></input>
					<span className="icon is-small is-left">
						<i className="fa fa-envelope"></i>
					</span>
			</div>
	</div>

	<div className="field">
		<label className="label">Password</label>
			<div className="control has-icons-left">
				<input className="input" type="password"></input>
					<span className="icon is-small is-left">
						<i className="fa fa-lock"></i>
					</span>
			</div>
	</div>

	<div className="field">
		<div className="control">
			<label className="checkbox">
				<input type="checkbox"></input>I agree to the <a href="#">terms and conditions</a>
			</label>
		</div>
	</div>

	<div className="field is-grouped">
		<div className="control">
			<button className="button"><a href="/groups">Submit</a></button>
		</div>
	</div>
</div>
	)

export default SignInForm