import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export const ModalCard = () => {
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
                  <b>Detail</b> <img src='./ModalCard/radioButton.svg' />
                </p>
                <p>
                  <b>Chart of Account</b>
                </p>
              </div>
            </Row>
            <Col className='border border-1 border-dark bg-light p-3 rounded-5'>
              <Row>
                <p>
                  <b>TRANSACTION ID (TXID)</b>
                </p>
                <div className='d-flex flex-wrap justify-content-between align-items-center border-bottom'>
                  <p className='flex-grow-1' style={{ fontSize: '1.1vw' }}>
                    <b>0x742d35Cc6634C0532925a3b844Bc454e4438f44e</b>
                  </p>
                  <p>
                    <img src='./ModalCard/copyIcon.svg' />
                  </p>
                </div>
              </Row>
              <Row>
                <p>
                  <b>From</b>
                </p>
                <div className='d-flex flex-wrap justify-content-between align-items-center border-bottom'>
                  <p className='flex-grow-1' style={{ fontSize: '1.1vw' }}>
                    <b>0x8Df45aAd5E67DfA4D63fB6a1BbD8b109B3e5e3fD</b>
                  </p>
                  <p>
                    <img src='./ModalCard/copyIcon.svg' />
                  </p>
                </div>
              </Row>
              <Row>
                <div className='d-flex  justify-content-between align-items-center '>
                  <p>
                    <b>to</b>
                  </p>
                  <p>
                    <b>Payroll wallet</b>
                  </p>
                </div>
                <div className='d-flex flex-wrap justify-content-between align-items-center '>
                  <p className='flex-grow-1' style={{ fontSize: '1.1vw' }}>
                    <b>0x8Df45aAd5E67DfA4D63fB6a1BbD8b109B3e5e3fD</b>
                  </p>
                  <p>
                    <img src='./ModalCard/copyIcon.svg' />
                  </p>
                </div>
              </Row>
            </Col>
            <Col className='border border-1 border-dark bg-light p-3 mt-4 rounded-5 '>
              <Row>
                <div className='d-flex justify-content-between align-items-center border-bottom'>
                  <p>
                    <b>Asset</b>
                  </p>
                  <p>
                    <b>110 USDt</b>
                  </p>
                </div>
              </Row>
              <Row>
                <div className='d-flex justify-content-between align-items-center border-bottom'>
                  <p>
                    <b>Value</b>
                  </p>
                  <p>
                    <b>$110</b>
                  </p>
                </div>
              </Row>
              <Row>
                <div className='d-flex justify-content-between align-items-center border-bottom'>
                  <p>
                    <b>
                      Cost per unit <img src='./ModalCard/pencile.svg' />
                    </b>
                  </p>
                  <p>
                    <b>$20,000 | 1 USDT</b>
                  </p>
                </div>
              </Row>
              <Row>
                <div className='d-flex justify-content-between align-items-center border-bottom'>
                  <p>
                    <b>
                      Fees <img src='./ModalCard/pencile.svg' />
                    </b>
                  </p>
                  <p>
                    <b>$1 | 1 USDT</b>
                  </p>
                </div>
              </Row>
            </Col>
            <p>
              <b>Note</b>
            </p>
            <textarea className='border border-1 border-dark w-100 rounded-5'></textarea>
            <div className='d-flex justify-content-center align-items-center'>
              <button
                type='button'
                className='p-2 bg-black text-white rounded-6 border-0'
              >
                <img src='./ModalCard/uploadbutton.svg' className='me-2' />{' '}
                Transfer Money Now
              </button>
            </div>

            <div className='mt-3 d-flex justify-content-between align-items-center border border-1 p-1 mb-3 rounded-6'>
              <p className='my-0 '>
                <b>Receipt.pdf</b>
              </p>
              <p className='my-0 '>
                <img src='./ModalCard/delButton.svg' />
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ModalCard;
