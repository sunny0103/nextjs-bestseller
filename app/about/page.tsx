import styles from "../../styles/about.module.css";

export const metadata = {
  title: "About US",
};

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About us</h1>
      <p>
        Welcome to the Best seller explorer. <br /> The books Lists are provided
        by The New York Times Company. <br /> Hope you help to choose a book and
        enjoy reading.
      </p>
    </div>
  );
}
