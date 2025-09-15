import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const RootLayout = () => {
	const [searchResult, setSearchResult] = React.useState("");
	useEffect(() => {
		const filteredPosts = document.querySelectorAll(".post");
		console.log(filteredPosts);
		filteredPosts.forEach((post) => {
			if (post.textContent.toLowerCase().includes(searchResult.toLowerCase())) {
				post.style.display = "block";
			} else {
				post.style.display = "none";
			}
		}); 
		// Reverse to show the most recent posts first when using
	}, [searchResult]);
	
	return (
	<div className='App'>
		<Header title="React JS Blog" />
		<Nav search={searchResult} setSearch={setSearchResult} />
		<div className="Home">
		<Outlet />
		</div>
		<Footer />
	</div>
  )
}

export default RootLayout