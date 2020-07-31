$(function(){

// FORMSTYLER  

   $('.constructor__gender_radio input').styler({
   });
   
   $('.color_box__select--skin').styler({
   });

   $('.color_box__select--eye').styler({
   });

   $('.color_box__select--hair').styler({
   });

   $('.constructor__select').styler({
   });

// RANGESLIDER

   $(".js-range-slider-wt").ionRangeSlider({
      min: 2985,
      max: 3600,
      from: 3000,
      to: 3500,
      skin: "round",
      type: "double",
      hide_min_max: true
   });

//DATEPICKER

   $('.datepicker-here').datepicker({
      dateFormat: 'dd'
  })


});

// Одинарный формат рендж слайдера с вводом значения
var $range = $(".js-range-slider-inch"),
   $input = $(".js-input"),
   instance,
   min = 430,
   max = 650;

$range.ionRangeSlider({
   skin: "round",
   type: "single",
   min: min,
   max: max,
   from: 450,
   onStart: function(data) {
       $input.prop("value", data.from);
   },
   onChange: function(data) {
       $input.prop("value", data.from);
   }
});

instance = $range.data("ionRangeSlider");

$input.on("change keyup", function() {
   var val = $(this).prop("value");

   // validate
   if (val < min) {
       val = min;
   } else if (val > max) {
       val = max;
   }

   instance.update({
       from: val
   });
});







// Инпут с именем и кнопка

var inpuut = document.querySelector('.constructor__input-name');
var inp = document.querySelector('.constructor__prop:nth-child(2)');

inpuut.onblur = function() {
   if (!inpuut.value.includes('@')) { // не email
     // показать ошибку
     inp.classList.add("constructor__prop--focus");
     // ...и вернуть фокус обратно
   } else {
     inp.classList.remove("constructor__prop--focus");
   }
 };