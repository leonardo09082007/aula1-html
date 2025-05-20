// funçõe callback
const lista = ["uno", "f1000", "d20", "del rey", "fusca"]
//forEach -> não retorna nenhum valor, apenas executa um código
//para cada elemnto
lista.forEach((carro) => console.log (carro))

//map -> alterar todos os elementos da lista
const listaAtualizada = lista.map ((carro) => {
    return carro[0].toUpperCase() + carro.slice(1)
})
console.log(lista);
console.log (listaAtualizada);

const numeros = [10, 50, 100, 202, 30]
//filter ->
const filtro = numeros. filter ((n) => n <100)
console.log(filtro)
const filtroLetra = lista.filter((carro) => carro[0] == "d")
console.log(filtroLetra)

//
const ordenado = lista.sort()
console.log(ordenado)
const numerosOrdenados = numeros.sort()
console.log (numerosOrdenados)
const numerosOrdenado = numeros.sort((a, b,) => {
   if (a < b) { 
    return -1;
    }
    if (a > b){
      return 1;
    }
    return 0;
})    
console.log(numerosOrdenado)
