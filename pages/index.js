import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import { useState, useEffect} from 'react'

export default function Home() {
  const [data, setData] = useState([
    { id: 0, text: 1, flipped: false },
    { id: 1, text: 1, flipped: false },
    { id: 2, text: 2, flipped: false },
    { id: 3, text: 2, flipped: false },
    { id: 4, text: 3, flipped: false },
    { id: 5, text: 3, flipped: true },
    { id: 6, text: 4, flipped: false },
    { id: 7, text: 4, flipped: false },
    { id: 8, text: 5, flipped: false },
    { id: 9, text: 5, flipped: false },
    { id: 10, text: 6, flipped: false },
    { id: 11, text: 6, flipped: false },
    { id: 12, text: 7, flipped: false },
    { id: 13, text: 7, flipped: false },
    { id: 14, text: 8, flipped: false },
    { id: 15, text: 8, flipped: false },
  ])
  // const data = [
  //   { id: 0, text: 1, flipped: false },
  //   { id: 1, text: 1, flipped: false },
  //   { id: 2, text: 2, flipped: false },
  //   { id: 3, text: 2, flipped: false },
  //   { id: 4, text: 3, flipped: false },
  //   { id: 5, text: 3, flipped: true },
  //   { id: 6, text: 4, flipped: false },
  //   { id: 7, text: 4, flipped: false },
  //   { id: 8, text: 5, flipped: false },
  //   { id: 9, text: 5, flipped: false },
  //   { id: 10, text: 6, flipped: false },
  //   { id: 11, text: 6, flipped: false },
  //   { id: 12, text: 7, flipped: false },
  //   { id: 13, text: 7, flipped: false },
  //   { id: 14, text: 8, flipped: false },
  //   { id: 15, text: 8, flipped: false },
  // ]

  const [card1, setCard1] = useState('card1')
  const [card2, setCard2] = useState('card2')
  const [counter, setCounter] = useState(0)
  const [flipCardClicked, setFlipCardClicked] = useState(false)

  const handleFlip = (id, text) => {
    console.log(id)

    // setData((prevState) => {
    //   return [...prevState, {id, text, flip: true}]
    // })

    let temp_data = data
    let temp_element = temp_data[id]
    temp_element.flipped = true
    temp_data[id] = temp_element
    console.log(temp_data)
    setData(temp_data)
    console.log(data)

    // setFlipCardClicked(true)

    // if (counter == 0) {
    //   setCard1(text)
    //   setCounter(counter + 1)
    // } else {
    //   setCard2(text)
    //   setCounter(0)
    //   setFlipCardClicked(false)
    // }
  }

  useEffect(() => {
    console.log('orda')
  }, [data])
  

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Memory Game Layout</p>
        {console.log('deneme')}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <button>NEW GAME</button>
          <p>Score: 100</p>
        </div>
        <div className={styles.gridContainer}>
          {data
          // .sort(() => Math.random() - Math.random())
            .map((item, i) => (
              <Card key={i} id={i} text={item.text} handleClick={handleFlip} isFlip={item.flipped}/>
            ))}
        </div>
      </div>
    </div>
  )
}
