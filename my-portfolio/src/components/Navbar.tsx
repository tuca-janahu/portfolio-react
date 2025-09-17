import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-lg">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400  to-cyan-500 monospace">
            Artur Janahú
          </span>
        </Link>
        <nav className="hidden sm:flex items-center gap-1">
          <NavItem to="/projects" label="Projetos" />
          <NavItem to="/about" label="Sobre" />
          <NavItem to="/talks" label="Publicações" />
          <NavItem to="/contact" label="Contato" />
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => {
              const el = document.getElementById("contact-section");
              el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="hidden sm:inline-flex rounded-full border border-black/10 dark:border-white/10 px-3 py-1.5 text-sm hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
          >
            Falar comigo
          </button>
        </div>
      </div>
    </header>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-1.5 rounded-full text-sm transition-colors hover:bg-black/5 dark:hover:bg-white/5 ${
          isActive ? "bg-black/10 dark:bg-white/10" : ""
        }`
      }
    >
      {label}
    </NavLink>
  );
}

function ThemeToggle() {
  return (
    <button
      aria-label="Alternar tema"
      className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/5"
      onClick={() => {
        const root = document.documentElement;
        const isDark = root.classList.toggle("dark");
        try {
          localStorage.setItem("theme", isDark ? "dark" : "light");
        } catch (error) {
    // Log the error for debugging purposes
    console.error("Failed to save theme to localStorage:", error);
      }}}
    >
      {/* Ícone simples puro CSS */}
      <span className="relative block h-5 w-5">
        <span className="absolute inset-0 rounded-full border border-black/40 dark:border-white/60"></span>
        <span className="absolute inset-0 rounded-full translate-x-1 translate-y-1 bg-black/80 dark:bg-white/80 mix-blend-difference"></span>
      </span>
    </button>
  );
}

export default Navbar;