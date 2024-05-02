import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { PokemonForm } from "./components/PokemonForm";
import { PokemonListPage } from "./pages/PokemonListPage";
import { WelcomePage } from "./pages/WelcomePage";
import { Menu } from "./components/Menu";

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
        element: <PokemonListPage />,
      },
      {
        path: "/contact",
        element: <WelcomePage />,
      },
      {
        path: "/welcome/:nomDuDresseur",
        element: <WelcomePage />,
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
