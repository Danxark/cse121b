/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    const sum = number1 + number2
    return sum
}
function addNumbers(){
  const addNumber1= Number(document.querySelector('#add1').value)
  const addNumber2= Number(document.querySelector('#add2').value)
   const sum = add(addNumber1,addNumber2)
 document.querySelector('#sum').value = sum
     console.log('FIRST NUMBER', addNumber1)
     console.log('SECOND NUMBER', addNumber2)
     console.log('SUM', sum)
     
}         
document.querySelector('#addNumbers').addEventListener('click', addNumbers)

/* Function Expression - Subtract Numbers */
function subtract(subtnumber1, subtnumber2) {
    const  subt= subtnumber1 - subtnumber2
    return subt
}
function subtractNumbers(){
  const subtractNumber1= Number(document.querySelector('#subtract1').value)
  const subtractNumber2= Number(document.querySelector('#subtract2').value)
   const subt = subtract(subtractNumber1,subtractNumber2)
 document.querySelector('#difference').value = subt
     console.log('FIRST NUMBER', subtractNumber1)
     console.log('SECOND NUMBER', subtractNumber2)
     console.log('DIFFERENCE', subt)
     
}         
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)


/* Arrow Function - Multiply Numbers */
   (multnumber1, multnumber2) =>{
       multnumber1 * multnumber2
    return mult}

 let multiplyNumbers=()=>{
   multiplyNumber1= Number(document.querySelector('#factor1').value)
   multiplyNumber2= Number(document.querySelector('#factor2').value)
    mult = multiply(multiplyNumber1,multiplyNumber2)
 document.querySelector('#product').value = mult
     console.log('FIRST NUMBER', multiplyNumber1)
     console.log('SECOND NUMBER', multiplyNumber2)
     console.log('DIFFERENCE', mult)
     
}         
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)


/* Open Function Use - Divide Numbers */
function divide(divnumber1, divnumber2) {
    const  div= divnumber1 - divnumber2
    return div
}
function divideNumbers(){
  const divideNumber1= Number(document.querySelector('#dividend').value)
  const divideNumber2= Number(document.querySelector('#divisor').value)
   const div = divide(divideNumber1,divideNumber2)
 document.querySelector('#quotient').value = div
     console.log('FIRST NUMBER', divideNumber1)
     console.log('SECOND NUMBER', divideNumber2)
     console.log('DIFFERENCE', div)
     
}         
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
