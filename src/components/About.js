import React from "react";
// import { FormText } from "reactstrap";
import amanlogo from "../image/amanabout.jpeg";
import { AiFillFilePdf } from "react-icons/ai";
import { Row, Col } from "react-bootstrap";
import { Card } from "reactstrap";

const styles = {
  cardsec: {
    margin: 10,
    padding: 10,
    width: 200,
    height: 120,
  },
};

export default function About() {
  return (
    <div id="about" style={{ margin: 10 }}>
      <div className="text-center">
        {/* <section class="about section"> */}
        <h2
          class="section__title"
          style={{
            margin: 5,
            paddingTop: 20,
          }}
        >
          About Me{" "}
        </h2>
        <span class="section__subtitle">My Introduction</span>
      </div>

      <div>
        <Row style={{ margin: 10, padding: 10 }}>
          <Col style={{alignSelf:'center', textAlign:'center'}}>
            <img
              style={{
                margin: 10,
                borderRadius: 20,
                width: 160,
                height: 280,
               
              }}
              src={amanlogo}
              alt=""
            />
          </Col>

          <Col style={{alignSelf:'center',textAlign:'center'}}>
            <Row>
              <Col style={styles.cardsec}>
                <Card style={styles.cardsec}>
                  <div>
                    <i class="bx bx-award about__icon"></i>
                    <h3 class="about__title"> 4rd Year Student</h3>
                    <span class="about__subtitile">CSE Business Analytics</span>
                  </div>
                </Card>
              </Col>
              <Col style={styles.cardsec}>
                <Card style={styles.cardsec}>
                  <div>
                    <i class="bx bx-briefcase-alt about__icon"></i>
                    <h3 class="about__title">Completed</h3>
                    <span class="about__subtitile">10 + Projects</span>
                  </div>
                </Card>
              </Col>
              <Col style={styles.cardsec}>
                <Card style={styles.cardsec}>
                  <div>
                    <i class="bx bx-calendar-event about__icon"></i>
                    <h3 class="about__title">Conducted</h3>
                    <span class="about__subtitile">1+ Events</span>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row style={{ margin: 10,paddingTop:20 }}>
              <div>
                <p class="about__description" style={{fontFamily:'serif'}} >
                  Frontend developer, I create web applications with UI / UX
                  user interfaces and a Graphic Designer too. I have years of
                  experinence and many clients are happy with the work I do.
                </p>
              </div>
            </Row>
            <Row style={{ margin: 20 }}>
              <a
                style={{
                  margin: 10,
                  padding: 10,
                  background: "#3FCD86",
                  borderRadius: 7,
                  color: "#fff",
                  textDecoration: "none",
                  // justifyContent:"center",
                  textAlign: "center",
                }}
                // download=""
                href="https://drive.google.com/file/d/1uMhI5vFv7XTHhSwLZD0-CxaKtt4i2bwB/view?usp=sharing"
                // class="button button--flex"
              >
                Download CV
                <AiFillFilePdf style={{ margin: 8 }} />
              </a>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
