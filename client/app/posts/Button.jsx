'use client'

import { useState } from 'react'

export function Button({id}) {
  const [liked, setLiked] = useState(false)
  const text = liked ? '🧮 ' : '🎧 '
  return (
    <div>
      <button onClick={() => { setLiked(!liked)}}>
        {text} {id}
      </button>
      <p>You {text} this. Click to toggle.</p>
    </div>
  )
}