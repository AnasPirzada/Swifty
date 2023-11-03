// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { MDBIcon } from 'mdb-react-ui-kit';
// import Table from 'react-bootstrap/Table';
// import proflepic from '../Tabelicons/ethereum.svg';

// export const assets = () => {
//   const customerData = [
//     {
//       price: '$15364',
//       name: 'Eth',
//       Percent: '70.44%',
//       Balance: '$54236 Eth',
//       Value: '$1235.2365',
//     },
//     {
//       price: '$15364',
//       name: 'Eth',
//       Percent: '70.44%',
//       Balance: '$54236 Eth',
//       Value: '$1235.2365',
//     },
//     {
//       price: '$15364',
//       name: 'Eth',
//       Percent: '70.44%',
//       Balance: '$54236 Eth',
//       Value: '$1235.2365',
//     },
//     {
//       price: '$15364',
//       name: 'Eth',
//       Percent: '70.44%',
//       Balance: '$54236 Eth',
//       Value: '$1235.2365',
//     },
//   ];

//   return (
//     <>
//       <Container className='mt-5 border border-dark'>
//         <Row className='m-4 d-flex justify-content-between align-items-center'>
//           <Col xs={12} md={6}>
//             <button
//               type='button'
//               className='border border-dark bg-dark text-white p-1'
//               style={{ width: '50%' }}
//             >
//               <MDBIcon icon='plus' /> Track Account/Wallet
//             </button>
//             <button
//               type='button'
//               className='border border-dark bg-light p-1 ms-4'
//               style={{ width: '30%' }}
//             >
//               <MDBIcon icon='plus' /> Change Currency
//             </button>
//           </Col>
//           <Col className='text-end'>
//             <h6>Total Balance</h6>
//             <h5>$659295,2556</h5>
//           </Col>
//         </Row>
//         <Row className='m-4'>
//           <table className='table'>
//             <thead>
//               <tr>
//                 <th scope='col'>
//                   <b> Currency</b>
//                 </th>
//                 <th scope='col'>
//                   <b>Price</b>
//                 </th>
//                 <th scope='col'>
//                   <b> Percent %</b>
//                 </th>
//                 <th scope='col'>
//                   <b>Balance</b>
//                 </th>
//                 <th scope='col'>
//                   <b>Value</b>
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {customerData.map((customer, index) => (
//                 <tr key={customer.id}>
//                   <td className='d-flex' style={{ height: '74px' }}>
//                     <img
//                       src={proflepic}
//                       className='rounded-4 me-2'
//                       alt=''
//                       width='30px'
//                       height='30px'
//                     />
//                     <p className='m-0'>{customer.name}</p>
//                   </td>
//                   <td className='text-secondary'>{customer.price}</td>
//                   <td className='text-secondary'>{customer.Percent}</td>
//                   <td className='text-secondary'>{customer.Balance}</td>
//                   <td className='text-secondary'>{customer.Value}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </Row>
//       </Container>
//     </>
//   );
// };
// export default assets;
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Assets = () => {
  const [tableIndex, setTableIndex] = useState(0);

  const handleShowNextTable = () => {
    setTableIndex(prevIndex => prevIndex + 1);
  };

  const handleShowPreviousTable = () => {
    setTableIndex(prevIndex => prevIndex - 1);
  };

  const customerData = [
    // Define your data for multiple tables here
    [
      {
        name: 'USDC',
        Balance: '5,782,482.84',
        Value: '$5,782,482.84',
        price: '$1',
        Percent: '44.87%',
      },
      {
        name: 'CADC',
        Balance: '2,287,415.12',
        price: '$15364',
        Percent: '70.44%',
        Value: '$1235.2365',
      },
      {
        name: 'USDC',
        Balance: '5,782,482.84',
        Value: '$5,782,482.84',
        price: '$1',
        Percent: '44.87%',
      },
      {
        name: 'CADC',
        Balance: '2,287,415.12',
        price: '$15364',
        Percent: '70.44%',
        Value: '$1235.2365',
      },
    ],
    [
      {
        name: 'USDC',
        Balance: '5,782,482.84',
        Value: '$5,782,482.84',
        price: '$1',
        Percent: '44.87%',
      },
      {
        name: 'CADC',
        Balance: '2,287,415.12',
        price: '$15364',
        Percent: '70.44%',
        Value: '$1235.2365',
      },
      {
        name: 'BTC',
        price: '$15364',
        Percent: '70.44%',
        Balance: '$54236 Eth',
        Value: '$1235.2365',
      },
      {
        name: 'USDC',
        Balance: '5,782,482.84',
        Value: '$5,782,482.84',
        price: '$1',
        Percent: '44.87%',
      },
    ],
    [
      {
        name: 'BTC',
        price: '$15364',
        Percent: '70.44%',
        Balance: '$54236 Eth',
        Value: '$1235.2365',
      },
      {
        name: 'BTC',
        price: '$15364',
        Percent: '70.44%',
        Balance: '$54236 Eth',
        Value: '$1235.2365',
      },
      {
        name: 'BTC',
        price: '$15364',
        Percent: '70.44%',
        Balance: '$54236 Eth',
        Value: '$1235.2365',
      },
      {
        name: 'BTC',
        price: '$15364',
        Percent: '70.44%',
        Balance: '$54236 Eth',
        Value: '$1235.2365',
      },
    ],
    // Add data for additional tables here
  ];

  const currentTableData = customerData[tableIndex];

  return (
    <>
      <Container className='border border-dark my-4' style={{ width: '90%' }}>
        <Row className='m-4 d-flex justify-content-between align-items-center'>
          <Col xs={12} md={6}>
            <h1>Assets</h1>
          </Col>
          <Col className='text-end'>
            <button
              type='button'
              className='border rounded-3 border-dark bg-light p-1 ms-4'
              style={{ width: '20%' }}
            >
              <img src='/Frame.svg' style={{ margin: '5px' }} /> Filter
            </button>
          </Col>
        </Row>
        <Row className='m-4'>
          <div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr className='border-black '>
                  <th scope='col'>
                    <b>Asset</b>
                  </th>
                  <th scope='col'>
                    <b>Balance</b>
                  </th>
                  <th scope='col'>
                    <b>Value</b>
                  </th>
                  <th scope='col'>
                    <b>Current Price</b>
                  </th>
                  <th scope='col'>
                    <b>Value %</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentTableData.map((customer, index) => (
                  <tr key={index} className='border-black '>
                    <td className='d-flex'>
                      <ul className='b'>
                        <li>
                          <b>{customer.name}</b>
                        </li>
                      </ul>
                    </td>
                    <td className='text-black '>
                      <b>{customer.price}</b>
                    </td>
                    <td className='text-black '>
                      <b>{customer.Percent}</b>
                    </td>
                    <td className='text-black '>
                      <b>{customer.Balance}</b>
                    </td>
                    <td className='text-black '>
                      <b>{customer.Value}</b>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Row>
        <Row>
          <Col lg={11}></Col>
          <Col lg={1}>
            <div className='d-flex  justify-content-center align-items-center m-3'>
              <button
                type='button'
                className='border-0 bg-transparent'
                onClick={handleShowPreviousTable}
                disabled={tableIndex === 0}
              >
                <img src='./fliter/left.svg' alt='Previous' />
              </button>
              <button
                type='button'
                className='border-0 bg-transparent ms-3'
                onClick={handleShowNextTable}
                disabled={tableIndex === customerData.length - 1}
              >
                <img src='./fliter/right.svg' alt='Next' />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Assets;
