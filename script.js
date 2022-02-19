
function exercicio1() {
  const str = '10 + 15;"10" + 2;"10" * 2;"10" / 3;"10" % 3;10 + true;10 == "10";10 === "10";10 < 11;10 > 12;10 <= 10.1;10 > 9.99;10 != "dez";10 + true;"dez" + true;10 + false;10 * false;true + true;10++;10--;1 & 1;1 & 0;0 & 0;1 & 0;0 / 1;5 + 5 == 10;"5" + "5" == 10;"5" * 2 > 9;(10 + 10) * 2;10 + 10 * 2';
  const vet = str.split(";");

  document.getElementById("botao1").disabled = true;
  

  for(let i=0;i<vet.length;i++)
  {
    
    document.getElementById("innerdiv").innerHTML += '<p>'+vet[i]+' = '+ eval(vet[i]) +' ('+typeof(eval(vet[i]))+')'+ '</p>';   

  }
   
}



function exercicio2() {
  
  var branco = "preto";
  var preto = "cinza";
  var cinza = "branco";
  var carro = "preto";
  var valor = 30000;
  var prestacao = 750;

  const str1 = 'branco == "branco";branco == cinza;carro === branco';
  var cavalo = carro == "preto" ? "cinza" : "marron";
  const vet1 = str1.split(";");

  document.getElementById("botao2").disabled = true;

  document.getElementById("outradiv").innerHTML += '<h2>Exercício 2</h2>';

  for(let i=0;i<vet1.length;i++)
  {
    
    document.getElementById("outradiv").innerHTML += '<p>'+vet1[i]+' = '+ eval(vet1[i]) +' ('+typeof(eval(vet1[i]))+')'+ '</p>';   

  }

  document.getElementById("outradiv").innerHTML +='<p>'+'var cavalo = carro == "preto" ? "cinza" : "marron" Resposta:'+eval(cavalo)+'</p>';

  document.getElementById("outradiv").innerHTML += '<p>' + 'Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3.000?' +' (30000-3000)/750 = 36 prestações' +'</p>';

  document.getElementById("outradiv").innerHTML += '<p>' + 'Somando as variáveis de cores é formada uma string de quantos caracteres? ' + eval((branco+preto+cinza).length) + ' caracteres</p>';
   
}


