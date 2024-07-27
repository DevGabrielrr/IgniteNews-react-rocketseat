import styles from './Header.module.css'
import igniteLogo from '../img/Ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo}/>
        </header>
    );
}