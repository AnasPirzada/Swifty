import React from 'react';
import { Row, Container } from 'react-bootstrap';
import iconFIlter from './svg/filter-6554.svg';
import search from './svg/search-2903.svg';
import Tabel from './Tabel.js';
const data = [
  {
    category: 'Add',
    from: 'Wallet 1',
    to: '@Wallet 2',
    note: '',
    method: 'Transfer',
    status: 'Settled',
    amount: 170,
  },
  {
    category: 'Add',
    from: 'Wallet 1',
    to: '@Wallet 2',
    note: '',
    method: 'Transfer',
    status: 'Settled',
    amount: 170,
  },
  {
    category: 'Add',
    from: 'Wallet 1',
    to: '@Wallet 2',
    note: '',
    method: 'Transfer',
    status: 'Settled',
    amount: 170,
  },
  {
    category: 'Add',
    from: 'Wallet 1',
    to: '@Wallet 2',
    note: '',
    method: 'Transfer',
    status: 'Settled',
    amount: 170,
  },
];
function App() {
  return (
    <Container>
      <Row className='d-flex justify-content-between align-items-center'>
        <button
          type='submit'
          style={{
            backgroundColor: '#000',
            color: '#fff',
            width: '15%',
            border: 'none',
          }}
        >
          <img src={iconFIlter} width='10px' style={{ marginRight: '10px' }} />
          FIlter
        </button>
        <img
          src={search}
          style={{
            width: '40px',
            transform: 'translateX(275px)',
          }}
        />
        <input
          type='text'
          placeholder='Search By Transaction Hash,Wallet Address,note...'
          style={{ paddingLeft: '40px', width: '40%' }}
        />
      </Row>
      <Tabel data={data} />
    </Container>
  );
}

export default App;
