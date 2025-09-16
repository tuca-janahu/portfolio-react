export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-8 text-center text-sm">
      © {new Date().getFullYear()} Artur Janahú. Todos os direitos reservados.
    </footer>
  );
}
