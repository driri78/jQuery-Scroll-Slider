$(".back-to-top").on("click", function () {
  $("html, body").animate({ scrollTop: 0 });
});
// js + html 설계 <a herf="#"> + css
// js 또다른 방법 => scrollTo

$(".page-header");

// 헤더 하나로 붙였다 뗐다가 하는 작업
// $(window).on("scroll", function () {
//   // console.log($(this).scrollTop());
//   // console.log(scrollY);
//   if (scrollY > 465) {
//     $(".page-header")
//       .css({ position: "fixed", top: "-100px" })
//       .animate({ top: 0 }, 1000);
//   }
//   if (scrollY <= 465) {
//     $(".page-header").css({
//       position: "absolute",
//       top: "465px",
//       transition: "none",
//     });
//   }
// });

//header를 2개 사용해서 하나는 위에 숨겨두었다가 꺼내기
$(window).on("scroll", function () {
  // console.log($(this).scrollTop());
  // console.log(scrollY);
  if (scrollY > 465) {
    // console.log("465 넘음");
    // animate()는 큐저장 방식으로 실행된다 => scrollY > 465 넘을때마다 애니메이션이 실행 다 실행됨
    $(".sticky").stop().animate({ top: 0 }, 50);
  }
  if (scrollY <= 465) {
    // console.log("465 안넘음");
    $(".sticky").stop().animate(
      {
        top: "-200px",
      },
      50
    );
  }
});

// js getclientrect
// 최상위부모로부터의 위치
console.log($(".hero-header").offset());
console.log($(".page-header.sticky").offset());

// 부모로부터의 위치
console.log($(".hero-header").position());
console.log($(".page-header.sticky").position());

// scroll spy
// 콘텐츠의 위치에 따라 메뉴 표시하기

// html, body {scroll-behavior : smooth}
$(".primary-nav a").on("click", function (event) {
  event.preventDefault();

  //   console.log($(this).attr("href"));
  const id = $(this).attr("href");
  //   console.log($(id).offset().top);

  $("html, body").animate({ scrollTop: $(id).offset().top }, 400);
});

$(window).on("scroll", function () {
  //   const top = $(this).scrollTop();
  const top = scrollY;

  // $('p').forEach()
  $(".primary-nav li a").css("color", "white");
  $("p").each(function (i) {
    console.log(i);
    const tag = $(this);
    // console.log(tag.offset().top);
    if (top > tag.offset().top) {
      $(".primary-nav li").eq(i).find("a").css("color", "red");
    }
  });
});
