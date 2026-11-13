import { useEffect, useState } from 'react';

interface ProdutoCotacao {
  id: string;
  nome: string;
  unidade: string;
  referencia: string;
  precoSugerido: number;
  fonte: string;
  dataRef: string;
}

interface CadastroInafc {
  nomeCompleto: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
  email: string;
  endereco: string;
  comunidadeOuFazenda: string;
  pontoReferencia: string;
  municipio: string;
  perfilRural: string;
  atividades: string;
  demandaPrincipal: string;
  observacoes: string;
}

const PRODUTOS_AGRICULTURA_FAMILIAR: ProdutoCotacao[] = [
  {
    id: 'ovinos',
    nome: 'Ovinos vivos (cordeiros)',
    unidade: 'kg de peso vivo',
    referencia: 'R$ 15,00',
    precoSugerido: 16.0,
    fonte: 'CEPEA — Mato Grosso',
    dataRef: 'Agosto/2026',
  },
  {
    id: 'leite',
    nome: 'Leite bovino cru',
    unidade: 'Litro',
    referencia: 'R$ 2,66–2,89',
    precoSugerido: 3.0,
    fonte: 'CEPEA — Média Brasil',
    dataRef: 'Agosto/2026',
  },
  {
    id: 'mandioca',
    nome: 'Mandioca de mesa, com casca',
    unidade: 'kg',
    referencia: 'R$ 2,00',
    precoSugerido: 2.0,
    fonte: 'PROHORT/CONAB — MS',
    dataRef: '13/10/2026',
  },
  {
    id: 'mel',
    nome: 'Mel de abelha, a granel',
    unidade: 'kg',
    referencia: 'R$ 20,42',
    precoSugerido: 22.0,
    fonte: 'FIPMEL — MS',
    dataRef: '02/11/2026',
  },
  {
    id: 'galinha',
    nome: 'Galinha caipira viva',
    unidade: 'Unidade',
    referencia: 'R$ 28,00',
    precoSugerido: 30.0,
    fonte: 'SEFAZ/MS — pauta fiscal',
    dataRef: '2026',
  },
  {
    id: 'queijo',
    nome: 'Queijo minas frescal',
    unidade: 'kg',
    referencia: 'R$ 22,60–49,99',
    precoSugerido: 35.0,
    fonte: 'Pesquisa de varejo nacional',
    dataRef: 'Junho–outubro/2026',
  },
  {
    id: 'doce_leite',
    nome: 'Doce de leite artesanal',
    unidade: 'Pote de 400 g',
    referencia: 'R$ 23,32–29,90',
    precoSugerido: 25.0,
    fonte: 'Imbaúba Laticínios — venda online',
    dataRef: 'Consulta atual',
  },
  {
    id: 'suinos',
    nome: 'Suíno vivo, para abate',
    unidade: 'kg de peso vivo',
    referencia: 'R$ 5,80',
    precoSugerido: 6.5,
    fonte: 'ACRISMAT — Mato Grosso',
    dataRef: '09–15/11/2026',
  },
];

const CADASTRO_INICIAL: CadastroInafc = {
  nomeCompleto: '',
  cpf: '',
  dataNascimento: '',
  telefone: '',
  email: '',
  endereco: '',
  comunidadeOuFazenda: '',
  pontoReferencia: '',
  municipio: 'Porto Murtinho, MS',
  perfilRural: 'Agricultor(a) Familiar',
  atividades: '',
  demandaPrincipal: 'Orientação Trabalhista / Previdenciária',
  observacoes: '',
};

const CHAVE_STORAGE_CADASTRO = 'inafc_campo_cadastro_usuario_v1';

