import { Link, NavLink, useNavigate } from "react-router";

function Navbar() {

    const navigate = useNavigate();

  function handleContactClick() {
    const el = document.getElementById("contact-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/contact");
    }
  }

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

        <div className="flex items-center gap-4 ">
        
          <a href="https://github.com/tuca-janahu" target="_blank" rel="noopener noreferrer">
          <img className="h-7 w-7 cursor-pointer invert hover:opacity-50 " src="/github.png" alt="GitHub" />
          </a>
        
         <a href="https://www.linkedin.com/in/artur-janah%C3%BA-2530b5272/" target="_blank" rel="noopener noreferrer">
          <img className="h-7 w-7 cursor-pointer invert hover:opacity-50" src="/linkedin.png" alt="LinkedIn" />
      </a>
          <a href="https://wa.me/5571993955005?text=Ol%C3%A1%2C%20vi%20seu%20portfolio%20e%20tenho%20interesse%20em%20parceria%21" target="_blank" rel="noopener noreferrer">
            <img className="h-7 w-7 cursor-pointer invert hover:opacity-50" src="/whatsapp.png" alt="WhatsApp" />
          </a>
        </div>

        <div className="flex items-center gap-2">
        
          <ThemeToggle />
          <button
            onClick={handleContactClick}
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