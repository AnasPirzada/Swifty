import React from 'react';
import Card from 'react-bootstrap/Card';

const CashFlow = ({ title, imgSrc, text }) => {
  return (
    <Card style={{ width: '15rem', margin: '20px' }}>
      <Card.Body className='bg-black rounded-4 text-white'>
        <Card.Title>
          {title} <img src={imgSrc} width='25px' />
        </Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CashFlow;
