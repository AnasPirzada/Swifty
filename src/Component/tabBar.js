import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './tabbar.css';

export const TabBar = ({ activeTab, onTabClick }) => {
  return (
    <Row
      className={`backbg-tab mt-5 ${
        activeTab === 'Highyeild' ? 'responsive-tab' : ''
      }`}
    >
      <Col>
        <button
          className={
            activeTab === 'Assets' ? 'bgactiveTab-btn shadow' : 'bgTab-btn'
          }
          onClick={() => onTabClick('Assets')}
        >
          Assets
        </button>
      </Col>
      <Col>
        <button
          className={
            activeTab === 'Wallets' ? 'bgactiveTab-btn shadow' : 'bgTab-btn'
          }
          onClick={() => onTabClick('Wallets')}
        >
          Wallets
        </button>
      </Col>
      <Col>
        <button
          className={
            activeTab === 'Highyeild' ? 'bgactiveTab-btn shadow' : 'bgTab-btn'
          }
          onClick={() => onTabClick('Highyeild')}
        >
          High-Yield Treasure Account
        </button>
      </Col>
    </Row>
  );
};

export default TabBar;
