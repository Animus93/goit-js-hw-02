// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

const refs ={ 
    input: document.querySelector('.summ'),
    button: document.querySelector('.plus'),
}

refs.input.classList.remove('hide');
refs.button.classList.remove('hide');
refs.button.textContent = 'Найти самое длинное слово';

refs.button.addEventListener("click", function(){
    findLongestWord(refs.input.value);
})

const findLongestWord = function(string){
    const strSplit = string.split(" ");
    let longestWord = 0;
    let indexOfLongestWord;
    strSplit.forEach(word => {
        if(word.length >= longestWord){
            longestWord = word.length;
            indexOfLongestWord = word;
            return indexOfLongestWord, longestWord
        };
    });
    console.log(indexOfLongestWord)
};