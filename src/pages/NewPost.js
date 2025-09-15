import { useState } from 'react';

const NewPost = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const datetime = new Date().toLocaleString();
    const newPost = { title: postTitle, body: postBody, datetime };
    try {
      const res = await fetch("http://localhost:3500/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
      });
      if (!res.ok) throw Error("Did not post");
      setPostTitle('');
      setPostBody('');
      window.location.href = "/";
    } catch (err) {
      console.log(err.message);
    }
  }
 
  return (

      <div className='NewPost'>
        <h2>NewPost</h2>
        <form className='newPostForm' onSubmit={handleSubmit}>
          <label htmlFor="postTitle">Title:</label>
          <input 
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          />
          <label htmlFor="postBody">Post:</label>
          <textarea 
            id="postBody"
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          ></textarea>
          <button type='submit'>Submit</button>
        </form> 
      </div>

  );

}

export default NewPost;
