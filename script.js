
const perulu = ['Nuvu oka eripukodivi 🥴', 'Suli lenioda😏', 'pichi pukodivi👺','KOjavi😮', 'MadaGadivi🤠','pichipukodivi🤡']

function random(){
let text = document.getElementById('text')
const randomm = Math.floor(Math.random()* perulu.length)
text.innerText = perulu[randomm]
}

/* function tellme() {
  text.innerText = 'Nuvu oka eripukodivi'
}
*/
function refresh() {
  text.innerText = ' '
}
