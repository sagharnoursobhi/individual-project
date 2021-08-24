

  $(document).ready(function() {
      var $header = $("header");
      var $sticky = $header.before($header.clone().addClass("sticky"));
      $(window).on("scroll", ()=>{
        var scrollFromTop = $(window).scrollTop();
        $("body").toggleClass("myscroll", scrollFromTop > 350);
      });
      //masonry grid library
      $('.grid').masonry({
          itemSelector:'.grid-item',
          columnWidth:50,
          fitWidth: true,
          gutter:3,//this is for horizantal align and margin-bottom can be used for vertical align
          originTop:true
      })
      //smooth scroll
      $('.menu li a[href^="#"]').on('click' , function(e){
        e.preventDefault();
        var target = $(this.hash);
        if(target.length){
          $('html , body').stop().animate({
            scrollTop: target.offset().top -60// will show the section exactly from its header
          } , 1000);
        }
      });

      //responsive hamburger menu
      var body = $('body')
      var mainOverlay = $('.js-main-overlay');
      var menuTrigger = $('.js-menu-trigger');
      menuTrigger.on('click' , ()=>{
        body.addClass('menu-is-active');
      })
      $('.menu li a').on('click' , ()=>{
        $('body').removeClass('menu-is-active');
      })

      mainOverlay.on('click' , ()=>{
        body.removeClass('menu-is-active');
      })
      
   });
  

  
  




