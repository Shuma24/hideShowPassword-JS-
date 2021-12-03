const inputHtml = document.querySelector('input');
const buttonHtml = document.querySelector('button');
const bodyHtml = document.querySelector('body');

function showInputPassword () {
  inputHtml.type = 'text';
  buttonHtml.innerText = 'Hide';
  buttonHtml.addEventListener('mouseout', hideInputPassword);
  bodyHtml.addEventListener('mouseup', hideInputPassword);
};

function hideInputPassword () {
  inputHtml.type = 'password';
  buttonHtml.innerText = 'Show'; 
  buttonHtml.removeEventListener('mouseout', hideInputPassword)
  bodyHtml.removeEventListener('mouseup', hideInputPassword);
};

buttonHtml.addEventListener('mousedown', showInputPassword);