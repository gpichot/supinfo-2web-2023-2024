import { PokemonDetail } from "../types";

interface PokemonCardProps {
  pokemon: PokemonDetail;
}

export function PokemonCard(props: PokemonCardProps) {
  // display name, types, image
  return (
    <div
      style={{
        border: "1px solid #00000088",
        borderRadius: 10,
        color: "#333333",
        backgroundColor: "#dddddd",
      }}
    >
      <h2>{props.pokemon.name}</h2>
      <img src={props.pokemon.image} alt={props.pokemon.name} />
      <ul>
        {props.pokemon.types.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul>
    </div>
  );
}
