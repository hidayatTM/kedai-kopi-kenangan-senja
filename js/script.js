// Toggle class active

const navabarNav = document.querySelector(".navbar-nav");

// ketika humburgemenu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navabarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav

const humburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navabarNav.contains(e.target))
    navabarNav.classList.remove("active");
});
