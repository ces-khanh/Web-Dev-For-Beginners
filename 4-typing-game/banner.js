var p = document.querySelector('p');


var newYear = new Date("Jan 31,2022 24:00:00").getTime();
console.log(newYear);

var countdown = setInterval(run,1000)
function run() {
    var now = new Date().getTime();
    var timeRest = newYear - now;
    console.log(now);

    var day = Math.floor(timeRest / (1000 * 60 * 60 * 24));
    
    //Số ngày còn lại
    var hours = Math.floor(timeRest % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    // Số giờ còn lại
    var minute = Math.floor(timeRest % (1000 * 60 * 60) / (1000 * 60));
    // Số phút còn lại
    var sec = Math.floor(timeRest % (1000 * 60) / (1000));


    p.innerHTML = day + ' DAY ' + hours + ' : ' + minute + ' : ' +sec+" ";
    if(timeRest<=0){
        clearInterval(countdown);
        p.innerHTML = "HPNY"
    }
}