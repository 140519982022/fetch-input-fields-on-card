callMe();
var result = 0;

function countDownTimer() {
    // var getEndDate = document.getElementById('endDate').innerText;

    var showLastDate = 0;
    var dynamicEndDate = document.getElementById('selectDate').value;
    // console.log(dynamicEndDate);

    if (dynamicEndDate != "") {

        showLastDate = dynamicEndDate + " " + "00:00:00";
        document.getElementById('finalDate').innerText = showLastDate;
        
    }
    
    getEndDate = new Date(showLastDate);
    // document.getElementById('endDate').innerText = getEndDate;

    var currentDate = new Date();
    var differance = getEndDate - currentDate;

    var oneSecond = 1000;
    var oneMinute = oneSecond * 60;
    var oneHour = oneMinute * 60;
    var oneDay = oneHour * 24;
    var oneMonth = oneDay * 30.45;
    var oneYear = oneMonth * 12;
    // var oneYear = oneDay * 365;

    var years = Math.floor(differance / oneYear);
    var months = Math.floor((differance % oneYear) / oneMonth);
    var days = Math.floor((differance % oneMonth) / oneDay);
    var hours = Math.floor((differance % oneDay) / oneHour);
    var minutes = Math.floor((differance % oneHour) / oneMinute);
    var seconds = Math.floor((differance % oneMinute) / oneSecond);

    // if (years < 0) {
    //     years = 0;
    // }

    // if (months < 0) {
    //     months = 0;
    // }

    if (days < 0) {
        days = 0;
    }

    if (hours < 0) {
        hours = 0;
    }

    if (minutes < 0) {
        minutes = 0;
    }

    if (seconds < 0) {
        seconds = 0;
    }
    
    document.getElementById('seconds').innerText = seconds;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('hours').innerText = hours;
    document.getElementById('days').innerText = days;
    // document.getElementById('month').innerText = months;
    // document.getElementById('year').innerText = years;
}

function callMe() {
    setInterval(countDownTimer,1000);
    
}

