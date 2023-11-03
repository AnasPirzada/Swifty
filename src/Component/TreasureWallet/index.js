import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const index = () => {
  return (
    <>
      <Container className='drop-shadow'>
        <Row>
          <h3 className='text-black'>Treasury vault</h3>
        </Row>
        <Row className='py-5 d-flex justify-content-center align-item-center'>
          <p className='text-center'>
            Swyftes Treasury Vault let’s you grow your money through high-yield
            treasury products
          </p>
          <button
            type='button'
            className='bg-black border-0 rounded-5 p-2 text-white'
            style={{ width: '30%' }}
          >
            Coming soon
          </button>
        </Row>
      </Container>
      <Container className='mt-4 drop-shadow'>
        <Row>
          <Col md={5}>
            <div className='d-flex mt-4'>
              <h3 className='text-black' style={{ textAlign: 'left' }}>
                Transactions
              </h3>
              <button
                type='button'
                className='bg-transparent border-1 rounded-2 ms-4'
              >
                + Add Transaction
              </button>
            </div>
          </Col>
          <Col md={4}>
            <h3 className='text-black'></h3>
          </Col>
          <Col md={3}>
            <div className='d-flex mt-4'>
              <button
                type='button'
                className='bg-transparent border-1 rounded-2 ms-4'
              >
                CSV Export
              </button>
              <button
                type='button'
                className='bg-transparent border-1 rounded-2 ms-4'
                style={{ width: '40%' }}
              >
                <img
                  src='./fliter/Vector.svg'
                  style={{ width: '20%', marginRight: '10px' }}
                />{' '}
                Filter
              </button>
            </div>
          </Col>
        </Row>
        <Row className='py-5 d-flex justify-content-center align-item-center'>
          <table class='table'>
            <thead>
              <tr>
                <th scope='col' className='text-capitalize '>
                  <b>Asset</b>
                </th>
                <th scope='col' className='text-capitalize '>
                  <b>value</b>
                </th>
                <th scope='col' className='text-capitalize '>
                  <b>from</b>
                </th>
                <th scope='col' className='text-capitalize '>
                  <b>to</b>
                </th>
                <th scope='col' className='text-capitalize '>
                  <b>category</b>
                </th>
                <th scope='col' className='text-capitalize '>
                  <b>date</b>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>7,329.61 USDC</th>
                <td>$7,329.61</td>
                <td>0x64...7b22</td>
                <td>Payroll Wallet</td>
                <td>
                  <button
                    type='button'
                    className='bg-transparent border-1 rounded-5 w-100'
                  >
                    Payroll
                  </button>
                </td>
                <td>
                  August 23, 2023{' '}
                  <img src='./fliter/arrow.svg' className='right-0' />
                </td>
              </tr>
              <tr>
                <th scope='row'>7,329.61 USDC</th>
                <td>$7,329.61</td>
                <td>0x64...7b22</td>
                <td>Payroll Wallet</td>
                <td className='text-center'>+</td>
                <td>
                  August 23, 2023 <img src='./fliter/arrow.svg' />
                </td>
              </tr>
              <tr>
                <th scope='row'>7,329.61 USDC</th>
                <td>$7,329.61</td>
                <td>0x64...7b22</td>
                <td>Payroll Wallet</td>
                <td className='text-center'>+</td>
                <td>
                  August 23, 2023 <img src='./fliter/arrow.svg' />
                </td>
              </tr>
            </tbody>
          </table>
        </Row>
      </Container>
    </>
  );
};
export default index;
