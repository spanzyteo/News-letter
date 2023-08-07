function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailPattern.test(email);
}

function subscribeNewsLetter() {
    const emailInput = document.querySelector('.js-input').value;
    const isValidEmail = validateEmail(emailInput);
    localStorage.setItem('emailInput', JSON.stringify(emailInput))
    if (isValidEmail) {
        window.location.href="news-letter2.html"
    }else{
        document.querySelector('.js-wrong-email')
            .classList.add('wrong-email-visible')
        document.querySelector('.js-input')
            .classList.add('input-visible')
        errorStates()
    }
    
}
const subscribeButton = document.querySelector('.js-subscribe-button')
 subscribeButton.addEventListener('click', () => {
    subscribeNewsLetter()
    
})
function errorStates() {
    document.querySelector('.js-input')
    .addEventListener('click', () => {
        document.querySelector('.js-input')
            .classList.remove('input-visible')
        document.querySelector('.js-input')
            .value = ''
})    
}

document.body.addEventListener('keydown', (event)=> {
        if (event.key === 'Enter'){
            subscribeNewsLetter()
        }
})

