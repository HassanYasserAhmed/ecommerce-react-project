import { Link } from "react-router-dom";
function Product(props) {
    console.log(props);
    const {product,showButton} = props;
    return (
        <>
                <div className="card">
                    <img src={product.image}/>
                { <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    {showButton && <Link className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>}
                  
                </div> }
                </div>
        </>
    )
}
export default Product;