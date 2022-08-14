import React from 'react'

export const Play = function (props) {
  return (
    <svg {...props} style={{ margin: '0 15px' }} width={props.width ? props.width : 50} height={props.width ? props.width : 50} xmlns="http://www.w3.org/2000/svg">
      <path style={{ fill: props.color ? props.color : '#FFF' }} d="M19.15 32.5 32.5 24l-13.35-8.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
    </svg>
  )
}

export const ArrowRight = function (props) {
  return (
    <svg {...props} style={{ margin: '0 15px' }} width={props.width ? props.width : 50} height={props.width ? props.width : 50} xmlns="http://www.w3.org/2000/svg">
      <path style={{ fill: props.color ? props.color : '#FFF' }} d="M5.2 36V12l17.3 12Zm20.35 0V12l17.3 12ZM8.2 24Zm20.35 0ZM8.2 30.25 17.25 24 8.2 17.75Zm20.35 0L37.6 24l-9.05-6.25Z" />
    </svg>
  )
}
export const ArrowLeft = function (props) {
  return (
    <svg {...props} style={{ margin: '0 15px' }} width={props.width ? props.width : 50} height={props.width ? props.width : 50} xmlns="http://www.w3.org/2000/svg" >
      <path style={{ fill: props.color ? props.color : '#FFF' }} d="M42.7 36 25.4 24l17.3-12Zm-20.1 0L5.3 24l17.3-12Zm-3-12Zm20.1 0Zm-20.1 6.25v-12.5L10.55 24Zm20.1 0v-12.5L30.65 24Z" />
    </svg>
  )
}
export const Pause = function (props) {
  return (
    <svg {...props} style={{ margin: '0 15px' }} width={props.width ? props.width : 50} height={props.width ? props.width : 50} xmlns="http://www.w3.org/2000/svg" >
      <path style={{ fill: props.color ? props.color : '#FFF' }} d="M18.5 32h3V16h-3Zm8 0h3V16h-3ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
    </svg>
  )
}
export const SkipNext = function (props) {
  return (
    <svg {...props} style={{ margin: '0 15px' }} width={props.width ? props.width : 50} height={props.width ? props.width : 50} xmlns="http://www.w3.org/2000/svg" >
      <path style={{ fill: props.color ? props.color : '#FFF' }} d="M34 36V12h3v24Zm-23 0V12l17.3 12Zm3-12Zm0 6.25L23.05 24 14 17.75Z" />
    </svg>
  )
}
export const SkipPrevious = function (props) {
  return (
    <svg {...props} style={{ margin: '0 15px' }} width={props.width ? props.width : 50} height={props.width ? props.width : 50} xmlns="http://www.w3.org/2000/svg" >
      <path style={{ fill: props.color ? props.color : '#FFF' }} d="M11 36V12h3v24Zm26 0L19.7 24 37 12Zm-3-12Zm0 6.25v-12.5L24.95 24Z" />
    </svg>
  )
}
export const Heart = function (props) {
  return (
    <svg  {...props} style={{ margin: '0 15px' }} width={props.width ? props.width : 50} height={props.width ? props.width : 50} xmlns="http://www.w3.org/2000/svg">
      <path style={{ fill: props.color ? props.color : '#FFF' }} d="m24 41.95-2.05-1.85q-5.3-4.85-8.75-8.375-3.45-3.525-5.5-6.3T4.825 20.4Q4 18.15 4 15.85q0-4.5 3.025-7.525Q10.05 5.3 14.5 5.3q2.85 0 5.275 1.35Q22.2 8 24 10.55q2.1-2.7 4.45-3.975T33.5 5.3q4.45 0 7.475 3.025Q44 11.35 44 15.85q0 2.3-.825 4.55T40.3 25.425q-2.05 2.775-5.5 6.3T26.05 40.1ZM24 38q5.05-4.65 8.325-7.975 3.275-3.325 5.2-5.825 1.925-2.5 2.7-4.45.775-1.95.775-3.9 0-3.3-2.1-5.425T33.5 8.3q-2.55 0-4.75 1.575T25.2 14.3h-2.45q-1.3-2.8-3.5-4.4-2.2-1.6-4.75-1.6-3.3 0-5.4 2.125Q7 12.55 7 15.85q0 1.95.775 3.925.775 1.975 2.7 4.5Q12.4 26.8 15.7 30.1 19 33.4 24 38Zm0-14.85Z" />
    </svg>
  )
}
export const QueueMusic = function (props) {
  return (
    <svg {...props} style={{ margin: '0 15px' }} width={props.width ? props.width : 50} height={props.width ? props.width : 50} xmlns="http://www.w3.org/2000/svg">
      <path style={{ fill: props.color ? props.color : '#FFF' }} d="M32 40q-2.45 0-4.2-1.675t-1.75-4.075q0-2.4 1.675-4.075Q29.4 28.5 31.8 28.5q.8 0 1.575.15.775.15 1.525.5V12H44v3.55h-6.1V34.3q0 2.35-1.725 4.025Q34.45 40 32 40ZM6 31.5v-3h15.3v3Zm0-8.25v-3h23.65v3ZM6 15v-3h23.65v3Z" />
    </svg>
  )
}
