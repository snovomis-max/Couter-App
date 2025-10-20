const line = document.querySelector('.line');
const incrementBtn = document.querySelector('.btn1');
const decrementBtn = document.querySelector('.btn2');
const resetBtn = document.querySelector('.btn3');

let i = 0;

incrementBtn.addEventListener('click', () => {
    i++;
    line.textContent = i;
});

decrementBtn.addEventListener('click', () => {
    i--;
    line.textContent = i;
});

resetBtn.addEventListener('click', () => {
    i = 0;
    line.textContent = i;
});