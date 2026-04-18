import { useNavigate } from "react-router";
import Product from "../../components/Product";

const CartPage = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) ?? []  ; 
    const navigate = useNavigate() ;
    return <>
    {cart && cart.map(c => (
        <Product key={c.id}  name={c.title} />
    ))}
    <button onClick={() => navigate("/checkout")}>Mua hang</button>
    </>
}
 
export default CartPage;