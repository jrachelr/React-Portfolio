import React, { Component } from 'react';
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaDocker, faCloud, FaCloud } from 'react-icons/fa';
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiDjango } from "@react-icons/all-files/si/SiDjango"
import { SiPostgresql } from "@react-icons/all-files/si/SiPostgresql"
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb"
import { SiRedux } from "@react-icons/all-files/si/SiRedux"
import { BsLightningFill } from "@react-icons/all-files/bs/BsLightningFill"


export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Professional</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.title}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>
              {resumeData.skillsDescription}
            </p>
            <div id='grid-container'>
              <div className="grid-items">
                <div className='symbol' >
                  <FaPython size="2em" />
                </div>
                <p>Python</p>
              </div>
              <div className="grid-items">
                <div className='symbol'>
                  <SiJavascript size="2em" />
                </div>
                <p>JavaScript</p>
              </div>
              <div className="grid-items">
                <div className='symbol'>
                  <SiDjango size="2em" />
                </div>
                <p>Django</p>
              </div>
              <div className="grid-items">
                <div className='symbol'>
                  <FaReact size="2em" />
                </div>
                <p>React</p>
              </div>
              <div className="grid-items">
                <div className='symbol'>
                  <FaHtml5 size="2em" />
                </div>
                <p>HTML5</p>
              </div>
              <div className="grid-items">
                <div className='symbol'>
                  <FaCss3Alt size="2em" />
                </div>
                <p>CSS3</p>
              </div>
              <div className="grid-items">
                <div className='symbol'>
                  <SiMongodb size="2em" />
                </div>
                <p>MongoDB</p>
              </div>
              <div className="grid-items">
                <div className='symbol'>
                  <SiPostgresql size="2em" />
                </div>
                <p>PostgreSQL</p>
              </div>
              <div className="grid-items">
                <div className='symbol'>
                  <FaDocker size="2em" />
                </div>
                <p>Docker</p>
              </div>
              <div className="grid-items">
                <div className='symbol'>
                  <SiRedux size="2em" />
                </div>
                <p>Redux</p>
              </div>
              <div className="grid-items">
                <div className='symbol'>
                  <BsLightningFill size="2em" />
                </div>
                <p>FastAPI</p>
              </div>
              <div className="grid-items">
                <div className='symbol'>
                  <FaCloud size="2em" />
                </div>
                <p>RESTful APIs</p>
              </div>
              {/* {
                resumeData.skills && resumeData.skills.map((item) => {
                  return (
                    <div key={item.skillname} className="grid-items">
                      {...item.symbol}
                      <p>
                        {item.skillname}
                      </p>
                    </div>
                  )
                })
              } */}

            </div>
          </div>
        </div>
      </section>
    );
  }
}