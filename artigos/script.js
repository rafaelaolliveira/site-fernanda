const mobileBtn = document.querySelector('.btn');
const navLinks = document.getElementById ('links');
const icon = document.querySelector('.btn i');

mobileBtn.addEventListener('click', () => {
navLinks.classList.toggle('show');
icon.classList.toggle('fa-times');
icon.classList.toggle('fa-bars');
})

function mostrarConteudo() {
    var elemento = document.getElementById("conteudo-oculto");
    if (elemento.style.display === "none") {
      elemento.style.display = "block";
    } else {
      elemento.style.display = "none";  
    }
  }
  function mostrarConteudo2() {
    var elemento = document.getElementById("conteudo-oculto2");
    if (elemento.style.display === "none") {
      elemento.style.display = "block";
    } else {
      elemento.style.display = "none";  
    }
  }