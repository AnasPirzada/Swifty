import React from 'react';

export const chart = () => {
  return (
    <table class='table'>
      <thead>
        <tr>
          <th scope='col'>Code</th>
          <th scope='col'>Account Name</th>
          <th scope='col'>Account Type</th>
          <th scope='col'>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row' className='text-muted'>
            200
          </th>
          <td className='text-muted'>Sales</td>
          <td className='text-muted'>Income</td>
          <td className='text-muted'>Sales From Goods</td>
        </tr>
      </tbody>
    </table>
  );
};
export default chart;
