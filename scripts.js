const shootingTimes = [40, 30, 25]; // 1) Per Image  2) Per Video  4) Per 360
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
    var   toReturn;
    var   totalMinutes      = unitsNeeded * unitTime;
    const minutesPerHour    = 60;
    const hoursPerDay       = 7;
    const daysPerWeek       = 5;
    const minutesPerDay     = minutesPerHour * hoursPerDay;
    const minutesPerWeek    = minutesPerDay * daysPerWeek;
    var   totalHours        = totalMinutes / minutesPerHour;
    var   leftOverMinutes;
    var   leftOverHours;


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
    else if (totalMinutes > minutesPerDay && totalMinutes <= minutesPerWeek) {
        totalDays = Math.floor(totalHours / hoursPerDay);
        leftOverHours = Math.floor(totalHours - (hoursPerDay * totalDays));
        if (leftOverHours == 0) {
            toReturn = totalDays + ' days';
        } else {
            toReturn = totalDays + ' days and ' + leftOverHours + ' hours';
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