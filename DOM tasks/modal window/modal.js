const openButton = document.querySelector('#openOverlay');
const body = document.body;

openButton.addEventListener('click', e => {
  const overlayElement = document.createElement('div');
  overlayElement.classList.add('overlay');
  overlayElement.addEventListener('click', e => {
    if(e.target == overlayElement){
      body.removeChild(overlayElement);
    }
  } )

  const containerElement = document.createElement('div');
  containerElement.classList.add('modal-container');

  const content = document.createElement('div');
  content.classList.add('content');
  content.innerHTML = 'Hello, world!';

  const closeBtn = document.createElement('a');
  closeBtn.classList.add('close');
  closeBtn.innerHTML = 'x';
  closeBtn.href='#' ;

  closeBtn.addEventListener('click', e => {
    e.preventDefault();
    body.removeChild(overlayElement);
  })

  containerElement.appendChild(closeBtn);
  containerElement.appendChild(content);
  overlayElement.appendChild(containerElement);
  body.appendChild(overlayElement);
});