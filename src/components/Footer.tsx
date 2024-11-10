import { sitemap, socials } from "../constants/Footer";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let's work together today!
            </h2>

            <Button
              href="mailto:sami.anki1316@gmail.com"
              label="Start Project"
              icon="chevron_right"
              className="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_self"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>
              <ul>
                {socials.map(({ href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 pb-8">
          <a href="#home" className="logo reveal-up">
            <img src="/images/logo.svg" alt="Logo" width={40} height={40} />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            © 2024-2025 <span className="text-zinc-200">Sami Anki</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
