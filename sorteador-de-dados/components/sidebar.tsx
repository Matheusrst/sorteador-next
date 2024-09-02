import React from 'react';
import { CiFilter } from "react-icons/ci";
import styles from '../styles/Home.module.css';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <CiFilter size={24} />
        <span>Sort App</span>
      </div>
      <nav>
            <a href="#sorteador" className={styles.navLink}>
              <button className={styles.navButton}>Sorteador</button>
            </a>
            <a href="#sorteio-instagram" className={styles.navLink}>
              <button className={styles.navButton}>Sorteio pelo Instagram</button>
            </a>
            <a href="#minha-conta" className={styles.navLink}>
              <button className={styles.navButton}>Minha conta</button>
            </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
