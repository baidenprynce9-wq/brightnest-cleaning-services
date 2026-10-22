import Link from "next/link";

const whatsappUrl =
  "https://wa.me/233207890001?text=Hi%2C%20I%27d%20like%20to%20ask%20about%20cleaning.";
const contactEmail = "jim12@gmail.com";

type Service = {
  number: string;
  id: string;
  title: string;
  description: string;
  image: string;
  imageDescription: string;
  details: string[];
};

export const services: Service[] = [
  {
    number: "01",
    id: "home-cleaning",
    title: "Home cleaning",
    description:
      "Regular or one-off cleaning for your home. Let us know which rooms need attention and what you’d like us to focus on.",
    image: "service-feature__image--home",
    imageDescription: "A warm, lived-in living room with natural light",
    details: ["Living spaces and bedrooms", "Kitchen surfaces", "Bathrooms and floors"],
  },
  {
    number: "02",
    id: "deep-cleaning",
    title: "Deep cleaning",
    description:
      "For when the usual clean isn’t quite enough. We’ll talk through the areas you want us to spend more time on.",
    image: "service-feature__image--deep",
    imageDescription: "A bright, freshly cleaned kitchen",
    details: ["Detailing in kitchens and bathrooms", "Edges, fixtures, and touch points", "A scope tailored to your space"],
  },
  {
    number: "03",
    id: "office-cleaning",
    title: "Office cleaning",
    description:
      "Cleaning for offices and shared workspaces. We can discuss the rooms, timing, and tasks before you book.",
    image: "service-feature__image--office",
    imageDescription: "A welcoming, light-filled workspace",
    details: ["Shared areas and meeting rooms", "Kitchenette and washroom care", "Scheduling discussed in advance"],
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? "arrow-icon arrow-icon--diagonal" : "arrow-icon"}
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="BrightNest home">
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 36 36" fill="none">
              <path d="m5 16 13-10 13 10v14H5V16Z" />
              <path d="M13 30V19h10v11M10 15l8-6 8 6" />
              <path d="m26 7 2-3 2 3" />
            </svg>
          </span>
          <span className="brand__name">
            BrightNest
            <small>Cleaning Services</small>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <Link className="button button--small button--outline header-cta" href="/#contact">
          Request a quote <ArrowIcon diagonal />
        </Link>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero section-wrap">
      <div className="hero__copy">
        <p className="eyebrow">
          <span className="eyebrow__dash" />
          BrightNest Cleaning Services
        </p>
        <h1>
          Need a hand
          <br />
          with the cleaning?
        </h1>
        <p className="hero__description">
          We clean homes and offices. Tell us what needs doing and we’ll send
          you a quote.
        </p>
        <div className="hero__actions">
          <Link className="button button--primary" href="/#contact">
            Request a quote <ArrowIcon />
          </Link>
          <Link className="text-link" href="/services">
            View cleaning services <ArrowIcon />
          </Link>
        </div>
      </div>
      <div
        className="hero__photo"
        role="img"
        aria-label="Living room"
      />
      <div className="hero__caption">
        <span>BrightNest Cleaning Services</span>
        <span>Home and office cleaning</span>
      </div>
    </section>
  );
}

