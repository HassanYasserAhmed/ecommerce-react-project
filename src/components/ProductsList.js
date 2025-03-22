import { useEffect,useState } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
function ProductsList() {
    const api_url ="https://fakestoreapi.com/products";
    const [products,setProducts] = useState([]);
    const[categories,setCategories]= useState([]);
    const getCategories=() => {
        fetch(`${api_url}/categories`)
       .then((response)=> response.json())
        .then((Data)=>setCategories(Data));
    }
    const getProducts=() => {
        fetch(api_url)
        .then((response)=> response.json())
        .then((Data)=>setProducts(Data));
    }
    const getProductInCategory=(catName) => {
        console.log(catName);
        fetch(`${api_url}/category/${catName}`)
        .then((response)=> response.json())
        .then((Data)=>setProducts(Data));
    }
    useEffect(() => {
      getProducts();
      getCategories();
    },[])
    return (
    <>
        <h2 className="text-center p-3"> Our Products</h2>
        <div className="container">
            {
              
                categories.map((cat)=> 
                 {
                    return  <button key ={cat} class="btn btn-info ms-2" onClick={()=> getProductInCategory(cat) }>{cat}</button>
                }
            )
            }
            {
                <button className="btn btn-info ms-2" onClick={() =>{getProducts()}}>All</button>
            }
            <div className="row mt-3 mb-3">
              {
                products.map((product)=>
               {
                    return (
                    <div className="col-3" key={product.id}>
                        <Product product={product} showButton={true}/>
                     </div>
                    )
                   
                })
              }
              
            
            </div>
            
            
        </div>
    </>
    )
}
export  default ProductsList;