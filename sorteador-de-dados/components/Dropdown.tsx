import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from '../styles/SorteioSimples.module.css';

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownHeader} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <FaChevronDown className={styles.chevronIcon} />
      </div>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map((option, index) => (
            <li 
              key={index} 
              className={styles.dropdownListItem}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
