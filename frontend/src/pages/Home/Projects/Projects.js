import React from "react";
import "./Projects.css";
import projectPic from "../../../assets/Screenshot 2023-09-04 112052.png";
import advenPic from "../../../assets/adven_tour.png";
import Swing from "react-reveal/Swing";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          here are my top 3 recent with live link and source code
        </p>

        {/*  card design */}
        <div className="row" id="ads">
          <Swing>
            <div className="col-md-4">
              <div className="card rounded ">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/014/468/875/small/the-flat-design-illustration-for-presentation-web-or-landing-page-this-woman-make-online-shopping-in-the-web-store-on-a-smartphone-illustration-web-design-template-vector.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Ecommerce Website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/nityabharti/e-commerce"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded ">
                <div className="card-image">
                  <span className="card-notify-badge">Web App</span>
                  <img src={projectPic} alt="project2" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">International Conference</h5>
                  </div>
                  <a className="ad-btn" href="https://ssteps-cuh-2022.web.app/">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded ">
                <div className="card-image">
                  <span className="card-notify-badge">Web App</span>
                  <img src={advenPic} alt="project1" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Adventure Tours</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://nityabharti.github.io/Adventure_tours/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Swing>
        </div>
      </div>
    </>
  );
};

export default Projects;
