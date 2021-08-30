import React, { useState } from 'react'

function VideoDescription({ title, views, createdAt, upVotes, downVotes}) {
  const [upVote, setUpVote] = useState(upVotes);
  const [downVote, setDownVote] = useState(downVotes)

  function handleUpVote() {
    setUpVote(upVote => upVote + 1)
  }

  function handleDownVote() {
    setDownVote(downVote => downVote + 1)
  }

  return (
    <aside>
      <h1>{title}</h1>
      <p>{views} Views | Uploaded {createdAt}</p>
      <button onClick={handleUpVote}>{upVote} <span>👍</span></button>
      <button onClick={handleDownVote}>{downVote} <span>👎</span></button>
    </aside>
  )
}

export default VideoDescription