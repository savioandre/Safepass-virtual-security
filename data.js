const leftBar = document.querySelector('.ti_data svg')
leftBar.addEventListener('click', () => {
    if (document.querySelector('.ti_data svg.in_svg')) {

        document.querySelector('.logo_comp')
            .style.opacity = 1

        document.querySelector('.layout-Data')
            .classList.toggle('active')

        leftBar.classList.add('rot_svg')
        leftBar.classList.remove('in_svg')
    } else {
        
        document.querySelector('.logo_comp')
            .style.opacity = 0

        document.querySelector('.layout-Data')
            .classList.toggle('active')

        leftBar.classList.remove('rot_svg')
        leftBar.classList.add('in_svg')
    }
})
