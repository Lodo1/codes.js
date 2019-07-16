function isDivisibleBy3(num) {
    // if the input is not a number
if(typeof num !== "number"){
    return "you have to enter a number";
}
if (num % 3 == 0){
    return "it is divisible on 3" ;
}
return " not divisible on 3";
}
console.log(isDivisibleBy3(15));
console.log(isDivisibleBy3(20));
console.log(isDivisibleBy3(-2.5));
console.log(isDivisibleBy3("cat"));


function isUndefined(value) {
if (value == undefined){
    return "undefined you need to define it";
}
return " it is a defined number ";
}
var i;
var b = 4;
console.log(isUndefined(i));
console.log(isUndefined(b));



function isSquareNumber(num) {
if(typeof num !== "number"){
    return "you have to enter a number";
}
if (typeof num < 0) {
    return " you cant write a negative value";
}
var sqrt = Math.sqrt(num);
if (Number.isInteger(sqrt)){
    return "this number is a Square Number ";
}
return "not a sqrt number";
}
console.log( " 16 " + isSquareNumber(16));
console.log("-16 " + isSquareNumber(-16));
function last(arr, count) {
 
 
return  arr.slice(arr.length-count,arr.length);
 
 }
console.log(last(["b","c","d","f","m"], 2));
// input hello , game , dareen
// output he, ga, da
function getFirstTwoLettersOfEachWord(list) {
    if (typeof list =="number"){
        return "enter a word not a number ";
    }
    var cut = list.substring(0,2);
    return cut;
}

console.log("dareen "+getFirstTwoLettersOfEachWord("dareen"));
console.log("game "+getFirstTwoLettersOfEachWord("game"));
console.log("hello "+getFirstTwoLettersOfEachWord("hello"));
console.log("3 " +getFirstTwoLettersOfEachWord(3));
// input the last of us
// output su fo tsal eht 
function reverseString(str) {
// check that it was a word not a number 
if(typeof str =="number"){
    return "error please write a word";
}
// spliting the word to letters
 var splitStr = str.split("");
 // reversing the letters
 var reverse = splitStr.reverse();
 // joining the letters to became a word again
 var  joinStr = reverse.join("");
 return joinStr;
}
console.log(reverseString("the last of us"));

// input: [1, 2, 3], 3
// output: true

// input: [1, 2, 3], 8
// output: false

//Returns true if the value is present in the list. 
function contains(list, value) {
    // check it is an array 
    if (!Array.isArray(list)){
        return " you should write an array";
    }
    if (list.length == value){
        return  true;
    }
    return false;

}
console.log(contains(["1","2","3"], 3));
console.log(contains(["1","2","3"],8));
console.log(contains("1", 3));
// input: [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}], 'name'
// output: ["moe", "larry", "curly"]

// A tool for extracting a list of property values.
function pluck(list, propertyName) {
    // if the list have the proprety name it should take the value 
var output =[];
for(var i in list ){
    if(list[i].hasOwnProperty(propertyName)){
        output.push(list[i],[propertyName]);
    }
}
return output;
  
}
document.write(pluck([{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}], 'name'));


// input: [1, 2, 3], 3
// output: 2

// input: ['a', 'b', 'c'], 'a'
// output: 0

// input: ['a', 'b', 'c'], 'e'
// output: -1

//Returns the index at which value can be found in the array, or -1 if value is not present in the array.
function indexOf(list, value) {
    // is the value in the array  
 if (list.includes(value))
 {
     // if yes starts a loop 
     for(var i = 0; i<list.length;i++){
         // if the element = value  print the value location which is i
         if( list[i]==value){
           return i ;
         }
     }
 }
 // the value is not in the array
 return "-1";
 
 
}
console.log(indexOf([7,5,4],9));
console.log(indexOf([7,5,4],7));


