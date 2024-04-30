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
  const handleClick = () => {
    alert("Ajouté au panier");
  };
  return (
    <div className={styles.productCard}>
      <p>
        {props.name} {props.estEnPromo && "En promo!!!! 🔥"}
      </p>
      <p>Price: {props.price}€</p>
      <button type="button" onClick={handleClick}>
        Ajouter au panier
      </button>
    </div>
  );
}
