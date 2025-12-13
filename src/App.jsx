import { useEffect } from "react";
import { API_URL } from "./config";

function App() {
  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then(res => res.json())
      .then(data => {
        console.log("Réponse API :", data);
      })
      .catch(err => {
        console.error("Erreur API :", err);
      });
  }, []);

  return (
    <div>
      <h1>Cousinade Frontend</h1>
      <p>Ouvre la console pour voir les données</p>
    </div>
  );
}

export default App;
