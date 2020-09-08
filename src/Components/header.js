import React from 'react'


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
						<li><a href="">About</a></li>
						<li><a href="/">Courses</a></li>
						<li ><a href="/">Pages</a>
							<ul>
								<li><a href="/">Elements</a></li>
							</ul>
						</li>
						<li className="menu-has-children"><a href="/">Blog</a>
							<ul>
								<li><a href="/">Blog Home</a></li>
								<li><a href="/">Blog Details</a></li>
							</ul>
						</li>
						<li><a href="/">Contact</a></li>
					</ul>
				</nav>
			</div>
		</div>
   </header>
}

export default Header;