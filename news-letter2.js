const displayEmail = JSON.parse(localStorage.getItem('emailInput'))
const display = document.querySelector('.js-mail')
document.querySelector('.js-message')
    .addEventListener('click', ()=> {
        window.location.href="news-letter.html"
    })

document.body.addEventListener('keydown', (event)=> {
    if (event.key === 'Enter'){
        window.location.href="news-letter.html"
    }
})


display.innerHTML = displayEmail

