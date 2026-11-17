function atualizarDashboard() {
  const receitas = dadosApp.receitas.reduce(
    (total, item) => total + Number(item.valor || 0), 0
  );

  const despesas = dadosApp.despesas.reduce(
    (total, item) => total + Number(item.valor || 0), 0
  );

  const saldo = receitas - despesas;

  const moeda = valor => valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  document.getElementById('saldoTotal').textContent = moeda(saldo);
  document.getElementById('receitasTotal').textContent = moeda(receitas);
  document.getElementById('despesasTotal').textContent = moeda(despesas);

  document.getElementById('nomePessoa1').textContent =
    dadosApp.pessoas[0]?.nome || 'Pessoa 1';

  document.getElementById('nomePessoa2').textContent =
    dadosApp.pessoas[1]?.nome || 'Pessoa 2';

  document.getElementById('mesAtual').textContent =
    new Date().toLocaleDateString('pt-BR', {
      month: 'long',
      year: 'numeric'
    });
}
