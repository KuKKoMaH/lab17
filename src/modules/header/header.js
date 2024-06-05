const $header = $('.header');
const headerActive = 'header--active';

$('.header__button').on('click', () => {
  $header.toggleClass(headerActive);
})