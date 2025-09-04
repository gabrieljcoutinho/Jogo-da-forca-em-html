let jogarNovamente = true;
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let palavras = [];
let jogoAutomatico = true;

carregaListaAutomatica();

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    // console.log(palavraSecretaSorteada);
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }
        }
        else{
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }
        }
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra, false);
        comparalistas(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla, condicao){
    if(condicao == false)
    {
        document.getElementById(tecla).style.background = "#C71585";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    else{
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }


}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("OPS!", "Não foi dessa vez ... A palavra secreta era <br>" + palavraSecretaSorteada);
            piscarBotaoJogarNovamente(true);
        }
    }
    else{
        mudarStyleLetra("tecla-" + letra, true);
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS!", "Você venceu...");
        tentativas = 0;
        piscarBotaoJogarNovamente(true);
    }
}

// async function piscarBotaoJogarNovamente(){
//     while (jogarNovamente == true) {
//         document.getElementById("btnReiniciar").style.backgroundColor = 'red';
//         document.getElementById("btnReiniciar").style.scale = 1.3;
//         await atraso(500)
//         document.getElementById("btnReiniciar").style.backgroundColor = 'yellow';
//         document.getElementById("btnReiniciar").style.scale = 1;
//         await atraso(500)
//     }
// }

async function atraso(tempo){
    return new Promise(x => setTimeout(x, tempo))
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    jogarNovamente = false;
    location.reload();
});

function listaAutomatica(){ // ativa o modo manual
    if (jogoAutomatico == true) {
        document.getElementById("jogarAutomatico").innerHTML = "<i class='bx bx-play-circle'></i>"
        palavras = [];
        jogoAutomatico = false;

        document.getElementById("abreModalAddPalavra").style.display = "block";
        document.getElementById("status").innerHTML = "Modo Manual";
    }
    else if(jogoAutomatico == false){ // ativa o modo automático
        document.getElementById("jogarAutomatico").innerHTML = "<i class='bx bx-pause-circle'></i>"
        jogoAutomatico = true;

        document.getElementById("abreModalAddPalavra").style.display = "none";
        document.getElementById("status").innerHTML = "Modo Automático";

    }
}

const modal = document.getElementById("modal-alerta");

const btnAbreModal = document.getElementById("abreModalAddPalavra");
btnAbreModal.onclick = function(){
    modal.style.display = "block";
}

const btnFechaModal = document.getElementById("fechaModal");
btnFechaModal.onclick = function(){
    modal.style.display = "none";
    document.getElementById("addPalavra").value = "";
    document.getElementById("addCategoria").value = "";
}

window.onclick = function(){
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("addPalavra").value = "";
        document.getElementById("addCategoria").value = "";
    }
}

