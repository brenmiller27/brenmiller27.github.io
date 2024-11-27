function calculateWindchill() {

    var  temp = 72;
    var speed= 15
    var windChill = (35.74 + (0.6215 * temp))-
    (35.75 * Math.pow(speed, 0.16));

    var windChill = Math.round(windChill);
    document.getElementById('windChill').innerHTML = windChill;

}

calculateWindchill();

