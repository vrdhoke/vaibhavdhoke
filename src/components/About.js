import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/mypic.jpeg"/>
                
            </div>

            <div className="nine columns">

               <h2>About Me</h2>
               <p style={{ fontFamily:'Verdana'}}>
               {
                 resumeData.aboutme1
               }
               </p>
               <p style={{ fontFamily:'Verdana'}}>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">
                  <br></br>
                  <h2>Lets Connect! <a className="smoothscroll" href="#contact"> <i className="icon-down-circle"></i></a></h2>
                  {/* <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    
                    <span><a href={resumeData.website} target="_blank">Linkedin Profile</a>
                    </span>
       					   </p> */}
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}