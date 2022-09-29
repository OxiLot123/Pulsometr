$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1200,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-solid.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right-solid.png"></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
              dots: true,
              arrows: false
          }
        }
      ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__contant').removeClass('catalog__contant_active').eq($(this).index()).addClass('catalog__contant_active');
    });

    $('.catalog-item__link').each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__contant').toggleClass('catalog-item__contant_active');
        $('.catalog-item__list').toggleClass('catalog-item__list_active');
      })
    })
  });