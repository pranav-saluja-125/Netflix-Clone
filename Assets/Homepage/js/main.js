$(function() {

    $(".slide").slick({
        infinite: true,
        slidesToShow: 5, 
        slidesToScroll: 1,
        prevArrow: $(".arrow-prev"),
        nextArrow: $(".arrow-next"),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 980,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });
}) 
