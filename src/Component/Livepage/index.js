import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardBank from './bankCard.js';
import AirtabCard from './Airtable.js';
import NotiCard from './Notion.js';
import BlockCard from './Blockchain.js';
import ExcleCard from './Spreadsheet.js';
export const index = () => {
  return (
    <div className='p-1  '>
      <Container className='bg-black borderg'>
        <Row>
          <Col
            className=' p-5 d-flex flex-column justify-content-center align-items-center'
            xl={7}
            xs={12}
          >
            <Row>
              <CardBank />
            </Row>
            <Row className='d-flex justify-content-center align-items-center '>
              <img src='./Fork.svg' className='responimg' />
            </Row>
            <div className='d-flex columnnn'>
              <Row className='mt-5 mt-md-0 ms-0 ms-md-0'>
                <AirtabCard />
              </Row>
              <Row className='ms-0 mt-5 mt-md-0 ms-md-5'>
                <NotiCard />
              </Row>
            </div>
          </Col>
          <Col
            xl={5}
            xs={12}
            className='d-flex justify-content-between align-items-center columnnn'
          >
            <Row>
              <BlockCard />
            </Row>
            <div>
              <img
                src='./Snake.svg'
                className='responimg'
                style={{ width: '80%', marginLeft: '10px' }}
              />
            </div>
            <Row className='mt-4 mt-md-0'>
              <ExcleCard />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default index;
