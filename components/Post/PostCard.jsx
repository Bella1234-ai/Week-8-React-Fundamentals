import React from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'

function PostCard({ post, onLike, onDelete }) {
  return (
    <Card className="post-card">
      <div className="post-header">
        <h3 className="post-title">{post.title}</h3>
        <Button 
          variant="danger" 
          size="small"
          onClick={() => onDelete(post.id)}
        >
          Delete
        </Button>
      </div>
      
      <div className="post-meta">
        <span className="post-author">By {post.author}</span>
        <span className="post-date">{post.date}</span>
      </div>
      
      <p className="post-content">{post.content}</p>
      
      <div className="post-footer">
        <Button 
          variant="secondary" 
          size="small"
          onClick={() => onLike(post.id)}
        >
          ❤️ {post.likes} Likes
        </Button>
      </div>
    </Card>
  )
}

export default PostCard