import React from 'react'

export default function Button({msg, type, className}) {
  return (
    <div className={`ui-button ui-button-${type} + ${className}`}>{msg}</div>
  )
}
