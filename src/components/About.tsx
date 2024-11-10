import { aboutItems } from "../constants/About";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl text-justify w-full">
            Welcome! I’m Sami : Front-end Developer with a master’s degree and
            over 5 years of professional experience, primarily in React. I have
            worked with multiple clients (Airship, Capgemini, Sanofi,
            TotalEnergies, Kiabi, Nobo, startups, etc.), all of whom have been
            satisfied with my work. I am accustomed to working in an agile
            methodology.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, index) => (
              <div key={`${index}_${label}`}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.svg"
              width={40}
              height={40}
              alt="logo"
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
