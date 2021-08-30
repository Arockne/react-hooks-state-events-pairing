import React from 'react'
import video from "../data/video.js";


function Frame({ embedUrl }) {
  return (
    <iframe
      width="919"
      height="525"
      src={embedUrl}
      frameBorder="0"
      allowFullScreen
      title="Thinking in React"
    />
  )  
}

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

function Video({ 
  video: {
    embedUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    title, 
    views, 
    createdAt, 
    upvotes, 
    downvotes
  } }) {
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
      <button>Hide Comments</button>
    </div>
  )
}

function Comments({ comments }) {
  return (
    <div>
      <h2>{comments.length} Comments</h2>
      {comments.map(({ id, user, comment }) => <Comment key={id} user={user} comment={comment}/>)}
    </div>
  )
}

function Comment({ user, comment }) {
  return (
    <div>
      <h4>{user}</h4>
      <p>{comment}</p>
    </div>
  )
}

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video video={video}/>
      <hr />
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
