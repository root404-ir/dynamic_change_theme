const $ = document
const themeCssVar = $.querySelector(':root')
const themeBtn = $.querySelectorAll('.btn')

themeBtn.forEach(btn => {
    btn.addEventListener('click', (event) => {
        let mainThemeColor = event.target.dataset.color
        themeCssVar.style.setProperty('--color-theme', mainThemeColor)
    })
})

