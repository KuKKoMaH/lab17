import initSlider from "../../js/initSlider";

initSlider('.frontSlider__slider', ($el) => ({
  wrapperClass: 'frontSlider__slides',
  slideClass:   'frontSlider__slide',
  // direction:    'vertical',
  navigation:   {
  //   prevEl: $el.parents('.hints').find('.hints__nav--prev')[0],
    nextEl: $el.parents('.frontSlider').find('.frontSlider__button')[0],
  },
  // pagination:      {
  //   el:        $el.parents('.frontSlider').find('.frontSlider__pagination')[0],
  //   clickable: true,
  // },
  // touchEventsTarget: 'wrapper',
  slidesPerView: 1,
  spaceBetween:  0,
  // autoHeight:    true,
}))