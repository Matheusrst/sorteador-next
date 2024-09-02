import React from 'react';
import styles from '../styles/WinnersCard.module.css';

interface WinnerCardProps {
    numWinners: number;
    onChange: (value: number) => void;
}

const WinnersCard: React.FC<WinnerCardProps> = ({ numWinners, onChange }) => {
    return (
        <div className={styles.card}>
            <span className={styles.label}>Ganhadores:</span>
            <input
                type="number"
                min="1"
                value={numWinners}
                onChange={(e) => onChange(Number(e.target.value))}
                className={styles.input}
            />
        </div>            
    );
};

export default WinnersCard;