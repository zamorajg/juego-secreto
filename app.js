let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 3;


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
   
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p',`Acertastes el numero en ${intentos} ${(intentos === 1)?'vez':'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        //console.log(numeroUsuario);
        //console.log(numeroSecreto);
        if(numeroSecreto < numeroUsuario ){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarInput();
    }
    
    return;
}

function limpiarInput(){
    document.querySelector('#valorUsuario').value='';
  
}

function generarNroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los elementos');
        
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    //limpiar caja
    limpiarInput();
    //indicar mensaje de intervalos de numeros
    //generar el numero aleatorio
    //Inicializar numero de intentos
    condicionesIniciales();
    //desahabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    
   
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero Secreto');
    asignarTextoElemento('p',`Indica un numero de 1 a ${numeroMaximo}`);
    numeroSecreto = generarNroSecreto();
    intentos = 1;
}

condicionesIniciales();
