/* //type of

const arr=[1,2,3,4,5,60]
const arr2=[1,2,3,4,5,60]
console.log(Array.isArray(arr));
console.log(arr.includes(2))
console.log(arr.concat(arr2)); */

//v-2
//slice
const arr = [1, 2, 3, 4, 5, 6, 8, 7, 9, 10];
// console.log(arr.slice(2,5));

//=========================splice->========================================
/* 
removes element from an array, 
and if necessary inserts new element in their place
returning the deleted elements
will change the original array
*/
/* console.log(arr.splice(2, 5)); // 2 no index theke shru and 5 ta element chai
console.log(arr.splice(2, 5, 11, 12, 30)); // 2 no index theke shru and 5 ta element chai  and er pore 11,12,30 insert */

//remove duplicate elements from the array
/* const array = [
  "abul",
  "kabul",
  "sabul",
  "gabul",
  "abul",
  "kabul",
  "kabul",
  "abul",
  "gabul",
  "sabul",
];
const unique = [];
for (let i = 0; i < array.length; i++) {
  const names = array[i];
  if (unique.includes(names) === false) {
    unique.push(names);
  }
}
console.log ( unique); */

//cheapest phone
/* function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest
}
const phones = [
    {
      name: "Samsung",
      camera: 12,
      storage: "32gb",
      price: 36000,
      color: "silver",
    },
    {
      name: "Walton",
      camera: 10,
      storage: "32gb",
      price: 22000,
      color: "silver",
    },
    { name: "iphone", camera: 7, storage: "32gb", price: 82000, color: "silver" },
    { name: "Xaomi", camera: 17, storage: "32gb", price: 52000, color: "silver" },
    { name: "Oppo", camera: 25, storage: "32gb", price: 20000, color: "black" },
    { name: "Nokia", camera: 6, storage: "32gb", price: 44000, color: "golden" },
    { name: "HTC", camera: 10, storage: "32gb", price: 62000, color: "silver" },
  ];

  const my=cheapestPhone(phones)
  console.log(my);
// console.log(cheapestPhone(phones)); */

/* 
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/ticket. 
rest tickets will be 90 taka per piece
    first 100 ---->100tk
    rest ----> 90tk
3. if you purchase more than 200 tickets
    first 100 ---> 100tk
    101-200 ---> 90tk
    200+ ----> 70tk
*/
/* function ticketPrice(ticketQuantity) {
  if (ticketQuantity <= 100) {
    const price = ticketQuantity * 100;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100 = 100 * 100;
    const restTicekt = ticketQuantity - 100;
    const restPrice = restTicekt * 90;
    const second100 = first100 + restPrice;
    return second100;
  } else {
    const first100 = 100 * 100;
    const second100 = 100 * 90;
    const rest = ticketQuantity - 200;
    const restPrice = rest * 70;
    const morethan200 = first100 + second100 + restPrice;
    return morethan200;
  }
}
console.log(ticketPrice(120)); */

/* 
1. show output from: 1-50
2. if the number is divisible by 3 then instead of the number, show 'foo'
3. if the number is divisible by 5 then instead of the number, show 'bar'
4. if the number is divisible by both 3 and 5 then instead of the number show 'foobar'
*/
/* for(let i = 1; i <= 50; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('foobar');
    }
    else if(i % 3 === 0){
        console.log('foo');
    }
    else if (i % 5 === 0){
        console.log('bar');
    }
    else{
        console.log(i);
    }
} */

/* const shoppingCart = [
  { name: "shoe", price: 1200, quantity: 2 },
  { name: "shirt", price: 2200, quantity: 5 },
  { name: "pant", price: 3700, quantity: 4 },
  { name: "belt", price: 600, quantity: 3 },
];
function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productTotal = product.price * product.quantity;
    sum = sum + productTotal;
  }
  return sum
}
console.log(totalCost(shoppingCart)); */


///
/* function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';
    }
    return num1 + num2;
}

const result = add(12, 45);
// console.log(result);

function multiply(num1, num2){
    console.log(num1, num2);
    return num1 * num2;
}

const output = multiply(12,45);
console.log(output)
 */

