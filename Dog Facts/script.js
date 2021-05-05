let API_URL =
  "https://frozen-anchorage-52262.herokuapp.com/https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all";

const fetchData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  let result = data[Math.floor(Math.random() * 434) + 1].fact;
  document.getElementById("fact-txt").innerHTML = result;
};

fetchData();
