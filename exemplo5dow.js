  //exemplo 5 do...while
  // a variável num é igual a 0
  // num é menor ou igual a 20
  //para verificar se o valor atual de num é ímpar, usamos a expressão (num % 2 === 1) com a estrutura de decisão if
  //num++ incrementa a variável num em um a cada iteração do loop
  let num = 0;
  do {
      if (num % 2 === 1) {
          console.log(`Números ímpares: ${num}`);
      }
      num++;
  } while (num <= 20);