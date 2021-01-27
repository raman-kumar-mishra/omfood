
window.onload = function() {


// ===  Navigation scroll  === //
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });



// ===   Animation on scroll  === //

    // $.fn.isInViewport = function() {
    //   var elementTop = $(this).offset().top + $(window).height() / 3;;
    //   var elementBottom = elementTop + $(this).outerHeight();
    //   var viewportTop = $(window).scrollTop();
    //   var viewportBottom = viewportTop + $(window).height();
    //   return elementBottom > viewportTop && elementTop < viewportBottom;
    // };
    

    // $(window).scroll(function() {
    //   $('.section').each(function() {
    //     //   var activeColor = $(this).attr('id');
    //     if ($(this).isInViewport()) {
    //         $(this).addClass('animated fadeIn');
    //     } else {
    //         // $('.section').removeClass('animated fadeIn');
    //     }
    //   });
    // });
    
    
    
// ===   Mobile Menu  === //
    var mobNav = document.querySelector('.main-nav');
    var navBtn = document.querySelector('.mobile-nav-icon');
    var NavIcon = document.querySelector('.mobile-nav-icon ion-icon');

    
    navBtn.addEventListener('click', function(){
        mobNav.classList.toggle("navigation");
        if(mobNav.classList.contains("navigation")){
            NavIcon.setAttribute('name',"close-outline");
        }else{
            NavIcon.setAttribute('name',"apps-outline");   
        }
    });
    


// ===   Animation on scroll  === //

    var viewport = (el,i) => {
        console.log(i)
        var elementTop = document.querySelectorAll(el)[i].offsetTop;
        console.log(elementTop)
        var viewportTop = document.documentElement.scrollTop;
        var viewportBottom = viewportTop + window.innerHeight / 2;
        return elementTop < viewportBottom
    }

    var classCount = document.querySelectorAll('.section')

    window.onscroll = () => {

        for (var i = 0;i < classCount.length; i++) {
            var sectionClass = `.${document.querySelectorAll('.section')[i].classList[0]}`;
            if(viewport(sectionClass,i)){
                document.querySelectorAll(sectionClass)[i].classList.add('animated','fadeIn')
            }
            else{
                document.querySelectorAll(sectionClass)[i].classList.remove('animated','fadeIn')
            }
        }


        // ===  Sticky menu  === //
        var nav = document.querySelector('nav');
        // console.log('loaded');

        if (window.scrollY >= 300) {
            nav.classList.add('sticky');
        }
        else {
            nav.classList.remove('sticky');
        }


        // ===  Scroll To Top  === //
        var nav = document.querySelector('.scrollToTop');

        if (window.scrollY >= 600) {
            nav.classList.add('show');
        }
        else {
            nav.classList.remove('show');
        }


    }



    
};
