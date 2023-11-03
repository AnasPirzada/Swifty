import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import eye from '../Tabelicons/eye.svg';
import plus from '../Tabelicons/plus.svg';
import Eth from '../Tabelicons/ethereum.svg';
import clipboard from '../Tabelicons/copy.svg';
import Rightarrow from '../Tabelicons/right-arrow.svg';
export const wallets = () => {
  return (
    <>
      <Container className='mt-5 border border-dark'>
        <Row className='d-flex justify-content-between align-items-center'>
          <Col className='d-flex justify-content-between align-items-center p-3'>
            <h3 className='fs-4'>
              {' '}
              <img src={eye} width='25px' />
              Tracked Wallets
            </h3>
            <h3 className='fs-5 bg-black p-2 text-white'>
              <img src={plus} width='25px' />
              Tracked Account/Wallets{' '}
              <span className='fs-6 p-1 rounded-4 pink-text'>New</span>
            </h3>
          </Col>
          <Col className='text-end'>
            <h5>$1,539,625.65</h5>
          </Col>
        </Row>
        <Row className='bg-black text-white m-3'>
          <Col className='d-flex justify-content-start align-items-center'>
            <img src={Eth} width='25px' />
            <h3 className='ms-2 fs-3 pt-1 text-align-center'>First</h3>
          </Col>
          <Col className='d-flex justify-content-center align-items-center'>
            <h6 className='fs-6 pt-3 text-align-center'>66554...ed32</h6>
            <img src={clipboard} className='m-2' width='25px' />
          </Col>
          <Col className='d-flex justify-content-end align-items-center'>
            <h6 className='fs-6 pt-3 text-align-center'>66554...ed32</h6>
            <img src={Rightarrow} className='m-2' width='25px' />
          </Col>
        </Row>
        <Row className='bg-black text-white m-3'>
          <Col className='d-flex justify-content-start align-items-center'>
            <img src={Eth} width='25px' />
            <h3 className='ms-2 fs-3 pt-1 text-align-center'>First</h3>
          </Col>
          <Col className='d-flex justify-content-center align-items-center'>
            <h6 className='fs-6 pt-3 text-align-center'>66554...ed32</h6>
            <img src={clipboard} className='m-2' width='25px' />
          </Col>
          <Col className='d-flex justify-content-end align-items-center'>
            <h6 className='fs-6 pt-3 text-align-center'>66554...ed32</h6>
            <img src={Rightarrow} className='m-2' width='25px' />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default wallets;
