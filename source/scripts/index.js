/* в этот файл добавляет скрипты*/
let burgerButton = document.querySelector('.header__burger-button');
let headerMenu = document.querySelector('.header__navigation')
burgerButton.onclick = function() {
  headerMenu.classList.toggle('header__navigation--open');
}
