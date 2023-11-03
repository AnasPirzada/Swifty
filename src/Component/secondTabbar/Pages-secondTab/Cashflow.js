import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import CashflowCard from './cashflowCard/cashFLow.js';
import info from '../svg/info.svg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Cashflow = () => {
  return (
    <Container>
      <Row className='d-flex border border-dark mt-3'>
        <Col xs={3}>
          <CashflowCard
            title="Today's Balance"
            imgSrc={info}
            text='$62345879'
          />
        </Col>
        <Col xs={3}>
          <CashflowCard title='Inflow' text='$78541236' />
        </Col>
        <Col xs={3}>
          <CashflowCard title='OutFlow' text='$213654' />
        </Col>
        <Col xs={3}>
          <CashflowCard title='Net Change' text='$13658' />
        </Col>
      </Row>
      <Row className='border border-dark mt-4 p-2 align-items-center'>
        <div className='col-1 text-center'>
          <span
            className='d-flex justify-content-center align-items-center badge bg-danger text-white'
            style={{
              width: '100%',
              height: '40px',
            }}
          >
            Tip
          </span>
        </div>
        <div className='col-9'>
          <p className='text-dark '>
            Another widespread application of text categorization is spam
            filtering, where email messages are classified into the two
            categories of spam and non-spam.
          </p>
        </div>
        <div className='col-2'>
          <button
            className='border border-dark bg-black text-white p-2 w-100'
            type='button'
          >
            categorize
          </button>
        </div>
      </Row>
      <Row>
        <Col className='d-flex justify-content-between align-items-center'>
          <h1 className='text-black'>Cashflow</h1>
          <Button variant='primary'>Export To Csv</Button>
        </Col>
      </Row>
      <Col>
        <h1>Graph</h1>
      </Col>
      {/* Last Cards */}
      <Row>
        {/* First Card */}
        <Col>
          <Card style={{ width: '25rem' }} className='border border-dark p-4'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <h3>Outflow</h3>
                <h6>$32,548,987</h6>
              </div>
            </div>
            <Row className='flex-grow-1 d-flex align-items-center'>
              <Col
                lg={8}
                className='d-flex justify-content-space-between align-items-center'
              >
                <ProgressBar
                  variant='warning'
                  now={75}
                  style={{ marginRight: '5px', flex: 1 }}
                />
                <div style={{ marginRight: '10px', fontSize: '12px' }}>
                  $6325489952
                </div>
              </Col>
              <Col lg={4}>
                <div>
                  <h3 className='text-dark' style={{ fontSize: '15px' }}>
                    Uncategorized
                  </h3>
                </div>
              </Col>
            </Row>
            <Row className='flex-grow-1 d-flex align-items-center'>
              <Col
                lg={8}
                className='d-flex justify-content-space-between align-items-center'
              >
                <ProgressBar
                  variant='warning'
                  now={15}
                  style={{ marginRight: '5px', flex: 1 }}
                />
                <div style={{ marginRight: '10px', fontSize: '12px' }}>
                  $4521
                </div>
              </Col>
              <Col lg={4}>
                <div>
                  <h3 className='text-dark' style={{ fontSize: '15px' }}>
                    Cash Expense
                  </h3>
                </div>
              </Col>
            </Row>
            <Row className='flex-grow-1 d-flex align-items-center'>
              <Col
                lg={8}
                className='d-flex justify-content-space-between align-items-center'
              >
                <ProgressBar
                  variant='warning'
                  now={55}
                  style={{ marginRight: '5px', flex: 1 }}
                />
                <div style={{ marginRight: '10px', fontSize: '12px' }}>
                  $1236
                </div>
              </Col>
              <Col lg={4}>
                <div>
                  <h3 className='text-dark' style={{ fontSize: '15px' }}>
                    Education
                  </h3>
                </div>
              </Col>
            </Row>
            <Row className='flex-grow-1 d-flex align-items-center'>
              <Col
                lg={8}
                className='d-flex justify-content-space-between align-items-center'
              >
                <ProgressBar
                  variant='warning'
                  now={5}
                  style={{ marginRight: '5px', flex: 1 }}
                />
                <div style={{ marginRight: '10px', fontSize: '12px' }}>
                  $236
                </div>
              </Col>
              <Col lg={4}>
                <div>
                  <h3 className='text-dark' style={{ fontSize: '15px' }}>
                    Hardware
                  </h3>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        {/* Second Cards */}
        <Col>
          <Card style={{ width: '25rem' }} className='border border-dark p-4'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <h3>Outflow</h3>
                <h6>$32,548,987</h6>
              </div>
            </div>
            <Row className='flex-grow-1 d-flex align-items-center'>
              <Col
                lg={8}
                className='d-flex justify-content-space-between align-items-center'
              >
                <ProgressBar
                  variant='success'
                  now={75}
                  style={{ marginRight: '5px', flex: 1 }}
                />
                <div style={{ marginRight: '10px', fontSize: '12px' }}>
                  $6325489952
                </div>
              </Col>
              <Col lg={4}>
                <div>
                  <h3 className='text-dark' style={{ fontSize: '15px' }}>
                    Uncategorized
                  </h3>
                </div>
              </Col>
            </Row>
            <Row className='flex-grow-1 d-flex align-items-center'>
              <Col
                lg={8}
                className='d-flex justify-content-space-between align-items-center'
              >
                <ProgressBar
                  variant='success'
                  now={15}
                  style={{ marginRight: '5px', flex: 1 }}
                />
                <div style={{ marginRight: '10px', fontSize: '12px' }}>
                  $4521
                </div>
              </Col>
              <Col lg={4}>
                <div>
                  <h3 className='text-dark' style={{ fontSize: '15px' }}>
                    Cash Expense
                  </h3>
                </div>
              </Col>
            </Row>
            <Row className='flex-grow-1 d-flex align-items-center'>
              <Col
                lg={8}
                className='d-flex justify-content-space-between align-items-center'
              >
                <ProgressBar
                  variant='success'
                  now={55}
                  style={{ marginRight: '5px', flex: 1 }}
                />
                <div style={{ marginRight: '10px', fontSize: '12px' }}>
                  $1236
                </div>
              </Col>
              <Col lg={4}>
                <div>
                  <h3 className='text-dark' style={{ fontSize: '15px' }}>
                    Education
                  </h3>
                </div>
              </Col>
            </Row>
            <Row className='flex-grow-1 d-flex align-items-center'>
              <Col
                lg={8}
                className='d-flex justify-content-space-between align-items-center'
              >
                <ProgressBar
                  variant='success'
                  now={5}
                  style={{ marginRight: '5px', flex: 1 }}
                />
                <div style={{ marginRight: '10px', fontSize: '12px' }}>
                  $236
                </div>
              </Col>
              <Col lg={4}>
                <div>
                  <h3 className='text-dark' style={{ fontSize: '15px' }}>
                    Hardware
                  </h3>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Cashflow;
