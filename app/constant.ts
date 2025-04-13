
export const API_URL = "https://books-api.nomadcoders.workers.dev";

export async function getBooks(listName: string) {
  const response = await fetch(`${API_URL}/list?name=${listName}`, {
    cache: "no-store",
  });
  return response.json();
} 