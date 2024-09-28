"use client"

import styles from "@/components/nav.module.css"

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <a href="./" className={styles.logo}>C-Cpp</a>
            <input className={styles.menubtn} type="checkbox" id="menu-btn" />
            <label className={styles.menuicon} htmlFor="menubtn"><span className={styles.navicon}></span></label>
            <ul className={styles.menu}>
                <li><a href="/">Home</a></li>
            </ul>
        </nav>
    );
}