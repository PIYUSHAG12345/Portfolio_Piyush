export default function Footer() {
  return (
    <footer
      className="
        w-full py-10 px-8 md:px-16 
        bg-white dark:bg-slate-900
        border-t border-slate-200 dark:border-slate-800
        transition-all duration-700
      "
    >
      <div className="max-w-6xl mx-auto text-center space-y-3">
        <p className="text-slate-600 dark:text-slate-400 text-base">
          Designed & Built with ❤️ by{" "}
          <span className="font-semibold text-slate-900 dark:text-white">
            Piyush Agrawal
          </span>
        </p>

        <p className="text-slate-500 dark:text-slate-500 text-sm">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
