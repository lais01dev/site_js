  //exemplo 1 while
  // a variável soma é igual a 0
  // a variável numero é igual a 1
  // soma é menor ou igual a 20
  // A expressão soma+=numero pega o valor atual de soma e adiciona o valor de numero a ele.
  // numero++ incrementa a variável numero em um a cada iteração do loop
  let soma = 0;
  let numero = 1;
  
  while (soma <= 20) {
      soma += numero;
      console.log(`Número: ${numero}, Soma: ${soma}`);
      numero++;
  }
  console.log(`A soma final é ${soma}, que é maior que 20.`);