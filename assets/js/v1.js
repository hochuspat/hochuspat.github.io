const form=document.getElementById('form')

function removeEventListener(event){
   event.preventDefault();

   const fio =form.querySelector('[name="fio"]'),
   tg=form.querySelector('[name="tg"]'),
   info=form.querySelector('[name="info"]');
   const value={
    fio:fio.value,
    tg:tg.value,
    info:info.value,
   };
   fetch("http://localhost:5000", {  // Отправляем по адресу нашего фласка
      "method": "POST",              // Методом ПОСТ
      "body": JSON.stringify(value), // Данные из value
      "headers": {
         'Content-Type': 'application/json',
      }
   })
}

form.addEventListener('submit', removeEventListener)
