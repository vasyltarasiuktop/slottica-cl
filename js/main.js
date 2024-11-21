import starsRating from "./stars-rating.js";
import faq from "./faq.js";
import reviewForm from "./review-form.js";

(() => {
  const burger = document.querySelector('.header-burger')
  const closeMenu = document.querySelector('.close-menu')
  const overlay = document.querySelector('.overlay')
  const currY = document.querySelectorAll('.curr-y')
  const expanders = document.querySelectorAll('.expand-item .aside-menu__list-item')

  currY.forEach(elem => elem.innerHTML = new Date().getFullYear())

  const toogleMenu = () => {
    document.body.classList.toggle('menu-open')
  }

  burger.addEventListener('click', toogleMenu)
  overlay.addEventListener('click', toogleMenu)
  closeMenu.addEventListener('click', toogleMenu)

  expanders.forEach(expander => {
    expander.addEventListener('click', () => {
      expander.closest('.expand-item').classList.toggle('expanded')
    })
  })
})()