function carregaListaAutomatica() {
    palavras = [
        // --- LUGARES ---
        palavra001 = { nome: "IRLANDA", categoria:"LUGARES" },
        palavra002 = { nome: "EQUADOR", categoria:"LUGARES" },
        palavra003 = { nome: "CHILE", categoria:"LUGARES" },
        palavra004 = { nome: "INDONESIA", categoria:"LUGARES" },
        palavra005 = { nome: "MALDIVAS", categoria:"LUGARES" },
        palavra006 = { nome: "INGLATERRA", categoria:"LUGARES" },
        palavra007 = { nome: "GROELANDIA", categoria:"LUGARES" },
        palavra008 = { nome: "UZBEQUISTAO", categoria:"LUGARES" },
        palavra009 = { nome: "NORUEGA", categoria:"LUGARES" },
        palavra010 = { nome: "AUSTRALIA", categoria:"LUGARES" },
        palavra011 = { nome: "CANADA", categoria:"LUGARES" },
        palavra012 = { nome: "MEXICO", categoria:"LUGARES" },
        palavra013 = { nome: "ARGENTINA", categoria:"LUGARES" },
        palavra014 = { nome: "BRASIL", categoria:"LUGARES" },
        palavra015 = { nome: "PORTUGAL", categoria:"LUGARES" },

        // --- TRANSPORTE ---
        palavra016 = { nome: "BICICLETA", categoria:"TRANSPORTE" },
        palavra017 = { nome: "LANCHA", categoria:"TRANSPORTE" },
        palavra018 = { nome: "NAVIO", categoria:"TRANSPORTE" },
        palavra019 = { nome: "TELEFERICO", categoria:"TRANSPORTE" },
        palavra020 = { nome: "MOTOCICLETA", categoria:"TRANSPORTE" },
        palavra021 = { nome: "BARCO", categoria:"TRANSPORTE" },
        palavra022 = { nome: "AERONAVE", categoria:"TRANSPORTE" },
        palavra023 = { nome: "TREM", categoria:"TRANSPORTE" },
        palavra024 = { nome: "CAIAQUE", categoria:"TRANSPORTE" },
        palavra025 = { nome: "FUNICULAR", categoria:"TRANSPORTE" },
        palavra026 = { nome: "CARRO", categoria:"TRANSPORTE" },
        palavra027 = { nome: "CAMINHAO", categoria:"TRANSPORTE" },
        palavra028 = { nome: "ONIBUS", categoria:"TRANSPORTE" },
        palavra029 = { nome: "PATINETE", categoria:"TRANSPORTE" },
        palavra030 = { nome: "TRATOR", categoria:"TRANSPORTE" },

        // --- OBJETOS ---
        palavra031 = { nome: "XICARA", categoria:"OBJETOS" },
        palavra032 = { nome: "MOEDA", categoria:"OBJETOS" },
        palavra033 = { nome: "ESPARADRAPO", categoria:"OBJETOS" },
        palavra034 = { nome: "SINO", categoria:"OBJETOS" },
        palavra035 = { nome: "CHUVEIRO", categoria:"OBJETOS" },
        palavra036 = { nome: "TAMBORETE", categoria:"OBJETOS" },
        palavra037 = { nome: "LAMPADA", categoria:"OBJETOS" },
        palavra038 = { nome: "BOCAL", categoria:"OBJETOS" },
        palavra039 = { nome: "CORTINA", categoria:"OBJETOS" },
        palavra040 = { nome: "LAPIS", categoria:"OBJETOS" },
        palavra041 = { nome: "CELULAR", categoria:"OBJETOS" },
        palavra042 = { nome: "COMPUTADOR", categoria:"OBJETOS" },
        palavra043 = { nome: "CADEIRA", categoria:"OBJETOS" },
        palavra044 = { nome: "MESA", categoria:"OBJETOS" },
        palavra045 = { nome: "VENTILADOR", categoria:"OBJETOS" },

        // --- ALIMENTOS ---
        palavra046 = { nome: "MELANCIA", categoria:"ALIMENTOS" },
        palavra047 = { nome: "AMENDOIM", categoria:"ALIMENTOS" },
        palavra048 = { nome: "ESFIRRA", categoria:"ALIMENTOS" },
        palavra049 = { nome: "GOROROBA", categoria:"ALIMENTOS" },
        palavra050 = { nome: "JANTAR", categoria:"ALIMENTOS" },
        palavra051 = { nome: "SABOROSO", categoria:"ALIMENTOS" },
        palavra052 = { nome: "DESJEJUM", categoria:"ALIMENTOS" },
        palavra053 = { nome: "MASTIGAR", categoria:"ALIMENTOS" },
        palavra054 = { nome: "ENGOLIR", categoria:"ALIMENTOS" },
        palavra055 = { nome: "DOCERIA", categoria:"ALIMENTOS" },
        palavra056 = { nome: "PIZZA", categoria:"ALIMENTOS" },
        palavra057 = { nome: "HAMBURGUER", categoria:"ALIMENTOS" },
        palavra058 = { nome: "SORVETE", categoria:"ALIMENTOS" },
        palavra059 = { nome: "CHOCOLATE", categoria:"ALIMENTOS" },
        palavra060 = { nome: "BATATA", categoria:"ALIMENTOS" },

        // --- ANIMAIS ---
        palavra061 = { nome: "DRAGAO", categoria:"ANIMAIS" },
        palavra062 = { nome: "GALINHA", categoria:"ANIMAIS" },
        palavra063 = { nome: "PAVAO", categoria:"ANIMAIS" },
        palavra064 = { nome: "CAMELO", categoria:"ANIMAIS" },
        palavra065 = { nome: "PERU", categoria:"ANIMAIS" },
        palavra066 = { nome: "ZEBRA", categoria:"ANIMAIS" },
        palavra067 = { nome: "DROMEDARIO", categoria:"ANIMAIS" },
        palavra068 = { nome: "CALANGO", categoria:"ANIMAIS" },
        palavra069 = { nome: "SAGUI", categoria:"ANIMAIS" },
        palavra070 = { nome: "LAGARTIXA", categoria:"ANIMAIS" },
        palavra071 = { nome: "HIPOPOTAMO", categoria:"ANIMAIS" },
        palavra072 = { nome: "LEAO", categoria:"ANIMAIS" },
        palavra073 = { nome: "TIGRE", categoria:"ANIMAIS" },
        palavra074 = { nome: "ELEFANTE", categoria:"ANIMAIS" },
        palavra075 = { nome: "GIRAFA", categoria:"ANIMAIS" },

        // --- TV E CINEMA ---
        palavra076 = { nome: "A ERA DO GELO", categoria:"TV E CINEMA" },
        palavra077 = { nome: "HOMEM ARANHA", categoria:"TV E CINEMA" },
        palavra078 = { nome: "CASA MONSTRO", categoria:"TV E CINEMA" },
        palavra079 = { nome: "TELA QUENTE", categoria:"TV E CINEMA" },
        palavra080 = { nome: "STRANGER THINGS", categoria:"TV E CINEMA" },
        palavra081 = { nome: "O REI DO GADO", categoria:"TV E CINEMA" },
        palavra082 = { nome: "MULHER MARAVILHA", categoria:"TV E CINEMA" },
        palavra083 = { nome: "O INCRIVEL HULK", categoria:"TV E CINEMA" },
        palavra084 = { nome: "BOB ESPONJA", categoria:"TV E CINEMA" },
        palavra085 = { nome: "PANICO NA TV", categoria:"TV E CINEMA" },
        palavra086 = { nome: "OS VINGADORES", categoria:"TV E CINEMA" },
        palavra087 = { nome: "BATMAN", categoria:"TV E CINEMA" },
        palavra088 = { nome: "SUPERMAN", categoria:"TV E CINEMA" },
        palavra089 = { nome: "JURASSIC PARK", categoria:"TV E CINEMA" },
        palavra090 = { nome: "HARRY POTTER", categoria:"TV E CINEMA" }
    ];
}


