import React from 'react';
import Header from "./Components/header"
import courses from "./Components/courses"
import feature from "./Components/feature"
import footer from "./Components/footer"



function course_page()
{
    return (
        <div>
            {Header()}
            {banner()}
            {feature()}
            {courses()}
            {footer()}

        </div>
    );
}

function banner()
{
    return(

	<section class="banner-area relative">
		<div class="container">
			<div class="row d-flex align-items-center justify-content-center">
				<div class="about-content col-lg-12">
					<h1 class="text-white">
						Courses
					</h1>
					<p>In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of
						the space telescope.</p>
					<div class="link-nav">
						<span class="box">
							<a href="/">Home </a>
							<i class="lnr lnr-arrow-right"></i>
							<a href="/about_page">About Us</a>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="rocket-img">
			<img src="img/rocket.png" alt=""></img>
		</div>
	</section>

    )
}

export default course_page