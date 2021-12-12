const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const list = document.querySelector('#list');





const loop = (direction,e) => {
  e.preventDefault();

  if(direction == 'rightBtn') {
    list.appendChild(list.firstElementChild);
    
  } else {
    list.insertBefore(list.lastElementChild, list.firstElementChild);

  };
};


rightBtn.addEventListener('click', e => {
  loop('rightBtn', e)
});


leftBtn.addEventListener('click', e => {
  loop(leftBtn, e)
});