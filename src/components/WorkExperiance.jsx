export default function ProjectExperience() {
  const projects = [
    {
      title: "MarketMind — Stock Price Prediction (ML Project)",
      period: "July 2024",
      tech: "LSTM • TensorFlow • Keras • Pandas • NumPy",
      description:
        "Developed an LSTM-based deep learning model to accurately predict Google stock closing prices. Performed data preprocessing, normalization, visualization, and applied dropout + MinMax scaling to enhance prediction accuracy.",
    },
    {
      title: "Job Rashpi — Full Stack MERN Platform",
      period: "March 2025",
      tech: "Node.js • Express.js • MongoDB • React.js • JWT • Google OAuth 2.0",
      description:
        "Built a full-stack MERN application for placement preparation. Developed secure JWT-based authentication, integrated Google OAuth 2.0, and connected REST APIs from LeetCode & Codeforces for fetching problem sets dynamically.",
    },
  ];

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
                    {project.title}
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
