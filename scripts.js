const shootingTimes = [20, 15, 15];
const hour = 60;
const day = 7.5 * hour;
var timesOld = [];

var defaults =              document.querySelector('#defaults');
var times =                 document.querySelectorAll('.times');
var calculate =             document.querySelector('#calculate');
var shotsNeeded =           document.querySelector('#shots-needed');
var shotsTime =             document.querySelector('#shots-time');
var videosNeeded =          document.querySelector('#videos-needed');
var videosTime =            document.querySelector('#videos-time');
var threeSixtiesNeeded =    document.querySelector('#three-sixties-needed');
var threeSixtiesTime =      document.querySelector('#three-sixties-time');
var shotsResults =          document.querySelector('#shots-results');
var videosResults =          document.querySelector('#videos-results');
var threeSixtiesResults =   document.querySelector('#three-sixties-results');
var totalResults =          document.querySelector('#total-results');



setDefaultTimes();

defaults.addEventListener('change', function() {
    //Work on this part
        // for(var j=0; j<times.length;j++) {
        //     if (!times[j].disabled) {
        //         timesOld[j] = times[j].value;
        //         console.log(timesOld[j]);
        //     }
        // }

    if (defaults.checked) {
        for(var i=0;i<times.length;i++) {
            times[i].disabled = true;
            setDefaultTimes();
        }
    } else {
        for(i=0;i<times.length;i++) {
            times[i].disabled = false;
        }
    }


});

calculate.addEventListener('click', function() {
    var shotsTotalTime =        calcTime(shotsNeeded.value * shotsTime.value, shotsTime.value);
    var videosTotalTime =       calcTime(videosNeeded.value * videosTime.value, videosTime.value);
    var threeSixtiesTotalTime = calcTime(threeSixtiesNeeded.value * threeSixtiesTime.value, threeSixtiesTime.value);
    var allTimesAdded =         (shotsNeeded.value * shotsTime.value) + (videosNeeded.value * videosTime.value) + (threeSixtiesNeeded.value * threeSixtiesTime.value)
    var totalTotalTime =        calcTime(allTimesAdded, 1)

    shotsResults.innerHTML = 'It will take ' + shotsTotalTime + ' to shoot ' + (shotsNeeded.value) + ' shots.';
    videosResults.innerHTML = 'It will take ' + videosTotalTime + ' to shoot ' + (shotsNeeded.value) + ' shots.';
    threeSixtiesResults.innerHTML = 'It will take ' + threeSixtiesTotalTime + ' to shoot ' + (shotsNeeded.value) + ' shots.';
    totalResults.innerHTML = 'It will take ' + totalTotalTime + ' to complete this project.';





});








function calcTime(totalTime) {
    const workHoursPerDay = 7;
    // const workDaysPerWeek = 5;
    const myHour = 60;
    const myDay = myHour * workHoursPerDay;
    // const myWeek = myDay * workDaysPerWeek;

    if (totalTime < myHour) {
        var segment = "minutes(s)";
    } else if (totalTime >= myHour && totalTime < myDay) {
        var segment = "hours(s)";
        totalTime /= myHour;
    } else if (totalTime > myDay) {
        var segment = "days(s)";
        totalTime /= myDay;
    }

    totalTime = totalTime.toFixed(1);
    return  totalTime + ' ' + segment;
}


function setDefaultTimes() {
    for(var i=0;i<times.length;i++) {
        times[i].value = shootingTimes[i];
    } 
}