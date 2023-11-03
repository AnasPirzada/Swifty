import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export const index = () => {
  const customerData = [
    {
      code: '100',
      account: 'Cash',
      type: 'Bank',
      desc: 'Cash in CIBC Bank',
    },
    {
      code: '100',
      account: 'Cash',
      type: 'Bank',
      desc: 'Cash in CIBC Bank',
    },
  ];
  return (
    <Container className='m-5'>
      <Row>
        <Col xs={12} md={5} className='drop-shadow' style={{ height: '400px' }}>
          <Row>
            <div className='d-flex justify-content-between align-items-center'>
              <h4 className='text-black'>
                <b>chart of accounts</b>
              </h4>
              <button
                type='button'
                className='bg-transparent border-1 rounded-2'
                style={{ width: '30%' }}
              >
                + Add Account
              </button>
            </div>
          </Row>
          <Row>
            <Col md={12} className='mt-4'>
              <thead>
                <tr className='m-2 border-bottom'>
                  <th
                    scope='col'
                    style={{ fontSize: '13px', marginLeft: '3px' }}
                  >
                    <b className='text-uppercase'> Code</b>
                  </th>
                  <th
                    scope='col'
                    style={{ fontSize: '13px', paddingLeft: '25px' }}
                  >
                    <b className='text-uppercase'>account name</b>
                  </th>
                  <th
                    scope='col'
                    style={{ fontSize: '13px', paddingLeft: '25px' }}
                  >
                    <b className='text-uppercase'> account type</b>
                  </th>
                  <th
                    scope='col'
                    style={{ fontSize: '13px', paddingLeft: '25px' }}
                  >
                    <b className='text-uppercase'>description</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                {customerData.map((customer, index) => (
                  <tr key={customer.id}>
                    <td>
                      <p className='my-0'>{customer.code}</p>
                    </td>
                    <td
                      className='text-secondary'
                      style={{ paddingLeft: '25px' }}
                    >
                      {customer.account}
                    </td>
                    <td
                      className='text-secondary'
                      style={{ paddingLeft: '25px' }}
                    >
                      {customer.type}
                    </td>
                    <td
                      className='text-secondary'
                      style={{ paddingLeft: '25px' }}
                    >
                      {customer.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Col>
          </Row>
        </Col>
        <Col md={2}></Col>
        <Col xs={12} md={5} className='drop-shadow' style={{ height: '400px' }}>
          <Row>
            <h1>Company</h1>
          </Row>
          <Row>
            <div className='d-flex justify-content-between  align-items-center border-bottom '>
              <p className='my-0'>Categories</p>
              <p className='my-0'>Category rules</p>
            </div>
          </Row>
          <Row className=' mt-3 d-flex align-items-center'>
            <div className='col-6'>
              <ul className='b'>
                <li>Expense</li>
              </ul>
              <ul className='b'>
                <li>Income</li>
              </ul>
              <ul className='b'>
                <li>Sales</li>
              </ul>
              <ul className='b'>
                <li>Payroll</li>
              </ul>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default index;
