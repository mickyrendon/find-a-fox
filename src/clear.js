export const clear = () => {
    const nodeImg = document.querySelector('#node-img')
    if(nodeImg.childElementCount > 0){
        const arr =  [...nodeImg.childNodes]
        arr.forEach(element => {
           return element.remove()
        });
    }
}