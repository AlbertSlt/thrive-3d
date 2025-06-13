const productos = [
    {
        id: '1',
        name: 'Bambu Lab A1 Combo',
        description: 'Cargá hasta 4 colores y tipos de filamentos para impresiones mas rapidas y faciles, la impresion en toda su extensión!',
        stock: 5,
        price: 1200000,
        category: 'Impresoras 3d',
        img: '../img-prods/bambulab-a1-combo.png'
    },
    {
        id: '2',
        name: 'Creality Ender 3 V3 Plus',
        description: 'La nueva version de la mas pedida, la vieja confiable!',
        stock: 8,
        price: 410000,
        category: 'Impresoras 3d',
        img: '../img-prods/creality-ender-3-v3-plus.png' //imagenes dentro de carpeta public/img-prods
    },
    {
        id: '3',
        name: 'Creality Ender 3 V2 Neo',
        description: 'La confiable, ahora con nivelado automático',
        stock: 4,
        price: 380000,
        category: 'Impresoras 3d',
        img: '../img-prods/creality-ender-3-v2-neo.png'
    },
    {
        id: '4',
        name: 'Filamento 3N3 - PLA 1kg',
        description: 'Disponible en 7 colores',
        stock: 12,
        price: 18000,
        category: 'Filamentos',
        img: '../img-prods/filamento-3n3-pla-1kg.png'
    },
    {
        id: '5',
        name: 'Filamento GST 3D - PLA 1Kg',
        description: 'Disponible en 13 colores',
        stock: 28,
        price: 18000,
        category: 'Filamentos',
        img: '../img-prods/filamento-gst3d-1kg.png'
    },
    {
        id: '6',
        name: 'Agitadores de bebidas personalizables',
        description: 'Llevá tu marca a cada vaso!',
        stock: 1200,
        price: 2000,
        category: 'Modelos',
        img: '../img-prods/agitadores-personalizables.png'
    }
]

let error = false
export const getProducts = () => {
    return new Promise((resolve, reject) => { //resolve siempre antes que rejectk, sino se rompe
        setTimeout(() => {

            if (error) {
                reject('Hubo un error, intente más tarde.')
            } else {
                resolve(productos)
            }

        }, 1000);
    })
}


//OTRA OPCION PARA ITEMDETAILCONTAINER
export const getOneProduct = (id) => {
    return new Promise((resolve, reject) => { //resolve siempre antes que reject, sino se rompe
        setTimeout(() => {

            if (error) {
                reject('Hubo un error, intente más tarde.')
            } else {
                let product= productos.find((prod)=> prod.id === id)
                resolve(product)
            }

        }, 1000);
    })
}