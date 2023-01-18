import { Inter } from '@next/font/google'
import styles from 'app/page.module.css'
const inter = Inter({ subsets: ['latin'] })



 const ProduktePage =()=> {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by fetching&nbsp;
          <code className={styles.code}>Produkte </code>
        </p>
      </div>
    </main>
  );
}

export default ProduktePage