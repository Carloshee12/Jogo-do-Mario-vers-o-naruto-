const naruto = document.querySelector('.naruto'); // selecionar o arquivo que vou adicionar ou remover as info
const pipe = document.querySelector('.pipe');

const jump = () => {
    naruto.classList.add('jump'); //adicionando a função de pular na class naruto

    setTimeout(() => { //adicionando a função de remoção da animacação depois de 500ms
        
     naruto.classList.remove('jump');

}, 500);
}

const loop = setInterval(() => {


    const pipePosition = pipe.offsetLeft;
    const narutoPosition = +window.getComputedStyle(naruto).bottom; //para pegar o estilo do naruto

    if (pipePosition <= 120 && pipePosition > 0 && narutoPosition < 80 ) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
    }
}, 10)

document.addEventListener('keydown', jump); //função para quando abertar o teclado pular 


//função para executar quando clicar o botão de play
const button = document.querySelector('button'); //pegar do button no index.html
button.addEventListener('click', function(){ //adicionando a função de executar a musica ao clicar
    const audio = document.querySelector('audio'); //pegando info do audio
    audio.currentTime = 0.1 //tempo que vai iniciar a musica
    audio.play()

})
