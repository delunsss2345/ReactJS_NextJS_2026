import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";

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
    useEffect(() => {
        fetc() ; 
    },[id])
    return <>
    {detail && <div>
        <h1>Day la chi tiet san pham</h1>
         <h1>
            title : {detail.title}
            
         </h1>
        </div>}
    </>
}
 
export default ProductDetail;