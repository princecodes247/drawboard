
const way = document.getElementById('way');
document.addEventListener("touchend", a => {
  bubbleMaker(a.changedTouches[0].pageX, a.changedTouches[0].pageY);
});

document.addEventListener("touchmove", a => {
  bubbleMaker(a.changedTouches[0].pageX, a.changedTouches[0].pageY);
});
document.addEventListener("mousemove", a => {
  bubbleMaker(a.changedTouches[0].pageX, a.changedTouches[0].pageY);
});
document.addEventListener("mouseenter", a => {
  bubbleMaker(a.changedTouches[0].pageX, a.changedTouches[0].pageY);
});
function bubbleMaker(x, y) {
  // body...
  const bubble = document.createElement("div");
  way.appendChild(bubble);
  bubble.className = 'bubble';
  
  bubble.setAttribute("style", "top: "+ y + "px;"+ "left: "+ x + "px;")
  
  /*----- We can also do a
  
  bubble.style.top = y +"px";
  bubble.style.left = x +"px"; */
  bubble.addEventListener('animationend', function(){
    way.removeChild(this);
  })
}
