function loader() {
    document.querySelector('.loader').classList.add('remove-loader')
}
function refresh() {
    setInterval(loader, 3000);
}
refresh()

const header = document.querySelector('#header')
header.innerHTML = `<nav class="bar_nav_">
    <a href="./index.html" class="logo">
        <svg width="32" height="45" viewBox="0 0 32 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31 35V6.95L16 2L1 6.95V35L16.4286 43.25L31 35Z" fill="#D1DCED" stroke="#9AB3DA"
                stroke-width="2" />
            <path
                d="M12.915 21.5966V13.2852C12.915 11.6284 14.2582 10.2852 15.915 10.2852H16.0849C17.7418 10.2852 19.0849 11.6284 19.0849 13.2852V21.5966"
                stroke="#9AB3DA" />
            <rect x="7.77356" y="20.5684" width="16.453" height="11.3114" rx="1" fill="#404B7C" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M16.5485 22.4193H15.4516V25.8035C14.8126 26.0294 14.3547 26.6388 14.3547 27.3552C14.3547 28.2639 15.0914 29.0005 16 29.0005C16.9087 29.0005 17.6453 28.2639 17.6453 27.3552C17.6453 26.6388 17.1875 26.0294 16.5485 25.8035V22.4193Z"
                fill="#9AB3DA" />
        </svg>

    </a>

    <h2 class="Saf-dis">Safepass</h2>

    <ul class="Bar">
        <li class="sol-opt">
            <a class="a">Solutions
                <svg width="12" height="6" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1L6.79289 6.29289C7.18342 6.68342 7.81658 6.68342 8.20711 6.29289L13.5 1"
                        stroke="#404B7C" stroke-width="2" stroke-linecap="round" />
                </svg>
            </a>
        </li>

        <li class="res-opt">
            <a class="a">Resources
                <svg width="12" height="6" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1L6.79289 6.29289C7.18342 6.68342 7.81658 6.68342 8.20711 6.29289L13.5 1"
                        stroke="#404B7C" stroke-width="2" stroke-linecap="round" />
                </svg>
            </a>
        </li>

        <li class="com-opt">
            <a class="a">Company
                <svg width="12" height="6" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1L6.79289 6.29289C7.18342 6.68342 7.81658 6.68342 8.20711 6.29289L13.5 1"
                        stroke="#404B7C" stroke-width="2" stroke-linecap="round" />
                </svg>
            </a>
        </li>

        <li><a class="a" href="./security.html">Security</a></li>

        <li><a class="a" href="./pricing.html">Pricing</a></li>

        <li><a class="a" href="./about.html">About Us</a></li>
    </ul>

    <div class="actions last">
        <a href="./login.html" class="Login">Login</a>
        <a href="./sign.html" class="Sign ele-sa">Sign In</a>
    </div>

    <div class="btn_mobile act_m">
        <div class="btn_burger"></div>
    </div>
</nav>`

// nav and scroll
const scroll = document.getElementsByTagName('body')
window.addEventListener('scroll', function (event) {
    if (window.scrollY > 100) {
        document.querySelector('#header')
            .classList.add('header_fixed')

        document.querySelector('.inject')
            .style.position = "fixed"
    } else {
        document.querySelector('#header')
            .classList.remove('header_fixed')

        document.querySelector('.inject')
            .style.position = "absolute"
    }
})

function callBar() {
    openBar()
}

function openBar() {
    document.querySelector('.inject')
        .classList.add('Opt_Bar')

    stayBar()
}

function stayBar() {
    const area = document.querySelectorAll('.inject.Opt_Bar')
    area.forEach((on) => {
        on.addEventListener('mouseover', () => {
            document.querySelector('.inject')
                .classList.add('Opt_Bar')
        })
        on.addEventListener('mouseout', () => {
            document.querySelector('.inject')
                .classList.remove('Opt_Bar')
        })
    })
}

