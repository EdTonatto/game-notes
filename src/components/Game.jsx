/* eslint-disable react/no-unescaped-entities */
import styles from './Game.module.css';

export function Game() {
  return (
    <article className={styles.game}>
      <header>
        <div className={styles.gameMasterInfo}>
          <img 
            className={styles.gameCover}
            src="https://howlongtobeat.com/games/70093_Marvels_Spider-Man_Game_of_the_Year_Edition.jpg?width=250"
          />
          <div className={styles.gameDetailInfo}>
            <strong>Marvel's Spider-Man Remastered</strong>
            <span>Released in 12 Aug, 2022</span>
            <span>Published by PlayStation LLC</span>
          </div>
        </div>
      </header>
    </article>
  )
}