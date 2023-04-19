var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;
var width = screen.width;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 2;

    //Defina as variável "newWidth" e "newHeight" para armazenar a width e height da nova tela.


    /*Se o tamanho da tela for menos que 992 (significa 992px), então mude a width e height do canvas para a nova width e height*/


    //Mude o evento 'mousedown' para o evento 'touchstart'
    canvas.addEventListener("mousedown", my_mousedown);  
    //Mude a função para 'my_touchstart'  
    function my_mousedown(e)
    {
        //Coloque my_toustart no console.


        //Início da Atividade Adicional
       
       
        //Fim da Atividade Adicional

        //Atualize lastPositionOfTouchX e lastPositionOfTouchY aqui.
       



    }

    //Substitua o evento 'mousemove' pelo evento 'touchmove'.
    canvas.addEventListener("mousemove", my_mousemove);
    //Substitua a função "my_mousemove()" com a função "my_touchmove()".
    function my_mousemove(e)
    {
        //Coloque a função "my_touchMove" no console.
        console.log("my_touchMove");

        /*Atualize a "currentPositionOfTouchX" e "currentPositionOfTouchY" 
        com os pontos tocados no canvas.*/
        currentPositionOfTouchX = 
        currentPositionOfTouchY = 

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
    
        console.log("Ultima posicao de coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);
    
        console.log("Posicao atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
        ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
        ctx.stroke();
    
        lastPositionOfX = currentPositionOfTouchX; 
        lastPositionOfY = currentPositionOfTouchY;
    }

    //Atividade Adicional para limpar o canvas.

    

