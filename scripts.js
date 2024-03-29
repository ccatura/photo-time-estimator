const shootingTimes = [40, 30, 30]; // 1) Per Image  2) Per Video  4) Per 360

var defaults =              document.querySelector('#defaults');
var times =                 document.querySelectorAll('.times');

// fix this later to be a for loop
var defaultTime =           [times[0].getAttribute('defaulttime'), times[1].getAttribute('defaulttime'), times[2].getAttribute('defaulttime')];

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
var resetButton =           document.querySelector('#reset');
var difficultCheckBox =     document.getElementById('difficult');
var difficultValue =        difficultCheckBox.value;


// setDefaultTimes();

difficultCheckBox.addEventListener('change', function() {
    var difficultHidden = document.getElementById('difficult-hidden').value;
    if (this.checked && defaults.checked) {
        skusTime.value = parseInt(skusTime.value) + parseInt(difficultHidden);
        updateInfo();
    } else if (!this.checked && defaults.checked) {
        skusTime.value = parseInt(skusTime.value) - parseInt(difficultHidden);
        updateInfo();
    }
});

defaults.addEventListener('change', function() {
    difficultCheckBox.checked = false;
    if (this.checked) {
        difficultCheckBox.disabled = false;
        for(var i=0;i<times.length;i++) {
            times[i].disabled = true;
            setDefaultTimes();
            updateInfo();
        }
    } else {
        difficultCheckBox.disabled = true;
        for(i=0;i<times.length;i++) {
            times[i].disabled = false;
        }
    }
});

calcBody.addEventListener('input', function() {
    updateInfo();
});

resetButton.addEventListener('click', function() {
    location.reload()
});









``


function updateInfo() {
    var skusTotalTime =             calcTime(skusNeeded.value, skusTime.value, true);
    var videosTotalTime =           calcTime(videosNeeded.value, videosTime.value, false);
    var threeSixtiesTotalTime =     calcTime(threeSixtiesNeeded.value, threeSixtiesTime.value, false);
    var allTimesAdded =             (skusNeeded.value * skusTime.value) + (videosNeeded.value * videosTime.value) + (threeSixtiesNeeded.value * threeSixtiesTime.value)
    var totalTotalTime =            calcTime(allTimesAdded, 1, true)

    // Shots times
    if(!(skusNeeded.value == 0) && !(skusTime.value == 0)) {
        skusResults.innerHTML = 'It will take ' + skusTotalTime + ' to shoot ' + (skusNeeded.value) + singularPluralTerm(skusNeeded.value, 'SKU') + '.';
        skusResults.style.display = 'block'
    } else {
        skusResults.innerHTML = '';
        skusResults.style.display = 'none'
    }

    // Video times
    if(!(videosNeeded.value == 0) && !(videosTime.value == 0)) {
        videosResults.innerHTML = 'It will take ' + videosTotalTime + ' to shoot ' + (videosNeeded.value) + singularPluralTerm(videosNeeded.value, 'video') + '.';
        videosResults.style.display = 'block'
    } else {
        videosResults.innerHTML = '';
        videosResults.style.display = 'none'
    }

    //360 times
    if(!(threeSixtiesNeeded.value == 0) && !(threeSixtiesTime.value == 0)) {
        threeSixtiesResults.innerHTML = 'It will take ' + threeSixtiesTotalTime + ' to shoot ' + (threeSixtiesNeeded.value) + singularPluralTerm(threeSixtiesNeeded.value, '360') + '.';
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

function calcTime(unitsNeeded, unitTime, calcDiff) {
    var difficult = document.getElementById('difficult');
    // if (difficult.checked && calcDiff) unitTime = parseInt(unitTime) + parseInt(difficultValue);

    var totalMinutes        = unitsNeeded * unitTime;
    var minutesPerHour      = 60;
    var hoursPerDay         = 7;
    var daysPerWeek         = 5;
    var minutesPerDay       = minutesPerHour * hoursPerDay;
    var minutesPerWeek      = minutesPerDay * daysPerWeek;
    var totalHours          = Math.floor(totalMinutes / minutesPerHour);
    var totalDays           = Math.floor(totalHours / hoursPerDay);
    var totalWeeks          = Math.floor(totalHours / (daysPerWeek * hoursPerDay));
    var leftOverMinutes;
    var leftOverHours;

    /* MINUTES */
    if (totalMinutes <= minutesPerHour) {
        return  totalMinutes + singularPluralTerm(totalMinutes, 'minute');
    }
    /* HOURS */
    else if (totalMinutes > minutesPerHour && totalMinutes < minutesPerDay) {
        leftOverMinutes = totalMinutes - (totalHours * minutesPerHour);
        if (leftOverMinutes == 0) {
            return totalHours + singularPluralTerm(totalHours, 'hour');
        } else {
            return totalHours + singularPluralTerm(totalHours, 'hour') + ' and ' + leftOverMinutes + singularPluralTerm(leftOverMinutes, 'minute');
        }
    }
    /* DAYS */
    else if (totalMinutes >= minutesPerDay && totalMinutes < minutesPerWeek) {
        leftOverHours = Math.floor(totalHours - (hoursPerDay * totalDays));
        if (leftOverHours == 0) {
            return totalDays + singularPluralTerm(totalDays, 'day');
        } else {
            return totalDays + singularPluralTerm(totalDays, 'day') + ' and ' + leftOverHours + singularPluralTerm(leftOverHours, 'hour');
        }
    }
    /* WEEKS */
    else if (totalMinutes >= minutesPerWeek) {
        leftOverDays = Math.floor(totalDays - (daysPerWeek * totalWeeks));
        if (leftOverDays == 0) {
            return totalWeeks + singularPluralTerm(totalWeeks, 'week');
        } else {
            return totalWeeks + singularPluralTerm(totalWeeks, 'week') + ' and ' + leftOverDays + singularPluralTerm(leftOverDays, 'day');
        }
    }
}

function singularPluralTerm(num, singularTerm) {
    var theTerm = (num > 1 ? singularTerm + 's': singularTerm);
    return ' ' + theTerm;
}

function setDefaultTimes() {
    // IN HERE: THIS NEEDS TO TAKE THE ATTRIBUTE (defaulttime) IN THE HTML INPUT TAG AND REPLACE THE VALUE WITH THAT
    for(var i=0;i<times.length;i++) {
        times[i].value = defaultTime[i];
    } 
}