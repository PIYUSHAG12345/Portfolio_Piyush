// --- SVG Icon Components ---
// I've defined these here for simplicity.
// You could also move them to a separate 'icons.js' file and import them.

const GitHubIcon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 16 16"
    aria-hidden="true"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);

const ColabIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M10.5 16.5C12.9853 16.5 15 14.3353 15 11.85C15 9.36472 12.9853 7.2 10.5 7.2C8.01472 7.2 6 9.36472 6 11.85C6 14.3353 8.01472 16.5 10.5 16.5Z"
      stroke="#F6851B" // Google Orange
      strokeWidth="1.8"
    />
    <path
      d="M13.5 16.8C15.9853 16.8 18 14.6353 18 12.15C18 9.66472 15.9853 7.5 13.5 7.5C11.0147 7.5 9 9.66472 9 12.15C9 14.6353 11.0147 16.8 13.5 16.8Z"
      stroke="#4B85F6" // Google Blue
      strokeWidth="1.8"
    />
  </svg>
);

// --- Main Component ---

export default function ProjectExperience() {
  const projects = [
    {
      title: "MarketMind — Stock Price Prediction (ML Project)",
      link: "https://colab.research.google.com/drive/1Kl7KQqX1h8A-MXE8CCqxGydHBC2zmE8u?usp=drive_link",
      icon: "colab", 
      period: "July 2024",
      tech: "LSTM • TensorFlow • Keras • Pandas • NumPy",
      description:
        "Developed an LSTM-based deep learning model to accurately predict Google stock closing prices. Performed data preprocessing, normalization, visualization, and applied dropout + MinMax scaling to enhance prediction accuracy.",
    },
    {
      title: "Job Rashpi — Full Stack MERN Platform",
      link: "https://github.com/PIYUSHAG12345/job_rashpi",
      icon: "github",
      period: "March 2025",
      tech: "Node.js • Express.js • MongoDB • React.js • JWT • Google OAuth 2.0",
      description:
        "Built a full-stack MERN application for placement preparation. Developed secure JWT-based authentication, integrated Google OAuth 2.0, and connected REST APIs from LeetCode & Codeforces for fetching problem sets dynamically.",
    },
  ];

  const iconMap = {
    github: <GitHubIcon className="w-5 h-5 md:w-6 md:h-6" />,
    colab: <ColabIcon className="w-5 h-5 md:w-6 md:h-6" />,
  };

  return (
    <section
      id="projects"
      className="
        w-full px-8 md:px-16 lg:px-28 py-20 
        bg-slate-50 dark:bg-slate-950
        transition-all duration-700
      "
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Project Experience
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                relative pl-8 md:pl-12
                before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 
                before:bg-gradient-to-b before:from-indigo-600 before:to-purple-600
                dark:before:from-indigo-400 dark:before:to-purple-400
              "
            >
              <div className="absolute left-[-6px] top-2 w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full ring-4 ring-white "></div>

              <div
                className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl 
                  border border-slate-200 dark:border-slate-700 
                  shadow-md hover:shadow-xl 
                  transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                    {/* 👇 This part is updated to include the icon */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2 
                        hover:underline hover:text-indigo-600 
                        dark:hover:text-indigo-400 
                        transition-colors duration-300"
                    >
                      {iconMap[project.icon]}
                      <span>{project.title}</span>
                    </a>
                  </h3>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1 md:mt-0">
                    {project.period}
                  </span>
                </div>

                <p className="text-base font-medium text-slate-600 dark:text-slate-300 mb-3">
                  {project.tech}
                </p>

                <p className="text-slate-700 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}