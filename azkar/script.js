let count = 0;
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incriment');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');


incrementBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});
decreaseBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        counterDisplay.textContent = count;
    }
});
resetBtn.addEventListener('click', () => {
    count = 0;
    counterDisplay.textContent = count;
});