import React, { useState } from 'react';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Dropdown from '../components/Dropdown';
import WinnersCard from '../components/WinnersCard';
import { CiFilter } from 'react-icons/ci';
import styles from '../styles/SorteioSimples.module.css';

const SorteioSimples: React.FC = () => {
  const [name, setName] = useState('');
  const [namesList, setNamesList] = useState<string[]>([]);
  const [numWinners, setNumWinners] = useState(3);
  const [winners, setWinners] = useState<string[]>([]);

  const handleAddName = () => {
    if (name.trim() !== '') {
      setNamesList((prevNames) => [...prevNames, name]);
      setName('');
    }
  };

  const handleSorteio = () => {
    if (namesList.length < numWinners) {
      alert('Número de ganhadores maior que o número de participantes!');
      return;
    }

    const shuffledNames = [...namesList].sort(() => 0.5 - Math.random());
    const selectedWinners = shuffledNames.slice(0, numWinners);
    setWinners(selectedWinners);
    console.log("Ganhadores:", selectedWinners);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Sorteio Simples</h1>

        <Dropdown options={['Sorteio Por Nomes']} onSelect={(option) => console.log(option)} />

        <InputField
          placeholder="NOMES PARA O SORTEIO"
          icon={<CiFilter size={40} />}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onAddName={handleAddName}
        />

        <ul className={styles.namesList}>
          {namesList.map((n, index) => (
            <li key={index} className={styles.nameItem}>
              {n}
            </li>
          ))}
        </ul>

        <div className={styles.controls}>
          <WinnersCard numWinners={numWinners} onChange={setNumWinners} />
          <Button text="Realizar Sorteio" onClick={handleSorteio} />
        </div>

        {winners.length > 0 && (
          <div className={styles.winnersList}>
            <h2>Ganhadores:</h2>
            <ul>
              {winners.map((winner, index) => (
                <li key={index}>{winner}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SorteioSimples;
