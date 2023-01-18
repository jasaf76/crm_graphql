import "app/globals.css";
import Link from "next/link";
import styles from "app/components/navigation.module.css";
const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Bestellungen",
    route: "/bestellungen",
  },
  {
    label: "Produkte",
    route: "/produkte",
  },
  {
    label: "API",
    route: "/posts",
  },
  {
    label: "Dashboard",
    route: "/dashboard",
  },
];

export function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          {links.map(({ label, route }) => (
            <li key={route} className={styles.nav}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
