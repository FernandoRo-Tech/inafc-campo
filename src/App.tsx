import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [telaAtiva, setTelaAtiva] = useState('home');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '650px', margin: '0 auto', backgroundColor: '#f9fbe7', minHeight: '100vh', borderRadius: '12px' }}>
      
      {/* Cabeçalho Fixo Estilizado */}
      <header style={{ backgroundColor: '#2e7d32', color: '#ffffff', padding: '20px', borderRadius: '10px', marginBottom: '25px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h1 style={{ margin: 0, fontSize: '26px', color: '#ffffff' }}>INAFC Campo</h1>
        <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#ffffff', opacity: 0.95 }}>Informação e apoio para quem vive e trabalha no campo</p>
      </header>

      {/* Conteúdo Dinâmico */}
      <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        
        {/* TELA PRINCIPAL (HOME) */}
        {telaAtiva === 'home' && (
          <div>
            <h2 style={{ color: '#1b5e20', marginTop: 0 }}>Olá! Como podemos ajudar?</h2>
            <p style={{ color: '#555', marginBottom: '20px' }}>Escolha uma opção abaixo. Se precisar, peça ajuda à equipe do INAFC.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button 
                onClick={() => setTelaAtiva('ajuda')}
                style={{ padding: '16px', fontSize: '16px', cursor: 'pointer', textAlign: 'left', borderRadius: '8px', border: '1px solid #c8e6c9', backgroundColor: '#f1f8e9', fontWeight: 'bold', color: '#2e7d32', transition: '0.2s' }}
              >
                🚨 Preciso de ajuda
              </button>

              <button 
                onClick={() => setTelaAtiva('direitos')}
                style={{ padding: '16px', fontSize: '16px', cursor: 'pointer', textAlign: 'left', borderRadius: '8px', border: '1px solid #c8e6c9', backgroundColor: '#f1f8e9', fontWeight: 'bold', color: '#2e7d32' }}
              >
                📖 Conheça seus direitos
              </button>

              <button 
                onClick={() => setTelaAtiva('tempo')}
                style={{ padding: '16px', fontSize: '16px', cursor: 'pointer', textAlign: 'left', borderRadius: '8px', border: '1px solid #c8e6c9', backgroundColor: '#f1f8e9', fontWeight: 'bold', color: '#2e7d32' }}
              >
                🌤️ Clima e Previsão (AgroTempo)
              </button>

              <button 
                onClick={() => setTelaAtiva('cotacoes')}
                style={{ padding: '16px', fontSize: '16px', cursor: 'pointer', textAlign: 'left', borderRadius: '8px', border: '1px solid #c8e6c9', backgroundColor: '#f1f8e9', fontWeight: 'bold', color: '#2e7d32' }}
              >
                📈 Cotações e Insumos
              </button>

              <button 
                onClick={() => setTelaAtiva('contato')}
                style={{ padding: '16px', fontSize: '16px', cursor: 'pointer', textAlign: 'left', borderRadius: '8px', border: '1px solid #c8e6c9', backgroundColor: '#f1f8e9', fontWeight: 'bold', color: '#2e7d32' }}
              >
                📞 Contato e Assistência
              </button>
            </div>
          </div>
        )}

        {/* TELA: PRECISE DE AJUDA */}
        {telaAtiva === 'ajuda' && (
          <div>
            <h2 style={{ color: '#1b5e20', marginTop: 0 }}>🚨 Central de Ajuda e Emergência</h2>
            <p style={{ color: '#555', fontSize: '14px' }}>Canais rápidos para ocorrências no campo em Porto Murtinho - MS:</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '15px 0' }}>
              <div style={{ backgroundColor: '#ffebee', border: '1px solid #ffcdd2', borderRadius: '8px', padding: '12px' }}>
                <h3 style={{ margin: '0 0 5px 0', color: '#c62828', fontSize: '15px' }}>Corpo de Bombeiros</h3>
                <p style={{ margin: '3px 0', fontSize: '14px', color: '#333' }}>Acidentes de trabalho, animais peçonhentos, trânsito, incêndios em prédios e florestas.</p>
                <p style={{ margin: '6px 0 0 0', fontWeight: 'bold', color: '#c62828' }}>📞 193 | 📱 ZAP: (67) 9.9663-4628</p>
              </div>

              <div style={{ backgroundColor: '#e3f2fd', border: '1px solid #bbdefb', borderRadius: '8px', padding: '12px' }}>
                <h3 style={{ margin: '0 0 5px 0', color: '#1565c0', fontSize: '15px' }}>Segurança Pública (Polícia Militar)</h3>
                <p style={{ margin: '3px 0', fontSize: '14px', color: '#333' }}>Ocorrências de ameaça ou risco de vida.</p>
                <p style={{ margin: '6px 0 0 0', fontWeight: 'bold', color: '#1565c0' }}>📞 190 | 📱 ZAP: (67) 9.9222-9573</p>
              </div>

              <div style={{ backgroundColor: '#fff8e1', border: '1px solid #ffecb3', borderRadius: '8px', padding: '12px' }}>
                <h3 style={{ margin: '0 0 5px 0', color: '#f57f17', fontSize: '15px' }}>Socorro para Veículos nas Estradas Rurais</h3>
                <p style={{ margin: '3px 0', fontSize: '14px', color: '#333' }}>Assistência para veículos acidentados ou quebrados nas estradas de Porto Murtinho.</p>
                <p style={{ margin: '6px 0 0 0', fontWeight: 'bold', color: '#f57f17' }}>📱 ZAP: (67) 9.9634-0952</p>
                <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#666', fontStyle: 'italic' }}>*A demanda será repassada para mecânicos parceiros para viabilizar o atendimento.</p>
              </div>
            </div>

            <button 
              onClick={() => setTelaAtiva('home')}
              style={{ marginTop: '15px', padding: '12px 20px', cursor: 'pointer', backgroundColor: '#2e7d32', color: '#fff', border: 'none', borderRadius: '6px', width: '100%', fontWeight: 'bold' }}
            >
              ← Voltar ao Menu Principal
            </button>
          </div>
        )}

        {/* TELA: CONHEÇA SEUS DIREITOS */}
        {telaAtiva === 'direitos' && (
          <div>
            <h2 style={{ color: '#1b5e20', marginTop: 0 }}>📖 Conheça Seus Direitos</h2>
            <p style={{ color: '#555', fontSize: '14px' }}>Orientações jurídicas, previdenciárias e sociais para quem vive e trabalha no campo:</p>
            
            <ul style={{ paddingLeft: '20px', color: '#333', lineHeight: '1.8', fontSize: '14px' }}>
              <li><strong>Aposentadoria do Trabalhador:</strong> Regras específicas para homens e mulheres rurais.</li>
              <li><strong>Direitos e Deveres Trabalhistas:</strong> Legislação aplicável aos trabalhadores do campo.</li>
              <li><strong>Saúde do Homem e da Mulher:</strong> Informações de prevenção e assistência médica rural.</li>
              <li><strong>Benefícios Previdenciários Temporários:</strong> Auxílio-doença, salário-maternidade e afastamentos.</li>
              <li><strong>Curso de Formação Profissional Rural do SENAR:</strong> Capacitações e oportunidades de qualificação.</li>
              <li><strong>Direitos Sindicais:</strong> Representação e apoio da categoria dos assalariados rurais.</li>
            </ul>

            {/* Caixa de Contato INAFC integrada */}
            <div style={{ backgroundColor: '#f1f8e9', border: '1px solid #c8e6c9', borderRadius: '8px', padding: '12px', margin: '20px 0', textAlign: 'center' }}>
              <p style={{ margin: '0 0 6px 0', fontSize: '13px', color: '#1b5e20', fontWeight: 'bold' }}>Ficou com alguma dúvida sobre seus direitos trabalhistas ou previdenciários?</p>
              <p style={{ margin: '0', fontSize: '14px', color: '#2e7d32', fontWeight: 'bold' }}>📱 WhatsApp INAFC: (67) 9.9611-5927</p>
            </div>

            <button 
              onClick={() => setTelaAtiva('home')}
              style={{ padding: '12px 20px', cursor: 'pointer', backgroundColor: '#2e7d32', color: '#fff', border: 'none', borderRadius: '6px', width: '100%', fontWeight: 'bold' }}
            >
              ← Voltar ao Menu Principal
            </button>
          </div>
        )}

        {/* TELA: CLIMA E PREVISÃO (AGROTEMPO) */}
        {telaAtiva === 'tempo' && (
          <div>
            <h2 style={{ color: '#1b5e20', marginTop: 0 }}>🌤️ AgroTempo - Monitoramento Rural</h2>
            <p style={{ color: '#555', fontSize: '14px' }}>Previsão do tempo e recomendações para o cultivo em Porto Murtinho e região.</p>

            <div style={{ backgroundColor: '#e8f5e9', border: '1px solid #c8e6c9', borderRadius: '8px', padding: '15px', margin: '15px 0' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#1b5e20', fontSize: '16px' }}>Condições Atuais</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', textAlign: 'center' }}>
                <div style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '6px', border: '1px solid #e0e0e0' }}>
                  <span style={{ fontSize: '12px', color: '#666' }}>Temperatura</span>
                  <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', fontSize: '18px', color: '#2e7d32' }}>29°C</p>
                </div>
                <div style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '6px', border: '1px solid #e0e0e0' }}>
                  <span style={{ fontSize: '12px', color: '#666' }}>Umidade do Ar</span>
                  <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', fontSize: '18px', color: '#2e7d32' }}>65%</p>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#e1f5fe', border: '1px solid #b3e5fc', borderRadius: '8px', padding: '12px', marginBottom: '15px', textAlign: 'center' }}>
              <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#01579b', fontWeight: 'bold' }}>🌐 Acompanhe a previsão detalhada internacional/regional:</p>
              <a 
                href="https://www.foreca.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: 'inline-block', backgroundColor: '#0288d1', color: '#fff', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}
              >
                Acessar Foreca.com ↗
              </a>
            </div>

            <button 
              onClick={() => setTelaAtiva('home')}
              style={{ marginTop: '20px', padding: '12px 20px', cursor: 'pointer', backgroundColor: '#2e7d32', color: '#fff', border: 'none', borderRadius: '6px', width: '100%', fontWeight: 'bold' }}
            >
              ← Voltar ao Menu Principal
            </button>
          </div>
        )}

        {/* TELA: COTAÇÕES E INSUMOS */}
        {telaAtiva === 'cotacoes' && (
          <div>
            <h2 style={{ color: '#1b5e20', marginTop: 0 }}>📈 Cotações e Insumos</h2>
            <p style={{ color: '#555', fontSize: '13px' }}>
              Tabela de preços de referência da Agricultura Familiar (Porto Murtinho – MS). Pesquisa de 11/11/2026.
            </p>
            
            <div style={{ overflowX: 'auto', margin: '15px 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: '#2e7d32', color: '#fff' }}>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Produto</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Unidade</th>
                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Preço Sugerido</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Ovinos vivos (cordeiros)</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>kg peso vivo</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', color: '#2e7d32' }}>R$ 16,00</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fbe7' }}>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Leite bovino cru</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Litro</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', color: '#2e7d32' }}>R$ 3,00</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Mandioca de mesa, com casca</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>kg</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', color: '#2e7d32' }}>R$ 2,00</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fbe7' }}>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Mel de abelha, a granel</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>kg</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', color: '#2e7d32' }}>R$ 22,00</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Galinha caipira viva</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Unidade</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', color: '#2e7d32' }}>R$ 30,00</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fbe7' }}>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Queijo minas frescal</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>kg</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', color: '#2e7d32' }}>R$ 35,00</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Doce de leite artesanal</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Pote 400g</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', color: '#2e7d32' }}>R$ 25,00</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fbe7' }}>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Suíno vivo, para abate</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>kg peso vivo</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', color: '#2e7d32' }}>R$ 6,50</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style={{ fontSize: '11px', color: '#666', fontStyle: 'italic', marginBottom: '15px' }}>
              *Preços sugeridos por estimativa comercial para negociação direta. Não incluem frete, tributos ou margens de intermediários.
            </p>

            <div style={{ backgroundColor: '#e8f5e9', border: '1px solid #c8e6c9', borderRadius: '8px', padding: '12px', textAlign: 'center', marginBottom: '15px' }}>
              <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#1b5e20', fontWeight: 'bold' }}>Deseja consultar indicadores e fontes oficiais de mercado (CEPEA/CONAB)?</p>
              <a 
                href="https://www.cepea.esalq.usp.br" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: 'inline-block', backgroundColor: '#2e7d32', color: '#fff', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', fontSize: '13px' }}
              >
                Consultar Fontes de Cotação ↗
              </a>
            </div>

            <button 
              onClick={() => setTelaAtiva('home')}
              style={{ padding: '12px 20px', cursor: 'pointer', backgroundColor: '#2e7d32', color: '#fff', border: 'none', borderRadius: '6px', width: '100%', fontWeight: 'bold' }}
            >
              ← Voltar ao Menu Principal
            </button>
          </div>
        )}

        {/* TELA: CONTATO E ASSISTÊNCIA */}
        {telaAtiva === 'contato' && (
          <div>
            <h2 style={{ color: '#1b5e20', marginTop: 0 }}>📞 Contato e Assistência</h2>
            <p style={{ color: '#555', fontSize: '14px' }}>Fale diretamente com os canais de atendimento e extensão rural do INAFC.</p>
            
            <div style={{ backgroundColor: '#f1f8e9', padding: '15px', borderRadius: '8px', margin: '15px 0', border: '1px solid #dcedc8' }}>
              <p style={{ margin: '8px 0' }}>📍 <strong>Endereço:</strong> Porto Murtinho, MS</p>
              <p style={{ margin: '8px 0' }}>📱 <strong>WhatsApp Oficial INAFC:</strong> (67) 9.9611-5927</p>
              <p style={{ margin: '8px 0' }}>✉️ <strong>E-mail:</strong> contato@inafccampo.com.br</p>
            </div>

            <button 
              onClick={() => setTelaAtiva('home')}
              style={{ marginTop: '20px', padding: '12px 20px', cursor: 'pointer', backgroundColor: '#2e7d32', color: '#fff', border: 'none', borderRadius: '6px', width: '100%', fontWeight: 'bold' }}
            >
              ← Voltar ao Menu Principal
            </button>
          </div>
        )}

      </div>
    </div>
  );
}