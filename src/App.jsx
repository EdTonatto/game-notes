import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Game } from './components/Game'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Game 
            gameCoverImg="https://howlongtobeat.com/games/70093_Marvels_Spider-Man_Game_of_the_Year_Edition.jpg?width=250"
            gameName="Marvel's Spider-Man Remastered"
            releaseDate="Released in 12 Aug, 2022"
            publisher="Published by PlayStation LLC"
          />
          <Game 
            gameCoverImg="https://howlongtobeat.com/games/102750_Vampire_Survivors.jpg?width=250"
            gameName="Vampire Survivors"
            releaseDate="Released in 20 Oct, 2022"
            publisher="Published by Poncle"
          />
          <Game 
            gameCoverImg="https://howlongtobeat.com/games/250px-DotA2.jpg?width=250"
            gameName="Dota 2"
            releaseDate="Released in 9 Jul, 2013"
            publisher="Published by Valve"
          />
          <Game 
            gameCoverImg="https://howlongtobeat.com/games/93948_Forza_Horizon_5.jpg?width=250"
            gameName="Forza Horizon 5"
            releaseDate="Released in 9 Nov, 2021"
            publisher="Published by Xbox Game Studios"
          />
        </main>
      </div>
    </div>
  )
}
