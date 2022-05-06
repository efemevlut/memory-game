import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import { useState, useEffect } from 'react'

const data = [
  { src: '/css3.png', matched: false },
  { src: '/dj.png', matched: false },
  { src: '/git.png', matched: false },
  { src: '/html.png', matched: false },
  { src: '/js-logo.png', matched: false },
  { src: '/mysql.png', matched: false },
  { src: '/node.png', matched: false },
  { src: '/reactt.png', matched: false },
]

export default function Home() {

  const [selectedCard1, setSelectedCard1] = useState(null)
  const [selectedCard2, setSelectedCard2] = useState(null)

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffleData = () => {
    const shuffledData = [...data, ...data].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }))
    setCards(shuffledData)
    setTurns(0)
  }

  const handleSelect = (item) => {
    selectedCard1 ? setSelectedCard2(item) : setSelectedCard1(item)
  }

  useEffect(() => {
    if (selectedCard1 && selectedCard2) {

      if (selectedCard1.src === selectedCard2.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === selectedCard1){
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        console.log('Those cards do not match');
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [selectedCard1, selectedCard2]
  )

  const resetTurn = () => {
    setSelectedCard1(null)
    setSelectedCard2(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Memory Game Layout</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <button onClick={shuffleData}>NEW GAME</button>
          <p>Score: 100</p>
        </div>
        <div className={styles.gridContainer}>
          {cards.map((item) => (
            <Card key={item.id} card={item} handleSelect={handleSelect} flipped={item === selectedCard1 || item === selectedCard2 || item.matched}/>
          ))}
        </div>
      </div>
    </div>
  )
}
