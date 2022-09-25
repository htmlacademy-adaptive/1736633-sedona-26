  let header = document.getElementById('main-header');
  let logo = document.getElementById('logo-header');
  let nav = document.getElementById('nav-block');
  let toggler = document.getElementById('header-toggle')

  header.classList.remove('main-header--static');
  logo.classList.remove('main-header__logo--static');
  nav.classList.remove('nav-block--static');
  nav.classList.add('nav-block--close');
  toggler.classList.remove('main-header__toggle--static');


function indexIntro (){
  let indexIntro = document.getElementById('index-intro');
  indexIntro.classList.remove('index-intro--static');
}


document.getElementById('header-toggle').addEventListener('click', function () {
  document.getElementById('nav-block').classList.toggle('nav-block--close')
})

document.getElementById('header-toggle').addEventListener('click', function () {
  document.getElementById('header-toggle').classList.toggle('main-header__toggle--close')
})
