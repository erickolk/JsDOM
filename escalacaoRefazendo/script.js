const posicao = document.getElementById('posicao')
const nome = document.getElementById('name')
const numeroCamisa = document.getElementById('numeroCamisa')

const buttonEscalar = document.getElementById('escalar-btn')
buttonEscalar.addEventListener("click", escalar)

function exibirEscalacao(){

}
function criarJogador(){
    const liJogador = document.createElement('li')
    liJogador.innerText = `${nome.value}, camisa ${numeroCamisa.value}, posição (${posicao.value})`
    liJogador.id = 'jogador-' + numeroCamisa.value
    const ulJogadores = document.querySelector('ul')
    ulJogadores.appendChild(liJogador)
    nome.value = ''
    posicao.value = ''
    numeroCamisa.value = ''

}

function confirmar(){
    return confirm(`Deseja confirmar a escalação do jogador ${nome.value}, camisa ${numeroCamisa.value} na posição de ${posicao.value}`)
}

function escalar(){
    confirmar()
    if(confirmar) {
        criarJogador()
    }
}


function remover(){
    const numeroRemover = document.getElementById('numeroRemover').value
    const jogadorARemover = document.getElementById('jogador-' + numeroRemover)
    
    const confirmacao = confirm(`Remover o jogador ${jogadorARemover.innerText} ?`)

    if(confirmacao){
        document.getElementById('ul-list').removeChild(jogadorARemover)
        document.getElementById('numeroRemover').value = ''
    }
}