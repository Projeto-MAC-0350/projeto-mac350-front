import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import ArtistInput from '../src/components/artists/ArtistInput';

describe('ArtistInput', () => {
  it('renders label correctly', () => {
    render(
      <Provider store={store}>
        <ArtistInput />
      </Provider>
    );
    expect(screen.getByText('artist-input.label1')).toBeInTheDocument();
  });
});
