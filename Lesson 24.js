// 15 EASY TASKS
//1
for (let num = 2; num <= 20; num += 2) {
    console.log(num); 
}
//2
let sum = 0;
for (let num = 1; num <= 10; num++) { 
    sum += num;
}
console.log("Сумма чисел от 1 до 10: " + sum);
//3
let factorial = 1;
for (let num = 1; num <= 5; num++) { 
    factorial *= num;
}
console.log("Факториал числа 5: " + factorial);
//4
let str = "Hello, World!";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
//5
let arr = [1,2,3,4,5]
for (let i = 0; i <= arr.length; i++){
    console.log(arr[i]);
}
//6
let sum1 = 0;
let arr1 = [1,2,3,4,5];
for(let i = 0; i <= arr1.length; i++){
    sum1+=i
}
console.log("Сумма всех элементов массива:",sum1);
//7
let array = [1, 2, 3, 4, 5];
let max = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > max) { 
        max = array[i]; 
    }
}
console.log("Максимальный элемент в массиве: " + max);
//8
let array1 = [1, 2, 3, 1, 2, 1]; 
let count = 0;
for (let i = 0; i < array1.length; i++) {
    if (array1[i] === 1) {
        count++;
    }
}
console.log("Число 1 встречается: " + count + " раз(а)");
//9
let squaresArray = [];
for (let num = 1; num <= 10; num++) {
    squaresArray.push(num * num);
}
console.log("Массив квадратов чисел от 1 до 10: ", squaresArray);
//10
for (let num = 10; num >= 1; num--) {
    console.log(num);
}
//11
let powersOfTwo = []; 
for (let i = 0; i < 10; i++) {
  powersOfTwo[i] = 2 ** i;
}
console.log(powersOfTwo);
//12
let numbers = [5, 9, 3, 7, 2, 8, 1, 6, 4];
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
console.log(min);
//13
let str1 = "Hello, World!";
let reversedStr = "";
for (let i = str1.length - 1; i >= 0; i--) { 
  reversedStr += str1[i]; 
}
console.log(reversedStr);
//14
let numbers1 = [10, 12, 31, 40, 15];
let target = 31;
let index = -1; 

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] === target) { 
    index = i; 
    break; 
  }
}
console.log(index); 
//15
let numbers2 = [1, 1, 1, 1, 1];
let allAreOne = true; 
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] !== 1) { 
    allAreOne = false; 
    break;
  }
}
console.log(allAreOne);


// 5 MEDIUM TASKS
//1
let word = "radar";
let reversedWord = ""; 
for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}
if (word === reversedWord) {
    console.log(word + " является палиндромом.");
} else {
    console.log(word + " не является палиндромом.");
}

//2
let array2 = [1, 2, 3, 4, 3, 2, 1]; 
let elementToRemove = 3;
let newArray = [];
for (let i = 0; i < array2.length; i++) {
    if (array2[i] !== elementToRemove) { 
        newArray.push(array2[i]);
    }
}
console.log("Массив после удаления элемента 3: ", newArray);

//3
let sum2 = 0;
for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 || num % 5 === 0) { 
        sum2 += num; 
    }
}
console.log("Сумма всех чисел от 1 до 100, которые делятся на 3 или 5: " + sum2);

//4
let newArr = [5, 9, 3, 7, 2, 8, 1, 6, 4];
let sum3 = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i]; 
}
let average = sum / array.length;
console.log("Среднее значение элементов массива: " + average);
//5
let number = 1234; 
let count1 = 0; 

while (number !== 0) { 
    number = Math.floor(number / 10); 
    count1++;
}
console.log("Количество цифр: " + count1);









