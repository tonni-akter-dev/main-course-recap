// module 17===========
/* array  */
/* var numbers=[10,20,2,30,4,5,6,7,89,100]
// find index value
console.log(numbers[3]);
// set element value by index
numbers[2]=60
console.log(numbers);

//find index of an element ............na thakle -1 return korbe
var positionIndex=numbers.indexOf(89)
console.log(positionIndex);
 */


// ===================module problems============================
/* var fruits=['Apple','Banana','Orange']
var findIndex=fruits.indexOf('Banana')
console.log(findIndex);
fruits[findIndex]='Mango'
fruits.pop()
fruits.push('Watermelon')
console.log(fruits); */

/* const grades = [85, 66, 95, 56, 40]
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 80) {
        console.log('A grade');
    }
    else if (grades[i] >= 60) {
        console.log('B grade');
    }
    else if (grades[i] >= 50) {
        console.log('C grade');
    }
    else if (grades[i] >= 40) {
        console.log('D grade');
    }
    else if (grades[i] <= 39) {
        console.log('F grade');
    }
    else{
        console.log('Failled to be a student');
    }
}
*/



/* 1. You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else.
2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.
Isosceles => two sides are equal */

//==========1=========
/* var n1 = 13
var n2 = 79
var n3 = 45
if (n1 > n2 && n1 > n3) {
    console.log('n1 is the largest number');
}
else if (n2 > n1 && n2 > n3) {
    console.log('n2 is the largest number');
}
else {
    console.log('n3 is the largest number');
} */

//===========2============
/* const side1 = 9;
const side2 = 8;
const side3 = 9;

if (side1 === side2 || side1 === side3 || side2 === side3) {
  console.log("The triangle is isosceles.");
} else {
  console.log("The triangle is not isosceles.");
} */