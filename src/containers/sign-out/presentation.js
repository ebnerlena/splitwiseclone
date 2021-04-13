import Button from "../../components/Button";
import { useHistory } from 'react-router-dom';
import styles from './../../components/Button.module.scss';

const UserSignOut = ({ onSignOut }) => {
    const history = useHistory();
    return(
        <Button onClick={onSignOut} className={[styles.button, styles.logout].join(' ')}>Logout</Button>
    )
}

export default UserSignOut;