const firstPage = document.getElementById('firstPage');
const secondPage = document.getElementById('secondPage');
let submitBtn = document.getElementById('submitBtn');
let nameInput = document.getElementById('nameInput');

firstPage.style.display = 'block';
secondPage.style.display = 'none'

function submit(){
    localStorage.setItem('name', nameInput.value);
    alert('Hi ' + nameInput.value + ' Welcome To Ariel Playground')
    firstPage.style.display = 'none'
    secondPage.style.display = 'block'
}

if(localStorage.getItem('name')){
    firstPage.style.display = 'none'
    secondPage.style.display = 'block'
}


