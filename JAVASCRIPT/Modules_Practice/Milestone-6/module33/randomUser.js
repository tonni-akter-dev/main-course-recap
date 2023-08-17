const loadRandomProgrammer = () => {
  fetch("https://randomuser.me/api/?results=15")
    .then((res) => res.json())
    .then((data) => displayRandomUser(data.results));
};

function displayRandomUser(data) {
  const userContainer=document.getElementById('all-random-programmer')
  for (const user of data) {
    const userDiv=document.createElement('div')
    userDiv.innerHTML=`
    <h3>User name: ${user.name.first} ${user.name.last}</h3>
    <p>Email: ${user.email}</p>
    <p>Location: ${user.location.city}</p>`
    userContainer.appendChild(userDiv)
  }
}

loadRandomProgrammer();
