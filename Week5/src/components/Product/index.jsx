const Product = ({name , onClick}) => {
    return <div >
        <h1>{name}</h1>
        <button onClick={onClick}>
            Xem Chi tiet
        </button>
    </div>
}
 
export default Product;