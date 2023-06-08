// Lógica estilo menu
let list = document.querySelectorAll('.navigation li');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) =>
    item.addEventListener('mouseover', activeLink));

// Menu Toggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function() {
    navigation.classList.toggle('active')
    main.classList.toggle('active')
}

// Lógica para navegação entre os itens do menu 

function abrirMenu(idMenu) {
  var conteudos = document.getElementsByClassName('conteudo');

  for (var i = 0; i < conteudos.length; i++) {
    conteudos[i].style.display = 'none';
  }

  document.getElementById(idMenu).style.display = 'block';
}

document.getElementById('Inicio').onclick(abrirMenu('Inicio'));