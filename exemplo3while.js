//exemplo 3 while
  //a variável num (número) é igual a 0
  //num é menor ou igual a 16
  // para verificar se o valor atual de num é par, usamos a expressão (num % 2 === 0) com a estrutura de decisão if
  // num++ incrementa a variável num em um a cada iteração do loop
  let num = 0;
  
  while (num <= 16) {
      if (num % 2 === 0) {
          console.log(num);
      }
      num++;
  }