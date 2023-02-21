const navBar = document.querySelector('.nav__bar');
const navToggle = document.querySelector(".nav__toggle")

navToggle.addEventListener("click", () => {
  const visible = navBar.getAttribute("data-visible")

  if (visible === "true") {
  navBar.setAttribute("data-visible", false)
  navToggle.setAttribute("aria-expanded", false) 
  }else{
  navBar.setAttribute("data-visible", true)
  navToggle.setAttribute("aria-expanded", true)
  }
})