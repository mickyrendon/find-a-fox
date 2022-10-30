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
    // stop intersecting 
    observer.unobserve(node)
}
const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loader)
})

export const registerImg = (image) => {
    observer.observe(image)  
}
// TODO 
/* 
    1- agrgar un boton de eliminar todo
    2- agregar un fondo gris al cargar la imagen, las imgs deben cargar encima del cuadro gris
    3- agregar un reporte en la consola de los nodos creados y las imagenes cargadas
*/
