import React from "react";
import App from "../App";
import "../App.css";
import "./2_Headlines.css";
import { img } from "./images/3000.jpg";

function Headlines(props) {
  const todayDate = Date.now();
  const today = new Date(todayDate);
  return (
    <div className="main">
      <aside>
        <h6>Headlines</h6>
        <h6 style={{ color: "red" }}>{today.toDateString()}</h6>
      </aside>
      <section>
        <div id="headlinesSection">
          <div id="headlinesSection1">
            <header>
              <h5>Trump Impeachment</h5>
              <h5>
                Schumer says Senate Trial without witness would be cover up
              </h5>
            </header>
            <div id="headlinesSection1Image">
              <img
                src={require("./images/5472.jpg")}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <hr />
              <p style={{ color: "white" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div>
              <hr />
              <p style={{ color: "white" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div>
              <hr />
              <p style={{ color: "white" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div id="headlinesSection2">
            <img src={require("./images/4000.jpg")} style={{ width: "100%" }} />
            <div>
              <hr />
              <h5>
                <span>Canada/</span>
              </h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div>
              <hr />
              <h5>
                <span>
                  'These indian wars aren't over'/ Ancient tribal graves
                  threatened by Trump border wall
                </span>
              </h5>
            </div>
            <div>
              <hr />
              <h5>
                <span>Homelessness/</span>
              </h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div>
              <hr />
              <h5>
                <span>Man with the Money/</span>
              </h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div>
              <hr />
              <h5>
                <span>Christianity/</span>
              </h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div id="headlinesSection3">
            <img
              src={require("./images/3000.jpg")}
              style={{ width: "100%", height: "50%" }}
            />
            <h5>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
            </h5>
            <hr />
            <p>
              "There is no one who loves pain itself, who seeks after it and
              wants to have it, simply because it is pain..."
            </p>
          </div>
          <div id="headlinesSection4">
            <div>
              <hr />
              <h5>
                <span>Georgia/</span>
                Lorem Ipsum is simply dummy text
              </h5>
            </div>
            <div>
              <hr />
              <h5>
                <span>Dubai/</span>
                Lorem Ipsum is simply dummy text
              </h5>
            </div>
            <div>
              <hr />
              <h5>
                <span>Mississippi/</span>
                Lorem Ipsum is simply dummy text
              </h5>
            </div>
            <div>
              <hr />
              <h5>
                <span>NewYork/</span>
                Lorem Ipsum is simply dummy text
              </h5>
            </div>
            <div>
              <hr />
              <h5>
                <span>Dallas/</span>
                Lorem Ipsum is simply dummy text
              </h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Headlines;
