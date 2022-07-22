const headerNavBtn = document.querySelector('.header__nav-btn');
const headreNavigation = document.querySelector('.header__navigation');

headerNavBtn.addEventListener('click', () => {
  headreNavigation.classList.toggle('header__navigation_open');
})