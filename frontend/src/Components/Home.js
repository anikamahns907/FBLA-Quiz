import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <div className="rightSide">
          <iframe
            className="video"
            width="100"
            height="100"
            src="https://www.youtube.com/embed/BHQYS7ZKlE8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="leftSide">
          <div className="welcome">
            <p>Welcome to...</p>
          </div>
          <div className="margin50">
            <h1 className="frontTitle">FBLA </h1>
            <h1 className="frontTitle">Quiz</h1>
            <p className="intro">
              FBLA quiz brings the fundamental meaning of FBLA into an
              interactive user interface. Here users are able to expand their
              knowledge on a multitude of aspects in corrleation to FBLA.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
