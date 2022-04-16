import React, { useEffect } from "react";
// import coverImage from "../../assets/cover/cover-page.jpg";
import './about.css'


function About() {

    var i = 0;
    var txt = "I am Kazi Islam, been in it \n Information Technology for long time; finished my Masters in Information Technology and also achieved several certifications Microsft MCSE/MCSA, VMware VCP, HP and Dell Server Hardwares, HP and Dell Storage \n and I finishing bootcamp to be full stack web developer.";
    var speed = 50;

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    useEffect(() => {
        typeWriter()
    }, []);

    return (
        <section className="my-5">
            {/* <h1 id="about">Kazi Islam</h1> */}
            <p id="demo"> </p>
            {/* <img src={coverImage} className="my-2" style={{ width: "80%", height: "80%" }} alt="cover" /> */}
        </section>
    );
}

export default About;