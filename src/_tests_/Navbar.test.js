import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Navbar from '../components/Navbar/Navbar';

afterEach(() => {
  cleanup();
});

describe('Navbar', () => {
  it('renders navbar', () => {
    const tree = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
