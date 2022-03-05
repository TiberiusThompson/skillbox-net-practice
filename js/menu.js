window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#header__burger').addEventListener('click', function () {
        document.querySelector('#header-nav').classList.toggle('menu-swiched')
        document.querySelectorAll('header-nav').classList.toggle('menu-swiched')
    })
})

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#header__close').addEventListener('click', function () {
        document.querySelector('#header-nav').classList.toggle('menu-swiched')
        document.querySelectorAll('header-nav').classList.toggle('menu-swiched')
    })
})