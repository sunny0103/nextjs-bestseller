import Link from "next/link";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constant";

export const metadata = {
  title: "Home",
};

interface Book {
  list_name: string;
  list_name_encoded: string;
}

async function getCategory() {
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  return json.results;
}

export default async function HomePage() {
  const books = await getCategory();
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>The New York Times Best Seller</h1>
      <div className={styles.category}>
        {books.map((book: Book) => (
          <div key={book.list_name}>
            <Link
              className={styles.link}
              href={`/list/${book.list_name_encoded}`}
            >
              {book.list_name} ▶️
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
