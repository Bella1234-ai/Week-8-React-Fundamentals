import React, { useState } from 'react'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Sidebar from './components/Layout/Sidebar'
import PostList from './components/Post/PostList'
import CreatePost from './components/Post/CreatePost'
import './index.css'

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      content: "React is a JavaScript library for building user interfaces. It's maintained by Facebook and a community of individual developers and companies.",
      excerpt: "React is a JavaScript library for building user interfaces...",
      author: "John Doe",
      date: "2024-01-15",
      likes: 42
    },
    {
      id: 2,
      title: "Understanding Hooks",
      content: "Hooks are functions that let you 'hook into' React state and lifecycle features from function components.",
      excerpt: "Hooks are functions that let you 'hook into' React state...",
      author: "Jane Smith",
      date: "2024-01-20",
      likes: 28
    },
    {
      id: 3,
      title: "State Management in React",
      content: "State management is crucial for large applications. Learn about useState, useReducer, and Context API.",
      excerpt: "State management is crucial for large applications...",
      author: "Bob Johnson",
      date: "2024-01-25",
      likes: 35
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const addPost = (newPost) => {
    const post = {
      id: posts.length + 1,
      ...newPost,
      excerpt: newPost.content.substring(0, 100) + '...',
      date: new Date().toISOString().split('T')[0],
      likes: 0
    }
    setPosts([post, ...posts])
  }

  const likePost = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ))
  }

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="main-container">
        <main className="content">
          <CreatePost addPost={addPost} />
          <PostList 
            posts={filteredPosts} 
            onLike={likePost}
            onDelete={deletePost}
          />
        </main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default App