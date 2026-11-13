import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Cabeçalho do Portal */}
      <header className="bg-emerald-700 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">INAFC Campo</h1>
            <p className="text-emerald-100 text-sm">Portal do Trabalhador Rural</p>
          </div>
          <nav className="flex gap-4 text-sm font-medium">
            <a href="#ajuda" className="hover:underline">Preciso de Ajuda</a>
            <a href="#direitos" className="hover:underline">Direitos</a>
            <a href="#atendimento" className="hover:underline">Onde Buscar Atendimento</a>
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        {/* Banner Principal / Boas-vindas */}
        <section className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center space-y-4 shadow-sm">
          <h2 className="text-3xl font-extrabold text-emerald-900">
            Apoio, Orientação e Direitos para o Trabalhador Rural
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            Encontre informações sobre contratos de trabalho, aposentadoria rural, saúde e segurança no campo, ou envie a sua dúvida de forma confidencial.
          </p>
          <div className="pt-2">
            <a 
              href="#ajuda" 
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors"
            >
              Solicitar Orientação Rápida
            </a>
          </div>
        </section>

        {/* Módulos do Mapa de Navegação */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 transition-all">
            <div className="text-emerald-600 text-3xl mb-3">📋</div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">1. Preciso de Ajuda</h3>
            <p className="text-slate-600 text-sm mb-4">
              Formulário simples e orientado para enviar dúvidas sobre previdência, jornada de trabalho ou verbas rescisórias.
            </p>
            <span className="text-emerald-600 text-sm font-semibold hover:underline cursor-pointer">Aceder formulário &rarr;</span>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 transition-all">
            <div className="text-emerald-600 text-3xl mb-3">⚖️</div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">2. Conheça seus Direitos</h3>
            <p className="text-slate-600 text-sm mb-4">
              Base de conhecimento sobre folga semanal, horas extras, proteção contra acidentes e direitos da mulher no campo.
            </p>
            <span className="text-emerald-600 text-sm font-semibold hover:underline cursor-pointer">Consultar direitos &rarr;</span>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 transition-all">
            <div className="text-emerald-600 text-3xl mb-3">📍</div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">3. Rede de Apoio Local</h3>
            <p className="text-slate-600 text-sm mb-4">
              Contactos do Sindicato dos Trabalhadores Rurais de Porto Murtinho, CRAS, INSS e números de emergência.
            </p>
            <span className="text-emerald-600 text-sm font-semibold hover:underline cursor-pointer">Ver pontos de atendimento &rarr;</span>
          </div>
        </section>
      </main>

      {/* Rodapé alinhado com a LGPD */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-sm">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-2">
          <p>© INAFC Campo — Projeto de Extensão Universitária (UFMS / UFGD)</p>
          <p className="text-xs text-slate-500">
            Em conformidade com a LGPD (Lei 13.709/2018) e as diretrizes de acessibilidade eMAG 3.1.
          </p>
        </div>
      </footer>
    </div>
  );
}