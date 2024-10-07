const $ = document
const cssRootVar = $.querySelector(':root')
const themeBtn = $.querySelectorAll('.btn')

themeBtn.forEach(btns => {
    btns.addEventListener('click', (event) => {
        let mainTheme = event.target.dataset.color
        cssRootVar.style.setProperty('--main-color', mainTheme)
    })
})