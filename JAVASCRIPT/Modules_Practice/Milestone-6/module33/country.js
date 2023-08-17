const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
function displayCountries(data) {
  //   for (const country of data) {
  //     console.log(country);
  //   }
  const countriesContainer = document.getElementById("countries_container");
  data.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <p>Capital: ${country.capital ? country.capital[0] : "No Capital"} </p>
    <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
`;
    countriesContainer.appendChild(countryDiv);
  });
}
const loadCountryDetail = (details) => {
  //console.log("get details");
  const url = `https://restcountries.com/v3.1/alpha/${details}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetail(data[0]));
};
const displayCountryDetail = (country) => {
  const countryDetail = document.getElementById("country_detail");
  countryDetail.innerHTML = `
<h2>Details: ${country.name.common}</h2>
<img src="${country.flags.png}" alt="" />

`;
};

loadCountries();
