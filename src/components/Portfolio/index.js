import React from "react";


function Portfolio() {
    return (

        //  JSX
        <div>
            <main>
                <h2 style={{textAlign:"center"}}>Slideshow Gallery</h2>

                <div class="container">
                    <div class="mySlides">
                        <div class="numbertext">1 / 6</div>
                        <img src="images/comp_hardware.jpeg" style={{ width: "100%" }} />
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">2 / 6</div>
                        <img src="images/img_avatar.png" style={{ width: "100%" }} />
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">3 / 6</div>
                        <img src="images/Run Buddy.png" style={{ width: "100%" }} />
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">4 / 6</div>
                        <img src="images/saysomething.png" style={{ width: "100%" }} />
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">5 / 6</div>
                        <img src="images/sportlytics.png" style={{ width: "100%" }} />
                    </div>

                    <a class="prev" onclick="plusSlides(-1)">❮</a>
                    <a class="next" onclick="plusSlides(1)">❯</a>

                    <div class="caption-container">
                        <p id="caption"></p>
                    </div>

                    <div class="row">
                        <div class="column">
                            <img class="demo-1 cursor" src="images/comp_hardware.jpeg" style={{ width: "100%" }} onclick="currentSlide(1)" alt="The Woods" />
                        </div>
                        <div class="column">
                            <img class="demo-1 cursor" src="images/img_avatar.png" style={{ width: "100%" }} onclick="currentSlide(2)" alt="Cinque Terre" />
                        </div>
                        <div class="column">
                            <img class="demo-1 cursor" src="images/Run Buddy.png" style={{ width: "100%" }} onclick="currentSlide(3)" alt="Mountains and fjords" />
                        </div>
                        <div class="column">
                            <img class="demo-1 cursor" src="images/saysomething.png" style={{ width: "100%" }} onclick="currentSlide(4)" alt="Northern Lights" />
                        </div>
                        <div class="column">
                            <img class="demo-1 cursor" src="images/sportlytics.png" style={{ width: "100%" }} onclick="currentSlide(5)" alt="Nature and sunrise" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}


export default Portfolio;