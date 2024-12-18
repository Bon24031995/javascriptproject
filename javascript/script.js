// How to print hello world in js orint the output

console.log('Hello World'); // output print console,termail

// to print the output from js to html 

document.write('Hello World');

// to print the output from js to html tag

document.getElementById('demo').innerHTML = 'Hello World';

// variable in js


var a = 10;
var b = 20;
var c = a + b;

console.log(c);

// add two number 

// Data type 

var q = 11; // number
console.log(q);

var w = 'boney'; // string
console.log(w);

var e = true; // false boolen values
console.log(e);

var mobile = {     // object
    brand: 'iphone', // property
    price: 52000
}

console.log(mobile);
console.log(mobile.brand); // we can call perticular obj value

var fruit = ['apple', 'mango']; // var you can only store one value // array
console.log(fruit);

var shoe = [{
    brand: 'nike',
    size: 7,
    price: 3250
}, {
    brand: 'puma',
    size: 11,
    price: 1250
}, {
    brand: 'adidas',
    size: 8,
    price: 5250
}]; // array of an obj /

console.log(shoe);

// error data type null undefine NaN

var y = null;
console.log(y);

var u = undefined;
console.log(u);

var i = NaN;
console.log(i);

// function 

function Tajmahal(i, j) // start // i,j = paramter // var // store values
{
    // write a code
    var a = 11;
    var b = 12;
    var c = a + b;
    console.log(c);
    console.log(i + j);
}
Tajmahal(11, 12); // function Dec

// function paramter

// function scope or var scope

var a = 20; // global var

function Jack() {
    var a = 15; // local var
    console.log(a);
    console.log(a);
}
Jack();

// Types of function

function Happy() // function name
{
    // Code 
    var apple = 19;
    console.log(apple);
}
Happy(); // function end or funct decla

// arrow function

var titan = () => {
    var mango = 25;
    console.log(mango);
}
titan();

// anomenus function

(()=>{
    var titan = 'jack';
    console.log(titan);
})();

// self invoking function

var tea = function(){
    console.log('These is self invoking function');
}
tea();

// call back function

function Alpha(a)
{
    console.log('Calling Alpha function'); // 1
    a(); 
    console.log('Calling back function Alpha'); //3
}
function Beta(){
 console.log('calling beta function'); // 2
}
Alpha(Beta);

// function Hosting

Zeta();
function Zeta()
{
  console.log('these is function hosting');
}

// alert , prompt , praseint

// alert('These is alert ouput'); // messege pop up

// when we are taking values from user we are executing eith prompt var [store values];

// var afc = prompt('Enter value for Afc'); // value are store in var in the form of string
// var bfs = prompt('Enter value for Bfc');

// // praseint to convert string into number

// var add = parseInt(afc) + parseInt(bfs);
// console.log(add);

// for loop 

var j = 1;

// mujhe hana hai var j = 10 to var i = 10 = 1  i<=j

for(var i = 11 ; i>=j; i -=1){ // i +=1 [i+1] and i++ [i+3]
    console.log(i-=1);
}
