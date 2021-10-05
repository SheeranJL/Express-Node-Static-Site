
'use strict';

const body = document.querySelector('body');
let headerBtnClicked = false;

document.querySelector('#menu-icon').addEventListener('click', e => {
  !headerBtnClicked ? body.style.transform = 'translateX(300px)' : body.style.transform = 'translateX(0px)';
  return headerBtnClicked = !headerBtnClicked;
});

let buttonLinks = document.querySelectorAll('.btn-link');
let aboutMe = document.querySelector('.about-me');
let link = document.querySelector('.link');

Array.from(buttonLinks).forEach((button) => {
  button.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'black';
  })
  button.addEventListener('mouseout', (e) => {
    e.target.style.backgroundColor = '';
  })
})

aboutMe.addEventListener('mouseover', (e) => {
  e.target.style.color = 'white'
})

aboutMe.addEventListener('mouseout', (e) => {
  e.target.style.color = ''
})

link.addEventListener('mouseover', (e) => {
  e.target.style.color = 'grey'
})

link.addEventListener('mouseout', (e) => {
  e.target.style.color = ''
})
