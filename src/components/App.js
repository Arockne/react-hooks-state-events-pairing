import React, { useState } from 'react'
import video from "../data/video.js";
import Video from './Video'
import Comments from './Comments'

function App() {
  const [commentHider, setCommentHider] = useState(false)

  return (
    <div className="App">
      <Video video={video}/>
      <hr />
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