export function ServicesPage() {
  return (
    <main>
      <section className="page-intro section-wrap">
        <div className="page-intro__copy">
          <p className="eyebrow">
            <span className="eyebrow__dash" />
            Our cleaning services
          </p>
          <h1>What needs cleaning?</h1>
          <p>
            We clean homes and offices. Pick a service below, then get in touch
            to talk about the rooms, tasks, and timing.
          </p>
        </div>
        <nav className="page-intro__services" aria-label="Jump to a service">
          <p>Find a service</p>
          {services.map((service) => (
            <a key={service.id} href={`#${service.id}`}>
              <span>{service.number}</span>
              {service.title}
              <ArrowIcon />
            </a>
          ))}
        </nav>
      </section>
      <section className="service-list section-wrap" aria-label="Our services">
        {services.map((service) => (
          <article
            className="service-feature"
            id={service.id}
            key={service.number}
          >
            <div
              className={`service-feature__image ${service.image}`}
              role="img"
              aria-label={service.imageDescription}
            />
            <div className="service-feature__content">
              <p className="service-feature__number">{service.number}</p>
              <h2>{service.title}</h2>
              <p className="service-feature__description">{service.description}</p>
              <ul>
                {service.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <Link className="text-link" href="/#contact">
                Ask about {service.title.toLowerCase()} <ArrowIcon />
              </Link>
            </div>
          </article>
        ))}
      </section>
      <section className="service-note section-wrap">
        <p>
          Not sure which service to choose? Send us a message and tell us what
          you have in mind.
        </p>
        <Link className="button button--primary" href="/#contact">
          Let’s talk <ArrowIcon />
        </Link>
      </section>
    </main>
  );
}

export function AboutPage() {
  return (
    <main>
      <section className="about-page section-wrap">
        <div className="about-page__copy">
          <p className="eyebrow">
            <span className="eyebrow__dash" />
            About BrightNest
          </p>
          <h1>Cleaning for homes and offices.</h1>
          <p className="about-page__lead">
            Get in touch, tell us what needs doing, and we’ll confirm the
            details with you before booking.
          </p>
          <p>
            We offer home cleaning, deeper one-off cleans, and office cleaning.
            If you have a question or a specific request, email or WhatsApp us.
          </p>
          <a className="button button--primary" href={`mailto:${contactEmail}`}>
            Email BrightNest <ArrowIcon />
          </a>
        </div>
        <div
          className="about-page__photo"
          role="img"
          aria-label="Home interior"
        />
      </section>
      <section className="about-values section-wrap">
        <div>
          <span>01</span>
          <h2>Tell us what you need</h2>
          <p>Let us know which rooms and tasks you have in mind.</p>
        </div>
        <div>
          <span>02</span>
          <h2>Agree on the details</h2>
          <p>We’ll discuss what’s included and when you’d like us to come.</p>
        </div>
        <div>
          <span>03</span>
          <h2>Choose a time</h2>
          <p>We’ll arrange a time with you before confirming a booking.</p>
        </div>
      </section>
    </main>
  );
}

export function ContactSection() {
  return (
    <section className="contact section-wrap" id="contact">
      <div className="contact__inner">
        <div className="contact__copy">
          <p className="eyebrow eyebrow--light">Contact</p>
          <h2>Need a quote?</h2>
          <p>
            Email or WhatsApp us with a few details about the space and the
            cleaning you need.
          </p>
        </div>
        <div className="contact__actions">
          <a
            className="button button--cream"
            href={`mailto:${contactEmail}?subject=Cleaning%20quote`}
          >
            Request a quote <ArrowIcon />
          </a>
          <a
            className="contact__whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20l.9-4.7a8.5 8.5 0 1 1 16.6-3.6Z" />
              <path d="M8.4 8.2c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4 0 .6.4.7 1 1.3 1.7 1.7.2.1.4.1.6-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5s-.1.9-.6 1.3c-.4.4-1 .6-1.7.5-.8-.1-1.9-.5-3.2-1.6-1.5-1.3-2.4-2.9-2.6-3.8-.2-.9.1-1.5.3-1.9Z" />
            </svg>
            <span>
              WhatsApp us
              <small>+233 20 789 0001</small>
            </span>
          </a>
          <a className="contact__email" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <Link className="brand brand--footer" href="/" aria-label="BrightNest home">
        <span className="brand__mark" aria-hidden="true">
          <svg viewBox="0 0 36 36" fill="none">
            <path d="m5 16 13-10 13 10v14H5V16Z" />
            <path d="M13 30V19h10v11M10 15l8-6 8 6" />
            <path d="m26 7 2-3 2 3" />
          </svg>
        </span>
        <span className="brand__name">
          BrightNest
          <small>Cleaning Services</small>
        </span>
      </Link>
      <nav className="footer-nav" aria-label="Footer navigation">
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
      <span className="site-footer__copyright">BrightNest Cleaning Services</span>
    </footer>
  );
}
