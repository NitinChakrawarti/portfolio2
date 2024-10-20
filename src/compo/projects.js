import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./projects.css";
import { ProjectApi } from "./projectsApi";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Projects = () => {
  function projectListToshow(curEle, index) {
    return (
      <>
        <div className="projectsDetails slide" key={index}>
          <div className=" flex justify-center">
            <img className="h-24" src="coding.svg" />

          </div>
          <h1>{curEle.name}</h1>
          <p>{curEle.des}</p>

          <div className="projects_links">
            <a
              href={curEle.repolink}
              className=" projectIconLink"
            > Code </a>
            <a
              href={curEle.livelink}
              target="_blank"
              className=" projectIconLink" id="contact"
            >livelink </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="hire-me project_parent " >
        <h1 className=" project_h1 about_des_h1" >Projects</h1>

        <AutoplaySlider
          style={{
            height: '40vmax',
            backgroundColor: 'red',
            zIndex: '10',

          }}
          className={"autoplayproject"}
          play={true}
          cancelOnInteraction={true} // should stop playing on user interaction
          interval={2000}
        >
          {ProjectApi.map(projectListToshow)}
        </AutoplaySlider>
      </div>
    </div>
  );
};

export default Projects;
