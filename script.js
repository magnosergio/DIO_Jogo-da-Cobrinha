// função para retornar o elemento por seu id
let canvas = document.getElementById("snake");
// Setando o contexto do desenho em 2d. Opções são 2d e 3d.
let context = canvas.getContext('2d');
let box = 32;

function criarBG() {
    context.fillStyle = "lightgreen";
    // método para desenhar um triangulo, (x, y, width, height)
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();