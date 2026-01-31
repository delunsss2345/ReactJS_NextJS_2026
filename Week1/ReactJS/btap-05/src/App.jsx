import './App.css';
import Grid from './components/Grid';
import ProductCard from './components/ProductCard';

const products = [
  {
    id: 1,
    image: "https://picsum.photos/seed/p1/400/250",
    name: "Áo thun basic",
    price: 129000,
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/p2/400/250",
    name: "Quần jeans slim",
    price: 399000,
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/p3/400/250",
    name: "Giày sneaker",
    price: 599000,
  },
  {
    id: 4,
    image: "https://picsum.photos/seed/p4/400/250",
    name: "Balo đi học",
    price: 259000,
  },
];

function App() {
  return (
    <Grid>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          image={p.image}
          name={p.name}
          price={p.price}
        />
      ))}
    </Grid>
  )
}

export default App
