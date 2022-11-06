import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              <h4>Get in touch:</h4>
            </p>
            <p>
              <a href="mailto:hello@racheldev.com">
                hello@racheldev.com
              </a>
            </p>
          </div>
        </div>

      </section>
    );
  }
}