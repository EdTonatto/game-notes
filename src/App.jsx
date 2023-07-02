/* eslint-disable react/jsx-key */
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Game } from './components/Game'

const games = [
  {
    id: 1,
    game: {
      name: "Marvel's Spider-Man Remastered",
      coverImg: "https://howlongtobeat.com/games/70093_Marvels_Spider-Man_Game_of_the_Year_Edition.jpg?width=250",
      releaseDate: new Date('2022-08-12 00:00:00'),
      publisher: 'Published by PlayStation LLC'
    },
    content: [
      {order: 1, type: 'P', content: 'Played on PC.'},
      {order: 2, type: 'P', content: 'Expected game time to complete main story is 17 hours, and 34 hours to complete all content.'},
      {order: 3, type: 'P', content: 'My actual playtime is about 20 hours and 65% complete.'},
      {order: 4, type: 'P', content: '10/10 game'},
    ],
    publishedAt: new Date('2023-07-02 19:45:00')
  },
  {
    id: 2,
    game: {
      name: "Vampire Survivors",
      coverImg: "https://howlongtobeat.com/games/102750_Vampire_Survivors.jpg?width=250",
      releaseDate: new Date('2022-10-20 00:00:00'),
      publisher: 'Published by Poncle'
    },
    content: [],
    publishedAt: new Date('2023-07-02 19:00:00')
  },
  {
    id: 3,
    game: {
      name: "Dota 2",
      coverImg: "https://howlongtobeat.com/games/250px-DotA2.jpg?width=250",
      releaseDate: new Date('2013-07-09 00:00:00'),
      publisher: 'Published by Valve'
    },
    content: [],
    publishedAt: new Date('2023-07-01 12:00:00')
  },
  {
    id: 4,
    game: {
      name: "Forza Horizon 5",
      coverImg: "https://howlongtobeat.com/games/93948_Forza_Horizon_5.jpg?width=250",
      releaseDate: new Date('2021-11-09 00:00:00'),
      publisher: 'Published by Xbox Game Studios'
    },
    content: [],
    publishedAt: new Date('2023-06-15 00:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {games.map(game => {
            return (
              <Game key={game.id}
                game={game.game}
                content={game.content}
                publishedAt={game.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
