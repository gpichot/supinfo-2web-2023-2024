import { useParams } from "react-router-dom";

export function WelcomePage() {
  const params = useParams();
  return (
    <div>
      <h1>Hello {params.nomDuDresseur}</h1>
    </div>
  );
}
