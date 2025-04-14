const misArticulos = [
    {ID: 1, nombre: "Mazo Tarot Rider", precio: 45000, img: "../public/img/mazotarot5.png"},
    {ID: 3, nombre: "Mazo Tarot Marsella", precio: 45000, img: "../public/img/mazotarot1.png"},
    {ID: 2, nombre: "Mazo Tarot Black", precio: 45000, img: "../public/img/mazotarot2.png"},
    {ID: 4, nombre: "oraculo Tarot", precio: 45000, img: "../public/img/oraculo1.png"},
    {ID: 5, nombre: "Oraculo Encantado", precio: 45000, img: "../public/img/oraculo2.png"},
    {ID: 6, nombre: "Oraculo Angeles", precio: 45000, img: "../public/img/oraculo3.png"},
    {ID: 7, nombre: "Colgante Cuarzo Rosa", precio: 45000, img: "../public/img/amuleto1.png"},
    {ID: 8, nombre: "Colgante Amatista", precio: 45000, img: "../public/img/amuleto2.png"},
    {ID: 9, nombre: "Llavero Ojo", precio: 45000, img: "../public/img/amuleto3.png"},

]

export const getArticulos = () =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(misArticulos)  
        },2000);
    })

}