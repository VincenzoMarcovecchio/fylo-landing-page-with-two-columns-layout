function validateInput() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const email = document.querySelectorAll(".email");
  const error = document.getElementsByClassName("email-address-error");

  if (email.all.value.lenght < 1 || !email.value.match(mailformat)) {
    console.log("notValid email address");
    email.style.border = "1px solid hsl(354, 100%, 66%)";
    error.classList.add("active");
  } else {
    email.style.border = "1px solid hsl(223, 100%, 88%)";
    error.classList.remove("active");
  }
}
