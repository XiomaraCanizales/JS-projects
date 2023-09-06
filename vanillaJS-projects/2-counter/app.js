// set initial count
let count = 0;

// select html elements
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(item) {
    item.addEventListener('click', function(e) {
        const btnClass = e.currentTarget.classList;
        if (btnClass.contains('decrease')) {
            count--;
        }
        else if (btnClass.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = 'black';
        }
        value.textContent = count;
    })
})