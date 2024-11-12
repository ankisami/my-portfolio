import { Experience } from "../types";

const ExperienceCard = ({
  title,
  company,
  duration,
  description,
  tags,
}: Experience) => {
  return (
    <div className=" bg-zinc-800 p-5 rounded-xl flex flex-col justify-between w-[315px] gap-3">
      <p>{title}</p>
      <p className="text-zinc-400  italic">~ {company}</p>

      <div className="flex flex-wrap items-center gap-1">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="h-6 text-xs text-zinc-400 bg-zinc-50/5 grid items-center px-3  rounded-lg truncate"
          >
            {tag}
          </span>
        ))}
      </div>

      {description && <p>{description}</p>}

      <div className="flex  items-center italic text-zinc-400 text-sm gap-3">
        <span className="material-symbols-rounded">calendar_month</span>
        <p className="text-sm">{duration}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
