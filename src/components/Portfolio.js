import React, { Component } from 'react';
// import piano from './public/images/portfolio/piano.jpg'


export default class Porfolio extends Component {
  render() {

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Explore my work</h1>
            <div className="portfolio-container">
              <a href="https://gitlab.com/jrachelr1/piano" className="portfolio-item">
                <div className="overlay">
                  <h4>LetsPlayPiano</h4>
                  <img src="images/piano.jpg" alt="close up of a piano keyboard"></img>
                  <p>An interactive piano built using React Hooks and the Soundfont Player library.</p>
                </div>
              </a>
              <a href="https://gitlab.com/jrachelr1/car-car" className="portfolio-item">
                <div className="overlay">
                  <h4>CarCar</h4>

                  <img src="images/car.png" alt="side of car"></img>
                  <p>A full-stack microservice application to manage a car dealership and service department built with Django and React.</p>
                </div>
              </a>
              <a href="https://gitlab.com/jrachelr1/fearless-frontend" className="portfolio-item">
                <div className="overlay">
                  <h4>ConferenceGO</h4>

                  <img src="images/conference.jpg" alt="windows at a conference"></img>

                  <p>A conference management application implementing third party APIs</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}