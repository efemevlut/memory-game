import styles from '../styles/Card.module.css'

export default function Box({ card, handleSelect, flipped, notMatch }) {

  const handleClick = () => {
    handleSelect(card)
  }

  return (
    <div className={styles.card}>
      <div className={flipped ? styles.flipped : ''} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img className={styles.front} src={card.src} alt={'icon'} style={{ display: !flipped ? 'none' : 'block', backgroundColor: card.matched ? '#22B049' : notMatch ? '#FF4D2D' : 'white', padding: '10px'}} />
        <img className={styles.back} src={'/cover.png'} onClick={handleClick} alt={'cover'} style={{ display: flipped ? 'none' : 'block' }} />
      </div>
    </div>
  )
}
