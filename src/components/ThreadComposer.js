// src/components/ThreadComposer.jsx
import React, { useState } from 'react';
import './ThreadComposer.css';

const ThreadComposer = ({ onNewThread }) => {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (content.trim()) {
      onNewThread({
        id: Date.now(),
        user: 'you',
        avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=you',
        content,
        timestamp: 'now',
      });
      setContent('');
    }
  };

  return (
    <div className="composer">
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="3"
      />
      <button onClick={handleSubmit} disabled={!content.trim()}>
        Post
      </button>
    </div>
  );
};

export default ThreadComposer;