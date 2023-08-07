// import React, { useState } from 'react';

// import './MappBTN.css'

// const MappBtn = () => {
//   const openWhatsApp = () => {
//     const phoneNumber = '+393885655449';
//     const message = 'voglio fare serataaaaaaa';
//     const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.open(url, '_blank');
//   };

//   return (
//     <div className='mappBtn'>
//       <button className="btn" type="button" onClick={openWhatsApp}>
//         <strong>BALLIAMO!</strong>
//         <div id="container-stars">
//           <div id="stars"></div>
//         </div>
//         <div id="glow">
//           <div className="circle"></div>
//           <div className="circle"></div>
//         </div>
//       </button>
//     </div>
//   );
// };

// export default MappBtn;

import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './MappBTN.css'

const MappBtn = () => {
  return (
    <Router>
      <div className='mappBtn'>
        <Link to="/mapppage">
          <button className="btn" type="button">
            <strong>BALLIAMO!</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </button>
        </Link>
      </div>
    </Router>
  );
};

export default MappBtn;


