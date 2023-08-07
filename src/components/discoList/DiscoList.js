import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DiscoList.module.css';

const DiscoList = ({ discos, onDiscoClick }) => {
  return (
    <div className={styles.discoList}>
      {discos.map((disco) => (
        <Link to={`/disco/${disco.id}`} key={disco.id} className={styles.discoItem} onClick={() => onDiscoClick(disco.id)}>
          <img src={disco.image} alt={disco.name} className={styles.discoImage} />
          <h3>{disco.name}</h3>
          <p>{disco.address}</p>
        </Link>
      ))}
    </div>
  );
};

export default DiscoList;
