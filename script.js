const movieN = document.getElementById("movieName");
const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
    const search = movieN.value;

    const response = await fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&t=${search}`);
    const data = await response.json();

    console.log(data);
});