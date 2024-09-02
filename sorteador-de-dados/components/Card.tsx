import React from 'react';
import { FaInstagram, FaFilter } from 'react-icons/fa';
import styles from '../styles/Home.module.css';

interface CardProps {
  icon: React.ReactNode;
  text: string;
  variant: 'instagram' | 'simple';
}

const Card: React.FC<CardProps> = ({ icon, text, variant }) => {
  return (
    <div className={`${styles.card} ${variant === 'instagram' ? styles.instagramCard : styles.simpleCard}`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default Card;
