var date = "Aug 7, 2027";
var countDownDate = new Date(`${date} 00:00:00`).getTime();

// TODO: Make this look better.

var x = setInterval(function() {

  // Get today's date and time
    var now = new Date().getTime();

    var difference = countDownDate - now;

    var weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7))
    var days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    var times = {
        weeks: weeks,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };

    // Make this look better

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
    var countDown = document.getElementById("countdown");
    var dateTimer = document.getElementById("date-timer");


    // Display the result in the element with id="countdown"
    countDown.innerHTML = `${weeks} : ${days} : ${hours} : ${minutes} : ${seconds}`;
    dateTimer.innerHTML = `${w}  ${d}  ${h}  ${m}  ${s}`;
    
    if (  window.innerWidth < 600) {
        countDown.innerHTML = `${date}`;
        dateTimer.innerHTML = "";
    }

    // If the count down is finished, write some text
    if (difference < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "COMPETITION DAY";
    }
}, 50);