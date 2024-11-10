import { Review } from "../types";

const ReviewCard = ({
  content,
  name,
  imgSrc,
  company,
  linkedin,
  job,
}: Review) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col justify-between lg:min-w-[420px] min-h-full">
      <p className="text-zinc-400 mb-8 italic">"{content}"</p>

      <div className="flex justify-between items-end ">
        <div className="flex items-center gap-2 mt-auto">
          <figure className="img-box rounded-lg w-11 h-11">
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
            <p>{name}</p>
            <p className="text-sm text-zinc-400 tracking-wider">{job}</p>
            <p className="text-sm text-zinc-400 tracking-wider">{company}</p>
          </div>
        </div>

        <a
          href={linkedin}
          target="_blank"
          className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-all hover:bg-zinc-50 hover:text-zinc-950 active:bg-zin-50/80 reveal-up"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
