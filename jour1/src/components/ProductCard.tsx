import { useState } from "react";
import styles from "./ProductCard.module.css";
/**
.productCard {
  border: 1px solid red;
  border-radius: 10px;
}
 */

interface ProductCardProps {
  name: string;
  price: number;
  estEnPromo?: boolean;
}

export function ProductCard(props: ProductCardProps) {
  const [quantite, setQuantite] = useState(0);
  const handleClick = () => {
    alert("Ajouté au panier");
  };
  const incrementerProduit = () => {
    setQuantite(quantite + 1);
  };
  const decrementerProduit = () => {
    if (quantite === 0) return;

    setQuantite(quantite - 1);
  };
  return (
    <div className={styles.productCard}>
      <p>
        {props.name} {props.estEnPromo && "En promo!!!! 🔥"}
      </p>
      <p>Price: {props.price}€</p>
      <div style={{ display: "flex", flexFlow: "row", gap: 10 }}>
        <button
          type="button"
          onClick={decrementerProduit}
          disabled={quantite === 0}
        >
          -
        </button>
        <p>Quantité : {quantite}</p>
        <button type="button" onClick={incrementerProduit}>
          +
        </button>
      </div>
      <button type="button" onClick={handleClick}>
        Ajouter au panier
      </button>
    </div>
  );
}
