var d     = document;
var sec   = d.querySelector('.js-sec');
var min   = d.querySelector('.js-min');
var hour  = d.querySelector('.js-hour');

function rotate(el, rotation) {
  //el.setAttribute('transform', 'rotate('+ rotation +' 500 500)');
  el.style.transform = 'rotate(' + rotation +'deg)';
}

hljs.initHighlightingOnLoad();

ticktack.on('tick', function(digits) {
  rotate(sec, digits.getMinute().progress * 360);
  d.documentElement.style.setProperty('--c-light', 'hsl(' + digits.getHour().progress * 360 + ',100%,90%)');
});
ticktack.on('minute', function(digits) {
  rotate(min, digits.getHour().progress * 360);
})
ticktack.on('hour', function(digits) {
  rotate(hour, digits.getDay().progress * 720);
});

setTimeout(function() {
  d.body.classList.add('show');
}, 2000);

function noAnimation () {
  if ( window.scrollY > 500 ) {
    d.body.classList.remove('anim')
  }
}
noAnimation();

var timer;

window.addEventListener('scroll', function(){
  clearTimeout(timer);
  timer = setTimeout(function(){
    noAnimation();
  },16);
});
