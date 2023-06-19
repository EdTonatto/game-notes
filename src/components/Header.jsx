import styles from './Header.module.css';
import gameNotesLogo from '../assets/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={gameNotesLogo} alt="Game Notes Logo" />
    </header>
  );
}