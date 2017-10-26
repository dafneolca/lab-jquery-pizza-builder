// Write your Pizza Builder JavaScript in this file.
function main() {
  $(".btn-pepperonni").on('click', function() {
    $(this).toggleClass('active');
    $(".pep").toggle();
    $(".pepp").toggle();
  });

//      $(".element").toggleClass("visible");



  $(".btn-mushrooms").on('click', function() {
    $(this).toggleClass('active');
    $(".mushroom").toggle();
    $(".shroom").toggle();
    if ($(".mushroom").toggleClass("visible")) {

    }
  });

  $(".btn-green-peppers").on('click', function() {
    $(this).toggleClass('active');
    $(".green-pepper").toggle();
    $(".priceGPep").toggle();
  });


  $(".btn-crust").on('click', function() {
    $(this).toggleClass('active');
    $('.crust').toggleClass("crust-gluten-free");
    $(".gfCrust").toggle();

  });

  $(".btn-sauce").on('click', function() {
    $(this).toggleClass('active');
    $('.sauce').toggleClass(".sauce-white");
    $(".sauce-white").toggle();
    $(".priceWhiteSauce").toggle();
  });
}

//         $('.crust').toggleClass("gluten-free-crust");









$(document).ready(main);
