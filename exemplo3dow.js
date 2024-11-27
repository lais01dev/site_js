//exemplo 3 do...while
  // a variável numero é igual a 0
  // a variável soma é igual a 1
  // soma é menor ou igual a 10
  // numero++ incrementa a variável numero em um a cada iteração do loop
  // A expressão soma+=numero pega o valor atual de soma e adiciona o valor de numero a ele
  let soma = 1;
  let numero = 0;
  do {
      soma += numero;
      console.log(`Número:${numero} Soma:${soma}`)
      numero++;
      
  } while (soma <= 10);
  console.log(`Soma final: ${soma}`);