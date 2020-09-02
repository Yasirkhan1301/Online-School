import React from 'react'

function home()
{
    return <section className="home-banner-area relative">
      <div className="container">
        <div className="row fullscreen d-flex align-items-center justify-content-center">
            <div className="banner-content col-lg-8 col-md-12">
                <h1 className="wow fadeIn" data-wow-duration="4s">We Rank the Best Courses  on the Web</h1>
                <p className="text-white">
                    In the history of modern astronomy, there is probably no one greater leap forward than the building and launch of the space
                    telescope.
                </p>

                <div className="input-wrap">
                    <form action="" className="form-box d-flex justify-content-between">
                        <input type="text" placeholder="Search Courses" className="form-control" name="username"></input>
                        <button type="submit" className="btn search-btn">Search</button>
                    </form>
                </div>
                <h4 className="text-white">Top courses</h4>

                <div className="courses pt-20">
                    <a href="#" data-wow-duration="1s" data-wow-delay=".3s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">Ruby
                        on Rails</a>
                    <a href="#" data-wow-duration="1s" data-wow-delay=".6s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">Python</a>
                    <a href="#" data-wow-duration="1s" data-wow-delay=".9s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">Marketing</a>
                    <a href="#" data-wow-duration="1s" data-wow-delay="1.2s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">UI/UX
                        Design
                    </a>
                    <a href="#" data-wow-duration="1s" data-wow-delay="1.5s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">Android</a>
                    <a href="#" data-wow-duration="1s" data-wow-delay="1.8s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">Data
                        Science
                    </a>
                    <a href="#" data-wow-duration="1s" data-wow-delay="2.1s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">Cryptocurrency</a>
                </div>
            </div>
        </div>
      </div>
      <div className="rocket-img">
        <img src="img/rocket.png" alt=""></img>
           </div>
    </section>
}

export default home;