const chekcLength = document.querySelector('.m_help')
const efImgInput = document.querySelector('.btn_sub_input')

chekcLength.addEventListener('keyup', () => {
    if (chekcLength.value.length <= 0) {
        efImgInput.classList.add('lu-mode-selec')
    } else {
        efImgInput.classList.remove('lu-mode-selec')
    }
})

const form = document.querySelector('.form_Input')
const btn = document.querySelector('.btn_sub_input')
const input = document.querySelector('.m_help')

var reMes
var area = document.querySelector('.main_chat')
// Cria a Div 'Message'
function userMessage() {
    reMes = document.createElement('div')
    reMes.classList.add('message')

    area.appendChild(reMes)
    // initMesssage()
}
// userMessage()

function initMesssage() {
    btn.addEventListener('click', () => {
        if (input.value.length <= 0) {
            input.value.length = " "
        } else {
            userMessage()
            sendMesssage()
        }
    })
}
initMesssage()

function sendMesssage() {
    const mes = document.createElement('p')
    const p = document.querySelector('.m_help').value

    mes.classList.add('chat_res')
    mes.innerHTML = p

    reMes.appendChild(mes);
    btn.setAttribute("type", "reset")
    chatMessage()
}

var createDiv
function chatMessage() {
    const mainOpt = document.createElement('div')
    mainOpt.classList.add('main_opt')

    createDiv = document.createElement('div')
    createDiv.classList.add('chat_m')

    area.appendChild(mainOpt)
    mainOpt.appendChild(createDiv)
    insertChatMessage()
}

function insertChatMessage() {
    const background = document.createElement('div')
    background.classList.add('img_chat_sen')

    createDiv.appendChild(background)
    respondendo()
}

function respondendo() {
    const P = document.querySelector('.m_help').value
    var rest = `To help you ${P}, select one of the options below:`
    const mes = document.createElement('p')

    mes.classList.add('chat_mess')
    mes.innerHTML = rest
    createDiv.appendChild(mes)

    InsertOptMenuFooter()
}

const OPT = `
    <div class="opt_ opt_pri">
        <p class="opt-btn">Pricing</p>
    </div>
    <div class="opt_ opt_prod">
        <p class="opt-btn">Products</p>
    </div>
    <div class="opt_ opt_sol">
        <p class="opt-btn">Solutions</p>
    </div>
`
function InsertOptMenuFooter() {
    const REA = document.createElement('div')
    REA.classList.add('opt_chat')
    REA.innerHTML = OPT
    document.querySelector('.main_opt').appendChild(REA)
    CallName()
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
});

document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        let KeyP = btn
        KeyP.click();
    }
});

const OPEN = document.querySelector('.chat_img')
const IMG = document.querySelector('.chat_meet')

OPEN.addEventListener('click', () => {
    IMG.style.display = "flex"
    OPEN.style.opacity = 0
    document.querySelector('.chat')
        .classList.add('active-chat')
})

const CLOSE = document.querySelector('.close_chat')

CLOSE.addEventListener('click', () => {
    IMG.style.display = "none"
    OPEN.style.opacity = 1
    document.querySelector('.chat')
        .classList.remove('active-chat')
})

function CallName() {
    const PRICING = document.querySelector('.opt_.opt_pri')

    PRICING.addEventListener('click', () => {
        const NEW_DIV = document.createElement('div')
        NEW_DIV.classList.add('message')

        const inner = `
        <p class="chat_res">
            <strong>Pricing</strong>
        </p>

        <p class="chat_res">
            Need help making your business more secure?<br>
            <strong>Count on us!</strong><br>

            We have flexible plans for all types of companies<br>

            <a href="./pricing.html" class="a_pri">See plans</a>
        </p>`

        NEW_DIV.innerHTML = inner
        document.querySelector('.main_chat').appendChild(NEW_DIV)
    })
}