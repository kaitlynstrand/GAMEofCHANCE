import React, { PureComponent } from "react";
import ReactMomentCountDown from "react-moment-countdown";
import moment from "moment";

export default class CountDownComponent extends PureComponent {
	constructor (props) {
		super(props)
		this.state = { endCountdown: false }
		this.onTick = this.onTick.bind(this)
		this.onCountdownEnd = this.onCountdownEnd.bind(this)
	}
  
timerOnTick = countdown => {
	this.setState({ endCountdown: countdown <= 0 })
}

timerOnCountdownEnd = () => {
	console.log("gameofchance")
}

 render () {
  	const dateInFuture = moment();
  	return (
    <ReactMomentCountDown 
  	toDate={dateInFuture} 
  	targetFormatMask='DD:HH:mm:ss'
    onTick={this.timerOnTick}
    onCountdownEnd={this.timerOnCountdownEnd} />
  );
};
}



