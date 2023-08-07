// DiscoDetail.js

import React from 'react';
import styles from './DiscoDetail.module.css';

const DiscoDetail = ({ disco }) => {
  return (
    <div className={styles.discoDetail}>
      <div className={styles.leftColumn}>
        <div className={styles.discoImageContainer}>
          <img src={disco.image} alt={disco.name} className={styles.discoImage} />
        </div>
        <div className={styles.discoInfo}>
          <h2 className={styles.discoName}>{disco.name}</h2>
          <p className={styles.discoCategory}>{disco.category}</p>
          <p className={styles.discoAddress}>{disco.address}</p>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.vipPackages}>
          <h3 className={styles.vipHeading}>Pacchetti Ingresso VIP</h3>
          <div className={styles.vipPackage}>
            <a href="#" className={styles.vipPackageCard}>
              <h4>Package VIP Silver</h4>
              <p>Accesso VIP con posti riservati</p>
              <p>Drink di benvenuto</p>
              <p>Prezzo: €50</p>
            </a>
          </div>
          <div className={styles.vipPackage}>
            <a href="#" className={styles.vipPackageCard}>
              <h4>Package VIP Gold</h4>
              <p>Accesso VIP con posti riservati</p>
              <p>Drink di benvenuto</p>
              <p>Accesso all'area VIP</p>
              <p>Prezzo: €80</p>
            </a>
          </div>
          <div className={styles.vipPackage}>
            <a href="#" className={styles.vipPackageCard}>
              <h4>Package VIP Platinum</h4>
              <p>Accesso VIP con posti riservati</p>
              <p>Drink di benvenuto</p>
              <p>Accesso all'area VIP</p>
              <p>Una bottiglia di champagne</p>
              <p>Prezzo: €150</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoDetail;
