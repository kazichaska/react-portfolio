import React from "react";
import coverImage from "../../assets/cover/cover-page.jpg";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Kazi Islam</h1>
            <p id="demo"> </p>
            <img src={coverImage} className="my-2" style={{ width: "100%", height: "100%" }} alt="cover" />
        </section>
    );
}

export default About;