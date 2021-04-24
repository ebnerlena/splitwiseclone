import { useHistory } from 'react-router-dom';
import React from 'react';
import Button from '../../components/Button';
import buttonStyles from '../../components/Button.module.scss';

const UserSignOut = ({ onSignOut, disabled }) => {
  const history = useHistory();
  const onLogoutClicked = () => {
    onSignOut();
    history.push('/sign-in');
  };
  return (
    <Button
      type="button"
      onClick={onLogoutClicked}
      disabled={disabled}
      styles={[buttonStyles.button, buttonStyles.logout].join(' ')}
    >
      Logout
    </Button>
  );
};

export default UserSignOut;
