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
                <h4>Piano</h4>
                <a href="https://gitlab.com/jrachelr1/piano">
                  <img src="https://images.pexels.com/photos/860662/pexels-photo-860662.jpeg?auto=compress&cs=tinysrgb&w=800://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&w=800" alt="close up of a piano keyboard"></img>
                </a>
                <p>An interactive piano built using React Hooks and the Soundfont Player library.</p>
              </div>
              <div className="portfolio-item">
                <h4>CarCar</h4>
                <a href="https://gitlab.com/jrachelr1/car-car">
                  <img src="https://images.pexels.com/photos/7856780/pexels-photo-7856780.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="close up of a piano keyboard"></img>
                </a>
                <p>A full-stack microservice application built with Django and React.</p>
              </div>
              <div className="portfolio-item">
                <h4>ConferenceGO</h4>
                <a href="https://gitlab.com/jrachelr1/fearless-frontend">
                  <img src="https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="close up of a piano keyboard"></img>
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