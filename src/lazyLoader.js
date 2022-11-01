let totalImages = 0;
let loadedImages = 0;
// api intesection observer
const isIntersecting = (entry) => {
    // true dentro de la pantalla
    return entry.isIntersecting
}
const loader = (entry) => {
    // img container
    const node = entry.target
    const img = node.firstChild
    const url = img.dataset.src
    // load img
    img.src = url
    img.onload = () => {
        loadedImages += 1
        logState()
      };
    // stop intersecting 
    observer.unobserve(node)
}
const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loader)
})

export const registerImg = (image) => {
    observer.observe(image)  
}

export const registerImage = (image) => {
    observer.observe(image)
    // totalImages += 1;
    // logState()
};
  
export function logState(a) {
    console.log(`⚪️ Imágenes creadas lazy: ${a}`) // TOFIX: //TO FIX
    console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
    console.log("--------------------------------------");
}
// TODO 
/* 
    3- agregar un reporte en la consola de los nodos creados y las imagenes cargadas
*/