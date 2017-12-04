//need to create a class that can be called than extends 
//with two functions setTime and getTimeLeft

//set time_due time
var timeDue;

//when the user claims a task and wants to assign a due date
var taskTime = moment().add(12, 'hours');

//get remaining time until time_due
//below is function to display how much time is left until task is due
var msDiff = taskTime.diff(moment());
//600,000 ms in 10 min
// send text via twilio to users in group when 10 min left to the task due time
if (msDiff < 600000) {

//every 15 seconds, refresh page
}
var durr = moment.duration(msDiff, 'milliseconds');
var hours =  Math.floor(d.asHours());
var min = Math.floor(d.asMinutes()) - hours * 60;
console.log("hours: " + hours + " min: " + min);