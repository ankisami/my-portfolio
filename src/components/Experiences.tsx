import { useState } from "react";
import Button from "./Button";
import classnames from "classnames";
import { work, education } from "../constants/Experience";
import ExperienceCard from "./ExperienceCard";
import React from "react";

const Experiences = () => {
  const [categorySelected, setCategorySelected] = useState<
    "education" | "work"
  >("work");

  const cards = categorySelected === "education" ? education : work;

  return (
    <section id="experiences" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Experiences</h2>

        <div className="flex w-full justify-center items-center gap-10 mb-8">
          <Button
            className={classnames(
              "bg-transparent active:bg-transparent hover:bg-zinc-800 text-zinc-200 ring-transparent",
              {
                "bg-zinc-700": categorySelected === "education",
              }
            )}
            label="Education"
            icon="school"
            onClick={() => setCategorySelected("education")}
          />
          <Button
            className={classnames(
              "bg-transparent active:bg-transparent hover:bg-zinc-800 text-zinc-200 ring-transparent",
              {
                "bg-zinc-700": categorySelected === "work",
              }
            )}
            variant="outline"
            label="Work"
            icon="work"
            onClick={() => setCategorySelected("work")}
          />
        </div>

        <div
          className="grid grid-cols-3 gap-y-0 gap-x-12"
          style={{ gridTemplateColumns: "1fr max-content 1fr" }}
        >
          {cards.map(
            ({ title, company, duration, description, tags }, index) => (
              <React.Fragment key={`${index}_${title}`}>
                {index % 2 === 0 ? (
                  <>
                    <div className="justify-self-end">
                      <ExperienceCard
                        title={title}
                        company={company}
                        duration={duration}
                        description={description}
                        tags={tags}
                      />
                    </div>
                    <div className="relative flex items-center justify-center h-full">
                      <div className="w-0.5 h-full bg-white"></div>
                      {index !== cards.length && (
                        <div className="absolute top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div />
                  </>
                ) : (
                  <>
                    <div />
                    <div className="relative flex items-center justify-center h-full">
                      <div className="w-0.5 h-full bg-white"></div>
                      {index !== cards.length && (
                        <div className="absolute top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full"></div>
                      )}
                    </div>
                    <ExperienceCard
                      title={title}
                      company={company}
                      duration={duration}
                      description={description}
                      tags={tags}
                    />
                  </>
                )}
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
