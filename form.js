const form = document.getElementById("form");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name").value;
  const names = document.getElementById("names").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  const nameRegex = /^[a-zA-Z ]{3,}$/;
  const namesRegex = /^[a-zA-Z ]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nameRegex.test(name)) {
    nameError.innerText = "Enter at least 3 letters";
    valid = false;
  } else nameError.innerText = "";

  if (!nameRegex.test(names)) {
    namesError.innerText = "Enter at least 3 letters";
    valid = false;
  } else namesError.innerText = "";

  if (!emailRegex.test(email)) {
    emailError.innerText = "Invalid email";
    valid = false;
  } else emailError.innerText = "";

  if (password.length < 6) {
    passError.innerText = "Minimum 6 characters";
    valid = false;
  } else passError.innerText = "";

  if (password !== confirm) {
    confirmError.innerText = "Passwords do not match";
    valid = false;
  } else confirmError.innerText = "";

  if (valid) {
    modal.style.display = "block";
    form.reset();
  }
});

// closeBtn.onclick = () => modal.style.display = "none";