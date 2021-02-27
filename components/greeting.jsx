import React, { useState } from 'react'

export default () => {
  const [person, setPerson] = useState('')

  return (
    <div className="page">
      <div className="title">Who Am I Speaking With?</div>
      <input type="text" name="search" onChange={event => setPerson(`It is nice to meet you ${event.target.value}`)} />
      <div className="manu">{person}</div>
    </div>
  )
}
