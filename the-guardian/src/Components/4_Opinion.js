import React from 'react';
import '../App.css';
import './4_Opinion.css';

function Opinion (props) {
    return (
        <div className="main">
          <aside>
            <h6>opinion</h6>
          </aside>
          <section id="opinionSection">
            <div id="opinionSection1">
            <div>
                <img
                  src={require("./images/1208.jpg")}
                  style={{ width: "100%", height: "90%" }}
                />
              </div>
              <div>
                <h5>
                  <span>
                    //
                  </span>No, Clint Eastwood, female journalists don't trade sex for information
                </h5>
                <h5><span>Ankita Rao</span></h5>
                
              </div>
              
            </div>
            <div id="opinionSection2">
              <div>
                <img
                  src={require("./images/300.jpg")}
                  style={{ width: "100%", height: "70px" }}
                />
                <div>
                  <h5>
                    <span>Best of 2019 ////</span>
                  </h5>
                  <h5>
                    White people assume niceness is the answer to racial inequality.
                    It's not
                  </h5>
                </div>
              </div>
            </div>
            <div id="opinionSection3">
              <div id="opinionSection3Child">
                <img
                  src={require("./images/4592.jpg")}
                  style={{ width: "100%", height: "50px",margin : 5 } }
                />
    
                <p>
                  <span>Mind Your own your businesss, Alexa/ </span>How to keep sceret from your voice
                </p>
                
              </div>
              <div id="opinionSection3Child">
                <img
                  src={require("./images/5000.jpg")}
                  style={{ width: "100%", height: "50px",margin : 5 } }
                />
    
                <p>
                  <span>Mind Your own your businesss, Alexa/ </span>How to keep sceret from your voice
                </p>
              </div>
              <div id="opinionSection3Child">
                <img
                  src={require("./images/5004.jpg")}
                  style={{ width: "100%", height: "50px",margin : 5 } }
                />
    
                <p>
                  <span>Mind Your own your businesss, Alexa/ </span>How to keep sceret from your voice
                </p>
              </div>
              <div id="opinionSection3Child">
                <img
                  src={require("./images/4592.jpg")}
                  style={{ width: "100%", height: "50px",margin : 5 } }
                />
    
                <p>
                  <span>Mind Your own your businesss, Alexa/ </span>How to keep sceret from your voice
                </p>
              </div>
            </div>
            <div id="opinionSection4">
            <div>
                <img
                  src={require("./images/2048.jpg")}
                  style={{ width: "100%", height: "70px" }}
                />
                <div>
                  <h5>
                    <span>Best of 2019 ////</span>
                  </h5>
                  <h5>
                    White people assume niceness is the answer to racial inequality.
                    It's not
                  </h5>
                </div>
              </div>
                
            </div>
          </section>
        </div>
      );
}

export default Opinion;