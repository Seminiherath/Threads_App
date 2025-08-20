// src/components/Feed.jsx
import React, { useState } from 'react';
import ThreadItem from './ThreadItem';
import ThreadComposer from './ThreadComposer';
import './Feed.css';

const Feed = () => {
  const [threads, setThreads] = useState([

    {
      id: 2,
      user: 'jeew',
      avatar: 'https://via.placeholder.com/40',
      content: 'I started a new project in ballerina.',
      timestamp: '12m ago',
    },    {
      id: 1,
      user: 'nadil',
      avatar: 'https://via.placeholder.com/40',
      content: 'Just launched my Threads app! 🚀\nSo excited to share this with you all.',
      timestamp: 'm ago',
    },
  ]);

  const addNewThread = (newThread) => {
    setThreads([newThread, ...threads]);
  };

  return (
    <div className="feed">
      <ThreadComposer onNewThread={addNewThread} />
      {threads.length === 0 ? (
        <p className="empty-feed">No threads yet. Be the first to post!</p>
      ) : (
        threads.map((thread) => (
          <ThreadItem key={thread.id} thread={thread} />
        ))
      )}
    </div>
  );
};

export default Feed;