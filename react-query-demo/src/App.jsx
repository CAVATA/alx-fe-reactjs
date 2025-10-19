
import React, { useState } from "react";
import PostsComponent from "./components/PostsComponent";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>React Query Demo — Posts</h1>
      <button onClick={() => setShow(s => !s)} style={{ marginBottom: 16 }}>
        {show ? "Hide PostsComponent" : "Show PostsComponent"}
      </button>
      {show && <PostsComponent />}
    </div>
  );
}

export default App;

