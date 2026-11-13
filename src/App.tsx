import { useState } from 'react';

export default function App() {
  const [telaAtiva, setTelaAtiva] = useState('home');

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Cabeçalho */}
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#2c3e50', fontSize: '2.5rem', marginBottom: '10px' }}>INAFC Campo</h1>
        <p style={{ color: '#7f8c8d', fontSize: '1.1rem' }}>Suporte integral ao trabalhador e produtor rural em Porto Murtinho, MS</p>
      </header>

      {/* Conteúdo dinâmico com base na tela ativa */}
      {telaAtiva === 'home' && (
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          
          <div 
            onClick={() => setTelaAtiva('direitos')}
            style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer', textAlign: 'center' }}
          >
            <h3 style={{ color: '#27ae60', marginBottom: '10px' }}>Direitos & Leis Trabalhistas</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Informações essenciais sobre CTPS, normas de segurança e amparo ao trabalhador rural.</p>
          </div>

          <div 
            onClick={() => setTelaAtiva('cotacoes')}
            style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer', textAlign: 'center' }}
          >
            <h3 style={{ color: '#27ae60', marginBottom: '10px' }}>Cotações de Mercado</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Preços atualizados de referência agrícola e pecuária (Boi Gordo, Soja, Milho).</p>
          </div>

          <div 
            onClick={() => setTelaAtiva('clima')}
            style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer', textAlign: 'center' }}
          >
            <h3 style={{ color: '#27ae60', marginBottom: '10px' }}>Clima & Planejamento</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Condições meteorológicas locais, umidade e alertas para o manejo no campo.</p>
          </div>

          <div 
            onClick={() => setTelaAtiva('agricultura')}
            style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer', textAlign: 'center' }}
          >
            <h3 style={{ color: '#27ae60', marginBottom: '10px' }}>Agricultura Familiar</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Programas de fomento, orientações técnicas e calendários de plantio regional.</p>
          </div>

          <div 
            onClick={() => setTelaAtiva('servicos')}
            style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer', textAlign: 'center' }}
          >
            <h3 style={{ color: '#27ae60', marginBottom: '10px' }}>Extensão & Manutenção</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Suporte técnico de campo, orientações de equipamentos e automação agrícola.</p>
          </div>

          <div 
            onClick={() => setTelaAtiva('ajuda')}
            style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer', textAlign: 'center' }}
          >
            <h3 style={{ color: '#27ae60', marginBottom: '10px' }}>Contatos & Apoio</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Canais de emergência, assistência técnica e suporte institucional do INAFC.</p>
          </div>

        </div>
      )}

      {telaAtiva === 'direitos' && (
        <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>Direitos e Leis no Campo</h2>
          <p style={{ marginBottom: '10px' }}>O trabalhador rural possui garantias fundamentais asseguradas pela legislação brasileira:</p>
          <ul style={{ lineHeight: '1.6', color: '#444', marginLeft: '20px', marginBottom: '20px' }}>
            <li>Registro em carteira (CTPS) desde o primeiro dia de labor rural.</li>
            <li>Obrigação de fornecimento gratuito de EPIs adequados (chapéu, luvas, botas e proteção solar).</li>
            <li>Adicional de insalubridade ou periculosidade em atividades específicas.</li>
            <li>Garantia de pausas para descanso e hidratação sob altas temperaturas (comuns em Porto Murtinho).</li>
            <li>Respeito às normas de segurança na operação de maquinário agrícola.</li>
          </ul>

          {/* Contato acrescentado do INAFC nesta secção */}
          <div style={{ backgroundColor: '#e8f8f5', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #27ae60', marginBottom: '20px' }}>
            <p style={{ margin: '0 0 5px 0', color: '#2c3e50', fontWeight: 'bold' }}>Precisa de orientações ou denúncias trabalhistas no campo?</p>
            <p style={{ margin: '0', color: '#555' }}>Entre em contato com o suporte do INAFC Campo pelo WhatsApp: <strong>(67) 9.9611-5927</strong></p>
          </div>

          <button 
            onClick={() => setTelaAtiva('home')}
            style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#27ae60', color: '#fff', border: 'none', borderRadius: '5px' }}
          >
            Voltar ao Menu Principal
          </button>
        </div>
      )}

      {telaAtiva === 'cotacoes' && (
        <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>Cotações Agrícolas e Pecuárias</h2>
          <p style={{ marginBottom: '15px', color: '#555' }}>Valores médios regionalizados com base em boletins públicos oficiais:</p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
            <thead>
              <tr style={{ backgroundColor: '#27ae60', color: '#fff', textAlign: 'left' }}>
                <th style={{ padding: '10px' }}>Produto</th>
                <th style={{ padding: '10px' }}>Referência Regional</th>
                <th style={{ padding: '10px' }}>Tendência</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px' }}>Boi Gordo (@)</td>
                <td style={{ padding: '10px' }}>Mato Grosso do Sul (Famasul / CEPEA)</td>
                <td style={{ padding: '10px', color: 'green' }}>Estável / Alta</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px' }}>Soja (sc 60kg)</td>
                <td style={{ padding: '10px' }}>Mercado Regional MS / CONAB</td>
                <td style={{ padding: '10px', color: '#e67e22' }}>Oscilação moderada</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>Milho (sc 60kg)</td>
                <td style={{ padding: '10px' }}>Indicador Regional</td>
                <td style={{ padding: '10px', color: 'green' }}>Estável</td>
              </tr>
            </tbody>
          </table>
          <button 
            onClick={() => setTelaAtiva('home')}
            style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#27ae60', color: '#fff', border: 'none', borderRadius: '5px' }}
          >
            Voltar ao Menu Principal
          </button>
        </div>
      )}

      {telaAtiva === 'clima' && (
        <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>Clima & Planejamento - Porto Murtinho, MS</h2>
          <p style={{ marginBottom: '15px', color: '#555' }}>Monitoramento de condições meteorológicas para tomada de decisão no campo:</p>
          <div style={{ backgroundColor: '#e8f8f5', padding: '15px', borderRadius: '8px', marginBottom: '20px', borderLeft: '4px solid #27ae60' }}>
            <p><strong>Temperatura Atual:</strong> 34°C - Ensolarado</p>
            <p><strong>Umidade Relativa do Ar:</strong> 42% (Atenção para hidratação)</p>
            <p><strong>Previsão:</strong> Baixa probabilidade de chuva para os próximos dias. Recomendado monitoramento de irrigação.</p>
          </div>
          <button 
            onClick={() => setTelaAtiva('home')}
            style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#27ae60', color: '#fff', border: 'none', borderRadius: '5px' }}
          >
            Voltar ao Menu Principal
          </button>
        </div>
      )}

      {telaAtiva === 'agricultura' && (
        <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>Agricultura Familiar & Fomento</h2>
          <p style={{ marginBottom: '10px' }}>Orientações para o fortalecimento da produção familiar na região:</p>
          <ul style={{ lineHeight: '1.6', color: '#444', marginLeft: '20px', marginBottom: '20px' }}>
            <li>Acesso a linhas de crédito facilitado (PRONAF).</li>
            <li>Orientações sobre o PAA (Programa de Aquisição de Alimentos) e PNAE (Merenda Escolar).</li>
            <li>Calendário de plantio e boas práticas para culturas adaptadas ao solo pantaneiro e fronteiriço.</li>
            <li>Assistência técnica extensionista em parceria com órgãos locais.</li>
          </ul>
          <button 
            onClick={() => setTelaAtiva('home')}
            style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#27ae60', color: '#fff', border: 'none', borderRadius: '5px' }}
          >
            Voltar ao Menu Principal
          </button>
        </div>
      )}

      {telaAtiva === 'servicos' && (
        <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>Extensão & Manutenção de Equipamentos</h2>
          <p style={{ marginBottom: '10px' }}>Suporte técnico especializado para ferramentas e automação rural:</p>
          <ul style={{ lineHeight: '1.6', color: '#444', marginLeft: '20px', marginBottom: '20px' }}>
            <li>Manutenção preventiva em motores, bombas d'água e geradores solares.</li>
            <li>Instalação e suporte de sistemas de monitoramento e sensores de campo.</li>
            <li>Orientações sobre conectividade rural e redes de comunicação de longo alcance.</li>
          </ul>
          <button 
            onClick={() => setTelaAtiva('home')}
            style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#27ae60', color: '#fff', border: 'none', borderRadius: '5px' }}
          >
            Voltar ao Menu Principal
          </button>
        </div>
      )}

      {telaAtiva === 'ajuda' && (
        <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>Contatos e Suporte Institucional</h2>
          <div style={{ backgroundColor: '#f1f8e9', padding: '15px', borderRadius: '8px', border: '1px solid #c8e6c9', marginBottom: '20px' }}>
            <p style={{ margin: '8px 0' }}><strong>Localização:</strong> Porto Murtinho, MS</p>
            <p style={{ margin: '8px 0' }}><strong>WhatsApp Oficial INAFC:</strong> (67) 9.9611-5927</p>
            <p style={{ margin: '8px 0' }}><strong>E-mail Institucional:</strong> contato@inafccampo.com.br</p>
          </div>
          <button 
            onClick={() => setTelaAtiva('home')}
            style={{ padding: '12px 20px', cursor: 'pointer', backgroundColor: '#27ae60', color: '#fff', border: 'none', borderRadius: '5px' }}
          >
            Voltar ao Menu Principal
          </button>
        </div>
      )}
    </div>
  );
}