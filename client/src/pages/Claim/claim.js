import React, { Component } from "react"
import Nav from "../../Components/Nav"

class Claim extends Component {
	state = {
		claim: false
	}
	render() {
		return (
			<div className="container">
            	<Nav />
            	<div>Claim</div>
            </div>
		)
	}
}

export default Claim