import React from "react";
import Particles from "react-particles-js";
var s = {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 10, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
};
class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="contentHome">
        <Particles params={s} />{" "}
        <div className="topSide">
          <p className="intro">Welcome to...</p>
          <br></br>
          <h1 className="frontTitle">FBLA QUIZ</h1>
          <br></br>
          <hr></hr>
          <p>
            Click 'Quiz' on the top menu bar to begin a five question quiz. For
            resources to support your FBLA study journey, check out FBLA's →
            <a href="https://www.fbla-pbl.org/"> home page. ← </a>
          </p>
          <br />
          <br />
          <iframe
            className="video"
            width="100"
            height="100"
            src="https://www.youtube.com/embed/BHQYS7ZKlE8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Home;
