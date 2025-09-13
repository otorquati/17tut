import { Link, useLoaderData, useParams } from "react-router-dom";

const PostPage = () => {
  const { id } = useParams();
  const posts  = useLoaderData();
  const post = posts.find( p => (p.id).toString() === id );
  
  /* Manipulador de exclusão de postagem */
  const handleDelete = async (id) => {
    const postList = await fetch(`http://localhost:3500/posts/${id}`, {
      method: "DELETE"
    });
    if (!postList.ok) throw Error("Could not delete post");
    window.location.href = "/";
  }

  return (
    <main className="PostPage" onSubmit={(e) => e.preventDefault()}>
      <article className="post">
        {posts.length && 
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        }
        {!post && (
          <>
            <h2>Post not found</h2>
            <p>Well, that's disappointing.</p>
            <p><Link to="/">Go back to the homepage</Link></p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;

/* export const postLoader = async () => {
	const res = await fetch("http://localhost:3500/posts");
	if (!res.ok) throw Error("Could not fetch posts");
	return res.json();
}  */
