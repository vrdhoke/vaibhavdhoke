import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <a href={item.imgurl} className="text-secondary">
                <div className="columns portfolio-item">
                  <div>
                   
                      {/* <img src={`${item.imgurl}`} className="item-img"/> */}
                      <img src={item.imgurl} className="item-img"/>
                      <div className="overlay">
                        <div className="text-secondary">
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