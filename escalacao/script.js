//Criação do container

const container = document.createElement('div')
const body = document.querySelector('body')
body.appendChild(container)

const listaJogadores = document.querySelector('ul')

const inputContainer = document.createElement('div')
container.appendChild(inputContainer)
inputContainer.setAttribute('id', 'inputContainer')

//Criar inputs

function criarInput(labelText, inputType = "text") {
    var container = document.getElementById("inputContainer");

    var label = document.createElement("label");
    label.textContent = labelText + ": ";

    var input = document.createElement("input");
    input.type = inputType;

    container.appendChild(label);
    container.appendChild(input);

    return input
}

let posicao = criarInput("Posição")
let nome = criarInput("Nome")
let camisa = criarInput("Número da camisa")
let removerInput = criarInput('Informe o número da camisa do jogador a ser removido')

const botaoRemover = document.createElement('button')
botaoRemover.innerText = 'Remover'
container.appendChild(botaoRemover)
botaoRemover.addEventListener("click", () => removerJogador(removerInput.value))

// Box do botão

let timeEscalado = []

function escalar(){
    
    const boxButton = document.createElement('div')
    const button = document.createElement('button')
    button.innerText = 'Escalar'
    button.addEventListener("click", confirmar)

    boxButton.appendChild(button)
    container.appendChild(boxButton)

    function confirmar() {
        const confirmacao = confirm('Você deseja confirmar a escalação do jogador ' + nome.value + ' camisa ' + camisa.value + ' na posição de ' + posicao.value + '?')

        if(confirmacao){
            const jogador = {
                nome: nome.value,
                posicao: posicao.value,
                camisa: camisa.value
            }

            timeEscalado.push(jogador)
            renderizar(timeEscalado)

            camisa.value = ''
            nome.value = ''
            posicao.value = ''
        }
        console.log(timeEscalado)
    }
}

function criarJogador(jogador){
    const li = document.createElement('li')
    li.innerText = `Número do jogador: ${jogador.camisa}, nome do jogador: ${jogador.nome}`
    return li
}

function removerJogador(numero){
    const novaLista = timeEscalado.filter(jogador => jogador.camisa !== numero)
    timeEscalado = novaLista
    removerInput.value = ""
    renderizar(timeEscalado)
    console.log(timeEscalado)
}

function renderizar(arrayJogadores){
    listaJogadores.innerHTML = ""
    arrayJogadores.forEach(jogador => {
        const novoJogador = criarJogador(jogador)
        listaJogadores.appendChild(novoJogador)
    })
}
escalar()

