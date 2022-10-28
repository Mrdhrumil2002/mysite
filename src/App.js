import React from "react";
import ReactDOM from "react-dom";
import Typed from "react-typed";
import { NavLink } from "react-router-dom";
import {
  Dropdown,
  Card,
  Navbar,
  Nav,
  Button,
  Row,
  Col,
  Container,
  CarouselItem,
  Carousel
} from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, Mousewheel, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./styles.css";
const textLines = [
  "Dhrumil ",
  " a Software Devloper",
  "an Engineer",
  "a Web Devloper",
  "a Billionaire"
];

function App() {
  return (
    <>
      {/*------------------------------------Nav Bar--------------------------------------*/}

      <Navbar
        bg="light"
        sticky="top"
        className="border-bottom py-0"
        variant="light"
      >
        <Container className="px-5  mx-auto navbar-component">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.ibb.co/tQZw2K4/image.png"
              width="75"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link
              activeClassName="active"
              activeStyle={{ color: "blue" }}
              href="#home"
              className="navbar-component"
            >
              Home
            </Nav.Link>
            <Nav.Link href="#Work" className="navbar-work navbar-component">
              Work
            </Nav.Link>
            <Nav.Link href="#about" className=" navbar-component">
              About
            </Nav.Link>
            <Nav.Link href="#contact" className=" navbar-component">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      <br />
      <br />

      {/*------------------------------------first intro--------------------------------------*/}

      <Container className="mx-auto px-5  first-intro">
        <div className="row middle-xl">
          <div className="col-xl-6 first-intro-text d-flex flex-column my-auto ">
            <div className=" ">
              <p className="  my-2 first-intro-text-header ">
                Hello, I am <Typed strings={textLines} typeSpeed={80} />
              </p>
              <p className="  first-intro-text-para">
                I am a software devloper with 9 years experience, focusing in
                studying and graduation. I want a job and a board game
                enthusiast.
              </p>
              <p className=" ">
                <small className="text-muted"></small>
              </p>
            </div>
          </div>
          <div className="col-xl-6">
            <img
              src="https://picsum.photos/seed/picsum/800"
              className="img-fluid  100 rounded-start"
              alt="..."
            />
          </div>
        </div>
      </Container>
      <br />
      <br />
      <br />

      <Container>
        {/*------------------------------------Long Card 1 --------------------------------------*/}
        <Container>
          <div></div>
          <Row>
            <Card bg="#f2f6ff" varient=" ">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
        {/*------------------------------------2 card 1--------------------------------------*/}

        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <h3>Product</h3>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        {/*------------------------------------2 card 2--------------------------------------*/}

        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Container>
      <Container id="section-about" className="content-section wf-section">
        <Container className="section-header  pr-0">
          <Container className="Container-section-header">
            <Container className="section-header-column px-0 border-bottom d-flex row">
              <Container className="column-svg-n-title d-flex col  col-10">
                <h1 className="heading-5">👨‍💻</h1>
                <h className="h4 my-0 mx-3 py-2 about-text" id="#about">
                  About
                </h>
              </Container>
              <Container className="column-view-more h-80 pr-0 col-2">
                <div className=" d-flex align-content-end">
                  <Container className=" section-header-link-cont p-0 d-flex ">
                    <a
                      href="https://www.linkedin.com/in/mrdhrumil2002"
                      className="  section-header-link  px-0 text-dark d-flex "
                    >
                      View Linkedin
                    </a>
                  </Container>
                  <Container className="align-content-end section-header-icon h2 px-0 ">
                    →
                  </Container>
                </div>
                <br />
              </Container>
            </Container>
          </Container>
        </Container>
        <br />
        <br />

        {/* 






















         */}
        <Container className="section-homepage d-flex ">
          <Container className="Container-text-l j-top">
            <h5 className=" my-story-text h5 mb-3">My&nbsp;Story</h5>

            <p className="body-paragraph">
              I have been a creative leader in the digital entertainment and
              software industry since 2011. During this time, I have had the
              opportunity to work with some amazing people on several
              cutting-edge projects. Projects I’ve worked on include an aviation
              simulation game (NFA) to conceptual products for multi-million
              dollar corporations (Amazon, KBB, and more).
              <br />
              <br />
              Along this journey, I have worn several hats ranging, including
              quality assurance, UI designer, product designer, creative
              director, product manager, producer, and Director of Product.
              <br />
              <br />
              As a designer, I have managed several small creative teams in
              creating innovative products and prototypes. As a creative leader
              and mentor, I strive to have my teams flourish by challenging them
              to be innovative and get out of their comfort zones.
            </p>
          </Container>
          <Container className="Container-text-r j-top">
            <h4 className=" my-story-text h5 mb-3">Where I've Worked</h4>

            <Container className="Container-block-6 px-0 ">
              <Container className="Container-work-history pl-0 mb-25">
                <h5 className="year h6">2018–2020</h5>
                <div className="d-flex">
                  <h5 className=" high-emphasis">Backbone PLM</h5>
                  <h5 id="Company-Location" className="h6 low-emphasis">
                    Boulder, Colorado
                  </h5>
                </div>
                <h5 className="body-paragraph">
                  Director of Product Design &amp; Senior Product Designer
                </h5>
              </Container>
              <br />
              <Container className="Container-work-history pl-0 mb-25">
                <h5 className="year h6">2015–2018</h5>
                <div className="d-flex">
                  <h5 className="body-paragraph high-emphasis">
                    SNT Media, Inc.
                  </h5>
                  <h5 id="Company-Location" className=" h6 low-emphasis">
                    San Francisco, California &amp; Wichita, Kansas
                  </h5>
                </div>
                <h5 className="body-paragraph">
                  Director of Product Design &amp; Senior Product Designer
                </h5>
              </Container>
              <br />
              <Container className="Container-work-history pl-0 mb-25">
                <h5 className="year h6">2012–2015</h5>
                <div className="d-flex">
                  <h5 className="body-paragraph high-emphasis">
                    SNT Media, Inc.
                  </h5>
                  <h5 id="Company-Location" className=" h6 low-emphasis">
                    San Francisco, CA
                  </h5>
                </div>
                <h5 className="body-paragraph">Product Designer</h5>
              </Container>
              <br />
              <Container className="Container-work-history pl-0 mb-25">
                <h5 className="year h6">2011–2012</h5>
                <div className="d-flex">
                  <h5 className="body-paragraph high-emphasis">F.I.R.E.</h5>
                  <h5 id="Company-Location" className=" h6 low-emphasis">
                    Orlando, Florida
                  </h5>
                </div>
                <h5 className="body-paragraph">Lead Producer</h5>
              </Container>
            </Container>
          </Container>
        </Container>

        {/* 











         */}
        <Container className="section-container my-skillsets  container">
          <Container className="Container-about-text px-3 py-2 my-skillsets">
            <h4 className="h5 text-secondary my-skillsets-text">
              My Skillsets
            </h4>
          </Container>
          <Container className="Container-block-5 p-0">
            <Container className="card-slider  slider p-0">
              <Container
                className=" card-slider-mask slider-mask p-0"
                id=" slider-mask-0"
              >
                <Swiper
                  modules={[
                    Navigation,
                    Pagination,
                    Scrollbar,
                    Mousewheel,
                    A11y
                  ]}
                  spaceBetween={50}
                  slidesPerView={1}
                  mousewheel={true}
                  centeredSlides={true}
                  pagination={{ clickable: true }}
                  // scrollbar={{ draggable: true }}
                  grabCursor={true}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide
                    key="1"
                    className=" d-flex justify-content-between px-2"
                  >
                    <Container
                      className="skill-carousel slide"
                      aria-label="1 of 6"
                    >
                      <Container className="Container-skillset  h-100 d-flex flex-column justify-content-between">
                        <h1 className="h3 skill-heading d-flex align-items-start">
                          User Interface
                        </h1>
                        <p className="paragraph-skills d-flex align-items-center mb-auto mt-2">
                          Known as having "hawk eyes" by my peers, I strive for
                          pixel-perfect finalized designs.&nbsp;
                        </p>
                        <Container className="Container-image-skills d-flex align-items-end">
                          <img
                            src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed20765e4d803190a21ced_skill-sketch.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed1fe3686f2c568a1044da_skill-invision-studios.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed1fe3c8f0be42f03e9c8b_skill-XD.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed1fe3d66422259d4980f5_skill-figma.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill hide"
                          />
                        </Container>
                      </Container>
                    </Container>
                    <Container
                      className="skill-carousel  slide"
                      aria-label="2 of 6"
                      role="group"
                      style={{ transform: "translateX(0px)", opacity: 1 }}
                    >
                      <Container className="Container-skillset h-100 d-flex flex-column justify-content-between">
                        <h1 className="h3 skill-heading">User Experience</h1>
                        <p className="paragraph-skills mb-auto mt-2">
                          Understanding the problem is key to solving it. I
                          strive to mitigate assumption-based decisions and get
                          to the core of the user's pain points.&nbsp;
                        </p>
                        <Container className="Container-image-skills">
                          <img
                            src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed21940be604a9ee4727f5_skill-miro.png"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed2194d5fb568937084c81_skill-onigraffle.png"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed219435ddb6138812e21f_skill-invison.png"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill hide"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill hide"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill hide"
                          />
                        </Container>
                      </Container>
                    </Container>
                    <Container
                      className="skill-carousel  slide"
                      aria-label="3 of 6"
                      role="group"
                      style={{ transform: "translateX(0px)", opacity: 1 }}
                    >
                      <Container className="Container-skillset h-100 d-flex flex-column justify-content-between">
                        <h1 className="h3 skill-heading">
                          Prototyping &amp;&nbsp;Animation
                        </h1>
                        <p className="paragraph-skills mb-auto mt-2">
                          In tandem with UX, I incorporate prototyping and
                          animation to better help the users and engineers
                          visualize how the product may act.
                        </p>
                        <Container className="Container-image-skills">
                          <img
                            src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed219435ddb6138812e21f_skill-invison.png"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed2220d66422a9584984f0_skill-principle.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed1fe3d66422259d4980f5_skill-figma.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill hide"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill hide"
                          />
                        </Container>
                      </Container>
                    </Container>
                  </SwiperSlide>
                  <SwiperSlide
                    key="2"
                    className=" d-flex justify-content-between"
                  >
                    <Container className="skill-carousel  slide">
                      <Container className="Container-skillset h-100 d-flex flex-column justify-content-between">
                        <h1 className="h3 skill-heading">Project Management</h1>
                        <p className="paragraph-skills mb-auto mt-2">
                          I start by defining the problem, identifying scope,
                          curating requirement documentation, and estimating the
                          project's ROI.
                        </p>
                        <Container className="Container-image-skills">
                          <img
                            src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed2316e9cf278e65e5208b_skill-confluence.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed2316686f2c6b47104d3a_skill-jira.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed231601ebfa2bf07938c8_skill-basecamp.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed2316dec93f63a2bec45e_skill-asana.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill hide"
                          />
                        </Container>
                      </Container>
                    </Container>
                    <Container className="skill-carousel  slide">
                      <Container className="Container-skillset h-100 d-flex flex-column justify-content-between">
                        <h1 className="h3 skill-heading">Web</h1>
                        <p className="paragraph-skills mb-auto mt-2">
                          My web projects are responsive, accessible, and
                          intuitive for all walks of life while reassuring they
                          will respond the same on any browser.&nbsp;
                        </p>
                        <Container className="Container-image-skills">
                          <img
                            src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed23fefb06796af706a7d1_microsoft-windows-22.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed23fe2a1f37fa108588b3_apple-black.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill hide"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill hide"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill hide"
                          />
                        </Container>
                      </Container>
                    </Container>
                    <Container
                      className="skill-carousel  slide"
                      aria-label="6 of 6"
                      role="group"
                      style={{ transform: "translateX(0px)", opacity: 1 }}
                    >
                      <Container className="Container-skillset h-100 d-flex flex-column justify-content-between">
                        <h1 className="h3 skill-heading">Mobile</h1>
                        <p className="paragraph-skills mb-auto mt-2">
                          The foundation for all my designs, my mobile projects
                          specialize in accessibility while utilizing Material
                          Design and Apple Human Design.
                        </p>
                        <Container className="Container-image-skills">
                          <img
                            src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed23e025f2971671d8899c_android.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/5ed7a75e8407992a7a52ad83/5eed23e03a2b7b6e0138a123_apple-ios.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill hide"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill hide"
                          />
                          <img
                            src="https://uploads-ssl.webflow.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                            width={35}
                            height={35}
                            alt=""
                            className="image-skill hide"
                          />
                        </Container>
                      </Container>
                    </Container>
                  </SwiperSlide>
                  <br />
                  <br />
                  <br />
                </Swiper>
              </Container>
              <Container
                className="hero-slider_arrow-button btn slider-arrow-left"
                tabIndex={0}
                aria-controls=" slider-mask-0"
                aria-label="previous slide"
              >
                <Container className="display-none  icon-slider-left" />
              </Container>
              <Container
                className="hero-slider_arrow-button btn display-none  slider-arrow-right"
                tabIndex={0}
                aria-controls=" slider-mask-0"
                aria-label="next slide"
                style={{}}
              >
                <Container className=" icon-slider-right" />
              </Container>
              <Container className="card-slider_dot-navigation  slider-nav  round">
                <Container
                  className=" slider-dot btn active"
                  data-wf-ignore=""
                  aria-label="Show slide 1 of 2"
                  aria-pressed="true"
                  tabIndex={0}
                  style={{ marginLeft: 5, marginRight: 5 }}
                />
                <Container
                  className=" btnslider-dot"
                  data-wf-ignore=""
                  aria-label="Show slide 2 of 2"
                  aria-pressed="false"
                  tabIndex={-1}
                  style={{ marginLeft: 5, marginRight: 5 }}
                />
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default App;
