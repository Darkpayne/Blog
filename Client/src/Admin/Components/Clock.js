import React from 'react'
import { useTime } from 'react-timer-hook';

const Clock = () => {
    const {
        seconds,
        minutes,
        hours,
        ampm,
      } = useTime({ format: '24-hour'});
    
  return (
    <div className='md:text-2xl'>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span><span>{ampm}</span>
    </div>
  )
}

export default Clock