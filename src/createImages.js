import { registerImg } from "./lazyLoader.js"
import { random } from "./random.js"

const nodeImg = document.querySelector('#node-img')
const baseUrl  = 'https://randomfox.ca/images/'
const extension = '.jpg'

const createImg = () => {
    const imgCtr = document.createElement('div')
          imgCtr.classList = 'mt-6 max-w-xs flex items-center justify-center bg-gray-500 gray rounded-md'
    const img = document.createElement('img')
          img.classList ='rounded-md bg-gray-500'
          img.width = 320
          img.src =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";
          img.dataset.src = `${baseUrl}${random()}${extension}`
          imgCtr.append(img)
    
    return imgCtr
}
export const addImg = () => {
    const newImg = createImg()
    nodeImg.append(newImg)
    registerImg(newImg)
}