import React from 'react'
import Frame from './Frame'
import VideoDescription from './VideoDescription'

function Video({ 
  video: {
    embedUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    title, 
    views, 
    createdAt, 
    upvotes, 
    downvotes
  },
  hideComment,
  onHidingComment
}) {
  return (
    <div>
      <Frame embedUrl={embedUrl}/>
      <VideoDescription 
        title={title} 
        views={views} 
        createdAt={createdAt} 
        upVotes={upvotes} 
        downVotes={downvotes}
      />
      <br />
      <button onClick={onHidingComment}>{hideComment ? 'Show Comments' : 'Hide Comments'}</button>
    </div>
  )
}

export default Video