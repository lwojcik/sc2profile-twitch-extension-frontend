import React from 'react';
import domRender from 'src/testUtils/domRender';
import { MemoryRouter } from 'react-router';
import Index from './Index';

const TestElement = () => (
  <MemoryRouter>
    <Index />
  </MemoryRouter>
);

it('renders without crashing', () => {
  domRender(TestElement);
});
