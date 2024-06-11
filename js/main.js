$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.change-color-btn').addClass("show");
        }else{
            $('.change-color-btn').removeClass("show");
        }
        //Scroll animation

        //all animations
        if(this.scrollY > 100){
            $('.about .title').addClass("animate__animated animate__fadeInRight visible");
        }else{
        }
        if(this.scrollY > 200){
            $('.about .about-content .right').addClass("animate__animated animate__fadeInRight visible");
        }else{
        }
        if(this.scrollY > 200){
            $('.about .about-content .right a').addClass("animate__animated animate__fadeInRight delay-test visible");
        }else{            
        }
        if(this.scrollY > 200){
            $('.about .about-content .left').addClass("animate__animated animate__fadeInLeft visible");
        }else{
        }





        if(this.scrollY > 400){
            $('.ProjetSAE .title').addClass("animate__animated animate__fadeInLeft");
        }else{
            $('.about .title').addClass("");
        }
        if(this.scrollY > 500){
            $('.skills .title').addClass("animate__animated animate__fadeInRight");
        }else{
            $('.about .title').addClass("");
        }
        if(this.scrollY > 1700){
            $('.projetsplus .title').addClass("animate__animated animate__fadeInLeft");
        }else{
            $('.about .title').addClass("");
        }
        if(this.scrollY > 2300){
            $('.contact .title').addClass("animate__animated animate__fadeInRight");
        }else{
            $('.about .title').addClass("");
        }




    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.scroll-up-btn').click(function(){
        $('html').css('.navbar.sticky')
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    /* // slide-up script
    function changeColor (){
        console.log("T GGNR>KLGN KJSFDNSQJKL?QSF ?SKLD?D FKJL.?QSWFSQJNKJKNFDSJKNFDQSJN?K/FSDNJK? ")
        var element = document.querySelectorAll(".colorselect");
        element.classList.toggle("changecolor");
    }; */
    $('.change-color-btn').click(function(){
        {
            document.getElementsByClassName("colorselect").style.backgroundColor="yellow";
            console.log("jfhdsqjkfhkfhjkshfksdhkfhsdkj");
                }
    });



 

            

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });





// SAE
    $('.card').click(function(){
        console.log("jfhdsqjkfhkfhjkshfksdhkfhsdkj");
        $('.classSAE').addClass("visible");
    });



    //mon age
let dateDeNaissance = new Date("2001-01-07");

// Fonction pour calculer l'âge à partir de la date de naissance
function calculerAge(dateDeNaissance) {
  let ageMS = Date.now() - dateDeNaissance.getTime();
  let ageDate = new Date(ageMS);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Stocker l'âge dans la variable "MonAge"
let MonAge = calculerAge(dateDeNaissance);

// Afficher l'âge
console.log("Vous avez " + MonAge + " ans.");




    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Etudiant GEII", "Etudiant", "Etudiant à Chartres", MonAge+" ans"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Etudiant GEII", "Etudiant", "Etudiant à Chartres", "J'ai "+MonAge+" ans" ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-4", {
        strings: ["Contactez moi"],
        typeSpeed: 80,
        backSpeed: 140,
        loop: false
    });

    
// iframe
    $(document).ready(function() {
      $('a[target="iframe"]').click(function(e) {
          e.preventDefault();
          var url = $(this).attr('href');
          $('iframe').attr('src', url);
      });
  });

//mode liste ou pas
// Récupérer les boutons
const listModeButton = document.querySelector('.list-mode-button');
const fullViewModeButton = document.querySelector('.full-view-mode-button');

// Récupérer la section contenant les cartes
const saeContent = document.querySelector('.saecontent');

// Ajouter un écouteur d'événement sur le bouton "Mode liste"
listModeButton.addEventListener('click', function() {
  // Ajouter la classe "list-mode" à la section contenant les cartes
  saeContent.classList.add('list-mode');
  applyBackgroundImages();
  // Supprimer la classe "full-view-mode" de la section contenant les cartes
  saeContent.classList.remove('full-view-mode');

  // Activer le bouton "Mode liste" en lui ajoutant la classe "active"
  listModeButton.classList.add('active');
  // Désactiver le bouton "Mode pleine vue" en lui supprimant la classe "active"
  fullViewModeButton.classList.remove('active');
});

