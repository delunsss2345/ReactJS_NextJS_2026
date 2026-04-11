import { useEffect, useState } from "react";
import Product from "../../components/Product";
import { useNavigate } from "react-router";

const ProductPage = () => {
    const [p, sp] = useState([]) ;
    const fetc = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts") ; 
            const dt = await res.json()
            sp(dt) ; 
        } catch (error) {
            
        }
    }
    const navi = useNavigate() ; 
    useEffect(() => {
        fetc() ; 
    },[])
    return <div>
        {p.map(i => <Product onClick={() =>navi(`/products/${i.id}`) } name={i.title} />)}
    </div>
}
 
export default ProductPage;