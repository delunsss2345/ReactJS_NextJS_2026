import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router";

const ProductDetail = ({name}) => {
    const {id } = useParams()
    const [detail , sd] = useState(null) ;  
    const fetc = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) ; 
            const dt = await res.json()
            sd(dt) ; 
        } catch (error) {
            
        }
    }
    const saveCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) ?? []  ; 
        if(cart && cart.length <= 0) {
         localStorage.setItem("cart" , JSON.stringify([detail]) )
        } 
        cart.push(detail) ; 
        localStorage.setItem("cart" , JSON.stringify(cart) )
    }
    const navigate = useNavigate() ; 
    useEffect(() => {
        fetc() ; 
    },[id])
    return <>
    {detail && <div>
        <h1>Day la chi tiet san pham</h1>
         <h1>
            title : {detail.title}
         </h1>
         <button onClick={() => {
            saveCart() ; 
            navigate("/cart")
         }}>Add to card</button>
        </div>}
    </>
}
 
export default ProductDetail;