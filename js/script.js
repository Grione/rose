$("#phone").inputmask({"mask": "+7(999) 999-9999"});
$("#phone2").inputmask({"mask": "+7(999) 999-9999"});

///////// hack to safari vh ///////////////
$('.section-hero').height(window.innerHeight + 'px');

//////// popup open and close //////////////

var modal = document.getElementById('popup');

var myBtn = document.getElementsByClassName('button-open');
var close = document.getElementsByClassName('close')[0];
var sucess = $('#sucess');
var popupMain = $('.popup__main');
/*
А это в цикле прокручиваем те элементы которыми мы открываем модал окно
и обработчик события который открывет окно
*/
for (var i = 0; i < myBtn.length; i++) {
  myBtn[i].addEventListener('click', function() {
    openModalWindow();
  })
};
// это обработчик события, который в нутри этой функции выполнят ту функцию 
//которая закрывает окно модальное
close.addEventListener('click', function() {
  closeModalWindow();
});

//это функция, которая открывает окно
function openModalWindow() {
  popupMain.css('display','flex');
  sucess.css('display','none');
  modal.classList.add("popup--active");
  
}

//это функция, которая закрывает окно
function closeModalWindow() {
  modal.classList.remove("popup--active");
}

//////// slick on width 768px //////////////

if (window.innerWidth <= 768) {
    $('.features__list').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    // autoplaySpeed: 2000,
    arrows: false,
    dots:true
    });
   } else { 

 };

 if (window.innerWidth >= 768) {
   var phone = document.querySelector('.header__phone');
   var phoneFoo = document.querySelector('.footer__tel');
   phone.addEventListener('click', function (e){
       e.preventDefault();
       
   })

   phoneFoo.addEventListener('click', function (e){
    e.preventDefault();
    
})

 };


/////    tabs    /////////////

function openRose(evt, roseName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("popular__tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("popular__tabs-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" popular__tabs-link--active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(roseName).style.display = "block";
    evt.currentTarget.className += " popular__tabs-link--active";
}

 // Get the element with id="defaultOpen" and click on it
 document.getElementById("defaultOpen").click();

 //// ----- end tabs ----- ///////

//////////////// form ajax /////////////


$('#form').submit(function(e) {
    
    var $form = $(this);
    $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    success: function(res) {
        
        jQuery('#form')[0].reset();
      }
    }).done(function() {
        // popup.classList.remove('popup--active');
        popupMain.css('display','none');
        sucess.css('display','flex');
        console.log('success');
        

    }).fail(function() {
        console.log('fail');
    });
      //отмена действия по умолчанию для кнопки submit
    e.preventDefault(); 
});

$('#form2').submit(function(e) {
    var textSuccess = $('#sucess2');
    var mainQ = $('.question__main')
    var $form = $(this);
    
    $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize()
    }).done(function() {
        mainQ.css('display','none');
		textSuccess.css('display','flex');
        console.log('success');
    }).fail(function() {
        console.log('fail');
    });
      //отмена действия по умолчанию для кнопки submit
    e.preventDefault(); 
});



/////// input mask phone ///////////



