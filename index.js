document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".button");
  let image = document.createElement("img");
  button.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => {
        return res.json();
      })
      .then(parsedRes => {
        console.log(parsedRes);
        // let image = document.createElement("img");
        image.src = parsedRes.message;
        document.body.appendChild(image);
      });
  });
});
