import { useEffect, useState } from 'react'
import './countdown.css'
const Countdown = () => {
    const [time, setTime] = useState(new Date())
    const birthDate = new Date(2023, 9, 17)
    const milliBd = birthDate.getTime() 
 
    let now = new Date().getTime()
    let timeCount = milliBd - now
    let secTimeCount = Math.floor(timeCount/1000)
    
    let days = Math.floor(secTimeCount / (60 * 60 * 24))
    let hours = Math.floor((secTimeCount % (60 * 60 * 24)) / (60 * 60))
    let minutes = Math.floor((secTimeCount % (60 * 60 * 24)) % (60 * 60) / 60)
    let seconds = Math.floor((secTimeCount % (60 * 60 * 24)) % (60 * 60) % 60)

  useEffect(() => {
    const intervalTask = setInterval(() => {
      setTime(new Date())
    }, 1000) 
    return () => clearInterval(intervalTask)
  }, [])
  
  return <div className='birthdayCount'>
    <div className='cards'>
        <div className='display'>{days}</div>
        <div className='text'>Days</div>
    </div> 
    <div className='cards'>
        <div className='display'>{hours}</div>
        <div className='text'>Hours</div>
    </div> 
    <div className='cards'>
        <div className='display'>{minutes}</div>
        <div className='text'>Minutes</div>
    </div> 
    <div className='cards'>
        <div className='display'>{seconds}</div>
        <div className='text'>Seconds</div>
    </div>  
  </div>
}
export default Countdown