import React from 'react';
import { Row, Col } from 'react-bootstrap';
export const Excelspreadsheet = () => {
  return (
    <div className='border border-1  rounded-6' style={{ width: '200px' }}>
      <Row>
        <Col className='p-2 d-flex justify-content-between rounded-6 align-items-center border border-1'>
          <div className='d-flex'>
            <img src='./vscode-icons_file-type-excel.svg' className='me-2 ' />
            <p className='my-0 text-white' style={{ fontSize: '14px' }}>
              Excelspreadsheet
            </p>
          </div>
          <div>
            <img src='./mdi_code.svg' />
          </div>
        </Col>
      </Row>
      <Row className='my-4'>
        <div className='mt-1'>
          <select
            className='w-100 p-2 border-1  rounded-3  text-white '
            style={{ background: '#121212' }}
          >
            <option value=''>Transaction ID</option>
            <option>Transaction ID</option>
            <option>Transaction ID</option>
            <option>Merchant name</option>
            <option>i don't want to do that </option>
              
          </select>
        </div>
        <div className='mt-3'>
          <select
            className='w-100 p-2 border-1  rounded-3  text-white '
            style={{ background: '#121212' }}
          >
            <option value='Amount'>From</option>
            <option>From</option>
            <option>From</option>
            <option>Amount credited</option>
            <option>i don't want to do that </option>
              
          </select>
        </div>
        <div className='mt-3'>
          <select
            className='w-100 p-2 border-1  rounded-3  text-white '
            style={{ background: '#121212' }}
          >
            <option value=''>To</option>
            <option>To</option>
            <option>To</option>
            <option>To</option>
          </select>
        </div>
        <div className='mt-3'>
          <select
            className='w-100 p-2 border-1  rounded-3  text-white '
            style={{ background: '#121212' }}
          >
            <option value=''>Date</option>
            <option>Date</option>
            <option>Date</option>
            <option>Date</option>
          </select>
        </div>
      </Row>
    </div>
  );
};
export default Excelspreadsheet;
