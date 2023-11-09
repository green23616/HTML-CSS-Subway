$("document").ready(function () {

    
   
  $(".header .nav ul li").mouseover(function(){
      let nav_list = $(this).index();
      $(".header .nav ul li").removeClass("on").eq(nav_list).addClass("on")
  }).mouseout(function(){
      $(".header .nav ul li").removeClass("on")
  })

  
  $(".header .nav").hover(function () {
      $(".header .submenu").addClass("on");
      $(".header .submenu ul li").addClass("on");
  }, function () {
      $(".header .submenu").removeClass("on");
      $(".header .submenu ul li").removeClass("on");
  })
  $(".header .submenu, .header .submenu ul li").hover(function(){
      $(".header .submenu").addClass("on");
      $(".header .submenu ul li").addClass("on") 
  }, function(){
      $(".header .submenu").removeClass("on");
      $(".header .submenu ul li").removeClass("on");
  })
  $(".header .submenu ul").mouseover(function(){
      let sub_list = $(this).index();
      $(".header .nav ul li").removeClass("on").eq(sub_list).addClass("on")
  }).mouseout(function(){
      $(".header .nav ul li").removeClass("on")
  })

  $(".content-bottom .content-slide .indicator ul li").eq(0).addClass("on")
  $(".content-bottom .content-slide .indicator ul li").click(function(){
      let i = $(this).index();
      $(".content-bottom .content-slide .indicator ul li").removeClass("on").eq(i).addClass("on")
      $(".content-bottom .content-slide > ul").stop().animate({
          marginLeft: -100 * i + "%"
      }, 500)
  })
      
      let prev_index = 0;
      $(".subway-menu .menu-list ul li").eq(0).addClass("on")
      $(".subway-menu .menu-list ul li").click(function(e){
          e.preventDefault();
          let top_index = $(this).index();
          if(prev_index == top_index){
              return;
          }
          $(".subway-menu .menu-list ul li").removeClass("on").eq(top_index).addClass("on")
          $(".subway-menu .menu-content .menu-content-wrap").eq(prev_index).fadeOut(500);
          $(".subway-menu .menu-content .menu-content-wrap").eq(top_index).find(".menu-wrap .menu-area").css("left", "0")
          $(".subway-menu .menu-content .menu-content-wrap").eq(top_index).show().stop().css("margin-left", "100%").animate({
              marginLeft: 0
          }, 500)
          prev_index = top_index;

      })
      let menu_time = false;

      $(".subway-menu .menu-content .arrow a").click(function(e){
          e.preventDefault();
          let arrow = $(".subway-menu .menu-content .arrow a").index(this)
          if(menu_time == true){
              return;
          }
          setTimeout(() => {
              menu_time = false;
          }, 1000);
          menu_time = true;

          if(arrow == 6 || arrow == 7){
              return;
          }
          
          if(arrow == 0 || arrow == 2 || arrow == 4 ){
              $(".subway-menu .menu-content .menu-content-wrap .menu-wrap .menu-area").stop().animate({
                  left: "0%"
              }, 500)
          }else{
              $(".subway-menu .menu-content .menu-content-wrap .menu-wrap .menu-area").stop().animate({
                  left: "-100%"
              }, 500)
          }
      })

  $(".subway-menu .menu-content .menu-content-wrap .menu-wrap .menu-area .menu-box").mouseover(function(){
  $(".subway-menu .menu-content .menu-content-wrap .menu-wrap .menu-area .menu-box:not(:nth-child(1))").css("margin-left", "0").css("width", "260px");
  $(this).css("width", "350px")
  }).mouseout(function(){
      $(".subway-menu .menu-content .menu-content-wrap .menu-wrap .menu-area .menu-box").css("margin-left", "30px").css("width", "260px");
  })

  $(".subway-menu .menu-content .menu-content-wrap .menu-wrap .menu-area .menu-box").mouseover(function(){
      let i = $(this).index();
      if(i > 3){
          $(".subway-menu .menu-content .menu-content-wrap .menu-wrap .menu-area .menu-box").css("margin-left", "30px")
          $(this).css("margin-left", "0").css("width", "350px")
      }
  })

  let prev_indi = 0;
  let i = 0;
  $(".slide .indicator ul li a").eq(0).addClass("on")

  $(".slide > ul").append($(".slide > ul > li").clone())
  $(".slide > ul").css("width", $(".slide > ul > li").length * 100 + "%")

  
  let slide_width = $(".slide > ul").css("width", $(".slide > ul > li").length * 100 + "%")


      $(".slide .indicator ul li").click(function(e){
          e.preventDefault();
           i = $(this).index();
          if(prev_indi == i){
              return;
          }
          
          $(".slide .indicator ul li a").removeClass("on").eq(i).addClass("on");
          $(".slide ul li").stop().animate({
              left: -12.5 * i + "%"
          }, 1000)
          prev_indi = i;

      })

      let timer = setInterval(auto_play, 3000);
      function auto_play(){
          i++;

          
          
          if(i > $(".slide .indicator ul li").length){
              
              i = 1;
          }
          
          $(".slide ul li").stop().animate({
              left: -12.5 * i + "%"
          }, 1000)
          
          if(i == $(".slide .indicator ul li").length){
              setTimeout(() => {
                  $(".slide ul li").delay(10).css("left", "0")    
              }, 1200);
              $(".slide .indicator ul li a").removeClass("on").eq(0).addClass("on")
          }else{
              $(".slide .indicator ul li a").removeClass("on").eq(i).addClass("on")
          }
      }

      $(".slide .indicator ul li").mouseover(function(){
          clearInterval(timer)
      })
      $(".slide .indicator ul li").mouseout(function(){
          clearInterval(timer)
          timer = setInterval(auto_play, 3000);
          
      })

})