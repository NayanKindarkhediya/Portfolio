// Smooth Scroll
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Name Loop
const text = "Nayan Kindarkhediyaa";
let i = 0;
let deleting = false;

function typeLoop() {
  const element = document.getElementById("auto-name");

  if (!deleting) {
    element.textContent = text.substring(0, i++);
  } else {
    element.textContent = text.substring(0, i--);
  }

  if (i === text.length) {
    deleting = true;
    setTimeout(typeLoop, 1000);
    return;
  }

  if (i < 0) {
    deleting = false;
    i = 0;
  }

  setTimeout(typeLoop, deleting ? 80 : 120);
}

typeLoop();

// Password Toggle With Image
document.getElementById("showPass").addEventListener("click", function () {
  let pass = document.getElementById("password");
  let icon = document.getElementById("passIcon");

  if (pass.type === "password") {
    pass.type = "text";
    icon.src = "img/visual.png"; // 👁️ eye open icon
  } else {
    pass.type = "password";
    icon.src = "img/not-visible.png"; // 👁️ eye close icon
  }
});

// Validation
document.getElementById("sendBtn").addEventListener("click", function () {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let pass = document.getElementById("password").value.trim();
  let msg = document.getElementById("msg").value.trim();
  let error = document.getElementById("error");

  if (name === "") return showError("Please enter your name!");
  if (email === "") return showError("Please enter your email!");

  let emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailCheck.test(email)) return showError("Please enter a valid email!");

  if (pass === "") return showError("Please enter a password!");
  if (pass.length < 6)
    return showError("Password must be at least 6 characters!");

  if (msg === "") return showError("Please enter your message!");

  error.style.display = "none";
  alert("Message Sent Successfully!");
});

function showError(msg) {
  let error = document.getElementById("error");
  error.style.display = "block";
  error.textContent = msg;
}
