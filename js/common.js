const searchEl = document.querySelector(".search");
// documnet는 HTML에 기본 경로이기때문에 처음에는 document안에 있는 sraech를 찾아라 라는 뜻!
const searchInputEl = searchEl.querySelector("input");
// 여기서 중요한점은 document말고 searchEL안에 있는 input을 찾아라 라는 뜻이된다!

// 앞에 click 을 하게되는 이벤트가 되면 뒤에 있는 function의 핸들러를 사용하겠다는 뜻!
searchEl.addEventListener("click", function () {
  // Logic..
  searchInputEl.focus();
});

// 앞에있는 focus를 할것이고 뒤에 있는 function으로 핸들링한다는 뜻
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색"); //set 지정한다 Attribute HTMl속성을 지정하겠다
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", ""); //set 지정한다 Attribute HTMl속성을 지정하겠다
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2022년도라는 숫자가 나온다
// thisYear이라는 클래스에 new Date() 라는 함수를 사용해서 
// 현재의 날짜를 넣어줄수가 있다
// const로 변수를 만든후에 그 변수에 new Date() 함수와 getFullYear을 사용해서 현재의 연도를 표시하게 해줄수있다