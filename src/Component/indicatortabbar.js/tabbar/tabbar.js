import React from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs';
import History from './page/history.js';
import CustomTab from './tabs.jsx';
import Spam from './page/spam.js';
import Approve from './page/Approve.js';
import Uncategorized from './page/Uncategorized.js';

const Example = () => (
  <div>
    <Tabs activeTab='Spam'>
      <TabList>
        <Tab component={CustomTab} label='History' id='History' />
        <Tab component={CustomTab} label='Approve' id='Approve' />
        <Tab component={CustomTab} label='Uncategorized' id='Uncategorized' />
        <Tab component={CustomTab} label='Spam' id='Spam' />
      </TabList>
      <TabList>
        <TabPanel component={Spam} id='Spam' />
        <TabPanel component={History} id='History' />
        <TabPanel component={Approve} id='Approve' />
        <TabPanel component={Uncategorized} id='Uncategorized' />
      </TabList>
    </Tabs>
  </div>
);

export default Example;
