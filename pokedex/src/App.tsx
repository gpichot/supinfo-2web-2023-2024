import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useParams,
} from "react-router-dom";
import "./App.css";
import { PokemonForm } from "./PokemonForm";
import { PokemonsMocks } from "./pokemons.mocks";
import { PokemonCard } from "./PokemonCard";

function Menu() {
  return (
    <div style={{ display: "flex", flexFlow: "row nowrap", gap: 10 }}>
      <Link to="/">Accueil</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/pokemons/new">Créer un pokémon</Link>
    </div>
  );
}

function Welcome() {
  const params = useParams();
  return (
    <div>
      <h1>Hello {params.nomDuDresseur}</h1>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: (
      <div>
        Page non trouvée
        <br />
        <a href="/">Retour à l'accueil</a>
      </div>
    ),
    element: (
      <div>
        <h1>Pokedex</h1>
        <Menu />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: (
          <div>
            {PokemonsMocks.map((pokemon) => (
              <PokemonCard pokemon={pokemon} />
            ))}
          </div>
        ),
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
      {
        path: "/welcome/:nomDuDresseur",
        element: <Welcome />,
      },
      {
        path: "/pokemons/new",
        element: <PokemonForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
