var countDownDate = new Date("Aug 8, 2026 00:00:00").getTime();

var x = setInterval(function() {

  // Get today's date and time
    var now = new Date().getTime();

    var difference = countDownDate - now;

    var weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7))
    var days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

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
    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = "COMPETITION: "+ weeks + w + days + d + hours + h
    + minutes + m + seconds + s;

    // If the count down is finished, write some text
    if (difference < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "COMPETITION DAY";
    }
}, 50);