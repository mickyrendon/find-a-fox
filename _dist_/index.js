// btns
const btn = document.querySelector('.btn')
const clearBtn =  document.querySelector('.clear-btn')

btn.addEventListener('click', async () => {
    console.log('click');
    const module = await import("./createImages.js")
    module.addImg()
})
// clear images dynamic import
clearBtn.addEventListener('click', async () => {
    const { clear } = await import("./clear.js")
    clear()
})
