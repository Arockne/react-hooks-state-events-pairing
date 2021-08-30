import React from 'react'

function VideoDescription({ title, views, createdAt, upVotes, downVotes}) {
  return (
    <aside>
      <h1>{title}</h1>
      <p>{views} Views | Uploaded {createdAt}</p>
      <button>{upVotes} <span>👍</span></button>
      <button>{downVotes} <span>👎</span></button>
    </aside>
  )
}

export default VideoDescription