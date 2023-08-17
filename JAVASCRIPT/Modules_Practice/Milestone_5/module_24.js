//integrated javascript with DOM
/* 
DOM, EVENT handlers,event bubbling,event capturing, propagation,event delegation,
baap-er-bank/ mac book pro/ pin-matcher/shopping-cart
*/

/* tour of DOM  */
//v-24-1
// console.log(document);

/* 
1. DOM-html->markup / css->style/ javascript->manipulate
2. what DOM defines
-> the events for all HTML elements,the methods to access all HTML elements,the properties of all HTML elements, all HTML elements as objects

3. what can do javascript with DOM?
->js can change all the HTML elements in the page, can change HTML attributes, 
can change all the css styles in the page, 
js can remove existing HTML elements and attributes,
js can add new HTML elements and attributes,
js can react to all existing HTML events in the page
*/

//===========v-2==============

/* const byTagname=document.getElementsByTagName('li')
// console.log(byTagname);
for (const li  of byTagname) {
    console.log(li);
} */

//===========v-3==============
/* const fruitsTitle=document.getElementById("fruits_title")
fruitsTitle.innerText='Fruits changed by js DOM'

const places = document.getElementsByClassName("important_places");
console.log(places);
for (const place of places) {
  console.log(place.innerText);
} */

//===========v-4==============
//querySelector
/* 
WHAT IS NODELIST AND HTMLcollection
*/
/* const someLi = document.querySelectorAll(".fruits_container li");
const someLiSELECTOR = document.querySelector(".fruits_container li");
console.log(someLiSELECTOR);
for (const li of someLi) {
  console.log(li.innerHTML);
}
 */
//===========v-5==============
/* const fruitsTitle=document.getElementById("fruits_title")
console.log(fruitsTitle.getAttribute('id')) */

//===========v-6==============
// const sections=document.querySelectorAll('section')
// for (const section of sections) {
//     section.style.border='2px solid red';
//     section.style.marginBottom='5px';
//     section.style.borderRadius='5px';
//     // section.style.backgroundColor='lightgray';
// }
// // const placesContainer=document.getElementById('places_container')
// // placesContainer.style.backgroundColor='yellow'
// const placesContainer=document.getElementById('places_container')
// placesContainer.classList.add('yellow_bg')
// placesContainer.classList.remove('yellow_bg')

//===========v-7==============
/* parentNode,childNode,createElement,appendChild */
/* const placesList=document.getElementById('places_list')
const li=document.createElement('li');
li.innerText='khagrachori'
//3.add the child
placesList.appendChild(li) */

const mainContainer = document.getElementById("main_container");
// what to be added
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My Food List";
section.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Biriyani";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "Cold Coffee";
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.innerText = "Tea";
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);
