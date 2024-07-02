import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '../src/components/commons/Loading';

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => (key === 'loading' ? 'Loading...' : undefined),
  }),
}));

describe('Loading', () => {
  it('displays loading message', () => {
    render(<Loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
