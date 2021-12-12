const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const list = document.querySelector('#list');
const computedStyles = window.getComputedStyle(list);
const items = document.querySelectorAll('.slider__item');




const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth) ;
const preShownItems = 150 / step;
const maxRight = (items.length - preShownItems) * step;
let currentRight = 0;

list.style.right = currentRight ;

console.log(list.style.right);

rightBtn.addEventListener('click', e => {
  e.preventDefault();

  if(currentRight < maxRight) {

    currentRight +=step;
    list.style.right = currentRight + 'px';

  };


});


leftBtn.addEventListener('click', e => {
  e.preventDefault();

  if(currentRight > minRight) {

    currentRight -=step;
    list.style.right = currentRight + 'px';

  };


});