import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

const data = [
  { src: '/css3.png', matched: false },
  { src: '/es6.jpg', matched: false },
  { src: '/git.png', matched: false },
  { src: '/html.png', matched: false },
  { src: '/js-logo.png', matched: false },
  { src: '/mysql.png', matched: false },
  { src: '/node.png', matched: false },
  { src: '/postman.png', matched: false },
]

export default function Home() {
  
  const matchedArr = []

  const [selectedCard1, setSelectedCard1] = useState(null)
  const [selectedCard2, setSelectedCard2] = useState(null)
  const [score, setScore] = useState(100)
  const [text, setText] = useState('')

  const [cards, setCards] = useState([])

  const isComplete= (currentValue) => currentValue === true
  

  cards.forEach(item => {
    matchedArr.push(item.matched)
  })

  matchedArr.every(isComplete) && matchedArr.length > 0 && Swal.fire(
    'Good job!',
    'You finished the game!',
    'success',
  )

  const shuffleData = () => {
    setScore(100)
    setText('')
    const shuffledData = [...data, ...data].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }))
    setCards(shuffledData)
  }

  const handleSelect = (item) => {
    selectedCard1 ? setSelectedCard2(item) : setSelectedCard1(item)
  }

  useEffect(() => {
    if (selectedCard1 && selectedCard2) {

      if (selectedCard1.src === selectedCard2.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === selectedCard1.src){
              return {...card, matched: true}
            } else {
              setScore(score + 10)
              setText('- Matched')
              return card
            }
          })
        })
        resetTurn()
      } else {
        setScore(score - 1)
        setText('- Not Matched')
        setTimeout(() => {
          resetTurn()
          setText('')
        }, 1000)
      }
    }
  }, [selectedCard1, selectedCard2]
  )

  const resetTurn = () => {
    setSelectedCard1(null)
    setSelectedCard2(null)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Memory Game Layout {text}</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <button onClick={shuffleData}>NEW GAME</button>
          <p>Score: {score}</p>
        </div>
        <div className={styles.gridContainer} style={{pointerEvents: selectedCard1 && selectedCard2 ? 'none' : 'auto'}}>
          {cards.map((item) => (
            <Card key={item.id} card={item} handleSelect={handleSelect} flipped={item === selectedCard1 || item === selectedCard2 || item.matched} notMatch={selectedCard1 && selectedCard2 && (selectedCard1.src !== selectedCard2.src)}/>
          ))}
        </div>
      </div>
    </div>
  )
}
