import React, { useState } from 'react';
import styles from './BookingForm.module.css';

const BookingForm = ({ disco, onBookingSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      discoId: disco.id,
      name,
      email,
      guests: parseInt(guests),
    };
    onBookingSubmit(bookingData);
    // Clear form fields
    setName('');
    setEmail('');
    setGuests('');
  };

  return (
    <form className={styles.bookingForm} onSubmit={handleSubmit}>
      <h2>Prenota {disco.name}</h2>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="guests">Numero di Ospiti</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Prenota Ora
      </button>
    </form>
  );
};

export default BookingForm;
