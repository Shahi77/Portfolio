import { FaLinkedin, FaGithub, FaEnvelope, FaYoutube } from "react-icons/fa";
import Badge from "./Badge";
import VerticalLine from "./VerticalLine";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

const Home = () => {
  return (
    <div className="flex justify-center">
      <main className="mt-8 flex-col items-center">
        {/* Hero Section */}
        <section
          id="about"
          className="flex flex-col md:flex-row items-center md:items-start gap-8"
        >
          <div className="relative cursor-pointer">
            <div className="w-28 h-28 bg-white rounded-full absolute inset-0"></div>
            <img
              src="/avatar.png"
              alt="Profile"
              className="w-28 h-28 rounded-full scale-90 hover:scale-100 duration-150 relative z-10"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2">
              Hey 👋, I&apos;m Shahi
            </h1>
            <p className="text-sm font-semibold text-black dark:text-white mt-2">
              a backend developer, from India.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/Shahi77"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 duration-300"
              >
                <FaGithub className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shahi77/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://x.com/Shahii77"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 duration-300"
              >
                <FaXTwitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>

              <a
                href="mailto:shahi.201202@gmail.com"
                className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 duration-300"
              >
                <FaEnvelope className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
              {/* <a
                href="https://www.youtube.com/@anujthakur05"
                target="_blank"
                rel="noopener"
                className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 duration-300"
              >
                <FaYoutube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </a> */}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mt-10">
          <h2 className="text-l font-semibold mb-4">about me.</h2>
          <p className="text-black dark:text-white max-w-2xl text-sm">
            I&apos;m a fourth-year Integrated M.Tech student in Computer Science
            at NIT Hamirpur with a strong interest in backend development. I
            enjoy coding, designing backend systems, and working with databases.
            I have hands-on experience with AWS and cloud technologies. My
            problem-solving skills help me build efficient and scalable
            solutions.
          </p>
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg max-w-2xl">
            <p className="text-sm text-black dark:text-white">
              I&apos;m open to work and excited to collaborate on impactful
              projects. If you&apos;re looking for a developer or want to
              discuss potential opportunities, feel free to reach out!
            </p>
            <div className="mt-4 flex gap-4">
              <button
                className="px-3 py-2 bg-black text-white text-sm rounded-md"
                onClick={() => {
                  window.open("https://x.com/Shahii77", "_blank");
                }}
              >
                Drop message on X
              </button>
              <button
                className="py-2 group text-sm flex items-center"
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1-tsBBCEFjmXJZ9oimeVrtYzE-hpN-mtq/view",
                    "_blank"
                  );
                }}
              >
                Resume
                <span className="scale-90 group-hover:ml-1 transition-all duration-300">
                  <ArrowUpRight />
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        {/* <section id="work-experience" className="mt-10">
          <h2 className="text-l font-semibold mb-4">work experience.</h2>
          <div className="space-y-8 max-w-2xl">
            <div className="relative flex items-start group">
              <VerticalLine />
              <div className="ml-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-md font-bold">Software Engineer</p>
                    <a
                      href="https://www.mathongo.com/"
                      target="_blank"
                      rel="noopener"
                      className="text-xs text-black dark:text-white"
                    >
                      at <span className="underline">MathonGo</span>
                    </a>
                  </div>
                  <span className="text-xs font-semibold text-black dark:text-white">
                    jun, 2024 - present
                  </span>
                </div>
                <p className="mt-2 text-sm text-black dark:text-white">
                  Optimized Redis to resolve memory leaks, reducing storage
                  usage from 12GB to 2GB. Integrated Webengage for marketing
                  analytics and notifications, developed a Journey Tracer
                  microservice to handle 10k+ test requests concurrently, and
                  implemented a Freemium functionality, boosting payments by
                  10%. Additionally, designed and implemented a percentile
                  prediction feature from scratch for various tests like JEE
                  Mains and Advanced.
                </p>
              </div>
            </div>

            <div className="relative flex items-start group">
              <VerticalLine />
              <div className="ml-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-medium">Data Analyst Intern</h5>
                    <a
                      href="https://www.scaler.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-black dark:text-white"
                    >
                      at <span className="underline">Scaler</span>
                    </a>
                  </div>
                  <span className="text-xs font-semibold text-black dark:text-white">
                    jun, 2023 - jun, 2024
                  </span>
                </div>
                <p className="mt-2 text-sm text-black dark:text-white">
                  Developed an API for alumni filters as a sentry, increasing
                  engagement by 20%. Enhanced query performance on Redshift by
                  2% through optimization, reducing server load. Created a
                  Python automation script to streamline Key Result (KR)
                  reporting, saving 10 hours per month and improving metric
                  accuracy. Led the development of comprehensive dashboards for
                  Scaler School of Technology, reducing the Sales Team&apos;s
                  manual workload by 5% through automation.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Projects Section */}
        <section id="projects" className="mt-10">
          <h2 className="text-l font-semibold mb-4">projects.</h2>
          <div className="space-y-8 max-w-2xl">
            {/* Project 1 */}
            <div className="relative flex items-start group">
              <VerticalLine />
              <div className="ml-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-md font-bold">
                      Code Runner
                      <span className="ml-2">
                        <Badge text="📦 Completed" />
                      </span>
                    </p>
                    <p className="text-xs font-semibold mt-1">
                      <strong>Tech Stack: </strong> react.js, express, mongoDb,
                      redis, AWS, NGINX
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://code.shahi77.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm group1 text-black flex items-center dark:text-white hover:scale-105 duration-150"
                    >
                      live preview
                      <span className="scale-90">
                        <ArrowUpRight />
                      </span>
                    </a>
                    <a
                      href="https://github.com/Shahi77/Code-execution-API"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-black flex items-center dark:text-white hover:scale-105 duration-150"
                    >
                      source code
                      <span className="scale-90">
                        <ArrowUpRight />
                      </span>
                    </a>
                  </div>
                </div>
                <ul className="mt-2 space-y-2 text-sm text-black dark:text-white list-disc pl-4">
                  <li>
                    A multi-language code execution platform supporting Python,
                    JavaScript, C, C++ and Java for remote code execution.
                  </li>
                  <li>
                    Implemented real-time output and error handling, ensuring
                    accurate results for user-submitted code.
                  </li>
                  <li>
                    Automated on-demand container creation, execution binding
                    and resource cleanup.
                  </li>
                  <li>
                    Integrated a Redis-based queuing system to improve request
                    handling and increase execution speed by 40%.
                  </li>
                  <li>
                    Deployed on AWS EC2 with Nginx as a reverse proxy for
                    efficient traffic management.
                  </li>
                </ul>
              </div>
            </div>

            {/* Project 2 */}
            <div className="relative flex items-start group">
              <VerticalLine />
              <div className="ml-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-md font-bold">
                      Scale-Chat [Backend]
                      <span className="ml-2">
                        <Badge text="📦 Completed" />
                      </span>
                    </p>
                    <p className="text-xs font-semibold mt-1">
                      <strong>Tech Stack: </strong> node.js, express,
                      postgreSQL, redis
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Shahi77/WebSocketWhispers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-black flex items-center dark:text-white hover:scale-105 duration-150"
                    >
                      source code
                      <span className="scale-90">
                        <ArrowUpRight />
                      </span>
                    </a>
                  </div>
                </div>
                <ul className="mt-2 space-y-2 text-sm text-black dark:text-white list-disc pl-4">
                  <li>
                    Implemented JWT-based authentication to ensure secure access
                    to chat routes.
                  </li>
                  <li>
                    Leveraged Redis Pub/Sub model to efficiently scale WebSocket
                    connections to handle 1000+ users.
                  </li>
                  {/* <li>
                    Integrated Apache Kafka to optimize database write
                    operations by 25% - 30%.
                  </li> */}
                  <li>
                    Set up Cron Job to automate the deletion of messages from
                    Redis once they are pushed to the database.
                  </li>
                  <li>
                    Designed and implemented a microservices-oriented
                    architecture, enhancing scalability and maintainability by
                    decoupling services for Redis.
                  </li>
                </ul>
              </div>
            </div>
            {/* Project 3 */}
            <div className="relative flex items-start group">
              <VerticalLine />
              <div className="ml-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-md font-bold">
                      Url-shortener
                      <span className="ml-2">
                        <Badge text="📦 Completed" />
                      </span>
                    </p>
                    <p className="text-xs font-semibold mt-1">
                      <strong>Tech Stack: </strong> node.js, express, mongoDb
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://url-shortener1-3ohb.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm group1 text-black flex items-center dark:text-white hover:scale-105 duration-150"
                    >
                      live preview
                      <span className="scale-90">
                        <ArrowUpRight />
                      </span>
                    </a>
                    <a
                      href="https://github.com/Shahi77/URL-Shortener1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-black flex items-center dark:text-white hover:scale-105 duration-150"
                    >
                      source code
                      <span className="scale-90">
                        <ArrowUpRight />
                      </span>
                    </a>
                  </div>
                </div>
                <ul className="mt-2 space-y-2 text-sm text-black dark:text-white list-disc pl-4">
                  <li>
                    Developed a REST API service for URL shortening, utilizing
                    3RE architecture.
                  </li>
                  <li>
                    Implemented authentication using JWT tokens to secure routes
                    and enhance user privacy.
                  </li>
                  <li>
                    Restricted access to URL routes exclusively to authenticated
                    users, bolstering data security.
                  </li>
                  <li>
                    Enhanced user experience by implementing cookie-based token
                    storage for seamless authentication.
                  </li>
                  <li>
                    Integrated refresh token functionality to automatically
                    update access tokens upon expiration, ensuring continuous
                    service access.
                  </li>
                  <li>
                    Leveraged the nanoid npm library to generate concise and
                    unique short IDs for enhanced usability.
                  </li>
                </ul>
              </div>
            </div>
            {/* Project 4 */}
            <div className="relative flex items-start group">
              <VerticalLine />
              <div className="ml-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-md font-bold">
                      ScrapConnect
                      <span className="ml-2">
                        <Badge text="🪛 UnderDEV" />
                      </span>
                    </p>
                    <p className="text-xs font-semibold mt-1">
                      <strong>Tech Stack: </strong> node.js, express,
                      PostgreSQL, Websockets
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Shahi77/ScrapConnect"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-black flex items-center dark:text-white hover:scale-105 duration-150"
                    >
                      source code
                      <span className="scale-90">
                        <ArrowUpRight />
                      </span>
                    </a>
                  </div>
                </div>
                <ul className="mt-2 space-y-2 text-sm text-black dark:text-white list-disc pl-4">
                  <li>
                    A platform connecting sellers and buyers for efficient scrap
                    pickup services.
                  </li>
                  <li>
                    Developed a role-based system where sellers create pickup
                    requests and buyers accept them.
                  </li>
                  <li>
                    Implemented secure authentication with email and password
                    login.
                  </li>
                  <li>
                    Designed a pickup request system storing seller ID, location
                    (latitude & longitude), scrap details (type, weight, price
                    range), and pickup type (same-day/next-day).
                  </li>
                  <li>
                    Integrated WebSocket-based real-time notifications to alert
                    buyers within a 5 km radius.
                  </li>
                  <li>
                    Optimized database management for efficient storage and
                    retrieval of pickup requests.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="mt-10">
          <h2 className="text-l font-semibold mb-2">skills.</h2>
          <div className="mt-1 flex flex-wrap gap-2">
            <Badge text="javascript" isHover={true} />
            <Badge text="C++" isHover={true} />
            <Badge text="python" isHover={true} />
            <Badge text="restapi" isHover={true} />
            <Badge text="react.js" isHover={true} />
            <Badge text="node.js" isHover={true} />
            <Badge text="express.js" isHover={true} />
            <Badge text="prisma" isHover={true} />
            <Badge text="mongoDb" isHover={true} />
            <Badge text="postgreSQL" isHover={true} />
          </div>
          <div className="mt-1 flex flex-wrap gap-2">
            <Badge text="redis" isHover={true} />
            <Badge text="kafka" isHover={true} />
            <Badge text="docker" isHover={true} />
            <Badge text="AWS" isHover={true} />
            <Badge text="git" isHover={true} />
            <Badge text="github" isHover={true} />
            <Badge text="postman" isHover={true} />
            <Badge text="web sockets" isHover={true} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
