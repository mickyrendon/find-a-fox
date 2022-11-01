import { registerImg } from "./lazyLoader.js"
import { random } from "./random.js"

const nodeImg = document.querySelector('#node-img')

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

export const addImg = () => {
    const newImg = createImg()
    nodeImg.append(newImg)
    registerImg(newImg)
    console.log(newImg)
}