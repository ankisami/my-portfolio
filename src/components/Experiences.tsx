import { useState } from "react";
import Button from "./Button";
import classnames from "classnames";
import { work, education } from "../constants/Experience";
import ExperienceCard from "./ExperienceCard";

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

        <div className="flex flex-col  w-full justify-center items-center gap-4">
          {cards.map(({ title, company, duration, description }, index) => (
            <ExperienceCard
              key={`${index}_${title}`}
              title={title}
              company={company}
              duration={duration}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
