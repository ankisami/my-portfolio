import { reviews } from "../constants/Review";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8">My References</h2>
        <div className="flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              content={content}
              name={name}
              imgSrc={imgSrc}
              company={company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
