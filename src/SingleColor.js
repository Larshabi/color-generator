import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({index, rgb, weight, hexColor}) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  const handleClick = ()=>{
    setAlert(true)
    navigator.clipboard.writeText(hex)
  }

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false)
    }, 3000)
    return ()=> clearTimeout(timeout)
    }, [alert])

  return <article className={`color ${index >= 10 && 'color-light'}`} onClick={handleClick} style={{backgroundColor:`rgb(${bcg})`}}>
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>{`#${hexColor}`}</p>
    {alert && <p className='alert'>copied to clipboard</p>}
  </article>
}

export default SingleColor
