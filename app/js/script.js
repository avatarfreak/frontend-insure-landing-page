const selector = (elem) => document.querySelector(elem);

//Get all the elements
const toggleBtn = selector(".menu-btn");
const burgerBtn = selector(".menu-btn__burger");
const menu = selector(".menu__list");

//Toggle class
const toggleClass = (selector, active) => {
  selector.classList.toggle(active);
};

//menu toggle button
toggleBtn.addEventListener("click", () => {
  toggleClass(burgerBtn, "active");
  toggleClass(menu, "active");
  toggleAccessibility();
});
//accessibility
function toggleAccessibility() {
  if (!menu.classList.contains("active")) {
    toggleBtn.setAttribute("aria-expanded", "true");
    toggleBtn.setAttribute("aria-label", "close menu");
  } else {
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.setAttribute("aria-label", "show menu");
  }
}

//Get All links
const links = [...menu.querySelectorAll(".menu__link")];

//pop last child
const lastChild = links.pop();
lastChild.addEventListener("blur", () => {
  toggleBtn.focus();
});
