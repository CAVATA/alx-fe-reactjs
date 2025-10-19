
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

/**
 * PostsComponent
 * - fetches posts from JSONPlaceholder
 * - demonstrates caching, manual refetch, and isFetching indicator
 */

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function PostsComponent() {
  const queryClient = useQueryClient();

  const { data, error, isError, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // keep data fresh for 10 seconds so re-mounting within 10s reads from cache
    staleTime: 1000 * 10,
    // how long to keep cache (ms) - optional
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false // avoid auto-refetch on window focus for demo
  });

  return (
    <div style={{ maxWidth: 900 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Posts</h2>
        <div style={{ fontSize: 13 }}>
          {isFetching ? "Updating..." : "Idle"}
        </div>
      </div>

      <div style={{ marginBottom: 12 }}>
        <button onClick={() => refetch()} style={{ marginRight: 8 }}>Refetch</button>
        <button onClick={() => queryClient.invalidateQueries(["posts"])}>Invalidate Cache</button>
      </div>

      {isLoading && <div>Loading posts...</div>}
      {isError && <div style={{ color: "red" }}>Error: {error.message}</div>}

      {data && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {data.slice(0, 20).map(post => (
            <li key={post.id} style={{ padding: 8, borderBottom: "1px solid #eee" }}>
              <strong>{post.id}. {post.title}</strong>
              <p style={{ margin: "6px 0 0" }}>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
      <div style={{ marginTop: 12, fontSize: 13, color: "#555" }}>
        Tip: hide and show the PostsComponent (using the button above) within 10 seconds to see data load instantly from cache (staleTime = 10s).
      </div>
    </div>
  );
}

