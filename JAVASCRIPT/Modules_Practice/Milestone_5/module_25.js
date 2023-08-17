//dom events
// console.log('events running');
/* 
function make_red() {
  document.body.style.backgroundColor = "red";
}
//option3
const makeBlueBtn = document.getElementById("make_blue");
// console.log(makeBlueBtn);
makeBlueBtn.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
//option 3
const makePurple = document.getElementById("make_purple");
makePurple.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

//option 4
const pinkBtn = document.getElementById("make_pink");
pinkBtn.addEventListener("click", makePink);
function makePink() {
  document.body.style.backgroundColor = "pink";
}
//option 4:another
const greenBtn = document.getElementById("make_green");
greenBtn.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});
//option 4:final--most used

document.getElementById("make_Orange").addEventListener("click", function () {
  document.body.style.backgroundColor = "orange";
});
 */
//================v-4=====================
/*       function handleOnclick() {
    const handleText = document.getElementById("text");
        handleText.innerText =
        "Handle by function attached on onclick attribute";
      }
      //option 2
      document
        .getElementById("event_listener")
        .addEventListener("click", function () {
          const handleText = document.getElementById("text");
          handleText.innerText = "updated bu addEventListener";
        });
        */

/* document.getElementById("btn_update").addEventListener("click", function () {
  const inputField = document.getElementById("input_field");
  const inputText = inputField.value;
  const text = document.getElementById("default_text");
  text.innerText = inputText;
  inputField.value = "";
}); */

//================v-5===================== create a comment box
/* document.getElementById("comment_post").addEventListener("click", function (e) {
  e.preventDefault();
  const inputField = document.getElementById("new_cmnt");
  const inputText = inputField.value;
  //adding system
  const commentContainer = document.getElementById("comment_container");
  const p = document.createElement("p");
  p.innerText = inputText;
  commentContainer.appendChild(p);
  inputField.value = "";
}); */
//================v-6===================== delete confirmation like github

/*     document
        .getElementById("text_field")
        .addEventListener("focus", function () {
          console.log("Event triggered using focus");
        });

      document
        .getElementById("text_field")
        .addEventListener("blur", function () {
          console.log("Event triggered using blur");
        }); */
/*     document
        .getElementById("text_field")
        .addEventListener("keydown", function (e) {
          console.log(e.target.value);
          // console.log("Event triggered using keydown");
        }); */
/*       document
      .getElementById("text_field")
      .addEventListener("keypress", function (e) {
        console.log(e.target.value);
        // console.log("Event triggered using keydown");
      }); */
/*  document
        .getElementById("text_field")
        .addEventListener("keyup", function (e) {
          console.log(e.target.value);
          // console.log("Event triggered using keydown");
        });
      document
        .getElementById("btn_more_events")
        .addEventListener("mouseover", function () {
          console.log("Event triggered btn");
        }); */

///github delete btn
/* document.getElementById("text_field").addEventListener("keyup", function (e) {
  const text = e.target.value;
  const btnDelete = document.getElementById("btn_more_events");
  if (text === "delete") {
    btnDelete.removeAttribute("disabled");
  } else {
    btnDelete.setAttribute("disabled", true);
  }
  secretInfo.style.display = "none";
});
document
  .getElementById("btn_more_events")
  .addEventListener("click", function () {
    const secretInfo = document.getElementById("secret_info");
    secretInfo.style.display = "none";
  });
 */


  //=================event bubble========================== 
  /* event bubbling stop korar jonno stopPropagation() call korbo 
        now what is event bubbling it capture highes to the lowest element than observe the events which one is clicked then it will go the every parents and show the every events which is happend in the browser.
        */
       /*  document.getElementById("item-2").addEventListener("click", function (e) {
            console.log("item-2 clicked");
            e.stopPropagation(); //dile ul e jabe na but item-2 gula hbe
            //e.stopImmediatePropagation() // immediate item-2 er gulao stop hoye jabe
          });
          document.getElementById("item-2").addEventListener("click", function (e) {
            console.log("item-2 second clicked");
          });
          document.getElementById("item-2").addEventListener("click", function (e) {
            console.log("item-2 third clicked");
          });
          document.getElementById("list_ul").addEventListener("click", function () {
            console.log("ul clicked");
          });
          document
            .getElementById("list-container")
            .addEventListener("click", function () {
              console.log("section container clicked");
            }); */
  //=================event delegate========================== 