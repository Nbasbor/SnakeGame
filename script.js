let canvas =  document.getElementById('snake');
let context = canvas.getContext("2d") // renderiza o desenho do jogo
let box = 32; // tamanho de cada quadrado
let snake = [];


    //cria um objeto snake com valores x e y 
snake[0] = {
    x: 8 * box,
    y: 8 * box
}   // o tamanho 8 deixa a cobrinha localizada exatamente ao centro

let direction = "right";
    //cria a direção do movimento da cobrinha
let comida ={
    x: Math.floor(Math.random() * 17 + 1) * box,
        /*cria um elemento randomico com o padrão de 15 + 1
        como o numero do backgroung 
        Math floor retira a parte flutuante e 
        arredonda para baixo e 
        o box serva para a comida não ficar fora do BG*/
    y: Math.floor(Math.random() * 14 + 1) * box

}

// cria o background
function criarBG(){
    context.fillStyle = "orange";
        // preenche com a cor verde
    context.fillRect(0, 0, 18 * box, 15 * box); 
        /* desenha o retângulo do jogo 
        ( trabalha coma  posição de x e y e largura e altura) 
        aqui altura e largura de 16 */
}

//Para a cobrar andar adiciona um elemento e tira outro
function criarCobrinha(){
    for(i=0; i<snake.length; i++){
        // for percorre o tamanho da cobra e acrescenta mais um

        context.fillStyle = "purple";
         // preenche a cor da cobra de roxo

        context.fillRect(snake[i].x, snake[i].y, box, box);
            //desenha o tamanho da cobra [i]
            //context.fillRect(x, y, width, height);

    }
}

function criarComida(){
    context.fillStyle = "blue";
    context.fillRect(comida.x, comida.y, box, box);
        //context.fillRect(x, y, width, height);
}

 document.addEventListener('keydown', update);
    //adiciona um evento ao tocar as teclas do teclado

function  update(event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
        //cria um evento ao clidar na seta para esquerda
    if(event.keyCode == 39 && direction != "left") direction = "right";
        //cria um evento ao clidar na seta para direita
    if(event.keyCode == 38 && direction != "down") direction = "up";
        //cria um evento ao clidar na seta para cima
    if(event.keyCode == 40 && direction != "up") direction = "down";
        //cria um evento ao clidar na seta para baixo
}



function iniciarJogo(){
    

    if(snake[0].x > 17 * box && direction == "right") snake[0].x = 0;
        /* se a snake no array 0(cabeça) 
        na posição de x for maior que 15 e a direçao for direita 
        ela sai da tela e recebe o valor de 0*/
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
        /* se a snake no array 0(cabeça) 
        na posição de x for menor que 0 e a direçao for esquerda 
        ela sai da tela e recebe o valor de 16*box*/
    if(snake[0].y > 14 * box && direction == "down") snake[0].y = 0;
        /* se a snake no array 0(cabeça) 
        na posição de y for maior que 15 e a direçao for baixo 
        ela sai da tela e recebe o valor de 0*/
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;
        /* se a snake no array 0(cabeça) 
        na posição de y for menor que 0 e a direçao for cima 
        ela sai da tela e recebe o valor de 16*box*/


    for(i = 1; i<snake.length; i++ ){
        // i = 1 por que compara com a cabeça da cobra
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over!!!');
        }
    }


    criarBG(); 
        // chama a função para ver renderizado

    criarCobrinha();
        //chama a função criar cobrinha

    criarComida();
        //chama a função criar comida



    let snakex = snake[0].x;
        // snake x é a variavel do array na posição 0 de x 
    let snakey = snake[0].y;
        // snake x é a variavel do array na posição 0 de y
    


    if(direction == "right") snakex += box;
        /*acrescenta um quadradinho em x 
        quando a cobrinha esta indo para a esquerda*/
    if(direction == "left") snakex -= box;
        /*decrescenta um quandradiho em x 
        quando a cobrinha vai para esqueda*/
    if(direction == "up") snakey -= box;
        /*decrescenta um quandradiho em y 
        quando a cobrinha vai para cima*/
    if(direction == "down") snakey += box;
        /*acrescenta um quandradiho em y 
        quando a cobrinha vai para baixo*/




    if(snakex != comida.x || snakey != comida.y){
        snake.pop();
            // retira o urltimo elemento o array
    }
    else{ 
        comida.x = Math.floor(Math.random() * 17 + 1) * box;
        comida.y = Math.floor(Math.random() * 14 + 1) * box;
    }

   
    

    let novaCabeça = {
        x: snakex,
        y: snakey
    }



    snake.unshift(novaCabeça);
        /*método acrecente um no primeiro elemento 
        "acrescenta sempre um a frente" */

}




    var jogo = setInterval(iniciarJogo, 100);
    /*inicia o jogo a cada 100 milisegundos
    a função da continuidade ao jogo sem ele travar*/






