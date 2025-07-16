import { CiCalendar } from "react-icons/ci";

const experiences = [
  {
    date: "Nov 2021 - Present",
    role: "Senior Backend Developer",
    company: "Capita India",
    location: "Pune, India",
    url: "https://www.capita.com",
    description: (
      <div>
        <p>Working on enterprise-scale applications in FinTech and Compliance domains:</p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>{"<Pay360 />"}</strong>
            <span className="ml-1 text-xs bg-blue-100/50 dark:bg-blue-500/10 text-blue-800 dark:text-blue-500 px-1.5 py-0.5 rounded font-mono">
              [Live]
            </span>
            : Upgraded legacy Spring MVC application to a newer Spring Boot version, replaced XML-based configurations with Java-based annotations, and optimized backend schedulers for better performance.
          </li>
          <li>
            <strong>{"<NIFAIS />"}</strong>
            <span className="ml-1 text-xs bg-green-100/50 dark:bg-green-500/10 text-green-800 dark:text-green-500 px-1.5 py-0.5 rounded font-mono">
              [Stable]
            </span>
            : Developed features for animal lifecycle, movement, compliance, and document generation. Debugged and optimized backend APIs.
          </li>
        </ul>
      </div>
    ),
    technologies: [
      "Java 8/11",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "JPA",
      "Kafka",
      "MySQL",
      "AWS",
      "Docker",
      "Jenkins",
      "JUnit",
      "Mockito",
      "Angular 16"
    ],
  },
  {
    date: "Jan 2019 - Nov 2021",
    role: "Software Associate",
    company: "Vidyayug Soft Technology",
    location: "Hyderabad, India",
    url: "https://www.vidyayug.com",
    description: (
      <div>
        <p>Developed e-learning platform features and integrated 3rd-party services:</p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>{"<CIOrthoLMS />"}</strong>
            <span className="ml-1 text-xs bg-purple-100/50 dark:bg-purple-500/10 text-purple-800 dark:text-purple-500 px-1.5 py-0.5 rounded font-mono">
              [Shipped]
            </span>
            : Implemented SCORM-based learning modules, subscription logic, and payment gateways (Stripe, Auth.net).
          </li>
          <li>
            <strong>{"<ReportScheduler />"}</strong>
            <span className="ml-1 text-xs bg-indigo-100/50 dark:bg-indigo-500/10 text-indigo-800 dark:text-indigo-500 px-1.5 py-0.5 rounded font-mono">
              [Automated]
            </span>
            : Added messaging services and automated weekly report generation with improved SonarQube scanning.
          </li>
        </ul>
      </div>
    ),
    technologies: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "Stripe",
      "SonarQube",
      "Bootstrap",
      "JavaScript",
      "SCORM"
    ],
  },
];

export default function Experience() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <hr className="border-gray-200 dark:border-gray-700 mb-8" />
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="group relative flex flex-col sm:flex-row gap-3 sm:gap-8 mb-8 text-center sm:text-left p-6 rounded-xl bg-white/80 dark:bg-[#191e2c]/30 border border-gray-200/60 dark:border-[#2d3240] hover:bg-blue-50/30 dark:hover:bg-[#191e2c]/50 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_30px_-3px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out backdrop-blur-sm overflow-hidden after:absolute after:inset-0 after:rounded-xl after:border after:border-transparent after:bg-gradient-to-r after:from-blue-500/0 after:via-blue-500/30 dark:after:via-[#5c87f6]/50 after:to-blue-500/0 after:opacity-0 after:bg-[length:200%_100%] after:animate-shimmer group-hover:after:opacity-100 after:transition-opacity after:duration-500 before:absolute before:inset-[1px] before:rounded-xl before:bg-white/90 dark:before:bg-[#191e2c]/30 before:z-10 [box-shadow:0_0_0_1px_rgba(0,0,0,0.03)] hover:[box-shadow:0_0_0_1px_rgba(59,130,246,0.1)]"
        >
          <div className="relative z-20 flex-none sm:w-42">
            <div className="inline-flex items-center justify-center sm:justify-start text-[11px] text-blue-600 dark:text-[#5c87f6] font-medium tracking-wide bg-blue-50 dark:bg-[#1a1f2d] px-3 py-1.5 rounded-full hover:scale-105 transition-transform duration-200 shadow-sm hover:shadow-md whitespace-nowrap overflow-hidden">
              <span className="mr-2 animate-pulse shrink-0">
                <CiCalendar size={14} />
              </span>
              <span className="truncate">{exp.date}</span>
            </div>
          </div>
          <div className="relative z-20">
            <h2 className="text-[15px] font-medium flex flex-wrap items-center gap-2 justify-center sm:justify-start">
              <span className="text-gray-800 dark:text-white bg-blue-50/80 dark:bg-[#1a1f2d] px-3 py-1 rounded-full shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1)] border border-blue-100/50 dark:border-transparent transition-all duration-300">
                {exp.role}
              </span>
              <span className="text-gray-400">·</span>
              <a
                href={exp.url}
                className="text-gray-900 dark:text-[#5c87f6] hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative group font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {exp.company}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </h2>
            <div className="text-gray-600 dark:text-gray-300 mt-4">{exp.description}</div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="shadow-sm hover:shadow-md bg-gray-100/80 dark:bg-[#191e2c] text-gray-800 dark:text-[#5c87f6] py-1.5 px-3 border border-gray-200/50 dark:border-[#2d3240] text-xs font-medium rounded-full transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-[#1a1f2d] relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}