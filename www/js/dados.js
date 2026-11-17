const Dados = {
  carregar() {
    try {
      return JSON.parse(localStorage.getItem('financasADois')) || {
        pessoas: [
          { nome: 'Pessoa 1', ocupacao: '' },
          { nome: 'Pessoa 2', ocupacao: '' }
        ],
        receitas: [],
        despesas: [],
        cofres: [],
        projetos: []
      };
    } catch (erro) {
      console.error('Erro ao carregar dados:', erro);
      return {
        pessoas: [
          { nome: 'Pessoa 1', ocupacao: '' },
          { nome: 'Pessoa 2', ocupacao: '' }
        ],
        receitas: [],
        despesas: [],
        cofres: [],
        projetos: []
      };
    }
  },

  salvar(dados) {
    localStorage.setItem('financasADois', JSON.stringify(dados));
  }
};

const dadosApp = Dados.carregar();
