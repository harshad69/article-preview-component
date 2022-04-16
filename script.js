const div1 = document.querySelector(".div-1");
const div2 = document.querySelector('.div-2');

function showDiv() {
    div2.classList.remove('no-display');
    console.log('hi');
}

function hideDiv() {
    div2.classList.add('no-display');
}

// div1.addEventListener('mouseover', showDiv);

div1.onmouseover = showDiv;
div1.onmouseout = hideDiv;
