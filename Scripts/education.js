// Подсчёт символов в строке
function длиннаСтроки(str) {
    let resalt = 0;
    resalt = str.length;
    return resalt;
}
let istochnik = document.getElementById("source1").innerHTML;
document.getElementById("rez1").innerHTML = "Расчётная длинна строки" + длиннаСтроки(istochnik);
//Вычисление длинны окружности
function circleRadius(radius) {
    let pi=Math.PI;
    return 2*pi*radius;
}
let radius=20;
document.getElementById("rez2").innerHTML=`Расчётная длинна окружности с радиусом ${radius} составляет` + Math.round(circleRadius(radius)) ;
//Вычисление площади окружности
function areaCircle(r) {
    let pi=Math.PI;
    return Math.round(pi*r*r);
}
let diameter=20;
document.getElementById("rez3").innerHTML="Площадь круга с диаметром " +diameter+ " составляет " + areaCircle(diameter);
//Пример использования функции внутри другой функции (Площадь конуса)
function areaCon() {
   let pi=Math.PI; diameter=10; lateralLength=15;
   function areaCircle(pi,r) {
       return Math.round(pi*r*r);
   }
   function areaLateral(pi, r, s) {
       return Math.round(pi,r,s);
   }
   return areaCircle(pi, diameter)+areaLateral(pi, diameter,lateralLength);
}
document.getElementById("rez4").innerHTML="Площадь конуса составляет "+ areaCon();
