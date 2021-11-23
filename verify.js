const btnSubmit = document.querySelector('.bt_login')
const checkSend = document.querySelector('.ch')

const firstName = document.querySelector('#in_v.name')
const lastName = document.querySelector('#in_v.last_name')
const company = document.querySelector('#in_v.company')
const email = document.querySelector('#in_v.email')
const pass = document.querySelector('#in_v.password')

firstName.addEventListener('keyup', () => {
    if(firstName.value.length <= 4){
		firstName.style.border = "1px solid red"
        firstName.classList.add('rd_')

		return erro()
    } else {
        firstName.style.border = "1px solid #9AB3DA"

		return ok()
	}
})

lastName.addEventListener('keyup', () => {
    if(lastName.value.length <= 2){
		lastName.style.border = "1px solid red"
        lastName.classList.add('rd_')

		return erro()
    } else {
        lastName.style.border = "1px solid #9AB3DA"

		return ok()
	}
})

company.addEventListener('keyup', () => {
    if(company.value.length <= 4){
		company.style.border = "1px solid red"
        company.classList.add('rd_')

		return erro()
    } else {
        company.style.border = "1px solid #9AB3DA"

		return ok()
	}
})

btnSubmit.addEventListener('click', () => {
	if(checkSend.checked === false) {
        document.querySelector('.req_area')
            .classList.add('act-req')

	return erro()
    } else {
      document.querySelector('.req_area')
            .classList.remove('act-req')

		return ok()
	}

})

email.addEventListener('keyup', () => {
	if (email.value.length <= 5) {
		email.style.border = "1px solid red"
        email.classList.add('rd_')

    } if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) { 
		email.style.border = "1px solid red"
        email.classList.add('rd_')

    } else {
        email.style.border = "1px solid #9AB3DA"
    }
})


const password = document.querySelector('#in_v.password').value
var strong = 0
const view = document.querySelector('.view p')

pass.addEventListener('keyup', () => {
    if(pass.value.length <= 8){
        pass.style.border = "1px solid red"
        pass.classList.add('rd_')
    } else {
        pass.style.border = "1px solid #9AB3DA"
    }
})
const Ggas = document.querySelector('#in_v.password')
Ggas.addEventListener('keyup', () => {

    S = document.querySelector("#in_v.password").value;
    A = 0;
    B = document.querySelector(".view .sv_ba");
    if ((S.length >= 4) && (S.length <= 7)) {
      A += 5;
    } else if (S.length > 7) {
      A += 25;
    }
    if (S.match(/[a-z]+/)) {
      A += 10;
    }
    if (S.match(/[A-Z]+/)) {
      A += 15;
    }
    if (S.match(/[0-9]+/)) {
      A += 15;
    }
    if (S.match(/[~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<]+/)) {
      A += 25;
    }
    return mostra_res();
})

  function mostra_res() {

    inVw = `<div class="sy_ba"></div>`

    if (A <= 0 ) {
      B.innerHTML = inVw
      document.querySelector('.sy_ba')
        .style.width = "0%"
    } else if (A < 30) {
      B.innerHTML = inVw
      document.querySelector('.sy_ba')
      .style.background = "rgba(64, 75, 124, 0.4)"

      document.querySelector('.sy_ba')
        .style.width = "25%"
      
    } else if ((A >= 30) && (A < 60)) {
      B.innerHTML = inVw
      document.querySelector('.sy_ba')
        .style.background = "rgba(64, 75, 124, 0.6)"

      document.querySelector('.sy_ba')
        .style.width = "50%"
    } else if ((A >= 60) && (A < 85)) {
      B.innerHTML = inVw
      document.querySelector('.sy_ba')
        .style.background = "rgba(64, 75, 124, 0.8)"

        document.querySelector('.sy_ba')
        .style.width = "75%"
    } else {
      B.innerHTML = inVw
      document.querySelector('.sy_ba')
        .style.background = "rgba(64, 75, 124, 1)"

      document.querySelector('.sy_ba')
        .style.width = "100%"
    }
  }

function erro() {
    btnSubmit.classList.add('dis_btn')
}

function ok() {
	btnSubmit.classList.remove('dis_btn')
	btnSubmit.removeAttribute('disabled')
}

document.querySelector('form')
    .addEventListener('submit', event => {
        event.preventDefault()
    })