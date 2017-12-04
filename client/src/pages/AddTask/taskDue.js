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

window.onload = function(e){

    var $clock = $('#clock'),
        eventTime = moment('27-11-2020 08:30:00', 'DD-MM-YYYY HH:mm:ss').unix(),
        currentTime = moment().unix(),
        diffTime = eventTime - currentTime,
        duration = moment.duration(diffTime * 1000, 'milliseconds'),
        interval = 1000;

    // if time to countdown
    if(diffTime > 0) {

        // Show clock
        // $clock.show();

        var $d = $('<div class="days" ></div>').appendTo($clock),
            $h = $('<div class="hours" ></div>').appendTo($clock),
            $m = $('<div class="minutes" ></div>').appendTo($clock),
            $s = $('<div class="seconds" ></div>').appendTo($clock);

        setInterval(function(){

            duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
            var d = moment.duration(duration).days(),
                h = moment.duration(duration).hours(),
                m = moment.duration(duration).minutes(),
                s = moment.duration(duration).seconds();

            d = $.trim(d).length === 1 ? '0' + d : d;
            h = $.trim(h).length === 1 ? '0' + h : h;
            m = $.trim(m).length === 1 ? '0' + m : m;
            s = $.trim(s).length === 1 ? '0' + s : s;

            // show how many hours, minutes and seconds are left
            $d.text(d);
            $h.text(h);
            $m.text(m);
            $s.text(s);

        }, interval);

    }

};