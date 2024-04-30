import { PokemonDetail } from "../types";

interface PokemonCardProps {
  pokemon: PokemonDetail;
}

export function PokemonCard(props: PokemonCardProps) {
  // display name, types, image
  return (
    <div>
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
