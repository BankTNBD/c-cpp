"use client"

import styles from '@/app/view/[id]/page.module.css'
import Nav from "@/components/nav";
import Content from '@/components/content';


export default function Page({ params }) {

  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <Content id={params.id} />
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}