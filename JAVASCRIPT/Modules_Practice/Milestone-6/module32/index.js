//how does internet works - video-https://www.youtube.com/watch?v=x3c1ih2NJEg&ab_channel=Lesics

//what is API --video-https://www.youtube.com/watch?v=s7wmiS2mSXY&ab_channel=MuleSoftVideos

//-------------v-2------------------
//json-javascript object notation

//-------------v-3------------------
fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
  response.json()
);
//   .then((json) => console.log(json));

//-------------v-4------------------
/* 
1. API stands for Application Programming Interface
2. An api acts like that allows two application to talk to each other.
3. api is the part of the server that receives requests and sends responses.
*/

/* function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}
function displayUser(params) {
  console.log(params);
} */

//-------------v-5------------------

/* function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}
function displayUser(users) {
    //   for (const user of users) {
  //     console.log(user.name);
  //     console.log(user.email);
  //   }

  const ul = document.getElementById("user_list");
  for (const user of users) {
    console.log(user.name);
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
} */

//-------------v-6------------------
//display post
//-------------v-7------------------
//understand crud operation




//-------------v-8------------------
