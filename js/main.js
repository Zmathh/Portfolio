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





        if(this.scrollY > 900){
            $('.ProjetSAE .title').addClass("animate__animated animate__fadeInLeft");
        }else{
            $('.about .title').addClass("");
        }
        if(this.scrollY > 1500){
            $('.skills .title').addClass("animate__animated animate__fadeInRight");
        }else{
            $('.about .title').addClass("");
        }
        if(this.scrollY > 1900){
            $('.projetsplus .title').addClass("animate__animated animate__fadeInLeft");
        }else{
            $('.about .title').addClass("");
        }
        if(this.scrollY > 2500){
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






    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Etudiant en GEII", "Etudiant", "Etudiant à Chartres", "21 ans"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Etudiant en GEII", "Etudiant", "Etudiant à Chartres", "21 ans" ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-3", {
        strings: ["mathis", "", "", "moi" ],
        typeSpeed: 140,
        backSpeed: 160,
        loop: false
    });

    var typed = new Typed(".typing-4", {
        strings: ["Contactez moi","Contactez moi","Contactez moi","","Lets get in touch" ],
        typeSpeed: 80,
        backSpeed: 140,
        loop: false
    });

    

   


    // owl carousel script
    $('.saecontent').owlCarousel({
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
            700:{
                items: 2,
                nav: false
            },
            1100:{
                items: 3,
                nav: false
            },
        }
});

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


});
