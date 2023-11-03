import React from 'react';

const style = {
  padding: '10px 0',
  borderBottom: '3px solid transparent',
  display: 'inline-block',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  width: '15%',
  color: '#000',
  textAlign: 'center',
  fontSize: '16px',
};

const activeStyle = {
  ...style,
  color: '#000',
  borderBottom: '3px solid black',
};

const CustomTab = ({ children, isActive }) => (
  <span style={isActive ? activeStyle : style}>{children}</span>
);

export default CustomTab;