// Ajouter un écouteur d'événement sur le bouton "Mode pleine vue"
fullViewModeButton.addEventListener('click', function() {
  // Ajouter la classe "full-view-mode" à la section contenant les cartes
  saeContent.classList.add('full-view-mode');
  removeBackgroundImages();
  // Supprimer la classe "list-mode" de la section contenant les cartes
  saeContent.classList.remove('list-mode');

  // Activer le bouton "Mode pleine vue" en lui ajoutant la classe "active"
  fullViewModeButton.classList.add('active');
  // Désactiver le bouton "Mode liste" en lui supprimant la classe "active"
  listModeButton.classList.remove('active');
});

function applyBackgroundImages() {
  const cards = document.querySelectorAll('.saecontent.list-mode .card');
  cards.forEach(card => {
    const bg = card.getAttribute('data-bg');
    if (bg) {
      card.style.backgroundImage = `url(${bg})`;
    }
  });
}

function removeBackgroundImages() {
  const cards = document.querySelectorAll('.saecontent .card');
  cards.forEach(card => {
    card.style.backgroundImage = '';
  });
}

// For section 2
const listModeButton1 = document.querySelector('.list-mode-button1');
const fullViewModeButton1 = document.querySelector('.full-view-mode-button1');
const saeContent1 = document.querySelector('.boutonsaecontent1');

listModeButton1.addEventListener('click', function() {
  saeContent1.classList.add('list-mode1');
  applyBackgroundImages1();
  saeContent1.classList.remove('full-view-mode1');
  listModeButton1.classList.add('active');
  fullViewModeButton1.classList.remove('active');
});

fullViewModeButton1.addEventListener('click', function() {
  saeContent1.classList.add('full-view-mode1');
  removeBackgroundImages1();
  saeContent1.classList.remove('list-mode1');
  fullViewModeButton1.classList.add('active');
  listModeButton1.classList.remove('active');
});

function applyBackgroundImages1() {
  const cards = document.querySelectorAll('.saecontent1.list-mode1 .card');
  cards.forEach(card => {
    const bg = card.getAttribute('data-bg');
    if (bg) {
      card.style.backgroundImage = `url(${bg})`;
    }
  });
}

function removeBackgroundImages1() {
  const cards = document.querySelectorAll('.saecontent1 .card');
  cards.forEach(card => {
    card.style.backgroundImage = '';
  });
}

// For section 3
const listModeButton2 = document.querySelector('.list-mode-button2');
const fullViewModeButton2 = document.querySelector('.full-view-mode-button2');
const saeContent2 = document.querySelector('.boutonsaecontent2');

listModeButton2.addEventListener('click', function() {
  saeContent2.classList.add('list-mode2');
  applyBackgroundImages2();
  saeContent2.classList.remove('full-view-mode2');
  listModeButton2.classList.add('active');
  fullViewModeButton2.classList.remove('active');
});

fullViewModeButton2.addEventListener('click', function() {
  saeContent2.classList.add('full-view-mode2');
  removeBackgroundImages2();
  saeContent2.classList.remove('list-mode2');
  fullViewModeButton2.classList.add('active');
  listModeButton2.classList.remove('active');
});

function applyBackgroundImages2() {
  const cards = document.querySelectorAll('.saecontent2.list-mode2 .card');
  cards.forEach(card => {
    const bg = card.getAttribute('data-bg');
    if (bg) {
      card.style.backgroundImage = `url(${bg})`;
    }
  });
}

function removeBackgroundImages2() {
  const cards = document.querySelectorAll('.saecontent2 .card');
  cards.forEach(card => {
    card.style.backgroundImage = '';
  });
}


// hover


$(document).ready(function() {
  let hoverTimer;

  const hoverHandler = function() {
    const $this = $(this);

    hoverTimer = setTimeout(function() {
      $this.addClass('hoversae');
    }, 500); // .5 seconds delay
  };

  const leaveHandler = function() {
    clearTimeout(hoverTimer);
    $(this).removeClass('hoversae');
  };

  $('.sae-gbf-portable, .sae-alimentation-stabilisee, .sae-voltmetre, .sae-radar-de-recul, .sae-mesure-de-l-energie, .sae-ampli-audio-3-voix, .sae-station-meteo, .sae-cna, .sae-can, .sae-labview, .sae-emetteur-recepteur-hf, .stage1, .sae-recherche, .sae-iot, .sae-kart, .stage2')
    .hover(hoverHandler, leaveHandler);
});




