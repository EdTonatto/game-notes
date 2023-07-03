/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { format, formatDistanceToNow } from 'date-fns';
import styles from './Game.module.css';

export function Game({ game, content, publishedAt }) {
  const releaseDate = format(game.releaseDate, "dd LLL',' yyyy");
  const publishedDate = format(publishedAt, "dd LLL',' yy");
  const publishedDateToNow = formatDistanceToNow(publishedAt, { addSuffix: true });

  return (
    <article className={styles.game}>
      <header>
        <div className={styles.gameMasterInfo}>
          <img 
            className={styles.gameCover}
            src={game.coverImg}
          />
          <div className={styles.gameDetailInfo}>
            <strong>{game.name}</strong>
            <time title={releaseDate} dateTime={game.releaseDate.toISOString()}>
              Realesed in {releaseDate}
            </time>
            <span>{game.publisher}</span>
          </div>
        </div>

        <time title={publishedDate} dateTime={publishedAt.toISOString()}>
          {publishedDateToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if(line.type === 'P') {
            return <p key={line.order}>{line.content}</p>
          }
        })}
      </div>
    </article>
  )
}