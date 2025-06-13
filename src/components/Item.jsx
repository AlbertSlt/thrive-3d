import React from 'react'
import { Link } from 'react-router-dom' //este componente reemplaza el anchorTag <a>, con Mayuscula

const Item = ({ prod }) => {
    //destructuring de prod
    const { name, price, img, id } = prod
    return (
        //diferencias entre cards bootstrap y bootstrap react
        //etiqueta img lleva cierre
        //estilos en linea como objetos, no como string en html 
        //en vez de class, uso className
        <div className="card" style={{ width: '18rem', margin: '1rem' }}>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">${price},00</p>
                {/* <Link to={'/item/' + id} className="btn btn-primary">Ver más</Link> concatenacion normal */}
                <Link to={`/item/${id}`} className="btn btn-primary">Ver más</Link> {/*Aca SI puedo aplicar estilos porque es el nuevo "anchor tag", a diferencia de los componentes de configuracion*/}


            </div>
        </div>
    )
}

export default Item