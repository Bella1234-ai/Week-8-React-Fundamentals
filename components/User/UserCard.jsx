import React from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'

function UserCard({ user }) {
  return (
    <Card className="user-card">
      <div className="user-avatar">
        <img src={user.avatar || 'https://via.placeholder.com/80'} alt={user.name} />
      </div>
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
      <div className="user-stats">
        <span>📝 {user.posts} posts</span>
        <span>❤️ {user.likes} likes</span>
      </div>
      <Button variant="secondary" size="small">View Profile</Button>
    </Card>
  )
}

export default UserCard