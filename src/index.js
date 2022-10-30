import { registerImg } from "./lazyLoader.js"

// btn
const btn = document.querySelector('.btn')
// img-ctr
const nodeImg = document.querySelector('#node-img')
// random 
const min = 1
const max = 123
const random = () => Math.floor(Math.random() * (min, max)) + min

const createImg = () => {
    const imgCtr = document.createElement('div')
          imgCtr.classList = 'p-6'
    const img = document.createElement('img')
          img.classList ='mx-auto'
          img.width = 320
          img.dataset.src = `https://randomfox.ca/images/${random()}.jpg`
          imgCtr.append(img)
    
    return imgCtr
}

const addImg = () => {
    const newImg = createImg()
    nodeImg.append(newImg)
    registerImg(newImg)
}
btn.addEventListener('click', addImg)


