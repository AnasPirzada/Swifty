import React, { useState } from 'react';
import CustomTab from './tabBar.js';
import CashFlow from './Pages-secondTab/Cashflow.js';
import Transactions from './Pages-secondTab/Transactions.js';
import Categories from './Pages-secondTab/Categories.js';

const MainTab = () => {
  const [activeTab, setActiveTab] = useState('CashFlow');

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <>
      <div>
        <CustomTab activeTab={activeTab} onTabClick={handleTabClick} />

        {activeTab === 'CashFlow' && <CashFlow />}
        {activeTab === 'Transactions' && <Transactions />}
        {activeTab === 'Categories' && <Categories />}
      </div>
    </>
  );
};

export default MainTab;
