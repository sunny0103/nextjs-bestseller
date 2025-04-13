"use client"

import { API_URL } from "../app/constant";
import styles from "../styles/book-lists.module.css";

interface Books {
  title: string;
  book_image: string;
  author: string;
  description: string;
  rank: number;
  buy_links: { name: string; url: string }[];
}

export async function getBooks(listName: string) {
  const response = await fetch(`${API_URL}/list?name=${listName}`, {
    cache: "no-store",
  });
  return response.json();
}

export default function BookLists({ data }: { data: any }) {
  const books = data.results.books;

  return (
    <>
      <h1 className={styles.title}>{data.results.list_name}</h1>
      <div className={styles.container}>
        {books.map((book: Books) => (
          <div key={book.title}>
            <span className={styles.rank}>
              🏆 {book.rank} {book.title}
            </span>
            <div className={styles.wrapper}>
              <img src={book.book_image} alt={book.title} width="250" />
              <div className={styles.detail}>
                <span>Author: {book.author}</span>
                <p>Description: {book.description}</p>
                <div className={styles.buttons}>
                  {book.buy_links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className={styles.button}
                      >{`${link.name}`}</button>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
