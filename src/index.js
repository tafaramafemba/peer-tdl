import './style.css';

import Awesome from './modules/classAwesome.js';

const enter = document.querySelector('.enter');
const awesome = new Awesome();
const clear = document.querySelector('.clear-btn');
const error = document.querySelector('.error-message');


const addListenerOnFocus = (chores) => {
  chores.addEventListener('focusout', (e) => {
    const item = e.target.value;
    awesome.updateInput(item, e.path[0].defaultValue);
    awesome.local();
  });
};

// Main load
document.addEventListener('DOMContentLoaded', () => {
  awesome.returnInfo();
  const chores = document.querySelectorAll('.label-input');
  chores.forEach((chore) => addListenerOnFocus(chore));
});

enter.addEventListener('click', (e) => {
  e.preventDefault();
  const chore = document.getElementById('myInput').value;
  if (!chore) {
    error.style.color = 'red';
    error.style.gridColumn = '2/3';
    error.textContent = 'Missing Information';
  } else {
    error.style.color = 'green';
    error.style.gridColumn = '2/3';
    error.textContent = 'Task added successfully';
    awesome.addRecord(chore);
    awesome.local();
    document.getElementById('myInput').value = '';
    error.classList.remove('hidden');
  }
});

clear.addEventListener('click', (e) => {
  e.preventDefault();
  awesome.clearCompleted();
});
