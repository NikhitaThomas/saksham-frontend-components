import React, { useState, useEffect } from "react";
import "./journey.css";
import "react-vertical-timeline-component/style.min.css";
import elements from "./Elements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
const Journey = () => {
  let verticalElementLayout = false;
  const [journeySize, setJourneySize] = useState(window.innerWidth);
  const checkSize = () => {
    setJourneySize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  if (journeySize > 1456) {
    verticalElementLayout = true;
  } else {
    verticalElementLayout = false;
  }

  return (
    <>
      <div className="Journey-page">
        <div className="heading">
          <h1 className="title">Journey</h1>
        </div>
        {!verticalElementLayout && (
          <VerticalTimeline layout="1-column-left" className="journey-timeline">
            {elements.map((element) => {
              return (
                <VerticalTimelineElement
                  className="journey-content-main"
                  contentStyle={{ background: "#000", color: "#fff" }}
                  contentArrowStyle={{
                    borderRight: "0px",
                  }}
                  iconClassName="journey-icon"
                  key={element.id}
                  date={element.date}
                  dateClassName="date"
                >
                  <div className="journey-content">
                    <div className="text-content">
                      <h3 className="vertical-timeline-element-title title">
                        {element.title}
                      </h3>
                    </div>

                    <p id="description">{element.description}</p>
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        )}

        {verticalElementLayout && (
          <VerticalTimeline layout="2-columns" className="journey-2-column">
            {elements.map((element) => {
              return (
                <VerticalTimelineElement
                  className="journey-content-main"
                  contentStyle={{ background: "#000", color: "#fff" }}
                  contentArrowStyle={{
                    borderRight: "0px",
                  }}
                  iconClassName="journey-icon"
                  key={element.id}
                  date={element.date}
                  dateClassName="date"
                >
                  <div className="journey-content">
                    <div className="text-content">
                      <h3 className="vertical-timeline-element-title title">
                        {element.title}
                      </h3>
                    </div>

                    <p id="description">{element.description}</p>
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        )}
      </div>
    </>
  );
};

export default Journey;
