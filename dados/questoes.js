// ============================================
// BANCO DE QUESTÕES - Concurso em Cápsulas
// Total: 236 questões
// Gerado: 17/12/2025
// ============================================

const bancoQuestoes = [
    // ========== DIREITO CONSTITUCIONAL (IDs 1-20) ==========
    {
        id: 1,
        materia: "Direito Constitucional",
        texto: "De acordo com a Constituição Federal de 1988, o direito de propriedade é um fundamento da República Federativa do Brasil.",
        opcoes: ["Certo", "Errado"],
        correta: 1,
        tipo: "certo-errado",
        explicacao: "O direito de propriedade é um direito fundamental individual, mas NÃO é um fundamento da República (art. 1º da CF)."
    },
    {
        id: 2,
        materia: "Direito Constitucional",
        texto: "São objetivos fundamentais da República Federativa do Brasil, segundo a CF/88: construir uma sociedade livre, justa e solidária; garantir o desenvolvimento nacional; promover o bem de todos, sem preconceitos.",
        opcoes: ["Certo", "Errado"],
        correta: 0,
        tipo: "certo-errado",
        explicacao: "Art. 3º da CF: todos os itens estão corretos."
    },
    {
        id: 3,
        materia: "Direito Constitucional",
        texto: "A distinção entre mente e corpo como objetos de estudo já era conhecida desde a Antiguidade, mas apenas com René Descartes essa distinção foi teorizada e difundida.",
        opcoes: ["Certo", "Errado"],
        correta: 0,
        tipo: "certo-errado",
        explicacao: "Platão e Tomás de Aquino já abordavam, mas Descartes estabeleceu o dualismo formalmente."
    },
    {
        id: 4,
        materia: "Direito Constitucional",
        texto: "A sentença 'A aplicação dos recursos públicos é consequência da ação contínua dos órgãos de controle' pode ser representada por (P ∧ Q) → R.",
        opcoes: ["Certo", "Errado"],
        correta: 0,
        tipo: "certo-errado",
        explicacao: "A sentença é uma proposição condicional que pode ser representada dessa forma."
    },
    {
        id: 5,
        materia: "Direito Constitucional",
        texto: "De acordo com a Constituição Federal, são objetivos fundamentais da República Federativa do Brasil, EXCETO:",
        opcoes: ["Construir uma sociedade livre, justa e solidária", "Garantir o desenvolvimento nacional", "Promover o bem de todos, sem preconceitos", "Instituir um sistema de governo parlamentarista"],
        correta: 3,
        tipo: "multipla",
        explicacao: "Instituir governo parlamentarista não é um objetivo fundamental da República."
    },
    {
        id: 6,
        materia: "Direito Constitucional",
        texto: "A soberania, a cidadania, a dignidade da pessoa humana e o pluralismo político são fundamentos da República Federativa do Brasil.",
        opcoes: ["Certo", "Errado"],
        correta: 0,
        tipo: "certo-errado",
        explicacao: "Art. 1º da CF: são fundamentos a soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, pluralismo político."
    },
    {
        id: 7,
        materia: "Direito Constitucional",
        texto: "A forma de governo do Brasil é a República, e o sistema de governo é o Presidencialismo.",
        opcoes: ["Certo", "Errado"],
        correta: 0,
        tipo: "certo-errado",
        explicacao: "O Brasil é uma República Federativa Presidencialista."
    },
    {
        id: 8,
        materia: "Direito Constitucional",
        texto: "São Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário.",
        opcoes: ["Certo", "Errado"],
        correta: 0,
        tipo: "certo-errado",
        explicacao: "Art. 2º da CF: São Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário."
    },
    {
        id: 9,
        materia: "Direito Constitucional",
        texto: "A República Federativa do Brasil rege-se nas suas relações internacionais pelos princípios da independência nacional, prevalência dos direitos humanos e defesa da paz.",
        opcoes: ["Certo", "Errado"],
        correta: 0,
        tipo: "certo-errado",
        explicacao: "Art. 4º da CF: são princípios das relações internacionais."
    },
    {
        id: 10,
        materia: "Direito Constitucional",
        texto: "Todo poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos da Constituição.",
        opcoes: ["Certo", "Errado"],
        correta: 0,
        tipo: "certo-errado",
        explicacao: "Parágrafo único do art. 1º da CF."
    },
    {
        id: 11,
        materia: "Direito Constitucional",
        texto: "São símbolos da República Federativa do Brasil a bandeira, o hino, as armas e o selo nacional.",
        opcoes: ["Certo", "Errado"],
        correta: 0,
        tipo: "certo-errado",
        explicacao: "Art. 13 da CF."
    },
    {
        id: 12,
        materia: "Direito Constitucional",
        texto: "A lei não poderá prejudicar o direito adquirido, o ato jurídico perfeito e a coisa julgada.",
        opcoes: ["Certo", "Errado"],
        correta: 0,
        tipo: "certo-errado",
        explicacao: "Art. 5º, XXXVI da CF - proteção aos direitos adquiridos."
    },
    {
        id: 13,
        materia: "Direito Constitucional",
        texto: "É assegurado a todos o acesso à informação e sigilo da fonte, quando necessário ao exercício profissional.",
        opcoes: ["Certo", "Errado"],
        correta: 0,
        tipo: "certo-errado",
        explicacao: "Art. 5º, XIV da CF."
    },
    {
        id: 14,
        materia: "Direito Constitucional",
        texto: "A prática do racismo constitui crime inafiançável e imprescritível, sujeito à pena de reclusão.",
        opcoes: ["Certo", "Errado"],
        correta: 0,
        tipo: "certo-errado",
        explicacao: "Art. 5º, XLII da CF."
    },
    {
        id: 15,
        materia: "Direito Constitucional",
        texto: "A criação de associações e cooperativas depende de autorização do Estado.",
        opcoes: ["Certo", "Errado"],
        correta: 1,
        tipo: "certo-errado",
        explicacao: "Art. 5º, XVIII e XIX - a criação de associações e cooperativas independe de autorização."
    },
    {
        id: 16,
        materia: "Direito Constitucional",
        texto: "É garantido o direito de propriedade, que deverá atender sua função social.",
        opcoes: ["Certo", "Errado"],
        correta: 0,
        tipo: "certo-errado",
        explicacao: "Art. 5º, XXII e XXIII da CF."
    },
    {
        id: 17,
        materia: "Direito Constitucional",
        texto: "A pena de morte é admitida no Brasil em caso de guerra declarada.",
        opcoes: ["Certo", "Errado"],
        correta: 0,
        tipo: "certo-errado",
        explicacao: "Art. 5º, XLVII - a pena de morte é admitida apenas em caso de guerra declarada."
    },
    {
        id: 18,
        materia: "Direito Constitucional",
        texto: "A prisão civil por dívida é admitida no caso de depositário infiel e responsável por alienação fiduciária.",
        opcoes: ["Certo", "Errado"],
        correta: 0,
        tipo: "certo-errado",
        explicacao: "Art. 5º, LXVII - admitida para depositário infiel e alienação fiduciária, mas há Súmula Vinculante 25 do STF vedando."
    },
    {
        id: 19,
        materia: "Direito Constitucional",
        texto: "A sucessão de bens de estrangeiros situados no Brasil será regulada pela lei brasileira em benefício do cônjuge ou filhos brasileiros.",
        opcoes: ["Certo", "Errado"],
        correta: 0,
        tipo: "certo-errado",
        explicacao: "Art. 5º, XXXI da CF."
    },
    {
        id: 20,
        materia: "Direito Constitucional",
        texto: "O mandado de segurança coletivo pode ser impetrado por partido político com representação no Congresso Nacional.",
        opcoes: ["Certo", "Errado"],
        correta: 0,
        tipo: "certo-errado",
        explicacao: "Art. 5º, LXX da CF."
