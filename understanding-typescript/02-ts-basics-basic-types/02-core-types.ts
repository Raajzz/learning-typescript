function addition(n1:number, n2:number, showResult:boolean, resultPhrase:string){
  if(showResult){
    console.log(`${resultPhrase} = ${n1+n2}`);
  } else {
    return (n1+n2);
  }
}

const number1 = 10;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result Phrase"

const result = addition(number1, number2, printResult, resultPhrase);
console.log(result);