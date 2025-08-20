// src/components/ThreadItem.jsx
import React, { useState } from 'react';
import './ThreadItem.css';

const ThreadItem = ({ thread }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="thread-item">
      <img src={thread.avatar} alt={`${thread.user}'s avatar`} className="avatar" />
      <div className="thread-content">
        <div className="thread-header">
          <strong>{thread.user}</strong>
          <span className="timestamp">{thread.timestamp}</span>
        </div>
        <p>{thread.content}</p>
        <div className="thread-actions">
          <button onClick={() => setLiked(!liked)}>
            {liked ? '❤️ Liked' : '🤍 Like'}
          </button>
          <button>💬 Reply</button>
          <button>↗️ Share</button>
        </div>
      </div>
    </div>
  );
};

export default ThreadItem;