const sh = document.querySelectorAll("header .sol-opt, header .res-opt, header .com-opt")
sh.forEach((button) => {
    button.addEventListener("mouseover", () => {
        openBar()

        document.querySelectorAll('.Bar li')
            .forEach((ky) => {
                ky.classList.add('off')
            })
        button.classList.remove('off')
    })
})

const sol = document.querySelector('.sol-opt')
sol.addEventListener('mouseover', () => {
    const h2 = document.querySelector('.head-name')
    const name = `Solutions`
    h2.innerHTML = name

    const ul = document.querySelector('.ma_ul')
    const jd = `
    <li class="ma_li">
        <a class="a" href="">Busnisses</a>
    </li>
    <li class="ma_li">
        <a class="a" href="">Cloud</a>
    </li>
    <li class="ma_li">
        <a class="a" href="">Cripto</a>
    </li>
    <li class="ma_li">
        <a class="a" href="">Scan</a>
    </li>
    <li class="ma_li">
        <a class="a" href="">Backup</a>
    </li>`

    ul.innerHTML = jd
})

const res = document.querySelector('.res-opt')
res.addEventListener('mouseover', () => {
    const h2 = document.querySelector('.head-name')
    const name = `Resources`
    h2.innerHTML = name

    const ul = document.querySelector('.ma_ul')
    const jd = `
    <li class="ma_li">
        <a class="a" href="">Data Center</a>
    </li>
    <li class="ma_li">
        <a class="a" href="">Cloud</a>
    </li>
    <li class="ma_li">
        <a class="a" href="">Cripto</a>
    </li>`

    ul.innerHTML = jd
})

const com = document.querySelector('.com-opt')
com.addEventListener('mouseover', () => {
    const h2 = document.querySelector('.head-name')
    const name = `Companys`
    h2.innerHTML = name

    const ul = document.querySelector('.ma_ul')
    const jd = `
            <li class="ma_li">
                <a class="a" href="">Company's</a>
            </li>
            <li class="ma_li">
                <a class="a" href="">Manifesto</a>
            </li>
            <li class="ma_li">
                <a class="a" href="./team.html">Team</a>
            </li>
            <li class="ma_li">
                <a class="a" href="">Branding</a>
            </li>
            <li class="ma_li">
                <a class="a" href="">Blog</a>
            </li>`

    ul.innerHTML = jd
})

const btn_mobile = document.querySelector('.btn_mobile')
btn_mobile.addEventListener('click', () => {
    if (document.querySelector('.btn_mobile.act_m')) {
        document.querySelector('.bar_mobile').classList.add('active_bar')
        document.querySelector('body').style.overflowY = "hidden"
        btn_mobile.classList.remove('act_m')

    } else {
        document.querySelector('.bar_mobile').classList.remove('active_bar')
        document.querySelector('body').style.overflowY = "auto"
        btn_mobile.classList.add('act_m')

    }
})

let menuOpen = false;
btn_mobile.addEventListener('click', () => {
    if (!menuOpen) {
        btn_mobile.classList.add('open');
        menuOpen = true;
    } else {
        btn_mobile.classList.remove('open');
        menuOpen = false;
    }
});

const float = document.querySelectorAll('.man')
float.forEach((ease) => {
    ease.addEventListener('mouseover', () => {
        ease.classList.add('on-float')
    })
    ease.addEventListener('mouseout', () => {
        ease.classList.remove('on-float')
    })
})

// Bar Mobile
const BAR_INSERT = document.querySelectorAll('.Bar_active li')
BAR_INSERT.forEach((Bar_Insert) => {
    Bar_Insert.addEventListener('click', () => {
        Bar_Insert.classList.toggle('on-bar')
    })
})
const BAR_REMOVE_INSERT = document.querySelectorAll('.Bar_active .on-bar')
BAR_REMOVE_INSERT.forEach((Bar_Remove) => {
    Bar_Remove.addEventListener('click', () => {
        Bar_Remove.classList.toggle('on-bar')
        console.log('nask')
    })
})