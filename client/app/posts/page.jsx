import styles from "app/page.module.css";
import "app/globals.css";
import { Inter } from "@next/font/google";
import { ListOfPosts } from "./ListOfPosts.jsx";

export default async function apiPost() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <section>
          <ListOfPosts />
        </section>
      </div>
    </main>
  );
}
