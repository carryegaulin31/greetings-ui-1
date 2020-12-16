import React, { useState } from 'react'

export default () => {
  const [slug, setSlug] = useState('')

  return (
    <div className="page">
      <div className="title">To Whom Am I Speaking?</div>
      <div className="subtitle">A searchable list of all your favorite heroes</div>
      <input type="text" name="search" onChange={event => setSlug(event.target.value)} />
      <div className="slug">{slug}</div>
    </div>
  )
}