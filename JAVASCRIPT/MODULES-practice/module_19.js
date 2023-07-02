/* 1) Write a function called foo() which prints “foo” and a function called bar() which prints
“bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
the foo() to see the output. */
/* function foo() {
    console.log('Foo');
    bar()
}
function bar() {
    console.log('Bar');
}
foo()
 */

// 2) Write a function called make_avg() which will take an three integers and return the average of those values.
/* function make_avg(x,y,z) {
    const result=x+y+z/3
    console.log(result);
}
make_avg(10,20,30) */


// 3) Challenging: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
/* 
function make_avg(array) {
    let sum = 0
    var avrg;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]

        avrg = sum / array.length
    }
    console.log(avrg);
}
make_avg([10, 20, 30, 40, 50, 60]) */


/* 4) Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd. You need to do it in 4 ways:
● Has return + Has parameter
● No return + Has parameter */

/* function odd_even(num) {
    if (num % 2 == 0) {
        // console.log('even');
        return 'even'
    } else {
        // console.log('odd');
        return 'odd'
    }
}

console.log(odd_even(5)) */



// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।

/* function multiplication(num) {
    for (let i = 1; i <= 10; i++) {
        // console.log(i);
        console.log(`${num}* ${i}=${num * i}`)
    }
}
multiplication(13) */



// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
/*
function caseChange(params) {
    return params.toLowerCase()
}

console.log(caseChange('TONNI'));

 */

// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 
/* 
function fullName(params1, params2) {
    return params1 + " " + params2
}

console.log(fullName('tonni', 'akter')); */


/* 
৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে। */

/* function square(params) {
    return params*params
}

console.log(square(5)); */



/* —--------------
৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :
const pizza = {
 toppings: ['cheese', 'sauce', 'pepperoni'],
 crust: 'deep dish',
 serves: 2
}
এবং pepperoni প্রিন্ট করবা। */


/* 
const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
}

console.log(pizza.toppings[2]); */


/* 
Object.keys/values/entries
object[property name]
object.property name
var propertyName='mouse'
var propertyValue=object[propertyName]
*/

//object loops
/* var person={
name:"tonni",
age:23,
habit:"working",
hobby:"coding",
movie:"Terrifier",
friend:"Maruf is my good friend                                                                                
}
 */