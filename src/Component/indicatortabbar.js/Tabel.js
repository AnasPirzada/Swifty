import React from 'react';
import Table from 'react-bootstrap/Table';
import arrow from './svg/curved-arrow-4564.svg';
import downarrow from './svg/curved-arrow-down.svg';
import Badge from 'react-bootstrap/Badge';

const TrackAccountTable = ({ data }) => {
  return (
    <Table striped bordered hover className='mt-4'>
      <th>
        <input type='checkbox' style={{ margin: '5px' }} />
        <b>Category</b>
      </th>
      <th>
        <b>From</b>
      </th>
      <th>
        <b>To</b>
      </th>
      <th>
        <b>Note & Attachment</b>
      </th>
      <th>
        <b>Method</b>
      </th>
      <th>
        <b>Status</b>
      </th>
      <th>
        <b>Amount</b>
      </th>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>
              <input type='checkbox' style={{ margin: '5px' }} />
              {item.category}
            </td>
            <td>
              {' '}
              <Badge bg='danger' style={{ width: '29px', margin: '5px' }}>
                <img src={arrow} width='15px' />
              </Badge>
              {item.from}
            </td>
            <td>
              <Badge bg='success' style={{ width: '29px', margin: '5px' }}>
                <img src={downarrow} width='15px' />
              </Badge>
              {item.to}
            </td>
            <td>{item.note}</td>
            <td>
              {item.method}
              <p className='text-muted'>Ethereum</p>
            </td>
            <td>{item.status}</td>
            <td>
              ${item.amount}
              <p className='text-muted'>$+78542.36 ETH</p>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TrackAccountTable;
