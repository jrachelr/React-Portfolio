import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">

               <div className="three columns">

                  <img className="profile-pic" src="images/rachel.png" alt="" />

               </div>

               <div className="nine columns main-col">

                  <h2>About Me</h2>
                  <div>
                     <p>
                        {resumeData.aboutme1}

                     </p>
                     <p>
                        {resumeData.aboutme2}
                     </p>
                  </div>

               </div>
            </div>
         </section>
      );
   }
}