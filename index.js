const estrelas = document.querySelectorAll('.estrelas')
const contador = document.querySelector('#contador')
const btn = document.querySelector('#btn')
const msg = document.querySelector('#mensagem')
const text = document.querySelector
('#texto-de-avaliacao')
const avaliacao = document.querySelector('.avaliacao')
let avaliacaoAtual = 0;




document.addEventListener('click' , function(e) {
  let classStar = e.target.classList;
  if(!classStar.contains('ativo')){
    estrelas.forEach(function(star){
      star.classList.remove('ativo')
    });
    classStar.add('ativo');
    console.log(e.target.getAttribute('data-avaliacao'))
    contador.innerHTML =+ e.target.getAttribute('data-avaliacao')
  }
})

btn.addEventListener("click" , () =>{
  msg.classList.remove('hide')
  setTimeout(function(){
    msg.classList.add('hide')
    text.classList.add('hide')
    btn.classList.add('hide')
    avaliacao.classList.add('hide')
  } , 1000)
})