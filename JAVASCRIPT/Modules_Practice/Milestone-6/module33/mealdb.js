const loadMeals = (search) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((res) => res.json())
    .then((data) => displayMeal(data.meals));
};
function displayMeal(data) {
  const mealsContailer = document.getElementById("meals_container");
  mealsContailer.innerHTML = ``;
  //DISPLAY 10 MEAL ONLY

  data = data.slice(0, 10);
  const noMeal = document.getElementById("no-meal-message");
  if (data.length === 0) {
    noMeal.classList.remove("d-none");
  }
  else{
    noMeal.classList.add('d-none')
  }
  data.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
   <div class="card">
     <img src="${meal.strMealThumb}"class="card-img-top" alt="..." />
     <div class="card-body">
       <h5 class="card-title">${meal.strMeal}</h5>
       <p class="card-text">
        ${meal.strInstructions.slice(0, 200)}
       </p>
       <button onclick="loadMealDetails('${meal.idMeal}')">Details</button>

     </div>
    </div>`;
    mealsContailer.appendChild(mealDiv);
  });
}

function searchFood() {
  const inputText = document.getElementById("input_field").value;
  loadMeals(inputText);
}

function loadMealDetails(details) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details}`)
    .then((res) => res.json())
    .then((data) => displayDetails(data.meals[0]));
}
const displayDetails = (meal) => {
  const detailContainer = document.getElementById("detail_container");
  const mealdiv = document.createElement("div");
  mealdiv.classList.add("card");
  mealdiv.style.width = "18rem";
  mealdiv.innerHTML = `
<img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
`;
  detailContainer.appendChild(mealdiv);
};
