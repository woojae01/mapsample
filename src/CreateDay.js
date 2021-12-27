import Day from "./Day"
import useFetch from "./hooks/useFetch"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CreateDay(){
  const days = useFetch('http://localhost:3001/days')
  const [day,setDay] = useState(days.length)
  const history = useNavigate()
  function addDay(){
    fetch('http://localhost:3001/days',{
      method : 'POST',
      headers : {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        day: days.length +1
      })
    }).then(res=>{
      if(res.ok){
        alert('생성완료')
        history('/')
      }
    })
  }
  function removeDay(){
    if (window.confirm("삭제 하시겠습니까?")){
      fetch(`http://localhost:3001/days/${days.length}`,{
        method : 'DELETE'
      }).then(res => {
        if(res.ok) {
          setDay({id:0})
        }
      })
    }
  }
  if (day.id === 0){
    history('/')
  }
  return(
    <div>
      <h3>현재 일수 : {Day.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
      <button onClick={removeDay}>Day 삭제</button>
    </div>
  )
}