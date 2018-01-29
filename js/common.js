//modalka

// $(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
//     $('a#go').click(function(event) { // лoвим клик пo ссылки с id="go"
//         event.preventDefault(); // выключaем стaндaртную рoль элементa
//         $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
//             function() { // пoсле выпoлнения предъидущей aнимaции
//                 $('#modal_form')
//                     .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
//                     .animate({ opacity: 1, top: '50%' }, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
//             });
//     });
//     /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
//     $('#modal_close, #overlay').click(function() { // лoвим клик пo крестику или пoдлoжке
//         $('#modal_form')
//             .animate({ opacity: 0, top: '45%' }, 200, // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
//                 function() { // пoсле aнимaции
//                     $(this).css('display', 'none'); // делaем ему display: none;
//                     $('#overlay').fadeOut(400); // скрывaем пoдлoжку
//                 }
//             );
//     });
// });

//dropdown
$(document).ready(function() {
    $(".arrow-box").click(function() {
        $("this").removeClass("open");
        $(this).toggleClass("open");
        $(this).parent().parent().children(".drop-div").slideToggle("slow");
        return false;
    });
});

//anchor
$(document).ready(function() {
    $('a[href*=#]').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });
    return false;
});



//hover
$(".icon>img").hover(function() {
    var classElem = "." + this.id;
    $(classElem).show();
}, function() {
    var classElem = "." + this.id;
    $(classElem).hide();
});


// $(document).ready(function() {
//     $(".icon>img").hover(function() {
//         var icon_text_arr = [
//             [
//                 "icon-delic-1",
//                 "icon-delic-2",
//                 "icon-delic-3",
//                 "icon-delic-4",
//                 "icon-useful-1",
//                 "icon-useful-2",
//                 "icon-useful-3",
//                 "icon-useful-4"
//             ],
//             [
//                 "<h4> Lorem icon-d-1 ipsum dolor </h4> <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quis culpa eius eaque dolore laboriosam facere minus maxime fuga optio, impedit tenetur quas ratione nemo reiciendis maiores mollitia perspiciatis, obcaecati commodi ? < /p>",
//                 "<h4> Lorem icon-d-2 ipsum dolor </h4> <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quis culpa eius eaque dolore laboriosam facere minus maxime fuga optio, impedit tenetur quas ratione nemo reiciendis maiores mollitia perspiciatis, obcaecati commodi ? < /p>",
//                 "<h4> Lorem icon-d-3 ipsum dolor </h4> <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quis culpa eius eaque dolore laboriosam facere minus maxime fuga optio, impedit tenetur quas ratione nemo reiciendis maiores mollitia perspiciatis, obcaecati commodi ? < /p>",
//                 "<h4> Lorem icon-d-4 ipsum dolor </h4> <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quis culpa eius eaque dolore laboriosam facere minus maxime fuga optio, impedit tenetur quas ratione nemo reiciendis maiores mollitia perspiciatis, obcaecati commodi ? < /p>",
//                 "<h4> Lorem icon-u-1 ipsum dolor </h4> <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quis culpa eius eaque dolore laboriosam facere minus maxime fuga optio, impedit tenetur quas ratione nemo reiciendis maiores mollitia perspiciatis, obcaecati commodi ? < /p>",
//                 "<h4> Lorem icon-u-2 ipsum dolor </h4> <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quis culpa eius eaque dolore laboriosam facere minus maxime fuga optio, impedit tenetur quas ratione nemo reiciendis maiores mollitia perspiciatis, obcaecati commodi ? < /p>",
//                 "<h4> Lorem icon-u-3 ipsum dolor </h4> <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quis culpa eius eaque dolore laboriosam facere minus maxime fuga optio, impedit tenetur quas ratione nemo reiciendis maiores mollitia perspiciatis, obcaecati commodi ? < /p>",
//                 "<h4> Lorem icon-u-4 ipsum dolor </h4> <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quis culpa eius eaque dolore laboriosam facere minus maxime fuga optio, impedit tenetur quas ratione nemo reiciendis maiores mollitia perspiciatis, obcaecati commodi ? < /p>"
//             ]
//         ];
//         var ideElem = this.target.id.toString;
//         alert(ideElem)
//         for (var i = 0; i < icon_text_arr.length; i++) {
//             if (arr[0][i] == idElem)
//                 if (ideElem.indexOf('delic') + 1)
//                     $(".delicious-info").html(icon_text_arr[1][i]).show();
//                 else
//                     $(".useful-info").html(icon_text_arr[i][1]).show();
//         }
//         //$(this).toggleClass("open");
//         //$(this).parent().parent().children(".drop-div").slideToggle("slow");
//         return false;
//     });
// });








//------------------For delete----------------

// Iterate over each select element
// $('select').each(function() {

//     // Cache the number of options
//     var $this = $(this),
//         numberOfOptions = $(this).children('option').length;

//     // Hides the select element
//     $this.addClass('s-hidden');

//     // Wrap the select element in a div
//     $this.wrap('<div class="select"></div>');

//     // Insert a styled div to sit over the top of the hidden select element
//     $this.after('<div class="styledSelect"></div>');

//     // Cache the styled div
//     var $styledSelect = $this.next('div.styledSelect');

//     // Show the first select option in the styled div
//     $styledSelect.text($this.children('option').eq(0).text());

//     // Insert an unordered list after the styled div and also cache the list
//     var $list = $('<ul />', {
//         'class': 'options'
//     }).insertAfter($styledSelect);

//     // Insert a list item into the unordered list for each select option
//     for (var i = 0; i < numberOfOptions; i++) {
//         $('<li />', {
//             text: $this.children('option').eq(i).text(),
//             rel: $this.children('option').eq(i).val()
//         }).appendTo($list);
//     }

//     // Cache the list items
//     var $listItems = $list.children('li');

//     // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
//     $styledSelect.click(function(e) {
//         e.stopPropagation();
//         $('div.styledSelect.active').each(function() {
//             $(this).removeClass('active').next('ul.options').hide();
//         });
//         $(this).toggleClass('active').next('ul.options').toggle();
//     });

//     // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
//     // Updates the select element to have the value of the equivalent option
//     $listItems.click(function(e) {
//         e.stopPropagation();
//         $styledSelect.text($(this).text()).removeClass('active');
//         $this.val($(this).attr('rel'));
//         $list.hide();
//         /* alert($this.val()); Uncomment this for demonstration! */
//     });

//     // Hides the unordered list when clicking outside of it
//     $(document).click(function() {
//         $styledSelect.removeClass('active');
//         $list.hide();
//     });

// });