// função para retornar o elemento por seu id
let canvas = document.getElementById("snake");
// Setando o contexto do desenho em 2d. Opções são 2d e 3d.
let context = canvas.getContext('2d');
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG() {
    context.fillStyle = "lightgreen";
    // método para desenhar um triangulo, (x, y, width, height)
    context.fillRect(0, 0, 16 * box, 16 * box);
    
}

function criarCobrinha() {
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);        
    }
}

criarBG();
criarCobrinha();