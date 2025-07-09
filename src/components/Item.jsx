import { Link } from 'react-router-dom'

const Item = ({ prod }) => {
    const { name, price, img, id } = prod
    return (
        <div className="card" style={{
            width: '20rem',
            margin: '1rem',
            textAlign: 'center',
            height: '28rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <img src={img} className="card-img-top" alt={name} style={{
                height: '15rem',
                objectFit: 'contain',
                width: '100%'
            }} />
            <div className="card-body" style={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1rem'
            }}>
                <h5 className="card-title" style={{
                    height: '3rem',
                }}>{name}</h5>
                <p className="card-text">${price},00</p>
                <Link to={`/item/${id}`} className="btn btn-outline-primary" >Ver más</Link>
            </div>
        </div>
    )
}

export default Item