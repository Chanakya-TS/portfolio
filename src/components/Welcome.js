import React, { useState } from 'react'

import { useSpring, animated } from 'react-spring'

export default function Welcome() {
    const [flip, setFlip] = useState(false)
    const props = useSpring({
        to: { padding: "0"}, 
        from: {padding: "1000"},
        config: {duration: 5000},
    })
  return (
    <div class="welcome">
        <animated.h1 style={props}>Hi! I am Anjusha!</animated.h1>
    </div>
  )
}
