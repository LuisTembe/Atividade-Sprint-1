//PIN sorteado
var pin = 4444;


//Função para captura do número
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
    document.getElementById('resultado').innerHTML = 'Experimente um número maior.';
    document.getElementById('resultado').style.color ='#E3FC00';
    alert('Ops! O PIN inserido não é o certo');
}
else if(valorEntrada > pin){
    document.getElementById('resultado').innerHTML = 'Experimente um número menor.';
    document.getElementById('resultado').style.color ='#E3FC00'; 
    alert('Ops! O PIN inserido não é o certo');       
}
else{
    text = valorEntrada;
    document.getElementById('resultado').innerHTML = 'Parabéns! O PIN '+valorEntrada+' é o correto.';
    document.getElementById('resultado').style.color ='#46BD06';
}
}

////Função do botao limpar
function limpar(){
    document.getElementById('resultado').innerHTML ='';
    document.getElementById('numero').value ='';
}

//Texo alternado sobre o prorgama
setInterval (function(){
    document.body.children[1].textContent = 'Número de Identificação Pessoal'
    document.body.children[1].style.color = '#eef20a'
    }, 4000);

setInterval (function(){
    document.body.children[1].textContent = 'Avaliação da Sprint 1'
    document.body.children[1].style.color = '#13e848'
    }, 8000);