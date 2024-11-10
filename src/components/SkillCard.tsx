import { Skill } from "../types";
import classnames from "classnames";

type SkillCardProps = Skill & {
  className?: string;
};

const SkillCard = ({ imgSrc, label, desc, className }: SkillCardProps) => {
  return (
    <div
      className={classnames(
        "flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group",
        className
      )}
    >
      <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 flex items-center justify-center group-hover:bg-zinc-900 transition-colors">
        <img src={imgSrc} width={40} height={40} alt={label} />
      </figure>

      <div>
        <h3>{label}</h3>
        <p className="text-zinc-400 text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default SkillCard;
