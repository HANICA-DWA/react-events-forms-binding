import React from 'react'

export default function Logo (props) {
  return <div className={`logo ${props.logoColor}`}>
    <h1>This is a damn fine logo for: {props.companyName}</h1>
  </div>
}