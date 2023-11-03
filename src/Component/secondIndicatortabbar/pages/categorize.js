import React from 'react';
import reload from './svg/reload-ui-2-svgrepo-com.svg';
import book from './svg/book-open-svgrepo-com.svg';
import trash from './svg/trash-blank-alt-svgrepo-com.svg';
import hardware from './svg/monitor-svgrepo-com.svg';
export const categorize = () => {
  return (
    <table class='table'>
      <thead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Categories Transactions</th>
          <th scope='col'>Rules</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row' className='text-muted'>
            <span class='badge badge-success me-2'>
              <img src={reload} width='15px' />
            </span>
            internal
          </th>
          <td className='text-muted'>0</td>
          <td className='text-muted'>
            <input type='radio' className='me-2' />
            No active rule
          </td>
        </tr>
        <tr>
          <th scope='row' className='text-muted'>
            <span class='badge badge-success me-2'>
              <img src={trash} width='15px' />
            </span>
            Spam
          </th>
          <td className='text-muted'>9</td>
          <td className='text-muted'>
            <input type='radio' className='me-2' />
            No active rule
          </td>
        </tr>
        <tr>
          <th scope='row' className='text-muted'>
            <span class='badge badge-primary me-2'>
              <img src={book} width='15px' />
            </span>
            Education
          </th>
          <td className='text-muted'>4</td>
          <td className='text-muted'>
            <input type='radio' className='me-2' />
            No active rule
          </td>
        </tr>
        <tr>
          <th scope='row' className='text-muted'>
            <span class='badge badge-primary me-2'>
              <img src={hardware} width='15px' />
            </span>
            hardware
          </th>
          <td className='text-muted'>3</td>
          <td className='text-muted'>
            <input type='radio' className='me-2' />
            No active rule
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default categorize;
