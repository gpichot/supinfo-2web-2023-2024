import { useParams } from "react-router-dom";
import { usePokemonListQuery } from "../queries/usePokemonListQuery";

export function WelcomePage() {
  const params = useParams();
  const pokemonListQuery = usePokemonListQuery();

  return (
    <div>
      <h1>Hello {params.nomDuDresseur}</h1>
      {JSON.stringify(pokemonListQuery.data)}
    </div>
  );
}
