import React from 'react';
import { render, fireEvent, waitFor } from '../../../testUtils';

import Alert from './Alert';

describe('<Alert />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with all types', () => {
      const alerts = [
        <Alert show type="neutral" key="neutral">
          Alert
        </Alert>,
        <Alert show type="info" key="info">
          Alert
        </Alert>,
        <Alert show type="warning" key="warning">
          Alert
        </Alert>,
        <Alert show type="danger" key="danger">
          Alert
        </Alert>,
        <Alert show type="success" key="success">
          Alert
        </Alert>,
      ];

      alerts.forEach(Component => {
        const { container } = render(Component);
        expect(container).toMatchSnapshot();
      });
    });
    it('should match snapshot with closable', () => {
      const { container } = render(
        <Alert show closable>
          Alert
        </Alert>,
      );
      expect(container).toMatchSnapshot();
    });
    it('should match snapshot with closable and closeText', () => {
      const { container } = render(
        <Alert show closable closeText="Close Now">
          Alert
        </Alert>,
      );
      expect(container).toMatchSnapshot();
    });
  });
  describe('Closable feature', () => {
    it('should close alert when click on close button', async () => {
      const { getByText, queryByText } = render(
        <Alert show closable closeText="Close Now">
          Alert
        </Alert>,
      );

      expect(queryByText('Alert')).toBeTruthy();

      fireEvent.click(getByText('Close Now'));

      waitFor(() => {
        expect(queryByText('Alert')).toBeFalsy();
      });
    });
  });
  describe('onClose function', () => {
    it('should call onClose function when alert is closed', () => {
      const onCloseMock = jest.fn();
      const { getByText } = render(
        <Alert show closable closeText="Close Now" onClose={onCloseMock}>
          Alert
        </Alert>,
      );

      fireEvent.click(getByText('Close Now'));

      expect(onCloseMock).toHaveBeenCalled();
    });
  });
});
