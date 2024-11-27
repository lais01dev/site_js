
  //exemplo 5 while
  // a variável i é igual a 9
  // a variável multiplicacao é igual a 0
  // multiplicacao é menor ou igual a 10
  // A expressão i*multiplicacao soma o valor atual de i com o valor atual de multiplicacao
  // a expressão multiplicacao=multiplicacao+1 é usada para incrementar a variável multiplicacao em 1
  // i++ incrementa a variável i em um a cada iteração do loop
  let i = 9;
  let multiplicacao = 0;
  
  while (multiplicacao <= 10) {
      console.log(`${i} x ${multiplicacao} = ${i*multiplicacao}`);
      multiplicacao=multiplicacao+1
  }