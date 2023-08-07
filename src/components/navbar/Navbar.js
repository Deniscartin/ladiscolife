import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'; // Importiamo Link da react-router-dom
import {
  faMusic,
  faMicrophoneAlt,
  faCompactDisc,
  faGuitar,
  faDrum,
  faHeadphones,
  faBroadcastTower,
  faRainbow,
  faMicrophone,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';

const dummyCategories = [
  { name: 'Elettronica', icon: faMusic },
  { name: 'Live', icon: faMicrophoneAlt },
  { name: 'Reggaetton', icon: faCompactDisc },
  { name: 'R&B/Soul', icon: faGuitar },
  { name: 'Reggaeton', icon: faDrum },
  { name: 'Latin', icon: faHeadphones },
  { name: 'Alternative', icon: faBroadcastTower },
  { name: 'LGBTQ+', icon: faRainbow },
  { name: 'Karaoke', icon: faMicrophone },
  { name: 'Esclusiva', icon: faStar },
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div id="container-stars" className={styles.containerStars}></div>
      <ul className={styles.menu}>
        {dummyCategories.map((category, index) => (
          <li key={index} className={styles.menuItem}>
            <Link to={`/`} className={styles.link}>
              {category.name}
              <FontAwesomeIcon icon={category.icon} className={styles.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
