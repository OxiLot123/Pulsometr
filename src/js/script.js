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

    

    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__contant').eq(i).toggleClass('catalog-item__contant_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          
        })
      })

    };

    toggleSlide ('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });


    $('.modal__close').on('click', function () {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click',function()  {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });


    

    function valideForms(form) {
      $(form).validate( {
        rules: {
          name: {
              required: true,
              minlength: 2
          },
          phone: "required",
          email: {
              required: true,
              email: true
          }
        },
        messages: {
          name: {
              required: "Пожалуйста,введите свое имя",
              minlength: jQuery.validator.format("Введите {0} символа")
          },
          phone: "Пожалуйста,введите номер телефона",
          email: {
            required: "Пожалуйста,введите свою почту",
            email: "Неправильно введен адресс почты"
          }
        }
    });


    };

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

    //smooth scroll and pageup

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
         $('.pageup').fadeIn();
      } else {
         $('.pageup').fadeOut();
      }

    });

    $("a[href='#up']").click(function() {
      const_href = $(this).attr("href");
      $('html, body').animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

});