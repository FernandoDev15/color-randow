


let nome = 'fernando'; //string
let numero = 10; // number
let maiorDeIdade = true // boolean
let noDefined; // undefined
let ob = {}; // object
let vazio = null; // null
let simbolo = Symbol() // symbol

console.log(
    `${typeof nome} 
    ${typeof numero}
    ${typeof maiorDeIdade} 
    ${typeof noDefined}
    ${typeof ob}
    ${typeof vazio}
    ${typeof simbolo}`
)

const h1 = document.querySelector('#h1');

function randomColor () {
  const mat = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
  return mat;
}

function alterarCor ()  {
   
    h1.style.backgroundColor = randomColor() 
}



