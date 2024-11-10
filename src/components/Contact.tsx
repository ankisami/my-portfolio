import { socialLinks } from "../constants/Contact";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch]">
            Contact me for collaboration
          </h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]">
            Reach out today to discuss and start collaborating on something
            amazing!
          </p>

          <div className="flex items-center gap-2 mt-auto">
            {socialLinks.map(({ href, icon, alt }) => (
              <a
                href={href}
                key={alt}
                target="_blank"
                className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-all hover:bg-zinc-50 hover:text-zinc-950 active:bg-zin-50/80"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <form
          action="https://getform.io/f/apjjnoea"
          method="post"
          className="md:grid md:items-center xl:pl-10 2xl:pl-20"
        >
          <div className="md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="" className="label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
                placeholder="Tom Jonhson"
                className="text-field"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="" className="label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                placeholder="tom@gmail.com"
                className="text-field "
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Hi!"
              required
              className="text-field resize-y min-h-32 max-h-80"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary [&]:max-w-full w-full justify-center"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
