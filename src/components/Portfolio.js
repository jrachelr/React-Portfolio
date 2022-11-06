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
              <div className="portfolio-item">
                <h4>LetsPlayPiano</h4>
                <a href="https://gitlab.com/jrachelr1/piano">
                  <img src="images/piano.jpg" alt="close up of a piano keyboard"></img>
                </a>
                <p>An interactive piano built using React Hooks and the Soundfont Player library.</p>
              </div>
              <div className="portfolio-item">
                <h4>CarCar</h4>
                <a href="https://gitlab.com/jrachelr1/car-car">
                  <img src="images/car.png" alt="side of car"></img>
                </a>
                <p>A full-stack microservice application built with Django and React.</p>
              </div>
              <div className="portfolio-item">
                <h4>ConferenceGO</h4>
                <a href="https://gitlab.com/jrachelr1/fearless-frontend">
                  <img src="images/conference.jpg" alt="windows at a conference"></img>
                </a>
                <p>A conference management application implementing third party APIs</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}