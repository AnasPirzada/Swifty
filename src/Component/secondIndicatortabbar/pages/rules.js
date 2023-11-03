import React from 'react';
import { Container, Row } from 'react-bootstrap';

export const rules = () => {
  return (
    <Container className='mt-5'>
      <Row className='bg bg-black'>
        <h1 className='text-white'>You have not added any rule yet</h1>
      </Row>
    </Container>
  );
};
export default rules;
