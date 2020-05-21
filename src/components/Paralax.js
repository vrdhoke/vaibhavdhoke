import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import './styles1.css' // // Icons made by Freepik from www.flaticon.com

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 5 - 250}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 4 + 70}px,${y / 8 - 30}px,0)`
const trans3 = (x, y) => `translate3d(${x / 3 - 250}px,${y / 5 - 50}px,0)`
const trans4 = (x, y) => `translate3d(${x / 4 - 250}px,${y / 10}px,0)`
const trans5 = (x, y) => `translate3d(${x / 4 + 250}px,${y / 4 + 50}px,0)`
const trans6 = (x, y) => `translate3d(${x / 4 - 90}px,${y / 10}px,0)`
const trans7 = (x, y) => `translate3d(${x / 2 - 70}px,${y / 8 - 30}px,0)`
const trans8 = (x, y) => `translate3d(${x / 4 + 200}px,${y / 5 + 50}px,0)`

export default function Card() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div class="card2" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div class="card3" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} />
      <animated.div class="card5" style={{ transform: props.xy.interpolate(trans5) }} />
      <animated.div class="card6" style={{ transform: props.xy.interpolate(trans6) }} />
      <animated.div class="card7" style={{ transform: props.xy.interpolate(trans7) }} />
      <animated.div class="card8" style={{ transform: props.xy.interpolate(trans8) }} />
    </div>
  )
}


