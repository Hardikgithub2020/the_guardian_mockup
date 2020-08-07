// @flow
import React from "react";
import "../App.css";
import "./3_Spotlight.css";

function Spotlight(props) {
  return (
    <div className="main">
      <aside>
        <h6>Spotlight</h6>
      </aside>
      <section id="spotLightSection">
        <div id="spotLightSection1">
          <div>
            <h5>
              <span>
                Fire-starting weed or ecological scapegoat? / The battle over
                Califonia's eucalyptus trees
              </span>
            </h5>
            <br />
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
          <div>
            <img
              src={require("./images/spotlight.png")}
              style={{ width: "100%", height: "90%" }}
            />
          </div>
        </div>
        <div id="spotLightSection2">
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
        <div id="spotLightSection3">
          <div id="spotLightSection3Child">
            <img
              src={require("./images/4592.jpg")}
              style={{ width: "100%", height: "50px",margin : 5 } }
            />

            <p>
              <span>Mind Your own your businesss, Alexa/ </span>How to keep sceret from your voice
            </p>
            
          </div>
          <div id="spotLightSection3Child">
            <img
              src={require("./images/5000.jpg")}
              style={{ width: "100%", height: "50px",margin : 5 } }
            />

            <p>
              <span>Mind Your own your businesss, Alexa/ </span>How to keep sceret from your voice
            </p>
          </div>
          <div id="spotLightSection3Child">
            <img
              src={require("./images/5004.jpg")}
              style={{ width: "100%", height: "50px",margin : 5 } }
            />

            <p>
              <span>Mind Your own your businesss, Alexa/ </span>How to keep sceret from your voice
            </p>
          </div>
          <div id="spotLightSection3Child">
            <img
              src={require("./images/4592.jpg")}
              style={{ width: "100%", height: "50px",margin : 5 } }
            />

            <p>
              <span>Mind Your own your businesss, Alexa/ </span>How to keep sceret from your voice
            </p>
          </div>
        </div>
        <div id="spotLightSection4">
        <div>
            <img
              src={require("./images/2048.jpg")}
              style={{ width: "100%", height: "150px" }}
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

export default Spotlight;
