import { API_URL } from "../config";

export async function getUsers() {
  const response = await fetch(`${API_URL}/users`);

  if (!response.ok) {
    throw new Error("Erreur API");
  }

  return response.json();
}
