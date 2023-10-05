const displayEmail = JSON.parse(localStorage.getItem('emailInput'))
const display = document.querySelector('.js-mail')
document.querySelector('.js-message').addEventListener('click', () => {
  window.location.href = 'index.html'
})

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    window.location.href = 'index.html'
  }
})

display.innerHTML = displayEmail
