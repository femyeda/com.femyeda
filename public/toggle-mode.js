const toggle = document.querySelector(".js-change-theme");
const body = document.querySelector("body");
const html = document.querySelector("html");

toggle.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    toggle.innerHTML = "☀️";
    html.classList.remove("dark");
  } else {
    toggle.innerHTML = "🌙";
    html.classList.add("dark");
  }
});
