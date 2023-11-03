import React from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs';
import CustomTab from './tabs.jsx';
import chart from './pages/chart.js';
import categorize from './pages/categorize.js';
import rules from './pages/rules.js';
import plus from '../Tabelicons/plus.svg';
const Example = () => (
  <div>
    <Tabs activeTab='categorize'>
      <TabList>
        <Tab component={CustomTab} label='Chart of Accounts' id='chart' />
        <Tab component={CustomTab} label='Categories' id='categorize' />
        <Tab component={CustomTab} label='Categorization rules' id='rules' />
        <button
          type='button'
          className='btn btn-primary'
          style={{ transform: 'translateX(550px)' }}
        >
          <img src={plus} width='20px' />
          Add Account
        </button>
      </TabList>
      <TabList>
        <TabPanel component={categorize} id='categorize' />
        <TabPanel component={rules} id='rules' />
        <TabPanel component={chart} id='chart' />
      </TabList>
    </Tabs>
  </div>
);

export default Example;
