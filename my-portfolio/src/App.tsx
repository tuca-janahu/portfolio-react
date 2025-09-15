
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';

function Home() {
  return (
    <section className="p-8 max-w-4xl mx-auto bg-neutral-950 rounded-3xl shadow-2xl mt-10">
      <header className="mb-8 pb-6 flex items-center gap-6">
        <img src="https://avatars.githubusercontent.com/u/143747367?v=4" alt="Foto de perfil" className="w-20 h-20 rounded-full object-cover shadow-lg" />
        <div>
          <h1 className="text-4xl font-extrabold mb-2 text-neutral-100">Artur Janahú</h1>
          <h2 className="text-lg font-medium text-neutral-400">Engenharia da Computação, SENAI CIMATEC (6º semestre)</h2>
          <p className="mt-2 text-neutral-400">Programador, automação de processos e desenvolvimento fullstack. Buscando desafios que unam tecnologia, inovação e impacto real.</p>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <section className="bg-neutral-950 rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-yellow-400 mb-4">Tecnologias & Ferramentas</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-neutral-900 text-yellow-400 text-sm font-semibold">React</span>
            <span className="px-3 py-1 rounded-full bg-neutral-900 text-yellow-400 text-sm font-semibold">Next.js</span>
            <span className="px-3 py-1 rounded-full bg-neutral-900 text-yellow-400 text-sm font-semibold">Node.js</span>
            <span className="px-3 py-1 rounded-full bg-neutral-900 text-yellow-400 text-sm font-semibold">Figma</span>
            <span className="px-3 py-1 rounded-full bg-neutral-900 text-yellow-400 text-sm font-semibold">Python</span>
            <span className="px-3 py-1 rounded-full bg-neutral-900 text-yellow-400 text-sm font-semibold">VBA</span>
            <span className="px-3 py-1 rounded-full bg-neutral-900 text-yellow-400 text-sm font-semibold">JavaScript</span>
          </div>
        </section>
  <section className="bg-neutral-950 rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-yellow-400 mb-4">O que estou aprendendo</h3>
          <ul className="list-disc ml-6 text-neutral-300">
            <li>Boas práticas em arquitetura de software fullstack</li>
            <li>Desenvolvimento frontend com Angular.js</li>
          </ul>
        </section>
      </div>
      <section className="mt-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-4">Experiências</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-950 rounded-2xl p-4 shadow-lg hover:shadow-yellow-400/40 transition">
            <h4 className="font-semibold text-neutral-100 mb-1">Projetista – Cimatec Jr</h4>
            <p className="text-neutral-400 text-sm">Desenvolvimento web (React, Next.js, Node.js), prototipação (Figma) e metodologias ágeis.</p>
          </div>
          <div className="bg-neutral-950 rounded-2xl p-4 shadow-lg hover:shadow-yellow-400/40 transition">
            <h4 className="font-semibold text-neutral-100 mb-1">Estagiário em Finanças – Urca Global Fund</h4>
            <p className="text-neutral-400 text-sm">Automação de relatórios (Python), otimização de planilhas (VBA), criação de formulários dinâmicos (JS).</p>
          </div>
          <div className="bg-neutral-950 rounded-2xl p-4 shadow-lg hover:shadow-yellow-400/40 transition">
            <h4 className="font-semibold text-neutral-100 mb-1">Diretor de Comunicações – Cimatec Finance</h4>
            <p className="text-neutral-400 text-sm">Liderança em comunicação interna/externa e organização de eventos com BP Investimentos e ACT Investimentos (XP).</p>
          </div>
        </div>
      </section>
    </section>
  );
}

function Projetos() {
  return (
    <section className="p-8 max-w-5xl mx-auto mt-10">
      <header className="mb-8 pb-6">
        <h1 className="text-3xl font-extrabold text-neutral-100">Projetos</h1>
        <p className="text-neutral-400 mt-2">Confira alguns dos meus principais projetos desenvolvidos recentemente.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a href="https://calculadora.tucajanahu.app" target="_blank" rel="noopener noreferrer"
          className="group block p-8 rounded-3xl shadow-2xl bg-neutral-950 border-2 border-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/40">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl mb-2 text-neutral-100 group-hover:text-yellow-400 transition">Calculadora Online</h2>
            <p className="text-neutral-400 group-hover:text-neutral-100">Projeto de calculadora web com funcionalidades avançadas.</p>
          </div>
          <div className="mt-6 flex justify-end">
            <span className="px-4 py-2 rounded-full bg-yellow-900 text-yellow-400 text-sm font-semibold group-hover:bg-yellow-700 group-hover:text-white transition">Acessar</span>
          </div>
        </a>
        <a href="https://ticket-generator.tucajanahu.app" target="_blank" rel="noopener noreferrer"
          className="group block p-8 rounded-3xl shadow-2xl bg-neutral-950 border-2 border-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/40">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl mb-2 text-neutral-100 group-hover:text-yellow-400 transition">Ticket Generator</h2>
            <p className="text-neutral-400 group-hover:text-neutral-100">Gerador de tickets dinâmicos para eventos.</p>
          </div>
          <div className="mt-6 flex justify-end">
            <span className="px-4 py-2 rounded-full bg-yellow-900 text-yellow-400 text-sm font-semibold group-hover:bg-yellow-700 group-hover:text-white transition">Acessar</span>
          </div>
        </a>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section className="p-8 max-w-2xl mx-auto bg-neutral-950 rounded-3xl shadow-2xl mt-10">
      <header className="mb-8 pb-6">
        <h1 className="text-3xl font-extrabold text-neutral-100">Contato</h1>
        <p className="text-neutral-400 mt-2">Entre em contato comigo pelos canais abaixo.</p>
      </header>
      <ul className="space-y-4">
        <li><a href="https://www.linkedin.com/in/tuca-janahu/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline transition font-semibold">LinkedIn</a></li>
        <li><a href="mailto:artur.janahu@gmail.com" className="text-yellow-400 hover:text-yellow-300 underline transition font-semibold">E-mail</a></li>
      </ul>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 pb-10">
      <Router>
        <nav className="sticky top-0 z-20 bg-neutral-950 bg-opacity-95 shadow-lg text-neutral-100 p-4 flex gap-8 justify-center">
          <Link to="/" className="px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-neutral-900 hover:scale-105">Home</Link>
          <Link to="/projetos" className="px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-neutral-900 hover:scale-105">Projetos</Link>
          <Link to="/contato" className="px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-neutral-900 hover:scale-105">Contato</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
