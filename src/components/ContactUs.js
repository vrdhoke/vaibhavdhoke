import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="six columns footer-widgets">
              <div className="widget">
                <h4 style={{color:'#fff', fontFamily:'Verdana'}}>LinkedIn :
                <a href={resumeData.linkedinId}> {resumeData.linkedinId}</a>
                </h4>
                <h4 style={{color:'#fff', fontFamily:'Verdana'}}>Mobile No :
                <a href="tel:+18572694532"> +1-857-269-4532</a>
                </h4>
                <h4 style={{color:'#fff', fontFamily:'Verdana'}}>Email :    
                <a href="mailto: vaibhavdhoke1@gmail.com"> vaibhavdhoke1@gmail.com</a>
                </h4>
                <h4 style={{color:'#fff', fontFamily:'Verdana'}}>Address :    
                   3110 Washington Street, Unit 2<br></br>
                  &emsp;&emsp;&emsp;&emsp;&emsp;Boston, Massachusetts<br></br>
                  &emsp;&emsp;&emsp;&emsp;&emsp;Pin : 02119, USA
                </h4>
                

                

                
              </div>
            </aside>
            <div className="three columns">

                <img className="profile-pic"  src="images/photo.jpg" alt="" />

                </div>
          </div>
        </section>
        );
  }
}