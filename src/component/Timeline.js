import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUniversity } from "react-icons/fa";

import { FaStar } from "react-icons/fa";
import { MdWork } from "react-icons/md";
const Timeline = ({ className, isDark}) => {
  let techskills1 = [
    "Python",
    " Flask",
    "Django",
    "Apache Spark",
    "Cassandra",
    "ReactJS",
    "SQL",
    "Restful Services",
    "Linux command line",
    "Json",
  ];
  const listItems1 = techskills1.map((techskills1) => (
    <li  className={isDark? "mck": "mck orgk"} key={techskills1}>{techskills1}</li>
  ));

  let techskills2 = [
    "Python",
    "Flask",
    "ReactJS",
    "Javascript",
    "Node.js",
    "jQuery",
    "Mysql",
    "Wordpress",
    "Magento",
  ];
  const listItems2 = techskills2.map((techskills2) => (
    <li  className={isDark? "mck": "mck orgk"} key={techskills2}>{techskills2}</li>
  ));

  let techskills3 = [
    "Javascript", "PHP", "SQL" , "Magento" , "Wordpress", "Shopify"
  ];
  const listItems3=techskills3.map((techskills3) => (
    <li  className={isDark? "mck": "mck orgk"} key={techskills3}>{techskills3}</li>
  ));
  let techskills4 = [
    "Apache Spark", "Hadoop","Apache kafka","Apache Cassandra","Docker","Kubernetes", "Google App Engine" , "Google Cloud Platform" , "Tableau","Power BI", "Weka","Python","R","Java"
  ];
  const listItems4=techskills4.map((techskills4) => (
    <li className={isDark? "mck": "mck orgk"} key={techskills4}>{techskills4}</li>
  ));
  const tag = {
    padding: "0 7px",
    background: "rgb(1, 173, 159)",
    borderRadius: "1em",
    width: "fit-content",
    color:"white"
  };
  const tag2 = {
    padding: "0 7px",
    background: "linear-gradient(to right, rgba(0,0, 0, 1), rgba(50,50,50, 0.9))",
    borderRadius: "1em",
    width: "fit-content",
    color:"white"
  };
  return (
    <div className={className}>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{background: isDark?  "linear-gradient(to right, rgb(1, 173, 159), rgba(202, 243, 248, 0.4))":"#4d4d4d", color: "#fff" }}
          icon={<FaUniversity />}
        >
          <h5 className="vertical-timeline-element-title">
            <div style={isDark? tag : tag2}>Griffith College Dublin</div>
          </h5>
          <h4 style={{ color:"black", marginBottom: "1em" }}>Master's In Big Data Manangement And Analytics</h4>
          <h5 className="vertical-timeline-element-subtitle">{listItems4}</h5>
        </VerticalTimelineElement>



        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: isDark?  "linear-gradient(to right, rgb(1, 173, 159), rgba(202, 243, 248, 0.4))":"#4d4d4d" , color: "#fff" }}
          icon={<MdWork />}
        >
          <h5 className="vertical-timeline-element-title">
            <div style={isDark? tag : tag2}>BlackCurrant Apps</div>
          </h5>
          <h4 style={{color:"black", marginBottom: "1em" }}>Full-Stack Developer</h4>
          <h5 className="vertical-timeline-element-subtitle">{listItems1}</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: isDark?  "linear-gradient(to right, rgb(1, 173, 159), rgba(202, 243, 248, 0.4))":"#4d4d4d", color: "#fff" }}
          icon={<MdWork />}
        >
          <h5 className="vertical-timeline-element-title">
            <div style={isDark? tag : tag2}>Geekabyte</div>
          </h5>
          <h4 style={{color:"black", marginBottom: "1em" }}>Front-end Developer</h4>
          <h5 className="vertical-timeline-element-subtitle">{listItems2}</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: isDark?  "linear-gradient(to right, rgb(1, 173, 159), rgba(202, 243, 248, 0.4))":"#4d4d4d", color: "#fff" }}
          icon={<MdWork />}
        >
          <h5 className="vertical-timeline-element-title">
            <div style={isDark? tag : tag2}>WeDesignCode</div>
          </h5>
          <h4 style={{color:"black", marginBottom: "1em" }}>Web Developer</h4>
          <h5 className="vertical-timeline-element-subtitle">{listItems3}</h5>
        </VerticalTimelineElement>

       
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: isDark?  "linear-gradient(to right, rgb(1, 173, 159), rgba(202, 243, 248, 0.4))":"#4d4d4d", color: "#fff" }}
          icon={<FaUniversity />}
        >
          <h5 className="vertical-timeline-element-title">
            <div style={isDark? tag : tag2}>Mumbai University</div>
          </h5>
          <h4 style={{color:"black", marginBottom: "1em" }}>Bachelor's In Computer Engineering</h4>
          <h5 className="vertical-timeline-element-subtitle">{listItems3}</h5>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: isDark?  "linear-gradient(to right, rgb(1, 173, 159), rgba(202, 243, 248, 0.4))":"#4d4d4d", color: "#fff" }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
    </div>
  );
};
export default Timeline;
