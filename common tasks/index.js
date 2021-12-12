


// #1 Фильтрация строки
// Создать переменную со строковым значением. Сформировать переменную которая будет состоять только из ГЛАСНЫХ букв этой строки. Результат вывести в консоль.

const phrase = "Почему ничего не работает?";

const allVowels = 'аеёийоуэюяАЕЁИЙОУЭЮЯ';

let getVowels = function(string) {
  let vowels = '';

  for (let i = 0; i < string.length; i++) {

    if(allVowels.indexOf(string[i]) > -1) {
      vowels = vowels + string[i];
    };
  };

  return vowels;
};



console.log(getVowels(phrase));

/*#2 Выборка объекта. 
Сформировать произвольный массив объектов, описывающий, например, работников компании, в каждом объекте должны содержаться 
сл. свойства (поля) - name (содержащее имя сотрудника) и поле salary (содержащее зарплату сотрудника от 0 до 3000). 
Сформировать функцию в которую будет передан в качестве аргумента этот массив и возвращен из функции массив содержащий имена всех сотрудников, чья зарплата превышает 1000.*/


const workers = [
   {name:'Oleg Denisenko', salary:500},
   {name:'Steve Gates', salary:1500},
   {name:'Bill Jobes', salary:2500},
];


function fn(array) {
  const names = [];
  
  for (let i = 0; i < array.length; i++) {
    if (array[i].salary > 1000) {
        names.push(array[i].name);
    };
    
  };
 return names
};

console.log(fn(workers));


// #3 Анализ строки
// Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла. 
// Функция должна возвращать true или false в зависимости от того есть у этого файла расширение html или нет.

const path = "/users/download/index.html";
const extenstion = path.substring(path.length - 5, path.length);
const isHtml = () => {
  const html = '.html';
    
  return extenstion === html;
  
};

console.log(isHtml(),'первый вариант решения');


//////////////////////////////////// Второй вариант
const html = '.html';

const isThisHtml = (string,substring) => {
  return string.includes(substring, string.length - substring.length) 
  
};

console.log(isThisHtml(path,html),'Второй вариант решения');





// #1 Фильтрация массива
// Создайте функцию которая в качестве аргумента принимает целое число, и проверяет четное оно или нет. 
// Затем создайте произвольный массив целых чисел. И используя функцию проверки числа на четность, создайте из готового массива новый, который будет содержать только четные числа. 
// Результат выведите в консоль.

//Первый способ
const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => { 

    if (num % 2 == 0) { return true;}
    else { return false;};

};

const filterArray = (array,fn) => {
   const evenArray = [];
    for (let i = 0; i<array.length; i++) { 

      if (fn(array[i]) == true) {
       evenArray.push(array[i]);
      }
    };
    return evenArray;
};

console.log(filterArray(mixedArray, isEven), 'Первый способ');



////////////Второй способ
const filterArray2 = (array,fn) => {

  return array.filter(fn);

};

console.log(filterArray2(mixedArray, isEven), 'Второй способ');

