import React from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <Card>
        <div className="profile-header">
          <div className="profile-avatar">
            <img src={user.avatar || 'https://via.placeholder.com/150'} alt={user.name} />
          </div>
          <h2>{user.name}</h2>
          <p className="profile-username">@{user.username}</p>
        </div>
        
        <div className="profile-info">
          <p>{user.bio}</p>
          <p>📍 {user.location}</p>
          <p>📧 {user.email}</p>
          <p>📅 Joined {user.joinDate}</p>
        </div>
        
        <div className="profile-stats">
          <div className="stat">
            <strong>{user.posts}</strong>
            <span>Posts</span>
          </div>
          <div className="stat">
            <strong>{user.followers}</strong>
            <span>Followers</span>
          </div>
          <div className="stat">
            <strong>{user.following}</strong>
            <span>Following</span>
          </div>
        </div>
        
        <Button variant="primary">Edit Profile</Button>
      </Card>
    </div>
  )
}

export default UserProfile