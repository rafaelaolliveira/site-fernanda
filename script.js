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
  const btnAnterior = document.querySelector('.seta-esquerda');
  const btnProximo = document.querySelector('.seta-direita');

  let indiceAtual = 0;

  
  function mostrarDepoimento(indice) {
    depoimentos.forEach((depoimento, idx) => {
      depoimento.classList.remove('active');
      if (idx === indice) {
        depoimento.classList.add('active');
      }
    });
  }

  
  btnProximo.addEventListener('click', () => {
    indiceAtual++;
    if (indiceAtual >= depoimentos.length) {
      indiceAtual = 0; 
    }
    mostrarDepoimento(indiceAtual);
  });

  
  btnAnterior.addEventListener('click', () => {
    indiceAtual--;
    if (indiceAtual < 0) {
      indiceAtual = depoimentos.length - 1; 
    }
    mostrarDepoimento(indiceAtual);
  });
});