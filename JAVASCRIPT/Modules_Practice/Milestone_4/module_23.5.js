function sum(i) {
  if (i == 1) {
    return 1;
  }
  return i + sum(i - 1);
}
// console.log(sum(5));

/* 
5+sum(4)
5+4+sum(3)
5+4+3+sum(2)
5+4+3+2 +sum(1)
5+4+3+2 +1
*/

//FACTORIAL
/* let factorial = 1;
for (let i = 5; i >= 1; i--) {
  factorial = factorial * i;
}
console.log(factorial);
 */

/* function factorial(i) {
  if (i == 1) {
    return 1;
  }
  return i * factorial(i - 1);
}

console.log(factorial(5));
 */

//object
/* const student={
    name:'tonni akter',
    id:121,
       address:"mirpur 1",
       isSingle:true,
       friends:['tonni','bithi','ayat','noOne','arobe','tabassum','tammi','rahima'],
       car:{
        brand:'tesla',
        price:500000000,
        made:2022,
        manufacturer:{
            name:'tesla',
            CEO:'Elon Musk'
        }
       }
}

 */

/* function add(n1, n2) {
  console.log(n1, n2);
  console.log(arguments); //arguments holo array like objects
}
add(1, 5, 6, 7, 8, 9, 4);
 */

//for of loops matched products search------

const products = [
  { id: 1, name: "IPhone", price: 150000 },
  { id: 2, name: "vivo", price: 14000 },
  { id: 3, name: "oppo", price: 29000 },
  { id: 4, name: "samsung", price: 35000 },
  { id: 5, name: "poco phone", price: 19000 },
  { id: 6, name: "shaomi", price: 17000 },
  { id: 7, name: "nokia phone", price: 2500 },
];

function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}
console.log(matchedProducts(products, "phone"));