function adicionarPalavra(){
    let addPalavra = document.getElementById("addPalavra").value.toUpperCase();
    let addCategoria = document.getElementById("addCategoria").value.toUpperCase();

    if (isNullOrWhiteSpace(addPalavra) || isNullOrWhiteSpace(addCategoria) || addPalavra.length < 3 || addCategoria.length < 3) {
        abreModal("ATENÇÃO"," Palavra e/ou Categoria inválidos");
        return;
    }

    let palavra = {
        nome: addPalavra,
        categoria: addCategoria
    }

    palavras.push(palavra);
    sortear();

    document.getElementById("addPalavra").value = "";
    document.getElementById("addCategoria").value = "";
}

function isNullOrWhiteSpace(input){
    return !input || !input.trim();
}

function sortear(){
    if(jogoAutomatico == true){
        location.reload();
    }
    else{
        if(palavras.length > 0){
            listaDinamica=[];
            criarPalavraSecreta();
            montarPalavraNaTela();
            resetaTeclas();
            tentativas = 6;
            piscarBotaoJogarNovamente(false);
        }
    }
}

function resetaTeclas(){
    let teclas = document.querySelectorAll(".teclas > button")
    teclas.forEach((x) =>{
        x.style.background = "#FFFFFF";
        x.style.color = "#8B008B";
        x.disabled = false;
    });
}


async function piscarBotaoJogarNovamente(querJogar){
    if(querJogar){
        document.getElementById("jogarNovamente").style.display = "block";
    }
    else{
        document.getElementById("jogarNovamente").style.display = "none";
    }
}
