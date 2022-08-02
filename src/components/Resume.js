import React, { Component } from 'react';
import Paralax from './Paralax';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work Experience</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item,i, resumeData) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <b className='location'>{item.location}</b>
                          <p className="achievements">
                          {item.Achievements.map((item) => {return(<div>{item}</div>)})}
                          </p>
                       </div>
                        {i + 1 !== resumeData.length&&(<hr></hr>)}
                    </div>

                  )
                })
              }
            </div> 
         </div>

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          <b className="edu">{item.subjects}</b><br></br><br></br>
                          <p className="edu">{item.Achievements}</p>
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

               <h2>
               {resumeData.skillsDescription}
               </h2><br></br>
               <h5 style={{ fontFamily:'Verdana'}} >
               {resumeData.skillsExplain}
               </h5><br></br><br></br>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                      
                    )
                  })
                }

   					</ul><br></br><br></br><br></br>
             <Paralax/>
   				</div>

   			</div>

         </div>

      </section>
    );
  }
}