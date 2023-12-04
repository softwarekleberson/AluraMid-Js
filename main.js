function tocarSom(){
    document.querySelector('idElementoAudio').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;
while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = function () {
        tocarSom('#som_tecla_pom');
    }
    contador = contador + 1
}

