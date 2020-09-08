import React from 'react'
import {Link} from 'react-router-dom'

function Header()
{

    return <header id="header">
		<div className="container">
			<div className="row align-items-center justify-content-between d-flex">
				<div>
					<a ><img src="img/logo.png" alt="Alpha" title="Alpha" /></a>
				</div>
 				<nav id="nav-menu-container">
 					<ul className="nav-menu ">
 						<li className="menu-active"><a href="/">Home</a></li>
 						<li><a href="/about_page">About</a></li>
 						<li><a href="/course_page">Courses</a></li>
 						<li ><a href="/pages">Pages</a>
 							<ul>
								<li><a href="/elements">Elements</a></li>
							</ul>
						</li>
						<li className="menu-has-children"><a href="/">Blog</a>
							<ul>
								<li><a href="/blog_page">Blog Home</a></li>
								<li><a href="/blog_detail">Blog Details</a></li>
							</ul>
						</li>
						<li><a href="/contact_page">Contact</a></li>
					</ul>
				</nav>
			</div>
		</div>
   </header>
}


export default Header;