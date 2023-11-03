import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Index = () => {
  const customerData = [
    {
      name: 'John Back',
      email: 'John.b@acme.com',
    },
    {
      name: 'John Back',
      email: 'John.b@acme.com',
    },
    {
      name: 'John Back',
      email: 'John.b@acme.com',
    },
  ];
  return (
    <>
      <Container className='drop-shadow my-5' style={{ height: '600px' }}>
        <Row className='d-flex align-items-center justify-content-between'>
          <Col>
            <h1>Team</h1>
          </Col>
          <Col xs='auto'>
            <button
              style={{
                width: '100%',
                border: '1px solid #000',
                backgroundColor: 'transparent',
                borderRadius: '5px',
              }}
            >
              + Add Member
            </button>
          </Col>
        </Row>
        <Row>
          <button
            type='button'
            className='bg-transparent rounded-2 ms-4'
            style={{
              width: '21%',
              border: '1px solid #000',
            }}
          >
            <img src='./tink.svg' className='p-3' />
            Learn more about roles
          </button>
        </Row>
        <Row>
          <table className='table'>
            <tbody>
              {customerData.map((customer, index) => (
                <div
                  key={customer.id}
                  className='d-flex bg- w-100  align-items-center justify-content-between '
                >
                  <p>
                    {' '}
                    <input type='checkbox' />
                    {customer.name}
                  </p>
                  <p>{customer.email} </p>
                  <p className='text-align-center'>
                    <select className='w-100 border-0 bg-transparent '>
                      <option value='Admin'></option>
                      <option>Admin</option>
                      <option>Team Member</option>
                      <option>Accountant</option>
                    </select>
                  </p>
                  <p className='d-flex'>
                    <button
                      type='button'
                      className='bg-black border-0 rounded-5 text-white me-2'
                      style={{ width: '100%' }}
                    >
                      Pending
                    </button>
                    <img src='./del.svg' />
                  </p>
                </div>
              ))}
            </tbody>
          </table>
        </Row>
      </Container>
    </>
  );
};

export default Index;
