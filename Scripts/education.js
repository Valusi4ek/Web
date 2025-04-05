
function длиннаСтроки(str) {
    let resalt = 0;
    resalt = str.length;
    return resalt;
}
let istochnik = document.getElementById("source1").innerHTML;
document.getElementById("rez1").innerHTML = "Расчётная длинна строки" + длиннаСтроки(istochnik);
function circleRadius(radius) {
    let pi=Math.PI;
    return 2*pi*radius;
}
let radius=20;
document.getElementById("rez2").innerHTML=`Расчётная длинна окружности с радиусом ${radius} составляет` + Math.round(circleRadius(radius)) ;