const shootingTimes = [35, 20, 20];
const hour = 60;
const day = 7.5 * hour;
var timesOld = [];

var defaults =              document.querySelector('#defaults');
var times =                 document.querySelectorAll('.times');
var skusNeeded =           document.querySelector('#skus-needed');
var skusTime =             document.querySelector('#skus-time');
var videosNeeded =          document.querySelector('#videos-needed');
var videosTime =            document.querySelector('#videos-time');
var threeSixtiesNeeded =    document.querySelector('#three-sixties-needed');
var threeSixtiesTime =      document.querySelector('#three-sixties-time');
var skusResults =          document.querySelector('#skus-results');
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
    var skusTotalTime =        calcTime(skusNeeded.value * skusTime.value, skusTime.value);
    var videosTotalTime =       calcTime(videosNeeded.value * videosTime.value, videosTime.value);
    var threeSixtiesTotalTime = calcTime(threeSixtiesNeeded.value * threeSixtiesTime.value, threeSixtiesTime.value);
    var allTimesAdded =         (skusNeeded.value * skusTime.value) + (videosNeeded.value * videosTime.value) + (threeSixtiesNeeded.value * threeSixtiesTime.value)
    var totalTotalTime =        calcTime(allTimesAdded, 1)

    if(!(skusNeeded.value == 0) && !(skusTime.value == 0)) {
        skusResults.innerHTML = 'It will take ' + skusTotalTime + ' to shoot ' + (skusNeeded.value) + ' sku(s).';
        skusResults.style.display = 'block'
    } else {
        skusResults.innerHTML = '';
        skusResults.style.display = 'none'
    }

    if(!(videosNeeded.value == 0) && !(videosTime.value == 0)) {
        videosResults.innerHTML = 'It will take ' + videosTotalTime + ' to shoot ' + (videosNeeded.value) + ' video(s).';
        videosResults.style.display = 'block'
    } else {
        videosResults.innerHTML = '';
        videosResults.style.display = 'none'
    }

    if(!(threeSixtiesNeeded.value == 0) && !(threeSixtiesTime.value == 0)) {
        threeSixtiesResults.innerHTML = 'It will take ' + threeSixtiesTotalTime + ' to shoot ' + (threeSixtiesNeeded.value) + ' 360(s).';
        threeSixtiesResults.style.display = 'block'
    } else {
        threeSixtiesResults.innerHTML = '';
        threeSixtiesResults.style.display = 'none'
    }

    if(!(skusNeeded.value == 0) || !(videosNeeded.value == 0) || !(threeSixtiesNeeded.value == 0)) {
        totalResults.innerHTML = 'It will take ' + totalTotalTime + ' to complete this project.';
    } else {
        totalResults.innerHTML = '';
    }
}

function calcTime(totalTime) {
    const workHoursPerDay = 7;
    const myHour = 60;
    const workDaysPerWeek = 5;
    const myDay = myHour * workHoursPerDay;
    const myWeek = myDay * workDaysPerWeek;

    if (totalTime < myHour) {
        var segment = "minutes(s)";
    } else if (totalTime >= myHour && totalTime < myDay) {
        var segment = "hours(s)";
        totalTime /= myHour;
    } else if (totalTime >= myDay && totalTime < myWeek) {
        var segment = "days(s)";
        totalTime /= myDay;
    } else if (totalTime >= myWeek) {
        var segment = "weeks(s)";
        totalTime /= myWeek;
    }


    totalTime = totalTime.toFixed(1);
    return  totalTime + ' ' + segment;
}

function setDefaultTimes() {
    for(var i=0;i<times.length;i++) {
        times[i].value = shootingTimes[i];
    } 
}