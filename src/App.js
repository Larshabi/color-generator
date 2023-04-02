import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [colour, setColour] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f51025').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try{
      let colors = new Values(colour).all(10)
      setList(colors)
      console.log(colors)
    }catch(err){
      setError(true)
      console.log(err)
    }
   
  }


  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' value={colour} onChange={(e)=>setColour(e.target.value)} placeholder='#f15025' className={`${error ? 'error' : null}`}/>
        <button className='btn' type='submit'>submit</button>
      </form>
    </section>
    <section className='colors'>
      {list.map((color, index)=>{
        return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
      })}
    </section>
    </>
    
  )
}

export default App
