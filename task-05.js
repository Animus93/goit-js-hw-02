// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.
const refs ={
    input: document.querySelector(".summ"),
    button: document.querySelector(".plus"),
};

refs.input.classList.remove('hide');
refs.button.classList.remove('hide');
refs.button.textContent = 'bad words chek';

refs.button.addEventListener('click', function(){
    checkSpam(refs.input.value);
});

const checkSpam = function(message){
    const spam = ['sale', 'spam'];
    const messageSplit = message.toLowerCase().split(' ');
    const chek = messageSplit.map(word => {
     spam.forEach(badWord => {
         if(badWord === word){
             return word = '****'
         }
     });
     return word
    }).join(' ');
     console.log(chek)
 };