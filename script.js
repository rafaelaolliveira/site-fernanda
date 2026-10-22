const mobileBtn = document.querySelector('.btn');
const navLinks = document.getElementById ('links');
const icon = document.querySelector('.btn i');

mobileBtn.addEventListener('click', () => {
navLinks.classList.toggle('show');
icon.classList.toggle('fa-times');
icon.classList.toggle('fa-bars');
})

document.addEventListener('DOMContentLoaded', () => {
  const depoimentos = document.querySelectorAll('.depoimento-wrapper');
  let indiceAtual = 0;

  function mostrarDepoimento(indice) {
    depoimentos.forEach((depoimento, idx) => {
      depoimento.classList.remove('active');
      if (idx === indice) {
        depoimento.classList.add('active');
      }
    });
  }

  document.querySelectorAll('.seta-direita').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      indiceAtual = (indiceAtual + 1) % depoimentos.length;
      mostrarDepoimento(indiceAtual);
    });
  });

  document.querySelectorAll('.seta-esquerda').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      indiceAtual = (indiceAtual - 1 + depoimentos.length) % depoimentos.length;
      mostrarDepoimento(indiceAtual);
    });
  });
});
