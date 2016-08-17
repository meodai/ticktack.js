const d     = document;
const sec   = d.querySelector('.js-sec');
const min   = d.querySelector('.js-min');
const hour  = d.querySelector('.js-hour');
const titleProgress = d.querySelector('.js-progress--second');

function rotate(el, rotation) {
  el.setAttribute('transform', 'rotate('+ rotation +' 500 500)');
}

hljs.initHighlightingOnLoad();

let direction = 1;
ticktack.on('tick', digits => {
  //rotate(sec, digits.getMinute().progress * 360);
  let progress = digits.getMinute().progress;

  if( (progress < 0.1 && direction < 0) ) {
    direction *= -1;
    titleProgress.style.transformOrigin = `${(direction < 0 ? 0 : 1) * 100}% 0`;
  }

  d.documentElement.style.setProperty('--c-light', `hsl(${digits.getHour().progress * 360},100%,90%)`);

  titleProgress.style.transform = `scaleX(${progress})`;
});
