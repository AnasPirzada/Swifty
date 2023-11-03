import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export const index = () => {
  return (
    <Container className='m-5'>
      <Row>
        <Col md={5} className='drop-shadow' style={{ height: '400px' }}>
          <Row>
            <h1>Profile</h1>
          </Row>
          <Row className='d-flex align-items-center'>
            <div className='col-6'>
              <ul className='b'>
                <li>Name</li>
              </ul>
            </div>
            <div className='col-6 text-right'>
              <h6>John Black</h6>
            </div>
          </Row>
          <Row className='d-flex align-items-center'>
            <div className='col-6'>
              <ul className='b'>
                <li>email address</li>
              </ul>
            </div>
            <div className='col-6 text-right'>
              <h6>John.b@acme.com</h6>
            </div>
          </Row>
          <Row className='d-flex align-items-center'>
            <div className='col-6'>
              <ul className='b'>
                <li>role</li>
              </ul>
            </div>
            <div className='col-6 text-right'>
              <h6>Admin</h6>
            </div>
          </Row>
          <Row className='d-flex align-items-center'>
            <div className='col-6'>
              <ul className='b'>
                <li>monthly update</li>
              </ul>
            </div>
            <div className='col-6 text-right'>
              <input type='checkbox' />
            </div>
          </Row>
        </Col>
        <Col md={2}></Col>
        <Col md={5} className='drop-shadow' style={{ height: '400px' }}>
          <Row>
            <h1>Company</h1>
          </Row>
          <Row className='d-flex align-items-center'>
            <div className='col-6'>
              <ul className='b'>
                <li>company name</li>
              </ul>
            </div>
            <div className='col-6 text-right'>
              <h6>ACME Inc.</h6>
            </div>
          </Row>
          <Row className='d-flex align-items-center'>
            <div className='col-6'>
              <ul className='b'>
                <li>Base currency</li>
              </ul>
            </div>
            <div className='col-6 text-right'>
              <h6>CAD</h6>
            </div>
          </Row>
          <Row className='d-flex align-items-center'>
            <div className='col-6'>
              <ul className='b'>
                <li>FIAT VERIFICATION</li>
              </ul>
            </div>
            <div className='col-6 text-right'>
              <input type='checkbox' />
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default index;
