//   Desafio 01

/*window.alert("Seja Bem-Vindo!")
const produto = window.prompt("Qual o nome do produto?")
let preco = Number(window.prompt("Qual é o preço?"))
let unidade = Number(window.prompt("Quantas unidades são?"))



window.alert(` 
    ${produto}  
    ${preco}   
    ${unidade}
    `)
console.log(typeof preco)
console.log(typeof unidade)*/  


// Desafio 02

/*const preco = Number(window.prompt("Qual o preço do produto?"))
const quantidade = Number(window.prompt("Quantas unidades são?"))

const subtotal = preco * quantidade
const desconto = (subtotal * 10) / 100
const total = subtotal - desconto 


window.alert(`
    Subtotal: ${subtotal}
    Desconto: ${desconto} 
    Total final: ${total}`)*/


    // Desafio 03

    /*let nota = Number(window.prompt("Qual sua nota?"))
    let frenquencia = Number(window.prompt("Qual a porcentagem da sua frequência?"))

    let n = nota >= 7 && frenquencia >= 75 ? "Aprovado" : "Reprovado"

    window.alert(n)*/


    // Desafio 04

   /*let idade = Number(window.prompt("Qual sua idade?"))
    let autorizacao = window.confirm("Você possui autorização?")

    let v = idade >= 18 || autorizacao ? "Acesso permitido" : "Acesso negado"

    window.alert(v)*/


    //Desafio 05

   /* let valor = Number(window.prompt("Qual o valor da compra?"))
    let cliente = window.confirm("O senhor possui cupom?")

     let t = valor >= 100 && cliente
     
     const compra = valor

    const desconto = t ? (compra * 15) / 100 : 0

    const total = compra - desconto

    window.alert(`
        Compra: ${compra}
        Desconto:${desconto}
        Total: ${total}

        `)*/


        // Desafio 06


        let nome = window.prompt("Qual seu nome?")
        let n1 = Number(window.prompt("Qual sua primeira nota?"))
        let n2 = Number(window.prompt("Qual sua segunda nota?"))
        let f = Number(window.prompt("Qual sua frequência na escola?"))
         
        let m = (n1 + n2) / 2
        let v = m >= 7 && f >= 75 ? "APROVADO" : "REPROVADO"

        window.alert(`
            Nome: ${nome}
            Média: ${m} 
            Frenquência: ${f} 
            Situação: ${v}`)







