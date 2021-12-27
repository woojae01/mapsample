// import dummy from './db/data.json'
// import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Word from './Word'
import useFetch from './hooks/useFetch'

export default function Day(){
  // dummy.words
  // const day = 1
  // const [words, setWords] = useState([])
  // useEffect(()=>{
  //   fetch(`http://localhost:3001/words?day=${day}`).then(
  //     res => {
  //       return res.json()
  //     }).then(data=>{
  //       setWords(data) 
  //   })
  // },[])
  const {day} = useParams()
  // const wordList = dummy.words.filter(word => word.day === Number(day))
  const words = useFetch(`http://localhost:3001/words?day=${day}`)
  // console.log(wordList)
  return(
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>     
          {words.map(word =>(
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  )
}