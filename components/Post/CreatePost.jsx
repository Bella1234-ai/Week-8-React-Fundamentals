import React, { useState } from 'react'
import Card from '../shared/Card'
import Input from '../shared/Input'
import Button from '../shared/Button'

function CreatePost({ addPost }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() && content.trim()) {
      addPost({
        title: title.trim(),
        content: content.trim(),
        author: "Current User" // In a real app, this would come from auth
      })
      setTitle('')
      setContent('')
    }
  }

  return (
    <Card title="Create New Post" className="create-post">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        
        <textarea
          className="textarea-input"
          placeholder="Write your post content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="6"
          required
        />
        
        <div className="form-actions">
          <Button type="submit" variant="primary">
            Publish Post
          </Button>
          <Button 
            type="button" 
            variant="secondary"
            onClick={() => {
              setTitle('')
              setContent('')
            }}
          >
            Clear
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default CreatePost