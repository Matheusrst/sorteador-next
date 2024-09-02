import React from 'react';
import styles from '../styles/SorteioSimples.module.css';

interface InputFieldProps {
  placeholder: string;
  icon?: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddName: () => void;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, icon, value, onChange, onAddName }) => {
  return (
    <div className={styles.inputFieldContainer}>
      <div className={styles.inputField}>
        {icon}
        <input
          type="text"
          placeholder={placeholder}
          className={styles.input}
          value={value}
          onChange={onChange}
        />
        <button onClick={onAddName} className={styles.addButton}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default InputField;
