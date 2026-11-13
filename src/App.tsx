import { useState } from 'react';

export default function App() {
  const [telaAtiva, setTelaAtiva] = useState('home');

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Cabeçalho */}
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#2c3e50', fontSize: '2.5rem', marginBottom: '10px' }}>INAFC Campo</h1>
        <p style={{ color: '#7f8c8d', fontSize: '1.1rem' }}>Suporte integral ao trabalhador rural em Porto Murtinho, MS</p>
      </header>

      {/* Conteúdo dinâmico com base na tela ativa */}
      {telaAtiva === 'home' && (
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          
          <div 
            onClick={() => setTelaAtiva('direitos')}
            style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer', textAlign: 'center' }}
          >
            <h3 style={{ color: '#27ae60', marginBottom: '10px' }}>Direitos & Leis</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Consulte informações essenciais sobre direitos trabalhistas e amparo ao trabalhador rural.</p>
          </div>

          <div 
            onClick={() => setTelaAtiva('cotacoes')}
            style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer', textAlign: 'center' }}
          >
            <h3 style={{ color: '#27ae60', marginBottom: '10px' }}>Cotações de Mercado</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Acompanhe os preços atualizados de referência agrícola (CEPEA/CONAB).</p>
          </div>

          <div 
            onClick={() => setTelaAtiva('clima')}
            style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer', textAlign: 'center' }}
          >
            <h3 style={{ color: '#27ae60', marginBottom: '10px' }}>Clima & Previsão</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Cons Condiciones meteorológicas locais integradas para o planejamento no campo.</p>
          </div>

          <div 
            onClick={() => setTelaAtiva('ajuda')}
            style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer', textAlign: 'center' }}
          >
            <h3 style={{ color: '#27ae60', marginBottom: '10px' }}>Contatos de Apoio</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Canais de emergência, assistência técnica e suporte institucional do INAFC.</p>
          </div>

        </div>
      )}

      {telaAtiva === 'direitos' && (
        <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>Direitos Trabalhistas no Campo</h2>
          <p style={{ marginBottom: '10px' }}>O trabalhador rural possui garantias fundamentais asseguradas pela legislação brasileira, incluindo:</p>
          <ul style={{ lineHeight: '1.6', color: '#444', marginLeft: '20px', marginBottom: '20px' }}>
            <li>Registro em carteira (CTPS) desde o primeiro dia de labor.</li>
            <li>Normas de segurança e fornecimento adequado de EPIs (Equipamentos de Proteção Individual).</li>
            <li>Adicional de insalubridade ou periculosidade quando aplicável.</li>
            <li>Respeito às jornadas legais de trabalho e repouso remunerado.</li>
          </ul>
          <button 
            onClick={() => setTelaAtiva('home')}
            style={{ marginTop: '10px', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#27ae60', color: '#fff', border: 'none', borderRadius: '5px' }}
          >
            Voltar ao Menu Principal
          </button>
        </div>
      )}

      {telaAtiva === 'cotacoes' && (
        <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '25px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>Cotações Agrícolas de Referência</h2>
          <p style={{ marginBottom: '15px', color: '#555' }}>Valores médios atualizados com base em boletins públicos oficiais:</p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
            <thead>
              <tr style={{ backgroundColor: '#27ae60', color: '#fff', textAlign: 'left' }}>
                <th style={{ padding: '10px' }}>Produto</th>
                <th style={{ padding: '10px' }}>Região / Referência</th>
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
                <td style={{ padding: '10px' }}>Mercado Regional / CONAB</td>
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
          <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>Condições Climáticas - Porto Murtinho, MS</h2>
          <p style={{ marginBottom: '15px', color: '#555' }}>Monitoramento de temperatura, umidade e alertas de precipitação para o campo:</p>
          <div style={{ backgroundColor: '#e8f8f5', padding: '15px', borderRadius: '8px', marginBottom: '20px', borderLeft: '4px solid #27ae60' }}>
            <p><strong>Temperatura Atual:</strong> 34°C - Ensolarado</p>
            <p><strong>Umidade Relativa do Ar:</strong> 42%</p>
            <p><strong>Previsão de Chuva:</strong> Baixa probabilidade para os próximos 3 dias.</p>
          </div>
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
            <p style={{ margin: '8px 0' }}><strong>Endereço:</strong> Porto Murtinho, MS</p>
            <p style={{ margin: '8px 0' }}><strong>WhatsApp Oficial INAFC:</strong> (67) 9.9611-5927</p>
            <p style={{ margin: '8px 0' }}><strong>E-mail:</strong> contato@inafccampo.com.br</p>
          </div>
          <button 
            onClick={() => setTelaAtiva('home')}
            style={{ marginTop: '10px', padding: '12px 20px', cursor: 'pointer', backgroundColor: '#27ae60', color: '#fff', border: 'none', borderRadius: '5px' }}
          >
            Voltar ao Menu Principal
          </button>
        </div>
      )}
    </div>
  );
}