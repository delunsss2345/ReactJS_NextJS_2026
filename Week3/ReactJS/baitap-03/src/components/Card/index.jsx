import styles from "./productCard.module.css";

const ProductCard = ({ image, name, price }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={name} className={styles.img} />
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.price}>{price}đô</p>
            <button className={styles.btn}>Thêm vào giỏ hàng</button>
        </div>
    );
};

export default ProductCard;
