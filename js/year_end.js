var fullPage = new PageSlider({
  pages: $('.page-wrap .page'),
  onchange: function () {
    if(this.index === 0){
      $(".brush").addClass("cute-brush");
      $(".year_end").addClass("fadeInRight");
      $(".sccisors").addClass("fadeInLeft");
      $(".count-list").addClass("fadeInRight");
      $(".year_end_list").addClass("bounceInUp");
      $(".blue-attention").addClass("blue-attention-animated");
    }else {
      $(".brush").removeClass("cute-brush");
      $(".year_end").removeClass("fadeInRight");
      $(".sccisors").removeClass("fadeInLeft");
      $(".count-list").removeClass("fadeInRight");
      $(".year_end_list").removeClass("bounceInUp");
      $(".blue-attention").removeClass("blue-attention-animated");
    }
  }
});

window.onload = function(){
  $('.loading').remove();
}
