import React from 'react';
import Sidebar from '../components/sidebar';
import Card from '../components/Card';
import { CiFilter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Sidebar />

      <div className={styles.content}>
        <a href="#sorteio-instagram">
        <Card icon={<FaInstagram size={60} />} text="Sorteio Pelo Instagram" variant="instagram" />
        </a>
        <a href="/sorteio-simples">
        <Card icon={<CiFilter size={60} />} text="Sorteio Simples" variant="simple" />
        </a>
      </div>
    </div>
  );
};

export default Home;
