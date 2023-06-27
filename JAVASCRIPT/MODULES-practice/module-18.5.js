// Module 18_5

// বেসিক জাভাস্ক্রিপ্ট (ভেরিয়েবল, এরে, কন্ডিশন, লুপ) এর চেকলিস্ট।

// ভালো করে মনোযোগ দিয়ে একটার পর একটা চেকলিস্ট ধরে ধরে চেক করবে। একটাও বাদ দিবে না। বাদ দিলেই তোমার আব্বার কাছে বিচার দিবো।

// ১. জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো?
/*JavaScript is a popular programming language used for web development. It is primarily used to create interactive and dynamic elements on websites. JavaScript can be used on both the front end (client-side) and back end (server-side) of web applications.  */

// ২. জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেটা কি জানো?
/* JavaScript is an interpreted programming language that runs in web browsers and allows you to enhance web pages with interactivity and dynamic content. It works by parsing and executing JavaScript code line by line, manipulating the Document Object Model (DOM) to modify web page elements, and supporting features like variables, flow control, functions, event handling, and asynchronous operations. */

// ৩. ভেরিয়েবল কি জিনিস?
/* A variable is a named storage location in a computer's memory that is used to store data during the execution of a program */

// ৪. ভেরিয়েবল কিভাবে ডিক্লেয়ার করে
/* var nam"tonni  */

// ৫. ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে।
/* var name='tonni'
name='bithi' */

// ৬. কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি (হিন্টস: Numeric, String, Boolean)
/* var n = 10
var s = 'tonni'
var b = true
var a = [1, 2, 3, 4, 5]
var o = {
    name: "tonni"
}
var nu=null
var un=undefined */

// ৭. জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো।
/* Primitive data types are basic data types that are directly supported by the programming language. They are fundamental building blocks and are not composed of other data types. Primitive data types are usually stored directly in memory and are immutable, meaning their values cannot be changed once assigned.
[number,string,boolean,null,undefined,symbol]

********Non-Primitive Data Types*********
Non-primitive data types are typically stored in memory as references (memory addresses) and allow for more complex data structures and behaviors. Operations performed on non-primitive types may modify the underlying data without creating a completely new value.
[object,array,function,date,regex] */





// ৮. ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো।
/*
we can not use any reserve keyword, need to use camelcase
let age = 25;
let firstName = "John";
let user_age = 30;
let numberOfStudents = 50;
*/


// ৯. দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে?
/*
*/
/* var num1=100
var num2=20
console.log(num1*num2);
console.log(num1-num2);
console.log(num1+num2);
console.log(num1/num2);
console.log(num1%num2); */

// ১০. শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে।

// ১১.. ++ এবং -- এর কাজ কি ? এইটা কি জানো।
/* increment and decrement  the current value */
// ১২ parseInt, parseFloat, toFixed এইগুলা কি করে?
/* parseInt convert any string into number. parsefloat convert the number into float, toFixed fixed the value after the point that we want */
// --------------

// ১৩. Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয়
/*  array is a data structure that allows you to to store multiple values.
const num=[1,2,3,4,5,6]
*/

// ১৪. array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে

/* array.length */



// ১৫. array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়।
/*
it starts with 0
*/

// ১৬. কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায়
/* if the element is not in the array it will give -1   */

// ১৭. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো
/* array.indexof(40) */

// ১৮. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে
/* array[10]=20  */
// ১৯. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো? using indexof

// ২০. ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো)

/*If you encounter "undefined" when accessing an element using an index, it means that the value for that index is not defined or assigned. It indicates that the element does not exist or has not been assigned a value.  */
/* const arr=[1,2,3,4,5,6]
console.log(arr[7]); */

// ২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
/* const arr=[1,2,3,4,5,6]
arr.push(7)
//arr.pop()
console.log(arr); */


// ২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
/* const arr=[1,2,3,4,5,6]
arr.unshift(7)
//arr.shift()
console.log(arr); */

// ২৩. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।।
/*
greater than, less than, equal to, not equal, less than equal,greater than equal, check the type and values===,
*/

// ২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে ,২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।



// ---------------------

// ২৫. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।
/* for (let i = 0; i <= 39; i++) {
    console.log('আসকে আমার মন ভালো নেই');
} */

// ২৬. while লুপ কিভাবে কাজ করে
/* let i=0
while (i <= 10) {
    console.log(i);
    i++
}
 */

// ২৭. for লুপ কিভাবে কাজ করে
/* for (let i = 0; i < 10; i++) {
    console.log(i);
}
 */

// ২৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়।
/* infinite hobe loop */

// ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও
/* const phoneModel = ['nokia', 'oppo', 'shaomi', 'Iphone', 'poco m2']
for (let i = 0; i < phoneModel.length; i++) {
    console.log(phoneModel[i]);
}
 */

// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও
/* for (let i = 30; i < 86; i++) {
    if (i == 44) {
        break
    }
    console.log(i);
}*/

// ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।
/* const booksPrice = [350, 250, 180, 150, 260, 220, 100, 50, 90, 230]
for (let i = 0; i < booksPrice.length; i++) {
    //console.log(booksPrice[i]);//
    if (booksPrice[i] < 200) {
        console.log(booksPrice[i]);
    }
}
 */