function formatarMoeda(valor: number): string {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function App() {
  const [telaAtiva, setTelaAtiva] = useState<'home' | 'ajuda' | 'direitos' | 'clima' | 'cotacoes' | 'cadastro' | 'contato'>('home');
  const [quantidades, setQuantidades] = useState<Record<string, string>>({});
  const [cadastro, setCadastro] = useState<CadastroInafc>(CADASTRO_INICIAL);
  const [mensagemCadastro, setMensagemCadastro] = useState<string>('');
  const [erroCadastro, setErroCadastro] = useState<string>('');

  useEffect(() => {
    try {
      const salvo = localStorage.getItem(CHAVE_STORAGE_CADASTRO);
      if (salvo) {
        const parsed = JSON.parse(salvo) as Partial<CadastroInafc>;
        setCadastro((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // Ignora erro de leitura de storage
    }
  }, []);

  const totalSimulado = PRODUTOS_AGRICULTURA_FAMILIAR.reduce((acc, item) => {
    const qtd = parseFloat((quantidades[item.id] || '0').replace(',', '.'));
    if (isNaN(qtd) || qtd <= 0) return acc;
    return acc + qtd * item.precoSugerido;
  }, 0);

  const handleQuantidadeChange = (id: string, valor: string) => {
    setQuantidades((prev) => ({
      ...prev,
      [id]: valor,
    }));
  };

  const handleCadastroChange = (campo: keyof CadastroInafc, valor: string) => {
    setErroCadastro('');
    setMensagemCadastro('');
    setCadastro((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const montarMensagemWhatsApp = (dados: CadastroInafc) => {
    const texto = [
      '*CADASTRO INAFC CAMPO*',
      '',
      '*DADOS PESSOAIS*',
      `Nome: ${dados.nomeCompleto}`,
      `CPF: ${dados.cpf || 'Não informado'}`,
      `Data de nascimento: ${dados.dataNascimento || 'Não informada'}`,
      `Telefone/WhatsApp: ${dados.telefone}`,
      `E-mail: ${dados.email || 'Não informado'}`,
      '',
      '*ENDEREÇO E LOCALIZAÇÃO*',
      `Endereço: ${dados.endereco}`,
      `Comunidade / Assentamento / Fazenda: ${dados.comunidadeOuFazenda || 'Não informado'}`,
      `Ponto de referência: ${dados.pontoReferencia || 'Não informado'}`,
      `Município: ${dados.municipio}`,
      '',
      '*PERFIL E NECESSIDADES*',
      `Perfil rural: ${dados.perfilRural}`,
      `Principais atividades / culturas / criações: ${dados.atividades || 'Não informado'}`,
      `Demanda principal: ${dados.demandaPrincipal}`,
      `Observações: ${dados.observacoes || 'Nenhuma'}`,
    ].join('\n');

    return encodeURIComponent(texto);
  };

  const handleSalvarCadastro = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cadastro.nomeCompleto.trim() || !cadastro.telefone.trim() || !cadastro.endereco.trim()) {
      setErroCadastro('Preencha ao menos Nome Completo, Telefone/WhatsApp e Endereço.');
      return;
    }

    try {
      localStorage.setItem(CHAVE_STORAGE_CADASTRO, JSON.stringify(cadastro));
    } catch {
      // Continua mesmo se o navegador bloquear storage
    }

    setErroCadastro('');
    setMensagemCadastro('Cadastro salvo neste aparelho! Você também pode enviá-lo agora pelo WhatsApp do INAFC.');
  };

  const handleEnviarWhatsAppCadastro = () => {
    if (!cadastro.nomeCompleto.trim() || !cadastro.telefone.trim() || !cadastro.endereco.trim()) {
      setErroCadastro('Preencha ao menos Nome Completo, Telefone/WhatsApp e Endereço antes de enviar.');
      return;
    }

    try {
      localStorage.setItem(CHAVE_STORAGE_CADASTRO, JSON.stringify(cadastro));
    } catch {
      // Continua mesmo se o navegador bloquear storage
    }

    const url = `https://wa.me/5567996115927?text=${montarMensagemWhatsApp(cadastro)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const renderVoltar = () => (
    <button
      onClick={() => setTelaAtiva('home')}
      style={{
        marginTop: '20px',
        padding: '12px 20px',
        cursor: 'pointer',
        backgroundColor: '#27ae60',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        fontSize: '1rem',
        fontWeight: 'bold',
      }}
    >
      Voltar ao Menu Principal
    </button>
  );

  return (
    <div
      style={{
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        {/* Cabeçalho */}
        <header style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#2c3e50', fontSize: '2.4rem', marginBottom: '8px' }}>Campo INAFC</h1>
          <p style={{ color: '#7f8c8d', fontSize: '1.1rem', margin: 0 }}>
            Suporte integral ao trabalhador rural em Porto Murtinho, MS
          </p>
        </header>

        {/* Menu Principal */}
        {telaAtiva === 'home' && (
          <div
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            <div
              onClick={() => setTelaAtiva('ajuda')}
              style={{
                backgroundColor: '#fff',
                padding: '22px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                borderTop: '4px solid #c0392b',
              }}
            >
              <h3 style={{ color: '#c0392b', marginTop: 0, marginBottom: '10px' }}>PRECISO DE AJUDA</h3>
              <p style={{ color: '#555', fontSize: '0.95rem', margin: 0 }}>
                Corpo de Bombeiros, Polícia Militar e socorro para veículos nas estradas rurais de Porto Murtinho.
              </p>
            </div>

            <div
              onClick={() => setTelaAtiva('direitos')}
              style={{
                backgroundColor: '#fff',
                padding: '22px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                borderTop: '4px solid #27ae60',
              }}
            >
              <h3 style={{ color: '#27ae60', marginTop: 0, marginBottom: '10px' }}>CONHEÇA SEUS DIREITOS</h3>
              <p style={{ color: '#555', fontSize: '0.95rem', margin: 0 }}>
                Aposentadoria rural, direitos trabalhistas, saúde, benefícios temporários, SENAR e direitos sindicais.
              </p>
            </div>

            <div
              onClick={() => setTelaAtiva('clima')}
              style={{
                backgroundColor: '#fff',
                padding: '22px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                borderTop: '4px solid #2980b9',
              }}
            >
              <h3 style={{ color: '#2980b9', marginTop: 0, marginBottom: '10px' }}>CLIMA E PREVISÃO DO TEMPO</h3>
              <p style={{ color: '#555', fontSize: '0.95rem', margin: 0 }}>
                Acompanhamento meteorológico e acesso direto ao Foreca.com.
              </p>
            </div>

            <div
              onClick={() => setTelaAtiva('cotacoes')}
              style={{
                backgroundColor: '#fff',
                padding: '22px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                borderTop: '4px solid #d35400',
              }}
            >
              <h3 style={{ color: '#d35400', marginTop: 0, marginBottom: '10px' }}>COTAÇÕES E INSUMOS</h3>
              <p style={{ color: '#555', fontSize: '0.95rem', margin: 0 }}>
                Tabela de referência da Agricultura Familiar (11/11/2026), fontes e simulador de faturamento.
              </p>
            </div>

            <div
              onClick={() => setTelaAtiva('cadastro')}
              style={{
                backgroundColor: '#fff',
                padding: '22px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                borderTop: '4px solid #8e44ad',
              }}
            >
              <h3 style={{ color: '#8e44ad', marginTop: 0, marginBottom: '10px' }}>CADASTRO INAFC</h3>
              <p style={{ color: '#555', fontSize: '0.95rem', margin: 0 }}>
                Ficha de cadastro do trabalhador ou produtor rural: dados pessoais, endereço e demandas.
              </p>
            </div>

            <div
              onClick={() => setTelaAtiva('contato')}
              style={{
                backgroundColor: '#fff',
                padding: '22px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                borderTop: '4px solid #16a085',
              }}
            >
              <h3 style={{ color: '#16a085', marginTop: 0, marginBottom: '10px' }}>CONTATO E ASSISTÊNCIA</h3>
              <p style={{ color: '#555', fontSize: '0.95rem', margin: 0 }}>
                Atendimento institucional INAFC: 67 - 9.9611-5927.
              </p>
            </div>
          </div>
        )}

        {/* 1. PRECISO DE AJUDA */}
        {telaAtiva === 'ajuda' && (
          <div
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              backgroundColor: '#fff',
              padding: '25px',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
            }}
          >
            <h2 style={{ color: '#c0392b', marginTop: 0, marginBottom: '20px' }}>PRECISO DE AJUDA</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div
                style={{
                  backgroundColor: '#fdf2f2',
                  padding: '16px',
                  borderRadius: '8px',
                  borderLeft: '4px solid #c0392b',
                }}
              >
                <p style={{ margin: '0 0 6px 0', fontWeight: 'bold', color: '#2c3e50' }}>
                  ACIDENTES DE TRABALHO, ANIMAIS PEÇONHENTOS, TRÂNSITO, INCÊNDIOS EM PRÉDIOS E FLORESTAS:
                </p>
                <p style={{ margin: 0, color: '#333' }}>
                  <strong>CORPO DE BOMBEIROS =&gt; 193</strong> &nbsp; e &nbsp; <strong>ZAP: 67 – 9.9663-4628</strong>
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#f4f6f9',
                  padding: '16px',
                  borderRadius: '8px',
                  borderLeft: '4px solid #2c3e50',
                }}
              >
                <p style={{ margin: '0 0 6px 0', fontWeight: 'bold', color: '#2c3e50' }}>
                  SEGURANÇA PÚBLICA – AMEAÇA – RISCO DE VIDA:
                </p>
                <p style={{ margin: 0, color: '#333' }}>
                  <strong>POLÍCIA MILITAR: 190</strong> &nbsp; e &nbsp; <strong>ZAP: 67 – 9.9222-9573</strong>
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#fef9e7',
                  padding: '16px',
                  borderRadius: '8px',
                  borderLeft: '4px solid #d35400',
                }}
              >
                <p style={{ margin: '0 0 6px 0', fontWeight: 'bold', color: '#2c3e50' }}>
                  SOCORRO PARA VEÍCULO ACIDENTADO – QUEBRADO NAS ESTRADAS RURAIS DE PORTO MURTINHO:
                </p>
                <p style={{ margin: '0 0 8px 0', color: '#333' }}>
                  <strong>ZAP: 67 – 9.9634-0952</strong>
                </p>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#555', fontWeight: 'bold' }}>
                  OBS: NO CASO DE SOCORRO A VEÍCULOS, A DEMANDA SERÁ REPASSADA PARA MECÂNICOS PARCEIROS PARA VIABILIZAR O ATENDIMENTO.
                </p>
              </div>
            </div>

            {renderVoltar()}
          </div>
        )}

        {/* 2. CONHEÇA SEUS DIREITOS */}
        {telaAtiva === 'direitos' && (
          <div
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              backgroundColor: '#fff',
              padding: '25px',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
            }}
          >
            <h2 style={{ color: '#27ae60', marginTop: 0, marginBottom: '16px' }}>CONHEÇA SEUS DIREITOS</h2>
            <p style={{ color: '#555', marginBottom: '14px' }}>
              Principais áreas de orientação e garantia ao trabalhador rural:
            </p>

            <ul style={{ lineHeight: '1.8', color: '#2c3e50', paddingLeft: '20px', fontWeight: 'bold' }}>
              <li>APOSENTADORIA DO TRABALHADOR: HOMEM e MULHER RURAIS</li>
              <li>TRABALHISTAS - DIREITOS e DEVERES DOS TRABALHADORES</li>
              <li>SAÚDE DO HOMEM E DAS MULHERES</li>
              <li>BENEFÍCIOS PREVIDENCIÁRIOS TEMPORÁRIOS</li>
              <li>CURSO DE FORMAÇÃO PROFISSIONAL RURAL DO SENAR</li>
              <li>DIREITOS SINDICAIS – CATEGORIA DOS ASSALARIADOS RURAIS</li>
            </ul>

            <div
              style={{
                marginTop: '20px',
                backgroundColor: '#e8f8f5',
                padding: '15px',
                borderRadius: '8px',
                borderLeft: '4px solid #27ae60',
              }}
            >
              <p style={{ margin: '0 0 4px 0', fontWeight: 'bold', color: '#2c3e50' }}>
                CONTATO E ASSISTÊNCIA — INAFC
              </p>
              <p style={{ margin: 0, color: '#333' }}>
                WhatsApp: <strong>67 - 9.9611-5927</strong>
              </p>
            </div>

            <p style={{ marginTop: '16px', marginBottom: 0, fontSize: '0.82rem', color: '#7f8c8d' }}>
              Desenvolvido por Fernando Luiz Rodrigues — Tecnologia da Informação (UFMS) • Fercell Informática
            </p>

            {renderVoltar()}
          </div>
        )}

        {/* 3. CLIMA E PREVISÃO DO TEMPO */}
        {telaAtiva === 'clima' && (
          <div
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              backgroundColor: '#fff',
              padding: '25px',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
            }}
          >
            <h2 style={{ color: '#2980b9', marginTop: 0, marginBottom: '14px' }}>CLIMA E PREVISÃO DO TEMPO</h2>
            <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '18px' }}>
              Acompanhe as condições meteorológicas e previsões para planejamento das atividades no campo em Porto Murtinho e região.
            </p>

            <div
              style={{
                backgroundColor: '#eaf4fc',
                padding: '18px',
                borderRadius: '8px',
                borderLeft: '4px solid #2980b9',
                marginBottom: '16px',
              }}
            >
              <p style={{ margin: '0 0 10px 0', fontWeight: 'bold', color: '#2c3e50' }}>
                Consulta externa de previsão meteorológica:
              </p>
              <a
                href="https://www.foreca.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#2980b9',
                  color: '#fff',
                  padding: '10px 18px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                Acessar FORECA.COM
              </a>
            </div>

            {renderVoltar()}
          </div>
        )}

        {/* 4. COTAÇÕES E INSUMOS */}
        {telaAtiva === 'cotacoes' && (
          <div
            style={{
              maxWidth: '980px',
              margin: '0 auto',
              backgroundColor: '#fff',
              padding: '25px',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
            }}
          >
            <h2 style={{ color: '#d35400', marginTop: 0, marginBottom: '8px' }}>COTAÇÕES E INSUMOS</h2>
            <h3 style={{ color: '#2c3e50', marginTop: 0, marginBottom: '12px' }}>
              Tabela de preços de referência — Agricultura Familiar (Porto Murtinho – Mato Grosso do Sul)
            </h3>

            <div style={{ backgroundColor: '#f8f9fa', padding: '14px', borderRadius: '8px', marginBottom: '18px', color: '#444' }}>
              <p style={{ margin: '0 0 6px 0' }}>
                <strong>Data da pesquisa:</strong> 11 de novembro de 2026
              </p>
              <p style={{ margin: '0 0 6px 0' }}>
                <strong>Finalidade:</strong> estabelecer preços de venda dos produtos da agricultura familiar, considerando animais vivos, leite in natura e produtos comercializados diretamente pelos produtores.
              </p>
              <p style={{ margin: 0, fontSize: '0.92rem' }}>
                A pesquisa reúne indicadores agropecuários, referências de atacado e preços de produtos artesanais. Como nem todos os produtos possuem cotação pública específica para Porto Murtinho, os valores sugeridos abaixo são propostas iniciais para negociação, sujeitas à validação com produtores e compradores locais.
              </p>
            </div>

            {/* 1. Tabela de cotação */}
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>1. Tabela de cotação</h3>
            <div style={{ overflowX: 'auto', marginBottom: '12px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#27ae60', color: '#fff', textAlign: 'left' }}>
                    <th style={{ padding: '10px' }}>Produto</th>
                    <th style={{ padding: '10px' }}>Unidade de venda</th>
                    <th style={{ padding: '10px' }}>Referência pesquisada</th>
                    <th style={{ padding: '10px' }}>Preço sugerido*</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUTOS_AGRICULTURA_FAMILIAR.map((item) => (
                    <tr key={item.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                      <td style={{ padding: '10px', fontWeight: 'bold' }}>{item.nome}</td>
                      <td style={{ padding: '10px' }}>{item.unidade}</td>
                      <td style={{ padding: '10px' }}>{item.referencia}</td>
                      <td style={{ padding: '10px', color: '#27ae60', fontWeight: 'bold' }}>
                        {formatarMoeda(item.precoSugerido)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '22px' }}>
              *Preços sugeridos por estimativa comercial, e não cotações comprovadas em Porto Murtinho. Não incluem frete, tributos, perdas, embalagem adicional ou margens de intermediários, quando aplicáveis.
            </p>

            {/* 2. Fontes utilizadas na pesquisa */}
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>2. Fontes utilizadas na pesquisa</h3>
            <div style={{ overflowX: 'auto', marginBottom: '12px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#2c3e50', color: '#fff', textAlign: 'left' }}>
                    <th style={{ padding: '10px' }}>Produto</th>
                    <th style={{ padding: '10px' }}>Fonte e localidade</th>
                    <th style={{ padding: '10px' }}>Data da referência</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUTOS_AGRICULTURA_FAMILIAR.map((item) => (
                    <tr key={item.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                      <td style={{ padding: '10px' }}>{item.nome}</td>
                      <td style={{ padding: '10px' }}>{item.fonte}</td>
                      <td style={{ padding: '10px' }}>{item.dataRef}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '24px' }}>
              Observações metodológicas: para o queijo, a faixa combina referência fiscal de Goiás e levantamento de varejo; não é uma cotação direta ao produtor. Para o doce de leite, a referência de R$ 23,32 corresponde aproximadamente ao preço por pote em kit de seis unidades, enquanto R$ 29,90 é uma referência de produto artesanal no varejo. A referência de galinha caipira é fiscal, e não comprovação de uma negociação efetiva. O mel tem poucas observações próprias de MS, segundo o índice consultado.
            </p>

            {/* 3. Simulador de preços e faturamento */}
            <h3 style={{ color: '#2c3e50', marginBottom: '8px' }}>3. Simulador de preços e faturamento</h3>
            <p style={{ color: '#555', marginBottom: '14px' }}>
              Informe a quantidade de cada produto para estimar o valor bruto de venda, utilizando os preços sugeridos acima:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginBottom: '18px' }}>
              {PRODUTOS_AGRICULTURA_FAMILIAR.map((item) => {
                const qtd = parseFloat((quantidades[item.id] || '0').replace(',', '.'));
                const subtotal = isNaN(qtd) || qtd <= 0 ? 0 : qtd * item.precoSugerido;

                return (
                  <div
                    key={item.id}
                    style={{
                      border: '1px solid #dcdcdc',
                      borderRadius: '8px',
                      padding: '12px',
                      backgroundColor: '#fcfcfc',
                    }}
                  >
                    <div style={{ fontWeight: 'bold', color: '#2c3e50', marginBottom: '4px' }}>{item.nome}</div>
                    <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '8px' }}>
                      Unitário: {formatarMoeda(item.precoSugerido)} / {item.unidade}
                    </div>
                    <input
                      type="number"
                      min="0"
                      step="any"
                      placeholder={`Qtd (${item.unidade})`}
                      value={quantidades[item.id] || ''}
                      onChange={(e) => handleQuantidadeChange(item.id, e.target.value)}
                      style={{
                        width: '100%',
                        padding: '8px',
                        boxSizing: 'border-box',
                        borderRadius: '5px',
                        border: '1px solid #bbb',
                        marginBottom: '6px',
                      }}
                    />
                    <div style={{ fontSize: '0.9rem', color: '#27ae60', fontWeight: 'bold' }}>
                      Subtotal: {formatarMoeda(subtotal)}
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              style={{
                backgroundColor: '#e8f8f5',
                padding: '16px',
                borderRadius: '8px',
                borderLeft: '4px solid #27ae60',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px',
              }}
            >
              <strong style={{ fontSize: '1.1rem', color: '#2c3e50' }}>
                Estimativa de Valor Bruto de Venda:
              </strong>
              <strong style={{ fontSize: '1.3rem', color: '#27ae60' }}>
                {formatarMoeda(totalSimulado)}
              </strong>
            </div>

            {renderVoltar()}
          </div>
        )}

        {/* 5. CADASTRO INAFC */}
        {telaAtiva === 'cadastro' && (
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              backgroundColor: '#fff',
              padding: '25px',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
            }}
          >
            <h2 style={{ color: '#8e44ad', marginTop: 0, marginBottom: '8px' }}>CADASTRO INAFC</h2>
            <p style={{ color: '#555', marginTop: 0, marginBottom: '20px', lineHeight: '1.5' }}>
              Preencha seus dados pessoais, endereço rural e informações de atividade para registro e acompanhamento pelo INAFC em Porto Murtinho, MS.
            </p>

            <form onSubmit={handleSalvarCadastro}>
              {/* Bloco 1: Dados Pessoais */}
              <h3 style={{ color: '#2c3e50', fontSize: '1.1rem', marginBottom: '12px', borderBottom: '1px solid #eee', paddingBottom: '6px' }}>
                1. Dados Pessoais
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '4px', color: '#333' }}>
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    value={cadastro.nomeCompleto}
                    onChange={(e) => handleCadastroChange('nomeCompleto', e.target.value)}
                    placeholder="Ex.: João da Silva"
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #bbb', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '4px', color: '#333' }}>
                    CPF
                  </label>
                  <input
                    type="text"
                    value={cadastro.cpf}
                    onChange={(e) => handleCadastroChange('cpf', e.target.value)}
                    placeholder="000.000.000-00"
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #bbb', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '4px', color: '#333' }}>
                    Data de Nascimento
                  </label>
                  <input
                    type="date"
                    value={cadastro.dataNascimento}
                    onChange={(e) => handleCadastroChange('dataNascimento', e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #bbb', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '4px', color: '#333' }}>
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={cadastro.telefone}
                    onChange={(e) => handleCadastroChange('telefone', e.target.value)}
                    placeholder="(67) 9.0000-0000"
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #bbb', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '4px', color: '#333' }}>
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={cadastro.email}
                    onChange={(e) => handleCadastroChange('email', e.target.value)}
                    placeholder="seuemail@exemplo.com"
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #bbb', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              {/* Bloco 2: Endereço */}
              <h3 style={{ color: '#2c3e50', fontSize: '1.1rem', marginBottom: '12px', borderBottom: '1px solid #eee', paddingBottom: '6px' }}>
                2. Endereço e Localização
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '4px', color: '#333' }}>
                    Endereço / Estrada Rural *
                  </label>
                  <input
                    type="text"
                    value={cadastro.endereco}
                    onChange={(e) => handleCadastroChange('endereco', e.target.value)}
                    placeholder="Rua, número, bairro ou estrada"
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #bbb', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '4px', color: '#333' }}>
                    Comunidade / Assentamento / Fazenda
                  </label>
                  <input
                    type="text"
                    value={cadastro.comunidadeOuFazenda}
                    onChange={(e) => handleCadastroChange('comunidadeOuFazenda', e.target.value)}
                    placeholder="Nome da comunidade ou propriedade"
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #bbb', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '4px', color: '#333' }}>
                    Ponto de Referência
                  </label>
                  <input
                    type="text"
                    value={cadastro.pontoReferencia}
                    onChange={(e) => handleCadastroChange('pontoReferencia', e.target.value)}
                    placeholder="Ex.: próximo à ponte, escola, porteira..."
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #bbb', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '4px', color: '#333' }}>
                    Município / UF
                  </label>
                  <input
                    type="text"
                    value={cadastro.municipio}
                    onChange={(e) => handleCadastroChange('municipio', e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #bbb', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              {/* Bloco 3: Outros Quesitos (Perfil, Atividades e Demandas) */}
              <h3 style={{ color: '#2c3e50', fontSize: '1.1rem', marginBottom: '12px', borderBottom: '1px solid #eee', paddingBottom: '6px' }}>
                3. Perfil Rural, Atividades e Necessidades
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '4px', color: '#333' }}>
                    Categoria / Perfil
                  </label>
                  <select
                    value={cadastro.perfilRural}
                    onChange={(e) => handleCadastroChange('perfilRural', e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #bbb', boxSizing: 'border-box', backgroundColor: '#fff' }}
                  >
                    <option value="Agricultor(a) Familiar">Agricultor(a) Familiar</option>
                    <option value="Trabalhador(a) Assalariado(a) Rural">Trabalhador(a) Assalariado(a) Rural</option>
                    <option value="Pecuarista / Criador(a)">Pecuarista / Criador(a)</option>
                    <option value="Aposentado(a) / Pensionista Rural">Aposentado(a) / Pensionista Rural</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '4px', color: '#333' }}>
                    Demanda Principal
                  </label>
                  <select
                    value={cadastro.demandaPrincipal}
                    onChange={(e) => handleCadastroChange('demandaPrincipal', e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #bbb', boxSizing: 'border-box', backgroundColor: '#fff' }}
                  >
                    <option value="Orientação Trabalhista / Previdenciária">Orientação Trabalhista / Previdenciária</option>
                    <option value="Comercialização / Cotações Agricultura Familiar">Comercialização / Cotações Agricultura Familiar</option>
                    <option value="Formação Profissional / Cursos SENAR">Formação Profissional / Cursos SENAR</option>
                    <option value="Assistência Técnica / Extensão Rural">Assistência Técnica / Extensão Rural</option>
                    <option value="Apoio / Informações Gerais">Apoio / Informações Gerais</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '4px', color: '#333' }}>
                  Principais Atividades, Culturas ou Criações
                </label>
                <input
                  type="text"
                  value={cadastro.atividades}
                  onChange={(e) => handleCadastroChange('atividades', e.target.value)}
                  placeholder="Ex.: mandioca, leite, mel, ovinos, galinha caipira, queijo, doce de leite, suínos..."
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #bbb', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '4px', color: '#333' }}>
                  Observações Complementares
                </label>
                <textarea
                  rows={3}
                  value={cadastro.observacoes}
                  onChange={(e) => handleCadastroChange('observacoes', e.target.value)}
                  placeholder="Informe dúvidas, necessidades específicas ou dados adicionais..."
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #bbb', boxSizing: 'border-box', fontFamily: 'Arial, sans-serif' }}
                />
              </div>

              {erroCadastro && (
                <div style={{ backgroundColor: '#fdf2f2', color: '#c0392b', padding: '12px', borderRadius: '6px', borderLeft: '4px solid #c0392b', marginBottom: '14px', fontWeight: 'bold' }}>
                  {erroCadastro}
                </div>
              )}

              {mensagemCadastro && (
                <div style={{ backgroundColor: '#e8f8f5', color: '#1e8449', padding: '12px', borderRadius: '6px', borderLeft: '4px solid #27ae60', marginBottom: '14px', fontWeight: 'bold' }}>
                  {mensagemCadastro}
                </div>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <button
                  type="submit"
                  style={{
                    padding: '12px 20px',
                    cursor: 'pointer',
                    backgroundColor: '#8e44ad',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                  }}
                >
                  Salvar Cadastro no Aparelho
                </button>

                <button
                  type="button"
                  onClick={handleEnviarWhatsAppCadastro}
                  style={{
                    padding: '12px 20px',
                    cursor: 'pointer',
                    backgroundColor: '#16a085',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                  }}
                >
                  Enviar Ficha pelo WhatsApp INAFC (67 - 9.9611-5927)
                </button>
              </div>
            </form>

            {renderVoltar()}
          </div>
        )}

        {/* 6. CONTATO E ASSISTÊNCIA */}
        {telaAtiva === 'contato' && (
          <div
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              backgroundColor: '#fff',
              padding: '25px',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
            }}
          >
            <h2 style={{ color: '#16a085', marginTop: 0, marginBottom: '14px' }}>CONTATO E ASSISTÊNCIA</h2>
            <div
              style={{
                backgroundColor: '#e8f8f5',
                padding: '18px',
                borderRadius: '8px',
                borderLeft: '4px solid #16a085',
              }}
            >
              <p style={{ margin: '0 0 8px 0', fontWeight: 'bold', color: '#2c3e50' }}>
                INAFC — Porto Murtinho, MS
              </p>
              <p style={{ margin: 0, fontSize: '1.05rem', color: '#333' }}>
                Telefone / WhatsApp: <strong>67 - 9.9611-5927</strong>
              </p>
            </div>

            {renderVoltar()}
          </div>
        )}
      </div>

      {/* Rodapé com identificação do desenvolvedor */}
      <footer
        style={{
          maxWidth: '920px',
          width: '100%',
          margin: '40px auto 10px auto',
          paddingTop: '16px',
          borderTop: '1px solid #dcdcdc',
          textAlign: 'center',
          fontSize: '0.88rem',
          color: '#666',
          lineHeight: '1.6',
          boxSizing: 'border-box',
        }}
      >
        <p style={{ margin: '0 0 4px 0', fontWeight: 'bold', color: '#2c3e50' }}>
          Desenvolvido por Fernando Luiz Rodrigues
        </p>
        <p style={{ margin: '0 0 4px 0' }}>
          Tecnologia da Informação — Universidade Federal de Mato Grosso do Sul (UFMS)
        </p>
        <p style={{ margin: 0 }}>
          Fercell Informática • Porto Murtinho, MS •{' '}
          <a
            href="mailto:fernando.l.rodrigues@ufms.br"
            style={{ color: '#27ae60', textDecoration: 'none' }}
          >
            fernando.l.rodrigues@ufms.br
          </a>
        </p>
      </footer>
    </div>
  );
}