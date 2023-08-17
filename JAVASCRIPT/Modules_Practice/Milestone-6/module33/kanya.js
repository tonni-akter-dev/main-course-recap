const loadQuate = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuotes(data));
};

function displayQuotes(data) {
  const sectionContainer = document.getElementById("quotes_adding");
  sectionContainer.innerText=data.quote
//   const p = document.createElement("p");
//   p.innerText = data.quote;
//   sectionContainer.appendChild(p);
}
