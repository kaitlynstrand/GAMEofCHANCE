import React, { PureComponent } from "react";
import moment from "moment";

export default class TimeDue extends PureComponent {
	constructor (props) {
		super(props)
		this.state = { endCountdown: false }
		//this.onTick = this.onTick.bind(this)
		//this.onCountdownEnd = this.onCountdownEnd.bind(this)
	}
  
timerOnTick = (countdown) => {
	this.setState({ endCountdown: countdown <= 0 })
}

timerOnCountdownEnd = () => {
	console.log("gameofchance")
}

 render () {

//when the user claims a task and wants to assign a due date
  const taskDue = moment(this.props.value);
//below is function to display how much time is left until task is due
	var msDiff = taskDue.diff(moment());
//600,000 ms in 10 min
	if (msDiff < 600000) {
// send twilio text to users
}

	const durationUntilDue = moment.duration(msDiff, 'milliseconds');
	const hours =  Math.floor(durationUntilDue.asHours());
	const min = Math.floor(durationUntilDue.asMinutes()) - hours * 60;
	const sec = Math.floor(durationUntilDue.asSeconds()) - hours * 60 * 60 - min * 60;
	//console.log("hours: " + hours + " min: " + min);

  	// TODO do some moment math to get the time till due in a string
  	const timeDue = "hours: " + hours + " min: " + min + " sec: " + sec

  	return (
  		<div>{ timeDue }</div>
    );
};
}



