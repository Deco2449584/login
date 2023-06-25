const forgotPasswordLink = document.querySelectorAll(".link-forgot");
const containerForgot = document.getElementById("containerForgot");
const backtoSing = document.querySelectorAll(".link-signin");
const containerLogin = document.getElementById("containerLogin");
const createAcoount = document.querySelectorAll(".link-create");
const containerCreate = document.getElementById("containerCreate");

forgotPasswordLink.forEach(function (label) {
  label.addEventListener("click", function () {
    containerLogin.classList.add("invisible");
    containerForgot.classList.remove("invisible");
    containerCreate.classList.add("invisible");

    console.log("forgot");
  });
});

backtoSing.forEach(function (label) {
  label.addEventListener("click", function () {
    containerLogin.classList.remove("invisible");
    containerForgot.classList.add("invisible");
    containerCreate.classList.add("invisible");

    console.log("signin");
  });
});

createAcoount.forEach(function (label) {
  label.addEventListener("click", function () {
    containerLogin.classList.add("invisible");
    containerForgot.classList.add("invisible");
    containerCreate.classList.remove("invisible");

    console.log("create");
  });
});
