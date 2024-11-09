import { Review } from "../types";

const ReviewCard = ({ content, name, imgSrc, company }: Review) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <p className="text-zinc-400 mb-8 italic">"{content}"</p>

      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
          <img
            src={imgSrc}
            alt={name}
            className="img-cover"
            width={44}
            height={44}
            loading="lazy"
          />
        </figure>

        <div className="">
          <p className="">{name}</p>
          <p className="text-sm text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
