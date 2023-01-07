const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector('#to-top');

window.addEventListener("scroll",_.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지요소를 숨기기
      // badgeEl.style.display = "none";
      // gsap.to(요소 , 지속시간 , 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display : "none"
      });
      gsap.to('toTopEl', 0.2 ,{
        x:0
      });
    } else {
      //배지요소를 보이기
      // badgeEl.style.display = "block";
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display : "block"
      });
      gsap.to('toTopEl', 0.2 ,{
        x:100
      });
    }
  }, 300));

// _.throttle(사용할려한느 함수 , 몇초에 한번씩 실행을 할것인가 시간을 지정);


toTopEl.addEventListener('click',function(){
  gsap.to(window, 0.7,{
    scrollTo:0 //화면을 0px 지점으로 옮기겠다
  })
});


const fadeEls = document.querySelectorAll(".visual .fade-in");


fadeEls.forEach(function(fadeEl, index){ //여기서 중요한데 function(요소이름(가명) , 반복되는 수!!!! )
  //PHP랑 가르게 왜 앞에 배열이나 변수가 오지않나요? 라고 할수있는데 자세히보면 forEach를 사용할때 앞에 이미 배열 혹은 변수를 정의하고 사용하는것이기때문에 
  //다시 요소를 불러올 필요가 없다!
  //fadeEl이라는건 우리가 만든 요소의 이름이고 마음대로 정해도 된다 fadeEl은 fadeEls에 있는 요소이다!
  //index는 진짜 쉽게 생각해라! 숫자다!!! 0 부터 시작해서 모든 요소를 확인할때마다 1씩 증가하는 i++ 개념이라고 생각하면 된다!

  // gsap.to(요소 , 지속시간 , 옵션);
  gsap.to(fadeEl,1,{
    delay: ( index + 1 ) * .7, //0,7 1.4 2.1 2.7
    opacity: 1
    //여기를 살펴보자!  위에도 써놨듯이 gsqp.to메소드는 요소 , 지속시간 , 옵션이다(여기는 객체데이터)
    //요소는 forEach에서 사용하는 fadeEl을 사용할것이고 지속시간은 1초라고 한다 그리고 옵션을 보면
    // delay: 말 그대로 지연시키다이다 이 지연시키는게 없으면 모든 요소가 바로바로 튀어나오니까 에니메이션 효과가 의미가 없을수있다
    // delay : 안에 (index+1) * 0.7 을 보면 처음에 index는 0 이기 떄문에 처음 요소는 0.7초뒤에 그 뒤에는 index가 1 증가하므로 1.4초뒤에 이런식으로 딜레이시키는 알고리즘이다!
  });
});


// new Swiper(선택자 , 옵션)
new Swiper(".notice-line .swiper-container" , {
  direction : "vertical",
  autoplay: true,
  loop:true,
});

new Swiper(".promotion .swiper-container" , {
  // direction : "horizontal" 기본적으로 direction 은 horizontal 이라는 속성값을 갖고 있기떄문에 정의 안해도 된다
  slidesPerView : 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween : 10, //슬라이드 사이 여백
  centeredSlides : true, // 1번 슬라이드가 가운데 보이기
  loop:true ,
  autoplay : {
    delay : 4000
  },
  pagination :{
    el : ".promotion .swiper-pagination",
    clickable : true, //사용자의 페이지 번호 요소 제어

  },
  navigation:{
    prevEl : ".promotion .swiper-prev",
    nextEl : ".promotion .swiper-next"
  }

});

new Swiper('.awards .swiper-container' , {
  autoplay:true,
  loop:true,
  spaceBetween:30,
  slidesPerView:5,
  navigation:{
    prevEl: '.awards .swiper-prew',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector(".promotion");
// const변수에 HTML에 원래 있는 promotion의 도큐멘트를 넣는다
//간단히 생각하면 여기서 만든 변수를 HTML에 있는 속석을 가져오는 것이다

const promotionToggleBtn = document.querySelector(".toggle-promotion");
// 위와 마찬가지로 toggle-promotion의 속성을 가져옴

let isHidePromotion = false;
// 새로운 함수를 만들어서 true , flase로 설정


promotionToggleBtn.addEventListener("click",function(){
  // addEventListener을 써서 클릭을 했을경우 밑에 있는 함수를 실행해주세요~! 라는 뜻
  isHidePromotion = !isHidePromotion;
  // isHIdePromotion이 어떤것이든 그 반대값을 넣어달라는 뜻!
  if(isHidePromotion){
    //숨김 처리!
    promotionEl.classList.add("hide");
    console.log("hide On")
    //hide는 숨긴다는 처리가 있기 때문에 클래스에 hide를 추가하게 되면 
    //그 클래스를 숨겨줌
  }else{
    // 보임 처리!
    promotionEl.classList.remove("hide");
    console.log("hide OFF")
    //remove즉 삭제한다는 뜻이다
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector , delay , size){
  // gsap.to(요소 , 시간 , 옵션);
  gsap.to(selector, random(1.5 , 2.5), { // selector 선택자 , random 애니메이션 동작시간
    // 옵션
    y: size,
    repeat: -1,
    yoyo:true,
    ease: Power1.easeInOut,
    delay:random(0 , delay)
  });

}

floatingObject('.floating1', 1 , 15);
floatingObject('.floating2', .5 , 15);
floatingObject('.floating3', 1.5 , 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,//보여짐의 여부를 감시할 요소를 지정
      triggerHook: .8 //
    })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

