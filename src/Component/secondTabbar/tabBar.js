import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './secondtabbar.css';

export const TabBar = ({ activeTab, onTabClick }) => {
  return (
    <Row className='backbg-tab mt-5'>
      <Col>
        <button
          className={
            activeTab === 'CashFlow' ? 'bgactiveTab-btn shadow' : 'bgTab-btn'
          }
          onClick={() => onTabClick('CashFlow')}
        >
          CashFlow
        </button>
      </Col>
      <Col>
        <button
          className={
            activeTab === 'Transactions'
              ? 'bgactiveTab-btn shadow'
              : 'bgTab-btn'
          }
          onClick={() => onTabClick('Transactions')}
        >
          Transactions
        </button>
      </Col>
      <Col>
        <button
          className={
            activeTab === 'Categories' ? 'bgactiveTab-btn shadow' : 'bgTab-btn'
          }
          onClick={() => onTabClick('Categories')}
        >
          Categories & chart of accounts
        </button>
      </Col>
    </Row>
  );
};

export default TabBar;
