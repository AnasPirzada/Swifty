import React, { useState } from 'react';
import CustomTab from './tabBar.js';
import Assets from './pages/assets.js';
import Wallets from './pages/wallets.js';
import Highyeild from './pages/highyeild.js';

const MainTab = () => {
  const [activeTab, setActiveTab] = useState('Assets');

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <>
      <div>
        <CustomTab activeTab={activeTab} onTabClick={handleTabClick} />

        {activeTab === 'Assets' && <Assets />}
        {activeTab === 'Wallets' && <Wallets />}
        {activeTab === 'Highyeild' && <Highyeild />}
      </div>
    </>
  );
};

export default MainTab;
