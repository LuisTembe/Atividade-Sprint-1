//PIN sorteado
var pin = 4444;

//Funcao do botao limpar
function leNumero(){
var valorEntrada = document.getElementById('numero').value;
var text;
if(isNaN(valorEntrada) || valorEntrada.length < 4){
    text = 'Entrada Invalida!';
    document.getElementById('resultado').innerHTML = text;
    document.getElementById('resultado').style.color ='#FC0004';
    alert('Entrada Invalida');
}
else if(valorEntrada < pin){
    document.getElementById('resultado').innerHTML = 'Experimente um numero maior.';
    document.getElementById('resultado').style.color ='#E3FC00';
    alert('Ops! O PIN inserido nao eh o certo');
}
else if(valorEntrada > pin){
    document.getElementById('resultado').innerHTML = 'Experimente um numero menor.';
    document.getElementById('resultado').style.color ='#E3FC00'; 
    alert('Ops! O PIN inserido nao eh o certo');       
}
else{
    text = valorEntrada;
    document.getElementById('resultado').innerHTML = 'Parabens! O PIN '+valorEntrada+' é o correto.';
    document.getElementById('resultado').style.color ='#46BD06';
}
}

//Funcao do botao limpar
function limpar(){
    document.getElementById('resultado').innerHTML ='';
    document.getElementById('numero').value ='';
}

setInterval (function(){
    document.body.children[1].textContent = 'Numero de Identificacao Pessoal'
    document.body.children[1].style.color = '#eef20a'
    }, 4000);

setInterval (function(){
    document.body.children[1].textContent = 'Avaliação Sprint 1'
    document.body.children[1].style.color = '#13e848'
    }, 8000);