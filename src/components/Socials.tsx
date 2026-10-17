export default function Socials() {
  return (
    <div className="flex items-center gap-4 ">
      <a
        href="https://github.com/tuca-janahu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="h-7 w-7 cursor-pointer dark:invert hover:opacity-50 "
          src="/github.png"
          alt="GitHub"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/artur-janahu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="h-7 w-7 cursor-pointer dark:invert hover:opacity-50"
          src="/linkedin.png"
          alt="LinkedIn"
        />
      </a>
      <a
        href="https://wa.me/5571993955005?text=Ol%C3%A1%2C%20vi%20seu%20portfolio%20e%20tenho%20interesse%20em%20parceria%21"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="h-7 w-7 cursor-pointer dark:invert hover:opacity-50"
          src="/whatsapp.png"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}
