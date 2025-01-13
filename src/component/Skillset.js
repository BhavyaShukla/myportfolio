import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faServer,
  faCloud,
  faCodeBranch,
  faBug,
  faCogs,
  faTerminal,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";


const Skillset = ({ isDark, className }) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  const sty = {
    height: "3em",
    width: "3em",
    margin: "0 0.2em",
    color: "white",
    filter: "drop-shadow( 1px 1px 0.5px rgb(0, 0, 0 ))",
    borderRadius: "1em",
  };
  const sty2 = {
    height: "3em",
    width: "3em",
    margin: "0 0.2em",
    color: "black",
  };

  const skills = [
    {
      category: "Web Development",
      icon: faHtml5,
      details:
        "Proficient in HTML5, CSS3, JavaScript, and modern frontend frameworks: ReactJS, Angular, Vue.js",
    },
    {
      category: "Full Stack Development",
      icon: faServer,
      details:
        "Skilled in backend frameworks: Symfony PHP, Laravel, Node.js, Express, Flask, FastAPI",
    },
    {
      category: "Database Management",
      icon: faDatabase,
      details:
        "Experienced in SQL (MySQL, PostgreSQL) and NoSQL (MongoDB, Redis) database design and optimization",
    },
    {
      category: "Cloud Computing",
      icon: faCloud,
      details:
        "Competent in managing cloud infrastructure on AWS, Azure, and Google Cloud Platform (GCP) mostly in Azure AI, AWS Open Search",
    },
    {
      category: "DevOps Practices",
      icon: faCogs,
      details:
        "Proficient in implementing CI/CD pipelines using Jenkins, GitLab CI, GitHub Actions, Docker, and Kubernetes",
    },
    {
      category: "Agile Methodologies",
      icon: faClipboardCheck,
      details:
        "Strong understanding and application of Agile principles: Scrum, Kanban, JIRA",
    },
    {
      category: "Testing and QA",
      icon: faBug,
      details:
        "Experienced in writing unit, integration, and automation tests using Jest, PHPUnit, WebdriverIO, and Pytest",
    },
    {
      category: "API Development",
      icon: faCodeBranch,
      details:
        "Proficient in designing, developing, documenting, and testing RESTful APIs using Swagger and Postman",
    },
    {
      category: "Version Control",
      icon: faGit,
      details:
        "Experienced with Git, SVN, and proficient in branching strategies and collaborative development using GitHub and Bitbucket",
    },
    {
      category: "Scripting and Automation",
      icon: faTerminal,
      details:
        "Skilled in Python and Shell scripting for automation tasks and infrastructure management",
    },
  ];

  return (
    <div className={className}>
      <h2 data-aos="fade-up" className="skillhead">
        Technical Skills
      </h2>
      <ul className="skills-list">
        {" "}
        {skills.map((skill, index) => (
          <li key={index} data-aos="zoom-out-up" className="skill-item">
            {" "}
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />{" "}
            <strong>{skill.category}</strong>: {skill.details}{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
};
export default Skillset;
