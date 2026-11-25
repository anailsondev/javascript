        //AULA 03

/*window.alert("Boas-vindas!")
// esse código faz um alerta na pagina HTML navegador!

window.prompt("Qual seu nome?")
// esse código faz um pergunta que aparece na página HTML

window.prompt("Qual sua idade?")
// esse código faz um pergunta na pagina HTML
window.confirm("Deseja continuar?")
// esse código pergunta se vc deseja continuar*/

//console.log("Olá, Mundo!")
// o console.log ele executar o JavaScript e visualizar no console do Vscode e do navegador


    //AULA 04

    /*let mensagem = "Estou aprendendo JavaScript"
    console.log(mensagem)
    document.title = "Aula 04 - JavaScript"*/
    // esse código permite altera o titulo do site sem precisa do HTML

    // O atributo DEFER permite que o navegador carregue o arquivo JS e espere a análise do HTML terminar antes de executar o script 


    // AULA 05


    /*let nome = "Anailson DJB"
    let idade = 21
    const estudante = true
    var cidade = "Vargem-Grande"
    let observacao;
    let informacao = null

    console.log(nome, typeof nome)
    console.log(idade, typeof idade)
    console.log(estudante, typeof estudante)
    console.log(cidade, typeof cidade)
    console.log(observacao, typeof observacao)
    console.log(informacao, typeof informacao)

    nome = "Anailson"
    console.log(nome)*/

    // Aqui nessa aula são os tipos primitivos strings que são nomes Number que são números Boolean que retorna true ou false valor lógico o undefined que é uma variavel declarada sem valor atribuido Null é ausencia de valor representada intencionalmente e let é declara uma váriavel cujo valor pode ser retribuido e const declara um valor que não pode retribuido e o typeof ajuda verificar o tipo de valor


    // AULA 06

    /*let produto = window.prompt("Qual o nome produto?")

    let preco = Number(window.prompt("Qual o preço do produto?"))

    let quantidade = Number.parseInt(window.prompt("Qual a quantidade?"))

    let peso = Number.parseFloat(window.prompt("Qual o peso do Produto?"))

    let total = preco * quantidade

    let totalFormatado = total.toLocaleString("pt-BR",{
        style:"currency",
        currency:"BRL"
    })

    window.alert(`Produto: ${produto}
                  Preço: ${preco.toLocaleString("pt-BR",{
                    style:"currency",
                    currency:"BRL"
                  })}
                  Quantidade: ${quantidade}
                  Peso: ${peso}
                  Total da compra:${totalFormatado}
        `)

    console.log(`Produto: ${produto}
                 Preço: R$ ${preco}
                 Quantidade: ${quantidade}
                 Peso: ${peso}
                 Total da compra: R$ ${totalFormatado}
                 `)*/

            // Aula 07

            // Operadores aritméticos
           /* let n1 = 10

            let n2 = 9

            let soma = n1 + n2
            let soma1 = n1 * n2
            let soma2 = n1 - n2
            let soma3 = n1 / n2
            let soma4 = n1 % n2
            let soma5 = n1 ** n2

            console.log(soma)
            console.log(soma1)
            console.log(soma2)
            console.log(soma3)
            console.log(soma4)
            console.log(soma5)
 
            // Incremento e descremento
            let contador = 1
            contador++
            console.log(contador)

            let contador1 = 1
            contador1--
            console.log(contador1)*/

            // Operadores de atribuição

            /*let saldo = 500
            saldo += 200
            saldo -= 150
            saldo *= 2
            saldo /= 5

            console.log(saldo)*/


            // Operadores relacionais


            /*let n1 = 10
            let n2 = 7

            let total = n1 > n2
            let total1 = n1 < n2
            let total2 = n1 >= n2
            let total3 = n1 <= n2
            let total4 = n1 == n2
            let total5 = n1 === n2
            let total6 = n1 != n2
            let total7 = n1 !== n2

            console.log(total)
            console.log(total1)
            console.log(total2)
            console.log(total3)
            console.log(total4)
            console.log(total5)
            console.log(total6)
            console.log(total7)

            console.log(10 == "10")
            console.log(10 === "10")*/


            // Ordem de precedencia


            /*let n1 = 12
            let n2 = 4
            let n3 = 6
            let total = n1 * n2 + n3
            let total1 = n1*(n2 + n3)
            console.log(total)
            console.log(total1)*/


            // AULA 08


            // Operadores && pra ser verdadeiro ás 2 condição deve ser true já || basta uma condição for true já ! inverte de true pra false de false pra true o operador ternário que ? permite escolher entre 2 condição true e false

            let idade = 17
            let autorizado = false
            let ativo = true
            let bloqueado = false

            console.log(idade >= 18 && autorizado)
            console.log( autorizado || ativo)
            console.log(! bloqueado)
            console.log(idade >= 18 && autorizado ? "Acesso permitido" : "Acesso negado")



