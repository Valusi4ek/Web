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
  default: day="выходной"; break
 }
 document.getElementById("day").innerHTML="Сегодня "+day;
});

let count=0, message=""
function countClick(){
 count=count+1
 if (count==1)
 {message='Вы нажали всего один раз! Продолжайте!';}
 else if (count>=2 && count<=5)
 {message=`Вы нажали всего ${count} раз... Не сдавайтесь`;}
 else
 {message=`Молодец! Ты смог нажать ${count} раз!`;}
 document.getElementById('rez').innerHTML=message;
}

// Функция, которая выводит текст в зависимости от изображения
function showMessage(image) {
 const message = image.dataset.text;  // Берём текст из data-атрибута
 document.getElementById('res').innerHTML = message;
}
//СЛАЙДЕР
// Находим контейнер со слайдами
const slides = document.querySelector('.slides');
// Определяем количество слайдов
const slideCount = document.querySelectorAll('.slide').length;
// Находим кнопки «Назад» и «Вперёд»
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0; // Переменная для хранения текущего слайда
// Функция смены слайдов
function goToSlide(index) {
 if (index < 0) {
  index = slideCount - 1; // Если нажали «Назад» на первом слайде, переходим на последний
 } else if (index >= slideCount) {
  index = 0; // Если нажали «Вперёд» на последнем слайде, переходим на первый
 }

 currentIndex = index; // Запоминаем текущий слайд
 slides.style.transform = `translateX(${-index * (100 / slideCount)}%)`; // Сдвигаем контейнер со слайдами
}
// Добавляем обработчик клика для кнопки «Назад»
prevButton.addEventListener('click', () => {
 goToSlide(currentIndex - 1);
});
// Добавляем обработчик клика для кнопки «Вперёд»
nextButton.addEventListener('click', () => {
 goToSlide(currentIndex + 1);
});
// Устанавливаем первый активный слайд при загрузке страницы
goToSlide(0);


