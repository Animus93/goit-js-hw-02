// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

const refs ={
    input: document.querySelector(".summ"),
    button: document.querySelector(".plus"),
};

refs.input.classList.remove('hide');
refs.button.classList.remove('hide');
refs.button.textContent = 'модифицировать строку';

const myString = function(value){
    value.length > 40?
    console.log(value.slice(0,40)+('...'))
    : console.log(value)
};

refs.button.addEventListener('click', function(){
    myString(refs.input.value);
})