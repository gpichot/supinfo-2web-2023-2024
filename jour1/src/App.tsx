import "./App.css";
import { Navbar } from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";
import { Products } from "./products";

function App() {
  return (
    <div>
      <Navbar title="Supinfo'Merch" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 10,
        }}
      >
        {Products.map((product) => {
          return <ProductCard name={product.name} price={product.price} />;
        })}
      </div>
    </div>
  );
}

export default App;
