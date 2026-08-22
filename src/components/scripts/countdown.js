var date = "Aug 7, 2026";
var countDownDate = new Date(`${date} 00:00:00`).getTime();
// TODO: Make this look better.

var x = setInterval(function() {

  // Get today's date and time
    var now = new Date().getTime();

    var currentTime = countDownDate - now;

    var months = Math.floor(currentTime / (1000 * 60 *60 * 24 * 7 * 4))
    var weeks = Math.floor(currentTime / (1000 * 60 * 60 * 24 * 7))
    var days = Math.floor((currentTime % (1000 * 60 * 60 * 24 * 7 * 4)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((currentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((currentTime % (1000 * 60)) / 1000);

    var times = {
        months: months,
        weeks: weeks,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };

    var timeDescriptors = {
        months: "MONTH",
        weeks: "WEEK",
        days: "DAY",
        hours: "HOUR",
        minutes: "MINUTE",
        seconds: "SECOND"
    }

    // for (const [key, val] of Object.entries(times)) {
    //     // console.log(`${timeDescriptors[key]}`)
    //     if ( times[key] < 0) {
    //         console.log(times[key]);
    //         timeDescriptors[key] = `${val}S`;
    //     }
    // }

    for (const [key, val] of Object.entries(times)) {
        // console.log(`${times[key]}`)
        if ( times[key] % 10 == times[key]) {
            times[key] = `0${val}`;
        }
    }

    

        // Make this look better


    if (months == 1) {
        var mon = " MONTH "
    } else {
        var mon = " MONTHS "
    }

    if (weeks == 1) {
        var w = " WEEK "
    } else {
        var w = " WEEKS "
    }

    if (days == 1) {
        var d = " DAY "
    } else {
        var d = " DAYS "
    }

    if (hours == 1) {
        var h = " HOUR "
    } else {
        var h = " HOURS "
    }

    if (minutes == 1) {
        var m = " MINUTE "
    } else {
        var m = " MINUTES "
    }

    if (seconds == 1) {
        var s = " SECOND "
    } else {
        var s = " SECONDS "
    }


     
    // Really gotta do this a better way.
    var eta = document.getElementById("eta");
    var countDown = document.getElementById("countdown");
    var dateTimer = document.getElementById("date-timer");


    // Display the result in the element with id="countdown"
    countDown.innerHTML = `${times.months} : ${times.days} : ${times.hours} : ${times.minutes} : ${times.seconds}`;
    dateTimer.innerHTML = `${mon}  ${d}  ${h}  ${m}  ${s}`;
    
    if (  window.innerWidth < 600) {
        countDown.innerHTML = `${date}`;
        dateTimer.innerHTML = "";
    }
    console.log(currentTime/1000 )
    // If the count down is finished, write some text
    if (0 > currentTime/1000 & currentTime/1000 > -1 * (86400)) {
        
        // clearInterval(x);
        eta.innerHTML = "";
        countDown.innerHTML = "DEMONSTRATION DAY";
        dateTimer.innerHTML = "DEMO IN PROGRESS";
    }
    else if (now > countDownDate) {
        clearInterval(x);
        eta.innerHTML = "";
        countDown.innerHTML = "DEMONSTRATION COMPLETED";
        dateTimer.innerHTML = "ROCKING AND ROLLING";
    }
}, 50);