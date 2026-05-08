import React from 'react'

function Input({ type = 'text', placeholder, value, onChange, required = false, className = '' }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`input ${className}`}
    />
  )
}

export default Input