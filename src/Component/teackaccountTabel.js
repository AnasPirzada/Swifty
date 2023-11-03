import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export const TrackAccountTable = () => {
  const customerData = [
    {
      name: 'John Back',
      Balance: '5,782,482.84',
      Value: '$5,782,482.84',
      price: '$1',
      Percent: '44.87%',
    },
    {
      name: 'John Back',
      Balance: '2,287,415.12',
      price: '$15364',
      Percent: '70.44%',
      Value: '$1235.2365',
    },
    {
      name: 'John Back',
      price: '$15364',
      Percent: '70.44%',
      Balance: '$54236 Eth',
      Value: '$1235.2365',
    },
    {
      name: 'John BackT',
      price: '$15364',
      Percent: '70.44%',
      Balance: '$54236 Eth',
      Value: '$1235.2365',
    },
    {
      name: 'John Back',
      price: '$15364',
      Percent: '70.44%',
      Balance: '$54236 Eth',
      Value: '$1235.2365',
    },
    {
      name: 'John Back',
      price: '$15364',
      Percent: '70.44%',
      Balance: '$54236 Eth',
      Value: '$1235.2365',
    },
  ];

  return (
    <Container className=' border border-dark my-4'>
      <Row className='m-4 d-flex justify-content-between align-items-center'>
        <Col xs={12} md={6}>
          <h1>Assets</h1>
        </Col>
        <Col className='text-end'>
          <button
            type='button'
            className='border rounded-3 border-dark bg-light p-1 ms-4'
            style={{ width: '20%' }}
          >
            <img src='./Frame.svg' style={{ margin: '5px' }} /> Filter
          </button>
        </Col>
      </Row>
      <Row className='m-4'>
        <table className='table'>
          <tbody>
            {customerData.map((customer, index) => (
              <tr key={customer.id}>
                <td className='d-flex border-0' style={{ height: '74px' }}>
                  <input type='checkbox' />
                  <p className='m-0 m-2 border-0'>{customer.name}</p>
                </td>
                <td className='text-secondary border-0'>{customer.price}</td>
                <td className='text-secondary border-0'>{customer.Percent}</td>
                <td className='text-secondary border-0'>{customer.Balance}</td>
                <td className='text-secondary border-0'>{customer.Value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Row>
    </Container>
  );
};

export default TrackAccountTable;
