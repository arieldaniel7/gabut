window.onload = function() {
    let nameInput = document.getElementById('nameInput');
    let frontPage = document.getElementById('firstPage');
    let secondPage = document.getElementById('secondPage');
    let welcome = document.getElementById('welcome')

    frontPage.style.display = 'block';
    secondPage.style.display = 'none';

    let submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', submit)
    function submit(){
       localStorage.setItem('username', nameInput.value);
       if(nameInput.value == true){
        frontPage.style.display = 'none';
        secondPage.style.display = 'block'
       }
       localStorage.getItem('username', nameInput.value)
    }
}