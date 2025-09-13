import React from 'react'
import Post from '../pages/Post'

const Feed = ({ id, posts }) => {
  return (
	<>
		<Post key={id} posts={posts} />
	</>
  )
}

export default Feed