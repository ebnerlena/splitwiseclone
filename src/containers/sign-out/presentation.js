import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import buttonStyles from '../../components/Button.module.scss';

const UserSignOut = ({ onSignOut }) => {
  const history = useHistory();

  const onLogoutClicked = () => {
    onSignOut();
    history.push('/sign-in');
  };
  return (
    <Button
      type="button"
      onClick={onLogoutClicked}
      styles={[buttonStyles.button, buttonStyles.logout].join(' ')}
    >
      Logout
    </Button>
  );
};

export default UserSignOut;
