import React from 'react'

function Button({ children, onClick, variant = 'primary', size = 'medium', type = 'button', className = '' }) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-danger',
    success: 'btn-success'
  }

  const sizes = {
    small: 'btn-sm',
    medium: 'btn-md',
    large: 'btn-lg'
  }

  return (
    <button
      type={type}
      className={`btn ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button