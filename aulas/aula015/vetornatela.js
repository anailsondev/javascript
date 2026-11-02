let valores = [8, 3, 4, 5, 9]

/*for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/


/*for(let pos in valores) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
} */


let num = [1, 2, 3, 4]
num.push(1)
num.sort()
console.log(num)
console.log(`O  vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
} else {

console.log(`O valor 4 está na posição ${pos}`)
}