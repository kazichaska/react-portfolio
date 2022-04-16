/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './portfolio.css'

function Portfolio() {
    return (

        //  JSX
        <div>
            <main>
                <div className="portfolio-container">
                    <Splide options={{ rewind: true }} aria-label="Portfolio Slides">
                        <SplideSlide>
                            <div className="img-container">
                                <h1>Run Buddy</h1>
                                {/* <link>"https://kazichaska.github.io/run-buddy/"</link> */}
                                <img className="portfolio" src="/images/Run Buddy.png" alt="Run Buddy" />
                                <a href="https://kazichaska.github.io/run-buddy/">Link to deployed application</a>
                                <a href="https://github.com/kazichaska/run-buddy"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="img-container">
                                <h1>SaySomething</h1>
                                <img className="portfolio" src="/images/saysomething.png" alt="saysomthing" />
                                <a href="https://afternoon-island-61573.herokuapp.com/">Link to deployed application</a>
                                <a href="https://github.com/kazichaska/saysomething"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="img-container">
                                <h1>Sportlytics</h1>
                                <img className="portfolio" src="/images/sportlytics.png" alt="sportlytics" />
                                <a href="https://kazichaska.github.io/Sportlytics/">Link to deployed application</a>
                                <a href="https://github.com/kazichaska/Sportlytics"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="img-container">
                                <h1>Tech Blog</h1>
                                <img className="portfolio" src="/images/techblog.png" alt="techblog" />
                                <a href="https://powerful-forest-82738.herokuapp.com/">Link to deployed application</a>
                                <a href="https://github.com/kazichaska/tech-blog"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="img-container">
                                <h1>Pizza Hunt</h1>
                                <img className="portfolio" src="/images/pizzahunt.png" alt="pizzahunt" />
                                <a href="https://pure-lowlands-07353.herokuapp.com/">Link to deployed application</a>
                                <a href="https://github.com/kazichaska/pizza-hunt"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="img-container">
                                <h1>Weather Dashboard</h1>
                                <img className="portfolio" src="/images/weather-dashboard.png" alt="weather-dashboard" />
                                <a href="https://kazichaska.github.io/weather-dashboard/">Link to deployed application</a>
                                <a href="https://kazichaska.github.io/weather-dashboard/" ><i className="fa-brands fa-github"></i></a>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="img-container">
                                <h1>Note Taker</h1>
                                <img className="portfolio" src="/images/note-taker.png" alt="note-taker" />
                                <a href="https://mysterious-sea-32906.herokuapp.com/">Link to deployed application</a>
                                <a href="https://github.com/kazichaska/note-taker"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </main>
        </div>
    )
}


export default Portfolio;