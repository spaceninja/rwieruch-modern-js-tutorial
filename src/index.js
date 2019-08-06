console.log("Hello Project.");

const clickHandler = () => {
  alert("Click!");
};

const button = document.getElementById("js-click-me");
button.addEventListener("click", clickHandler);
