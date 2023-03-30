const shootingTimes = [40, 30, 30]; // 1) Per Image  2) Per Video  4) Per 360
const hour = 60;
const day = 7.5 * hour;
var timesOld = [];

var defaults =              document.querySelector('#defaults');
var times =                 document.querySelectorAll('.times');
var skusNeeded =            document.querySelector('#skus-needed');
var skusTime =              document.querySelector('#skus-time');
var videosNeeded =          document.querySelector('#videos-needed');
var videosTime =            document.querySelector('#videos-time');
var threeSixtiesNeeded =    document.querySelector('#three-sixties-needed');
var threeSixtiesTime =      document.querySelector('#three-sixties-time');
var skusResults =           document.querySelector('#skus-results');
var videosResults =         document.querySelector('#videos-results');
var threeSixtiesResults =   document.querySelector('#three-sixties-results');
var totalResults =          document.querySelector('#total-results');
var calcBody =              document.querySelector('.calc-body');



setDefaultTimes();

defaults.addEventListener('change', function() {
    if (defaults.checked) {
        for(var i=0;i<times.length;i++) {
            times[i].disabled = true;
            setDefaultTimes();
            updateInfo();
        }
    } else {
        for(i=0;i<times.length;i++) {
            times[i].disabled = false;
        }
    }
});

calcBody.addEventListener('input', function() {
    updateInfo();
});














function updateInfo() {
    var skusTotalTime =             calcTime(skusNeeded.value, skusTime.value);
    var videosTotalTime =           calcTime(videosNeeded.value, videosTime.value);
    var threeSixtiesTotalTime =     calcTime(threeSixtiesNeeded.value, threeSixtiesTime.value);
    var allTimesAdded =             (skusNeeded.value * skusTime.value) + (videosNeeded.value * videosTime.value) + (threeSixtiesNeeded.value * threeSixtiesTime.value)
    var totalTotalTime =            calcTime(allTimesAdded, 1)

    // Shots times
    if(!(skusNeeded.value == 0) && !(skusTime.value == 0)) {
        skusResults.innerHTML = 'It will take ' + skusTotalTime + ' to shoot ' + (skusNeeded.value) + ' sku(s).';
        skusResults.style.display = 'block'
    } else {
        skusResults.innerHTML = '';
        skusResults.style.display = 'none'
    }

    // Video times
    if(!(videosNeeded.value == 0) && !(videosTime.value == 0)) {
        videosResults.innerHTML = 'It will take ' + videosTotalTime + ' to shoot ' + (videosNeeded.value) + ' video(s).';
        videosResults.style.display = 'block'
    } else {
        videosResults.innerHTML = '';
        videosResults.style.display = 'none'
    }

    //360 times
    if(!(threeSixtiesNeeded.value == 0) && !(threeSixtiesTime.value == 0)) {
        threeSixtiesResults.innerHTML = 'It will take ' + threeSixtiesTotalTime + ' to shoot ' + (threeSixtiesNeeded.value) + ' 360(s).';
        threeSixtiesResults.style.display = 'block'
    } else {
        threeSixtiesResults.innerHTML = '';
        threeSixtiesResults.style.display = 'none'
    }

    // Total times
    if(!(skusNeeded.value == 0) || !(videosNeeded.value == 0) || !(threeSixtiesNeeded.value == 0)) {
        totalResults.innerHTML = 'It will take ' + totalTotalTime + ' to complete this project.';
    } else {
        totalResults.innerHTML = '';
    }
}

function calcTime(unitsNeeded, unitTime) {
    var totalMinutes      = unitsNeeded * unitTime;
    var minutesPerHour    = 60;
    var hoursPerDay       = 7;
    var daysPerWeek       = 5;
    var minutesPerDay     = minutesPerHour * hoursPerDay;
    var minutesPerWeek    = minutesPerDay * daysPerWeek;
    var totalHours        = totalMinutes / minutesPerHour;
    var totalDays         = Math.floor(totalHours / hoursPerDay);
    var leftOverMinutes;
    var leftOverHours;
    var toReturn;


    if (totalMinutes <= minutesPerHour) {
        toReturn =  totalMinutes + ' minutes';
    }
    else if (totalMinutes > minutesPerHour && totalMinutes < minutesPerDay) {
        totalHours = Math.floor(totalMinutes / minutesPerHour);
        leftOverMinutes = totalMinutes - (totalHours * minutesPerHour);
        if (leftOverMinutes == 0) {
            toReturn = totalHours + ' hours';
        } else {
            toReturn = totalHours + ' hours and ' + leftOverMinutes + ' minutes';
        }
    }
    else if (totalMinutes >= minutesPerDay && totalMinutes < minutesPerWeek) {
        leftOverHours = Math.floor(totalHours - (hoursPerDay * totalDays));
        if (leftOverHours == 0) {
            toReturn = totalDays + ' days';
        } else {
            toReturn = totalDays + ' days and ' + leftOverHours + ' hours';
        }
    }
    else if (totalMinutes >= minutesPerWeek) {
        totalWeeks = Math.floor(totalHours / (daysPerWeek * hoursPerDay));
        leftOverDays = Math.floor(totalDays - (daysPerWeek * totalWeeks));
        if (leftOverDays == 0) {
            toReturn = totalWeeks + ' weeks';
        } else {
            toReturn = totalWeeks + ' weeks and ' + leftOverDays + ' days';
        }
    }


    // totalTime = totalTime.toFixed(1);
    return toReturn;
}



function setDefaultTimes() {
    for(var i=0;i<times.length;i++) {
        times[i].value = shootingTimes[i];
    } 
}