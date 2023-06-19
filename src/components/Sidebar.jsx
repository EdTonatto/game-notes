import { Eye } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=50"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.akamai.steamstatic.com/b370c0241b976647aa27a5b90c147dc4cbd9eb00_full.jpg"
        />   
        <strong>Tonatto ★</strong>
        <span>🇧🇷 Chapeco, Santa Catarina, Brazil</span>
      </div>

      <footer>
        <a href="https://steamcommunity.com/id/edtonatto/">
          <Eye />
          View Profile
        </a>
      </footer>
    </aside> 
  )
}