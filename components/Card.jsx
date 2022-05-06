import { useState } from 'react'
import styles from '../styles/Card.module.css'

export default function Box({ text, handleClick, isFlip, id }) {

  const [card1, setCard1] = useState('card1')
  const [card2, setCard2] = useState('card2')
  const [counter, setCounter] = useState(0)
  const [flipCardClicked, setFlipCardClicked] = useState(false)

  const handleFlip = () => {
    setFlipCardClicked(true)
    if (counter == 0) {
      setCard1(text)
      setCounter(counter + 1)
    } else {
      setCard2(text)
      setCounter(0)
      setFlipCardClicked(false)
    }
  }

  const checkMatch = () => {
    if (card1 === card2) {
      console.log(true)
    } else {
      console.log(false)
    }
  }

  return (
    <div className={styles.gridItem} onClick={() => {
      handleClick(id, text)
      // handleFlip()
    }
      }>
      <div className={isFlip ? styles.flipCardInner : ''}>
        <div className={styles.flipCardBack}>
          {text}
        </div>
      </div>
    </div>
  )
}
