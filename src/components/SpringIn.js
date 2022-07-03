import React from 'react'

import { useSpring, animated, config } from "react-spring"

export default function SpringIn({ children }) {
    const animatedProps = useSpring({
        from: { marginLeft: -200, opacity: 0},
        to: {opacity: 1,
        marginLeft: 5,},
        config: config.stiff,
        loop: {reverse: true},
    })
  return (
    <animated.div style={{...animatedProps}}>{ children }</animated.div>
  )
}
