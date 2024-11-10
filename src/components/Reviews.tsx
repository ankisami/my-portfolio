import { reviews } from "../constants/Review";
import ReviewCard from "./ReviewCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Reviews = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "-200% 80%",
        end: "400% 80%",
        scrub: true,
      },
      x: -1000,
    });
  });

  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My References</h2>
        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(
            ({ content, name, imgSrc, company, linkedin, job }, key) => (
              <ReviewCard
                key={`review-${name}-${key}`}
                content={content}
                name={name}
                imgSrc={imgSrc}
                company={company}
                linkedin={linkedin}
                job={job}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
