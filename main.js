const d     = document;
const sec   = d.querySelector('.js-sec');
const min   = d.querySelector('.js-min');
const hour  = d.querySelector('.js-hour');

function rotate(el, rotation) {
  //el.setAttribute('transform', 'rotate('+ rotation +' 500 500)');
  el.style.transform = `rotate(${rotation}deg)`;
}

hljs.initHighlightingOnLoad();

ticktack.on('tick', digits => {
  rotate(sec, digits.getMinute().progress * 360);
  d.documentElement.style.setProperty('--c-light', `hsl(${digits.getHour().progress * 360},100%,90%)`);
});
ticktack.on('minute', digits => {
  rotate(min, digits.getHour().progress * 360);
})
ticktack.on('hour', digits => {
  rotate(hour, digits.getDay().progress * 720);
});
