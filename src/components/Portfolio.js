import React, { Component } from "react";
// import piano from './public/images/portfolio/piano.jpg'

export default class Porfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Explore my work</h1>
            <div className="portfolio-container">
              <a
                href="https://gitlab.com/jrachelr1/piano"
                className="portfolio-item"
              >
                <div className="overlay">
                  <h4>LetsPlayPiano</h4>
                  <img
                    src="images/piano.jpg"
                    alt="close up of a piano keyboard"
                  />
                  <p>
                    An interactive piano built using React Hooks and the
                    Soundfont Player library.
                  </p>
                </div>
              </a>
              <a
                href="https://the-jerney.gitlab.io/concerto/"
                className="portfolio-item"
              >
                <div className="overlay">
                  <h4>Concerto</h4>
                  <img src="images/background.jpg" alt="a concert" />
                  <p>
                    A concert search and music sampling app created using
                    Discovery API and Spotify. Built with React, FastAPI and
                    PostgreSQL.
                  </p>
                </div>
              </a>
              <a
                href="https://gitlab.com/jrachelr1/thegarage"
                className="portfolio-item"
              >
                <div className="overlay">
                  <h4>TheGarage</h4>

                  <img src="images/car.png" alt="side of car" />
                  <p>
                    A full-stack microservice application to manage a car
                    dealership and service department built with Django and
                    React.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
