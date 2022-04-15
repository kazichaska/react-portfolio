import React from "react";
import coverImage from "../../assets/cover/cover-page.jpg";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Kazi Islam's Portfolio </h1>
            <img src={coverImage} className="my-2" style={{ width: "100%", height: "100%" }} alt="cover" />
        </section>
        // <div className="foot">
        //     <p> Find me on Linkedin</p>
        //     <p>
        //         <a href="https://www.linkedin.com/in/kaziislam/">linkedin</a>
        //     </p>
        // </div>
    );
}

export default About;