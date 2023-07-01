/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import styles from './Game.module.css';

export function Game(props) {
  return (
    <article className={styles.game}>
      <header>
        <div className={styles.gameMasterInfo}>
          <img 
            className={styles.gameCover}
            src={props.gameCoverImg}
          />
          <div className={styles.gameDetailInfo}>
            <strong>{props.gameName}</strong>
            <span>{props.publisher}</span>
          </div>
        </div>

        <div className={styles.gameDetailInfo}>
          <span>{props.releaseDate}</span>
        </div>
      </header>

      <div className={styles.content}>
        <p>{props.note}</p>
      </div>
    </article>
  )
}