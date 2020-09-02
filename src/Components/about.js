import React from 'react';


function about()
{
    return <section className="about-area section-gap">
       <div className="container">
        <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-6 about-left">
                <img className="img-fluid" src="img/about.jpg" alt=""></img>
            </div>
            <div className="offset-lg-1 col-lg-6 offset-md-0 col-md-12 about-right">
                <h1>
                    Over 2500 Courses from 5 Platform</h1>
                <div className="wow fadeIn" data-wow-duration="1s">
                    <p>
                        There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think
                        about setting up your own viewing station. In the life of any aspiring astronomer that it is time to buy that first
                        telescope. It’s exciting to think about setting up your own viewing station.
                    </p>
                </div>
                <a href="courses.html" className="primary-btn">Explore Courses</a>
            </div>
        </div>
      </div>
   </section>
}

export default about;