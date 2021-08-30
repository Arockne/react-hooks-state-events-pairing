import React, { useState } from 'react'
import video from "../data/video.js";
import Video from './Video'
import Comments from './Comments'

function App() {
  const [commentHider, setCommentHider] = useState(false)

  function handleHidingComment() {
    setCommentHider(!commentHider)
  }

  return (
    <div className="App">
      <Video video={video} hideComment={commentHider} onHidingComment={handleHidingComment}/>
      <hr />
      {commentHider ? null : <Comments comments={video.comments} hideComments={commentHider}/>}
    </div>
  );
}

export default App;
