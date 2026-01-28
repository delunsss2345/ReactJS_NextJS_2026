import { useEffect, useMemo, useState } from "react";
import ProductCard from "../../components/Card";

const ProductFilter = () => {
    const [products, setProducts] = useState([]);
    const [q, setQ] = useState("");
    const [minValue, setMinValue] = useState(-Infinity);
    const [maxValue, setMaxValue] = useState(Infinity);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch('https://dummyjson.com/products?limit=5000');
            const response = await res.json();
            setProducts(response.products);
        }
        fetchApi();
    }, [])


    const filterProducts = useMemo(() => {
        return products.filter(product => {
            const matchName = product.title.includes(q.trim().toLocaleLowerCase());
            const matchPrice = product.price >= minValue && product.price <= maxValue;
            return matchName && matchPrice;
        })
    }, [products, q, minValue, maxValue])

    const totalPrice = useMemo(() => {
        return filterProducts.reduce((sum, product) => {
            return sum += product?.price ?? 0
        }, 0)
    }, [filterProducts])
    return (
        <>
            <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search"
            />
            <input
                type="number"
                value={minValue}
                onChange={(e) => setMinValue(e.target.value)}
                placeholder="Min price"
            />
            <input
                type="number"
                value={maxValue}
                onChange={(e) => setMaxValue(e.target.value)}
                placeholder="Max price"
            />
            <div>
                Tổng tiền: <b>{Math.round(totalPrice)} đô</b>
                <span style={{ marginLeft: 12 }}>
                    ({filterProducts.length} sản phẩm)
                </span>
            </div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(6 , 1fr)",
                gap: 10
            }}>
                {filterProducts.map((p) => (
                    <ProductCard
                        key={p.id}
                        name={p.title}
                        image={p.thumbnail}
                        price={p.price}
                    />
                ))}
            </div>
        </>
    );
}

export default ProductFilter;