// ============================================================
// DESAFIO 01 | EXEMPLO 01
// Descricao: solicita produto, preco e quantidade e exibe os dados.
// ============================================================

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


// ============================================================
// DESAFIO 02 | EXEMPLO 01
// Descricao: calcula subtotal, desconto de 10% e total final.
// ============================================================

/*const preco = Number(window.prompt("Qual o preço do produto?"))
const quantidade = Number(window.prompt("Quantas unidades são?"))

const subtotal = preco * quantidade
const desconto = (subtotal * 10) / 100
const total = subtotal - desconto 


window.alert(`
    Subtotal: ${subtotal}
    Desconto: ${desconto} 
    Total final: ${total}`)*/


// ============================================================
// DESAFIO 03 | EXEMPLO 01
// Descricao: aprova com nota minima 7 e frequencia minima 75%.
// ============================================================

    /*let nota = Number(window.prompt("Qual sua nota?"))
    let frenquencia = Number(window.prompt("Qual a porcentagem da sua frequência?"))

    let n = nota >= 7 && frenquencia >= 75 ? "Aprovado" : "Reprovado"

    window.alert(n)*/


// ============================================================
// DESAFIO 04 | EXEMPLO 01
// Descricao: permite acesso por idade minima ou autorizacao.
// ============================================================

   /*let idade = Number(window.prompt("Qual sua idade?"))
    let autorizacao = window.confirm("Você possui autorização?")

    let v = idade >= 18 || autorizacao ? "Acesso permitido" : "Acesso negado"

    window.alert(v)*/


// ============================================================
// DESAFIO 05 | EXEMPLO 01
// Descricao: aplica desconto de 15% em compra de R$ 100 ou mais com cupom.
// ============================================================

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


// ============================================================
// DESAFIO 06 | EXEMPLO 01
// Descricao: calcula media e verifica aprovacao com frequencia minima.
// ============================================================


        /*let nome = window.prompt("Qual seu nome?")
        let n1 = Number(window.prompt("Qual sua primeira nota?"))
        let n2 = Number(window.prompt("Qual sua segunda nota?"))
        let f = Number(window.prompt("Qual sua frequência na escola?"))
         
        let m = (n1 + n2) / 2
        let v = m >= 7 && f >= 75 ? "APROVADO" : "REPROVADO"

        window.alert(`
            Nome: ${nome}
            Média: ${m} 
            Frenquência: ${f} 
            Situação: ${v}`)*/


// ============================================================
// DESAFIO 07 | EXEMPLO 01
// Descricao: calcula subtotal e aplica desconto com valor minimo e cupom.
// ============================================================


            /*let produto = Number(window.prompt("Qual o preço do produto?"))
            let compra = Number(window.prompt("Quantas unidades são?"))
            let cliente = window.confirm("Possui cupom?")

            let subtotal = produto * compra
            const desconto = subtotal >= 100 && cliente ? (subtotal * 10) /100 :0
            const total = subtotal - desconto

            window.alert(`Subtotal: ${subtotal} Desconto: ${desconto} Total: ${total}`)*/


// ============================================================
// DESAFIO 08 | EXEMPLO 01
// Descricao: atualiza saudacao ao digitar e oferece botoes para limpar.
// ============================================================

           /* const nome = document.getElementById("nome")
            const resultado = document.getElementById("resultado")
            nome.addEventListener("input", function(){
                resultado.textContent = nome.value
            })

            const botao = document.getElementById("botao")

            botao.addEventListener("click", function(){
                resultado.textContent = (`Olá ${nome.value}! Seja bem-vindo!`)
                 titulo.style.color = 'blue'
            })

            const limpar = document.getElementById("limpar")
            limpar.addEventListener("click", function(){
                nome.value = ""
                resultado.textContent = "Aguardando seu nome..."
                
                
            })*/


// ============================================================
// DESAFIO 09 | EXEMPLO 01
// Descricao: cadastra aluno, calcula media de duas notas e mostra situacao.
// ============================================================

         /*const botao = document.getElementById("cadastrar")
         const resultado = document.getElementById("resultado")
         botao.addEventListener("click", function(){
        let nome = window.prompt("Qual seu nome?")
        let nota1 = Number(window.prompt("Digite sua primeira nota:"))
        let nota2 = Number(window.prompt("Digite sua segunda nota:"))
         let media = (nota1 + nota2) /2
         let final = media >= 7 ? "Aprovado" : "Reprovado"
         resultado.textContent =`Aluno: ${nome} | Média: ${media} | Situação: ${final}`

         })*/







