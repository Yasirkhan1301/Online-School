import React from 'react'

function Header()
{

    return (
	<header id="header">
		<div className="container">
			<div className="row align-items-center justify-content-between">

				<div class="navbar-brand ">

					<a>Online School</a>
		
				</div>
 				<nav id="nav-menu-container">
 					<ul className="nav-menu ">
 						<li><a href="/">Home</a></li>
 						<li><a href="/about_page">About</a></li>
 						<li><a href="/course_page">Courses</a></li>
						<li className="menu-has-children"><a href="/">Blog</a>
							<ul>
								<li><a href="/blog_page">Blog Home</a></li>
								<li><a href="/blog_detail">Blog Details</a></li>
							</ul>
						</li>
						<li><a href="/contact_page">Contact</a></li>
						<li ><a href="/login_page">Login</a></li>
						<li ><a href="/register_page">Register</a></li>



					</ul>
				</nav>
			 </div>
			</div>
   </header>)
}



export default Header;