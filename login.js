const loginCheck = document.querySelector('.bt_login')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const localInner = document.querySelector('.email_login')
const tryRd = document.querySelector('.smallTry')


loginCheck.addEventListener('click', () => {
    if (email.value.length <= 5
        || email.value.indexOf('@') == -1
        || email.value.indexOf('.') == -1) {
        email.style.border = "1px solid red"
        email.style.color = "red"

        email.classList.add('rd_')
    } else {
        email.style.border = "1px solid #4caf50"
        email.style.color = "#4caf50"

        return ok;
    }
    
});

loginCheck.addEventListener('click', () => {
    if (password.value.length <= 5) {
        password.style.border = "1px solid red"
        password.style.color = "red"

        password.classList.add('rd_')

    } else {
        password.style.border = "1px solid #4caf50"
        password.style.color = "#4caf50"

        return ok;
    }

});

function ok() {
    window.location.href = './login.html'
}

document.querySelector('form')
    .addEventListener('submit', event => {
        event.preventDefault()
    })

const ad = document.querySelector('.forgot')
ad.addEventListener('mouseover', () => {
    document.querySelector('.fas')
        .classList.add('bhs')
})

ad.addEventListener('mouseout', () => {
    document.querySelector('.fas')
        .classList.remove('bhs')
})