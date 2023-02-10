import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header';
import './Card.scss';

const Card = (props) => {
  const { children } = props;
  return (
    <div className="container-fluid">
      <Header/>
      <div className="card-wrap">
        <div className="card">
          { children } 
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Card;