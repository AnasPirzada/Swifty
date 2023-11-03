import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
export const SecondCard = () => {
  return (
    <>
      <Container>
        <Row className='m-5 text-black '>
          <Col md={8} className='border border0-1'>
            <Row>
              <p className='text-capitalize'>
                <b>Time</b>
              </p>
            </Row>
            <Row className='mt-2 p-3'>
              <div className='border-bottom d-flex justify-content-between align-items-center text-capitalize '>
                <p>
                  <b>Detail</b>
                </p>
                <p>
                  <b>
                    Chart of Account <img src='./ModalCard/radioButton.svg' />
                  </b>
                </p>
              </div>
            </Row>
            <Col className='border border-1 border-dark bg-light p-3 rounded-5'>
              <Row>
                <p>
                  <b>TRANSACTION ID (TXID)</b>
                </p>
                <div className='d-flex flex-wrap justify-content-between align-items-center border-bottom'>
                  <select
                    className='w-100 rounded-3'
                    style={{
                      background: '#fff',
                      border: 'none',
                    }}
                  >
                    <option value='[100] cash'></option>
                    <option>[100] cash</option>
                    <option>LinkedIn</option>
                    <option>Grepper</option>
                    <option>i don't want to do that </option>
                      
                  </select>
                </div>
              </Row>
              <Row>
                <p>
                  <b>Debited account</b>
                </p>
                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                  <select
                    className='w-100 rounded-3'
                    style={{
                      background: '#fff',
                      border: 'none',
                    }}
                  >
                    <option value='[100] cash'></option>
                    <option>[100] cash</option>
                    <option>LinkedIn</option>
                    <option>Grepper</option>
                    <option>i don't want to do that </option>
                      
                  </select>
                </div>
              </Row>
            </Col>
            <Col className='mt-3 border border-1 border-dark bg-light p-3 rounded-5'>
              <Row>
                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                  <p>
                    <b>Fee Debited account</b>
                  </p>
                  <select
                    className='w-100 p-2 border-1  rounded-3 '
                    style={{
                      background: '#fff',
                      border: 'none',
                    }}
                  >
                    <option value=''></option>
                    <option>gitHub</option>
                    <option>LinkedIn</option>
                    <option>Grepper</option>
                    <option>i don't want to do that </option>
                      
                  </select>
                </div>
              </Row>
              <Row>
                <p>
                  <b>Fee Debited account</b>
                </p>
                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                  <p className='flex-grow-1'>
                    <b></b>
                  </p>
                  <select
                    className='w-100 p-2 border-1  rounded-3 '
                    style={{ background: '#fff', border: 'none' }}
                  >
                    <option value=''></option>
                    <option>gitHub</option>
                    <option>LinkedIn</option>
                    <option>Grepper</option>
                    <option>i don't want to do that </option>
                      
                  </select>
                </div>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SecondCard;
