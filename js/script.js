let menu = document.getElementById('menu')
let option = document.getElementById('options')
let opt = document.querySelectorAll('#options li');

function ShowMenu() {
    menu.classList.toggle('is-active')
    option.classList.toggle('is-active')
}

menu.addEventListener('click', ShowMenu)