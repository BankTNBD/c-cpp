import styles from "@/app/page.module.css";
import Nav from "@/components/nav";
import List from "@/components/list";

export default function Home() {
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <List />
      </main>
    </div>
  );
}
