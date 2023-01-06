// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// var player;
function onYouTubeIframeAPIReady() {
  // <div id = "player"></div>
   new YT.Player('player', {
    // height: '360',
    // width: '640',
    videoId: 'An6LvWQuj_8', // videoId는 유튜브에 있는 id를 말하는것이다 (최초 재생할 유튜브 영상 ID)
    playerVars:{ // 영상을 재생하기위한 여러가지 변수들
      autoplay : true, // 자동 재생 유무
      loop : true, // 반복 재생 유무
      playlist : 'An6LvWQuj_8', // 반복재생 유무가 true일 경우에는 반복재생할 유튜브 영상 ID목록을 다시 적어줘야하기 때문에
      // playlist 에 반복재생할 영상 id를 넣어주면된다
    },
    events:{
      onReady: function(event){
        event.target.mute() // 음소거

      }
    }
  });
}