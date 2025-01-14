$(function () {
});

/* 헤더 */
let subMenu = $(".depth2")
let mainMenu = $(".gnb .gnb_tit")
$(".depth2, .depth2_bg").hide();
$(mainMenu).mouseenter(function () {
  $(this).find(subMenu).stop().fadeIn();
  $("#header").addClass("active");
  $("#header").addClass("active");
  $(".depth2_bg_w").stop().fadeIn();
  $(".depth2_bg_b").stop().fadeIn();


});
$(mainMenu).mouseleave(function () {
  $(this).find(subMenu).stop().fadeOut();
  $("#header").removeClass("active");
  $("#header").removeClass("active");
  $(".depth2_bg_w").stop().fadeOut();
  $(".depth2_bg_b").stop().fadeOut();
});



/* 햄버거메뉴 */
$(".mgnb_wrap").hide();
$(".ham").click(function(){
  $(".mgnb_wrap").fadeIn();
});
$(".mgnb_close").click(function(){
  $(".mgnb_wrap").fadeOut();
});

$(".mgnb .mgnb_tit").click(function(){
  $(this).find(".mdepth2").slideDown(500);
});
$(".mgnb .mgnb_tit").mouseleave(function(){
  $(this).find(".mdepth2").slideUp(600);
});



/* 섹션 브랜드 */
$(".brand ul li").mouseenter(function () {
  $(this).show().siblings().css({ "opacity": "0" });
});
$(".brand ul li").mouseleave(function () {
  $(this).show().siblings().css({ "opacity": "1" });
});

$(".brand ul li:first-child").mouseenter(function () {
  $(".brand video").attr("src", "video/brand_communities.mp4");
});
$(".brand ul li:nth-child(2)").mouseenter(function () {
  $(".brand video").attr("src", "video/brand_climate.mp4");
});
$(".brand ul li:last-child").mouseenter(function () {
  $(".brand video").attr("src", "video/brand_circularity.mp4");
});
$(".brand ul li").mouseleave(function () {
  $(".brand video").attr("src", "video/brand_coffeebeans.mp4");
});


/* 섹션01-메인비주얼 스와이퍼 */

const mv = new Swiper(".mv", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,

  },
  loop: true,
  speed: 4000,
  fadeEffect: {
    crossFade: true
  },/* 확인필요 */

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});


/* 섹션02-네스프레소타임 스와이퍼 -*/
const shorts = new Swiper(".shorts", {
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 3000,
  slidesPerView: 2,
  centeredSlides: true,
   spaceBetween: 30,


  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
  },

  on: {
    slideChangeTransitionStart: function () {
      // 모든 비디오 일시 정지 및 시간 초기화
      document.querySelectorAll('.swiper-slide video').forEach(video => {
        video.pause();
        video.currentTime = 0;
      });
    },
    slideChangeTransitionEnd: function () {
      // 현재 활성화된 슬라이드의 비디오 재생
      const activeSlide = this.slides[this.activeIndex];
      const activeVideo = activeSlide.querySelector('video');
      if (activeVideo) {
        activeVideo.play();
      }
    }
  }
});

/*  섹션03 - 리미티드 스와이퍼 */
const limit_img = new Swiper(".limit_img", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 3000,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

});

/*  섹션04 - 프로모션 스와이퍼 */
const pro_box = new Swiper(".pro_box", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 3000,
  slidesPerView: 2,
  spaceBetween: 20,
  centeredSlides: true,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
  breakpoints: {
    1000: {
      slidesPerView: 4,
    },
  },

});
