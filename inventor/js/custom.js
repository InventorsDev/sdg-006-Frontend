$(document).ready(function() {
    $(window).scroll(function(){
      if(this.scrollY > 150)
        $(".navbar-page").addClass("sticky");
      else
        $(".navbar-page").removeClass("sticky");
    });

    $('.menu-toggler').click(function(){
      $(this).toggleClass("active");
      $(".navbar-menu").toggleClass("active");
    });
  });