///////


// owl carousel script


$('.carousel').owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive: {
      0:{
          items: 1,
          nav: false
      },
      600:{
          items: 2,
          nav: false
      },
      1000:{
          items: 3,
          nav: false
      }
  }
});

var trigger1 = document.querySelector('.trigger1');
var message1 = document.querySelector('.message1');



trigger1.addEventListener('click', () => {
    console.log("T GGNR>KLGN KJSFDNSQJKL?QSF ?SKLD?D FKJL.?QSWFSQJNKJKNFDSJKNFDQSJN?K/FSDNJK? ")
  var computedStyle = window.getComputedStyle(message1);
  var displayValue = computedStyle.getPropertyValue('display');
  
  if (displayValue === 'none') {
    message1.style.display = 'block';
    message1.style.animation = 'fade-in 0.5s';
    message1.addEventListener('animationend', () => {
      message1.style.animation = '';
    }, {once: true});
  } else {
    message1.style.animation = 'fade-out 0.5s';
    setTimeout(() => {
      message1.style.display = 'none';
      message1.style.animation = '';
    }, 500);
  }
});


var trigger2 = document.querySelector('.trigger2');
var message2 = document.querySelector('.message2');

trigger2.addEventListener('click', () => {
    var computedStyle = window.getComputedStyle(message2);
    var displayValue = computedStyle.getPropertyValue('display');
    
    if (displayValue === 'none') {
      message2.style.display = 'block';
      message2.style.animation = 'fade-in 0.5s';
      message2.addEventListener('animationend', () => {
        message2.style.animation = '';
      }, {once: true});
    } else {
      message2.style.animation = 'fade-out 0.5s';
      setTimeout(() => {
        message2.style.display = 'none';
        message2.style.animation = '';
      }, 500);
    }
  });

  var trigger3 = document.querySelector('.trigger3');
  var message3 = document.querySelector('.message3');
  
  trigger3.addEventListener('click', () => {
      var computedStyle = window.getComputedStyle(message3);
      var displayValue = computedStyle.getPropertyValue('display');
      
      if (displayValue === 'none') {
        message3.style.display = 'block';
        message3.style.animation = 'fade-in 0.5s';
        message3.addEventListener('animationend', () => {
          message3.style.animation = '';
        }, {once: true});
      } else {
        message3.style.animation = 'fade-out 0.5s';
        setTimeout(() => {
          message3.style.display = 'none';
          message3.style.animation = '';
        }, 500);
      }
    });

    var trigger4 = document.querySelector('.trigger4');
    var message4 = document.querySelector('.message4');
    
    trigger4.addEventListener('click', () => {
        var computedStyle = window.getComputedStyle(message4);
        var displayValue = computedStyle.getPropertyValue('display');
        
        if (displayValue === 'none') {
          message4.style.display = 'block';
          message4.style.animation = 'fade-in 0.5s';
          message4.addEventListener('animationend', () => {
            message4.style.animation = '';
          }, {once: true});
        } else {
          message4.style.animation = 'fade-out 0.5s';
          setTimeout(() => {
            message4.style.display = 'none';
            message4.style.animation = '';
          }, 500);
        }
      });

      var trigger5 = document.querySelector('.trigger5');
      var message5 = document.querySelector('.message5');
      
      trigger5.addEventListener('click', () => {
          var computedStyle = window.getComputedStyle(message5);
          var displayValue = computedStyle.getPropertyValue('display');
          
          if (displayValue === 'none') {
            message5.style.display = 'block';
            message5.style.animation = 'fade-in 0.5s';
            message5.addEventListener('animationend', () => {
              message5.style.animation = '';
            }, {once: true});
          } else {
            message5.style.animation = 'fade-out 0.5s';
            setTimeout(() => {
              message5.style.display = 'none';
              message5.style.animation = '';
            }, 500);
          }
        });


});
