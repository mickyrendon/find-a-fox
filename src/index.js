
// btn
const btn = document.querySelector('.btn')
//clear btn
const clearBtn =  document.querySelector('.clear-btn')
// img-ctr

btn.addEventListener('click', async () => {
    const module = await import('./createImages')
    module.addImg()
})

// clear images dynamic import
clearBtn.addEventListener('click', async () => {
    const module = await import('./clear.js')
    module.clear()
})


