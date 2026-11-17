function navegar(tela) {
  if (tela !== 'inicio') {
    alert('A área "' + tela + '" será desenvolvida nas próximas etapas!');
  }

  document.querySelectorAll('.menu-item').forEach(item => {
    item.classList.toggle('ativo', item.dataset.tela === tela);
  });
}

function iniciarNavegacao() {
  document.querySelectorAll('[data-tela]').forEach(botao => {
    botao.addEventListener('click', () => {
      navegar(botao.dataset.tela);
    });
  });
}
