import React from "react";
import gadgetGetter from "../../images/gadgetgetter-dashboard-screenshot.png";
import soundRiver from "../../images/soundriver_search_result_screenshot.png";
import weatherDashboard from "../../images/weather-dashboard-screenshot.png";
import passwordGenerator from "../../images/password-generator-password-result-screenshot.png";
import workDayScheduler from "../../images/work-day-scheduler-home-screenshot.png";
import codeQuiz from "../../images/code-quiz-quiz-page-screenshot.png";

const projectArray = [
  {
    name: "GadgetGetter",
    image: gadgetGetter,
    deployedUrl: "https://gadget-getter.herokuapp.com/login",
    repoUrl: "https://github.com/James-Y-Wong/GadgetGetter",
    altAttribute: "GadgetGetter screenshot",
  },
  {
    name: "SoundRiver",
    image: soundRiver,
    deployedUrl: "https://james-y-wong.github.io/SoundRiver/",
    repoUrl: "https://github.com/James-Y-Wong/SoundRiver",
    altAttribute: "SoundRiver screenshot",
  },
  {
    name: "Weather Dashboard",
    image: weatherDashboard,
    deployedUrl: "https://james-y-wong.github.io/hw-6-weather-dashboard/",
    repoUrl: "https://github.com/James-Y-Wong/hw-6-weather-dashboard",
    altAttribute: "Weather Dashboard URL",
  },
  {
    name: "Password Generator",
    image: passwordGenerator,
    deployedUrl: "https://james-y-wong.github.io/hw-3-password-generator/",
    repoUrl: "https://github.com/James-Y-Wong/hw-3-password-generator",
    altAttribute: "Password Generator screenshot",
  },
  {
    name: "Work Day Scheduler",
    image: workDayScheduler,
    deployedUrl: "https://james-y-wong.github.io/hw-5-work-day-scheduler/",
    repoUrl: "https://github.com/James-Y-Wong/hw-5-work-day-scheduler",
    altAttribute: "Work Day Scheduler screenshot",
  },
  {
    name: "Code Quiz",
    image: codeQuiz,
    deployedUrl: "https://james-y-wong.github.io/hw-4-code-quiz/",
    repoUrl: "https://github.com/James-Y-Wong/hw-4-code-quiz",
    altAttribute: "Code Quiz screenshot",
  },
];

export default function Portfolio() {
  return (
    <div className="container work-section">
      <div className="row">
        <div className="col-3">
          <h2 id="work">Portfolio</h2>
        </div>
        <div className="col" id="project-cards">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            
              {projectArray.map((project, index) => (
                <div className="col">
                <div className="card">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.altAttribute}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <button title="URL">
                      <a
                        href={project.deployedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-solid fa-link"></i>
                      </a>
                    </button>
                    <button title="GitHub Repo">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </button>
                  </div>
                </div>
                </div>
              ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}
