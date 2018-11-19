document.addEventListener("DOMContentLoaded", () => {
  let body = document.querySelector("body");
  fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => {
      return response.json();
    })
    .then(parsedRes => {
      parsedRes.forEach(movie => {
        let newNode = document.createElement("p");
        newNode.innerText = movie.title;
        body.appendChild(newNode);
      });
    });
});
