import React from "react";

const SignInForm = props => (
<div>
	<br></br>
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
</div>
)

export default SignInForm