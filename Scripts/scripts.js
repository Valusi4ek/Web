document.addEventListener("DOMContentLoaded", function(e) {
 // Находим форму и вешаем обработчик события
 document.getElementById("ageForm").addEventListener("submit", function(event) {
  event.preventDefault();  // ⚠️ Отмена отправки на сервер
  // Получение данных из формы
  let age = parseInt(document.getElementById("age").value);
  // Логика сценария
  let message = "";
  if (age < 18) {
   message = "Ты малолетка";
  } else if (age < 21) {
   message = "Ты совершеннолетний, но не достиг 21 года";
  } else {
   message = "Ты достиг совершеннолетия";
  }
  // Вывод результата на страницу
  document.getElementById("result").textContent = message;
 });
 let data=new Date();
 let day=data.getDay();
 switch(day) {
  case 1: day="понедельник"; break;
  case 2: day="вторник"; break;
  case 3: day="среда"; break;
  case 4: day="четверг"; break;
  case 5: day="пятница"; break;
  default: day="выходной"
 }
 document.getElementById("day").innerHTML="Сегодня "+day;
});
