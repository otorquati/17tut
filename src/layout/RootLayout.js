import React from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const RootLayout = () => {
	const [search, setSearch] = React.useState("");

	return (
	<div className='Home'>
		<Header title="React JS Blog" />
		<Nav search={search} setSearch={setSearch} />
		<div className="Home">
		<Outlet />
		</div>
		<Footer />
	</div>
  )
}

export default RootLayout