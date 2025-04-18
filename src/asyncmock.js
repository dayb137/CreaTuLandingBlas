const misArticulos = [
    {id: "1", nombre: "Mazo Tarot Rider", precio: 45000, img: "../public/img/mazotarot5.png", idCat:"mazosTarot", stock:10, descripcion: "Tarot Rider Waite smith 'El Camino del Tarot de La Fuerza del Agua' 78 cartas más 2 explicativas 12x7cm. Cada carta tiene sus palabras claves, su energía planetaria y correspondencia astrológica. Ideal Principiantes que ya estén estudiando y necesiten ayuda en sus tiradas con los significados en las cartas."},
    {id: "3", nombre: "Mazo Tarot Marsella", precio: 45000, img: "../public/img/mazotarot1.png",idCat:"mazosTarot", stock: 10, descripcion:"Cartas Mazo Tarot de Marsella Iluminarte + Guía Básica 78 cartas 11x6cm + bolsita de gasa organza. Guía básica en español."},
    {id: "2", nombre: "Mazo Tarot Black", precio: 45000, img: "../public/img/mazotarot2.png",idCat:"mazosTarot", stock: 10, descripcion:"Black & Gold Edition Tarot Caja lujo Rider Waite Original. Edición en caja de lujo original. Color principal DORADO, 78 cartas en inglés más GUIA multilingüe"},
    {id: "4", nombre: "oraculo Tarot", precio: 45000, img: "../public/img/oraculo1.png",idCat:"oraculos", stock: 5, descripcion:"TODOS LOS ORACULOS INCLUYEN 44 CARTAS: Los 'Oráculos' son una herramienta poderosa para aquellos que buscan comprender su lugar en el universo y cómo las energías cósmicas impactan en nuestras vidas. Es una invitación a explorar la sabiduría del cosmos y a descubrir la conexión entre uno mismo y el todo. Libro + 44 cartas."},
    {id: "5", nombre: "Oraculo Encantado", precio: 45000, img: "../public/img/oraculo2.png",idCat:"oraculos", stock: 5, descripcion:"TODOS LOS ORACULOS INCLUYEN 44 CARTAS: Los 'Oráculos' son una herramienta poderosa para aquellos que buscan comprender su lugar en el universo y cómo las energías cósmicas impactan en nuestras vidas. Es una invitación a explorar la sabiduría del cosmos y a descubrir la conexión entre uno mismo y el todo. Libro + 44 cartas."},
    {id: "6", nombre: "Oraculo Angeles", precio: 45000, img: "../public/img/oraculo3.png",idCat:"oraculos", stock: 5, descripcion:"TODOS LOS ORACULOS INCLUYEN 44 CARTAS: Los 'Oráculos' son una herramienta poderosa para aquellos que buscan comprender su lugar en el universo y cómo las energías cósmicas impactan en nuestras vidas. Es una invitación a explorar la sabiduría del cosmos y a descubrir la conexión entre uno mismo y el todo. Libro + 44 cartas."},
    {id: "7", nombre: "Colgante Cuarzo Rosa", precio: 45000, img: "../public/img/amuleto1.png",idCat:"proteccion", stock: 15, descripcion:"Gargantilla Cuarzo rosa: significado y accion: Es el simbolismo de la pasión, la paz, la sensualidad y la ternura. Suele utilizarse para sanar heridas emocionales, atraer nuevos amores, romances e intimidad, siendo estas a su vez cercanas y profundas."},
    {id: "8", nombre: "Colgante Amatista", precio: 45000, img: "../public/img/amuleto2.png",idCat:"proteccion", stock: 15, descripcion:"Gargantilla Amatista: La amatista está asociada al sexto chakra, también conocido como el tercer ojo, que se encuentra en el entrecejo. Esta conexión con el sexto chakra refuerza su capacidad para promover la claridad mental y la percepción intuitiva. Además, la amatista es ideal para situaciones estresantes, el insomnio y las pesadillas, ya que ayuda a aliviar estos problemas y fomentar un sueño reparador.Es asociada como una piedra de protección, las civilizaciones griegas y romanas creían que era un amuleto que protege de no emborracharse."},
    {id: "9", nombre: "Llavero Ojo", precio: 45000, img: "../public/img/amuleto3.png",idCat:"proteccion", stock: 15, descripcion:"Llavero protector Ojo Turco: Un amuleto único que combina estilo y protección. Este llavero no solo es un accesorio funcional para tus llaves, sino también un símbolo de buena suerte y resguardo contra malas energías."},

]

export const getArticulos = () =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(misArticulos)  
        },100);
    })

}

export const getUnArticulo = (id) =>{
    return new Promise(resolve =>{
        setInterval(()=>{
            const articulo = misArticulos.find(item => item.id === id)
            resolve(articulo)
        }, 100)
    })
}

export const getArticulosPorCategoria = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(()=>{
            const articulosCategoria = misArticulos.filter(item => item.idCat === idCategoria)
            resolve(articulosCategoria)
        },100)
    })
}