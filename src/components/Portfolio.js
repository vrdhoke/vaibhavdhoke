import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects.</h1>
          <div id="portfolio-wrapper" >
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <a href={item.link} target="_blank">
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                   
                      {/* <img src={`${item.imgurl}`} className="item-img"/> */}
                      <img style={{color:'#fff', height:'300px',width:'300px'}} src={item.imgurl}/>
                      <div className="overlay">
                        <div className="text-secondary portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                  </div>
                </div>
                
                </a>
                
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}