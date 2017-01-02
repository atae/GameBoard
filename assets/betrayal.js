

document.addEventListener('DOMContentLoaded', () => {
  let target = document.getElementsByClassName('board')[0]
  console.log(target.className);

  var board = "./assets/Betrayal.mp4";
  // let source = document.getElementsByClassName('vidsrc')[0]
  var videoPlayer = document.getElementById('videoPlayer');
  var backVideo = document.getElementById('videoPlayerBack')
  videoPlayer.onended = function(){
    // videoPlayer.src = board;
    // videoPlayer.play()
    // window.setTimeout(() => {videoPlayer.setAttribute('loop','')}, 1000)
    videoPlayer.className = "hidden"
  }

  document.addEventListener('keydown', (e) => {
    let key = e.key
    videoPlayer.removeAttribute('loop')
    // console.log(key);
    let change = false
    switch(e.key) {
      case 'i':
        videoPlayer.className = ""
        videoPlayer.src = './assets/B_Item.mp4'
        videoPlayer.play();
        break;
      case 'e':
        videoPlayer.className = ""
        videoPlayer.src = './assets/B_Event.mp4'
        videoPlayer.play();
        break;
      case 'o':
        videoPlayer.className = ""
        videoPlayer.src = './assets/B_Omen.mp4'
        videoPlayer.play();
        break;
      case 'h':
        videoPlayer.className = ""
        board = "./assets/B_Haunt.mp4"
        videoPlayer.src = board;
        videoPlayer.play();
        window.setTimeout(()=>{backVideo.src = board;  backVideo.play();},4500)
        break;
      case 'x' :
        videoPlayer.className = ""
        board = "./assets/Betrayal.mp4"
        window.setTimeout(()=>{backVideo.src = board;  backVideo.play();},4000)
        videoPlayer.src = "./assets/Betrayal_Start.mp4";
        videoPlayer.play();
        break;
      default:
    }

    // let newSource = (target.className.includes("explore")) ? "board omen" : "board explore"
    // console.log(newSource);
    // target.className = newSource
  })
})
