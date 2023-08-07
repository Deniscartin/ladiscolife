import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className={styles.filter}>
      <label htmlFor="category">Seleziona una categoria:</label>
      <select id="category" value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
