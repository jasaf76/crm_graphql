import { Inter } from "@next/font/google";
import styles from "app/page.module.css";



const inter = Inter({ subsets: ["latin"] });

export default function Bestellungen() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
       
          <code className={styles.code}>Bestellungen</code>
        </p>
      </div>
    </main>
  );
}
