import React from 'react'

export default function Control(props) {
  return (
    <i className={props.classes} onClick={props.onClick}>
      <svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
        <path d="M-2.09808e-05 4.47761L10.8333 0V10L-2.09808e-05 4.47761Z" fill="#444444"/>
      </svg>
    </i>
  )
}