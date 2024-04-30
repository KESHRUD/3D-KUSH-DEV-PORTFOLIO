import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { config } from "../../constants/config";
import { TFormation } from "../../types";
import { Header } from "../atoms/Header";
import { SectionWrapper } from "../../hoc";

// Rename the imported Formation to avoid naming conflict.
import { Formation as FormationData } from "../../constants";

const ExperienceCard: React.FC<TFormation> = ({
  date,
  iconBg,
  icon,
  companyName,
  title,
  points,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img src={icon} alt={companyName} className="h-[60%] w-[60%] object-contain" />
        </div>
      }
    >
      <h3 className="text-[24px] font-bold text-white">{title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {companyName}
      </p>
      <ul className="ml-5 mt-5 list-disc space-y-2">
        {points.map((point, index) => (
          <li key={index} className="text-white-100 pl-1 text-[14px] tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const FormationComponent = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.Formation} />
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {FormationData.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(FormationComponent, "formation");
