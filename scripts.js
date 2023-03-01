const shootingTimes = [9, 15, 12];
const hour = 60;
const day = 7.5 * hour;
var timesOld = [];

var defaults = document.querySelector('#defaults');
var times = document.querySelectorAll('.times');


setDefaultTimes();

defaults.addEventListener('change', function() {
    //Work on this part
        for(var j=0; j<times.length;j++) {
            if (!times[j].disabled) {
                timesOld[j] = times[j].value;
                console.log(timesOld[j]);
            }
        }

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


function setDefaultTimes() {
    for(var i=0;i<times.length;i++) {
        times[i].value = shootingTimes[i];
    } 
}