import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container} style={{backgroundColor: 'pink'}}>
      <div className={styles.title}>
        <p>Memory Game Layout</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <button>NEW GAME</button>
          <p>Score: 100</p>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}
