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
        <div className="card" style={{ 
            width: '20rem', 
            margin: '1rem', 
            textAlign:'center', 
            height: '28rem', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between' 
        }}>
            <img src={img} className="card-img-top" alt={name} style={{ 
                    height: '15rem', 
                    objectFit: 'contain',
                    width: '100%' 
                }}/>
            <div className="card-body" style={{ 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                padding: '1rem' 
            }}>
                <h5 className="card-title" style={{ 
                    height: '3rem', 
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis', 
                    display: '-webkit-box', 
                    WebkitLineClamp: 2, 
                    WebkitBoxOrient: 'vertical' 
                }}>{name}</h5>
                <p className="card-text">${price},00</p>
                <Link to={`/item/${id}`} className="btn btn-outline-primary" >Ver más</Link> {/*Aca SI puedo aplicar estilos porque es el nuevo "anchor tag", a diferencia de los componentes de configuracion*/}
            </div>
        </div>
    )
}

export default Item