import React, { useState } from 'react'
import Button from '../shared/Button'

function Header({ searchTerm, setSearchTerm }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🏠 CommunityHub</h1>
        </div>
        
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/blog">Blog</a>
        </nav>

        <div className="header-actions">
          <input
            type="text"
            placeholder="Search posts..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          {isLoggedIn ? (
            <div className="user-menu">
              <span>Welcome, User!</span>
              <Button onClick={() => setIsLoggedIn(false)}>Logout</Button>
            </div>
          ) : (
            <Button onClick={() => setIsLoggedIn(true)}>Login</Button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header