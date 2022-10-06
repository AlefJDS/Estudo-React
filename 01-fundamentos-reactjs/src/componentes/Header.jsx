import styles from './Header.module.css'
import IgniteLogo from '../assents/Ignite_logo.svg';

export function Header () {
    return(
        <header className={styles.header}>
            <img src={IgniteLogo} alt= "Logo Ignite" />
        </header>
    );
}