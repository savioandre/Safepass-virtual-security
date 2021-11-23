// Card
const check = document.querySelector('.in_swi')
const year = document.querySelector('.year')
const month = document.querySelector('.month')
check.addEventListener('click', () => {

    if (check.checked == false) {
        const alter = document.querySelector('.one_')
        const main = `<div>R$ 9,99</div>`
        alter.innerHTML = main

        const alterTwo = document.querySelector('.two_')
        const mainTwo = `<div>R$ 14,99</div>`
        alterTwo.innerHTML = mainTwo

        month.style.opacity = "0.5"
        year.style.opacity = "1"
    }
    if (check.checked == true) {
        const alter = document.querySelector('.one_')
        const main = `<div>R$ 7,99</div>`
        alter.innerHTML = main

        const alterTwo = document.querySelector('.two_')
        const mainTwo = `<div>R$ 12,99</div>`
        alterTwo.innerHTML = mainTwo

        month.style.opacity = "1"
        year.style.opacity = "0.5"

    }
    return check

});

const teste = document.querySelector('.send_news')
const email = document.querySelector('#email_news')


teste.addEventListener('click', () => {
    if (email.value.length <= 5) {
        document.querySelector('.noConfirm').classList.add('active')
        document.querySelector('.confirm').classList.remove('active')

    } if (email.value.indexOf('@') == -1
        || email.value.indexOf('.') == -1) {
        const alterName = document.querySelector('.text_alter')
        const selec = `<p>E-mail Inválido</p>`
        email.style.border = "1px solid red"
        alterName.innerHTML = selec
//#ffe6e6
    } else {
        document.querySelector('.confirm').classList.add('active')
        document.querySelector('.noConfirm').classList.remove('active')
        email.style.border = "1px solid #4caf50"

    }

});