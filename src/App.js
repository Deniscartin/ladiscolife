import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import DiscoList from './components/discoList/DiscoList';
import DiscoDetail from './components/discoDetail/DiscoDetail';
import BookingForm from './components/bookingForm/BookingForm';
import MappBtn from './components/mapp/MappBTN';
import MappPage from './components/mappPage/MappPage';

import styles from './App.module.css';

const dummyData = [
  {
    id: 1,
    name: 'Nice ',
    category: 'Musica Elettronica',
    address: 'Via delle Discoteche 123, Città',
    image: 'https://www.nicedisco.com/wp-content/uploads/2022/11/7K5C4528.jpg',
  },
  {
    id: 2,
    name: 'Live',
    category: 'Live Music',
    address: 'Piazza dei Musicisti 456, Città',
    image: 'https://www.nicedisco.com/wp-content/uploads/2022/11/7K5C4528.jpg',
  },
  {
    id: 3,
    name: 'Hip Hop',
    category: 'Hip-Hop/Rap',
    address: 'Via dei Rapper 789, Città',
    image: 'https://www.nicedisco.com/wp-content/uploads/2022/11/7K5C4528.jpg',
  },
  {
    id: 4,
    name: 'Vibes',
    category: 'R&B/Soul',
    address: 'Via delle Anime 101, Città',
    image: 'https://www.nicedisco.com/wp-content/uploads/2022/11/7K5C4528.jpg',
  },
  {
    id: 5,
    name: 'Reggaeton',
    category: 'Reggaeton',
    address: 'Via del Reggaeton 567, Città',
    image: 'https://www.nicedisco.com/wp-content/uploads/2022/11/7K5C4528.jpg',
  },
  {
    id: 6,
    name: 'Latin ',
    category: 'Latin',
    address: 'Piazza Latina 543, Città',
    image: 'https://www.nicedisco.com/wp-content/uploads/2022/11/7K5C4528.jpg',
  },
  {
    id: 7,
    name: 'Alternative ',
    category: 'Alternative',
    address: 'Via degli Alternativi 765, Città',
    image: 'https://www.nicedisco.com/wp-content/uploads/2022/11/7K5C4528.jpg',
  },
  {
    id: 8,
    name: 'Pride',
    category: 'LGBTQ+ Friendly',
    address: 'Via dell\'Arcobaleno 321, Città',
    image: 'https://www.nicedisco.com/wp-content/uploads/2022/11/7K5C4528.jpg',
  },
  {
    id: 9,
    name: 'Karaoke',
    category: 'Karaoke',
    address: 'Via del Karaoke 987, Città',
    image: 'https://www.nicedisco.com/wp-content/uploads/2022/11/7K5C4528.jpg',
  },
  {
    id: 10,
    name: 'Luxury',
    category: 'Locali di Lusso',
    address: 'Via del Lusso 654, Città',
    image: 'https://www.nicedisco.com/wp-content/uploads/2022/11/7K5C4528.jpg',
  }
];

const App = () => {
  const [discos, setDiscos] = useState(dummyData);
  const [selectedDisco, setSelectedDisco] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Elettronica');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Filtro i locali in base alla categoria selezionata
    const filteredDiscos = dummyData.filter((disco) => disco.category === category);
    setDiscos(filteredDiscos);
    setSelectedDisco(null); // Resetto il locale selezionato quando cambio categoria
  };

  const handleDiscoClick = (discoId) => {
    // Trovo il locale corrispondente all'id selezionato solo tra i locali filtrati per categoria
    const selectedDisco = discos.find((disco) => disco.id === discoId);
    setSelectedDisco(selectedDisco);
  };

  const handleBookingSubmit = (bookingData) => {
    // Qui puoi gestire la prenotazione, ad esempio inviarla al server o fare altre operazioni
    console.log('Booking submitted:', bookingData);
  };

  return (
    <div className={styles.app}>
      <MappBtn />

      <Router>
        <Navbar onCategoryChange={handleCategoryChange} />
        <div className={styles.container}>
          <div>
          <div className={styles.contCard}>
              <div className='mt-10'>
                <h1 style={{ fontSize: "40px", textAlign: 'left', color: 'white', textShadow: '3px black' }}>Ready for Tonight?</h1>
                <Routes>
                  <Route path="/" element={<DiscoList discos={discos} onDiscoClick={handleDiscoClick} />} />
                  <Route path="/disco/:id" element={<DiscoDetail disco={selectedDisco} />} />
                  <Route path="/mapppage" element={<MappPage />} />

                </Routes>
              </div>
            </div>
          </div>
          <div className={styles.contCard}>
            <div className='mt-10'>
              <h1 style={{ fontSize: "40px", textAlign: 'left', color: 'white', textShadow: '3px black' }}>Ready for Tonight?</h1>
              <Routes>
                <Route path="/" element={<DiscoList discos={discos} onDiscoClick={handleDiscoClick} />} />
                <Route path="/disco/:id" element={<DiscoDetail disco={selectedDisco} />} />
                <Route path="/mapppage" element={<MappPage />} />

              </Routes>
            </div>
          </div>
          <div className={styles.contCard}>
            <div className='mt-10'>
              <h1 style={{ fontSize: "40px", textAlign: 'left', color: 'white', textShadow: '3px black' }}>Ready for Tonight?</h1>
              <Routes>
                <Route path="/" element={<DiscoList discos={discos} onDiscoClick={handleDiscoClick} />} />
                <Route path="/disco/:id" element={<DiscoDetail disco={selectedDisco} />} />
                <Route path="/mapppage" element={<MappPage />} />

              </Routes>
            </div>
          </div>
          <div className={styles.contCard}>
            <div className='mt-10'>
              <h1 style={{ fontSize: "40px", textAlign: 'left', color: 'white', textShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px' }}>Ready for Tonight?</h1>
              <Routes>
                <Route path="/" element={<DiscoList discos={discos} onDiscoClick={handleDiscoClick} />} />
                <Route path="/disco/:id" element={<DiscoDetail disco={selectedDisco} />} />
                <Route path="/mapppage" element={<MappPage />} />
              </Routes>
            </div>
          </div>
        </div>

     

        {/* {selectedDisco && <BookingForm disco={selectedDisco} onBookingSubmit={handleBookingSubmit} />} Aggiungiamo BookingForm sotto la Navbar */}
      </Router>
    </div>
  );
};

export default App;
