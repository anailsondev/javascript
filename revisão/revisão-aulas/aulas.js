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

    // Document permite acessar e manipular a página


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
    // O Number está sendo utilizado pra converter texto em números
    let preco = Number(window.prompt("Qual o preço do produto?"))

    // o Number.parseInt Converte em números Inteiros
    let quantidade = Number.parseInt(window.prompt("Qual a quantidade?"))
    
    // O Number.parseFloat converte números em decimais
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
                 `)

                // Convertendo números em texto
                 let idade = 21
                 let idadetexto = String(idade)
                 console.log("idadetexto")
                 console.log(typeof idadetexto)*/

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

            /*let idade = 17
            let autorizado = false
            let ativo = true
            let bloqueado = false

            console.log(idade >= 18 && autorizado)
            console.log( autorizado || ativo)
            console.log(! bloqueado)
            console.log(idade >= 18 && autorizado ? "Acesso permitido" : "Acesso negado")*/


            //  Aula 09
            // esse código seleciona pelo ID
           /* let titulo = document.getElementById("titulo")
            titulo.textContent = "Hello World"
             

            // esse código seleciona pela tag
            let p = document.getElementsByTagName("p")
            p[0].textContent = "Descrição"
            

            // esse código seleciona no input name
            let input = document.getElementsByName("usuario")
            input[0].value = "JavaScript"


            // esse código seleciona pela class
            let produto = document.getElementsByClassName("produto")
            produto[0].textContent = "Como vc vai?"

            
            // esse código seleciona pelo seletor pode ser ID,CLASS e TAG
            let produto1 = document.querySelector(".produto")
            produto1.textContent = "JavaScript"
             

            //esse código seleciona todos elementos que correspondem a um seletor css
            let produto2 = document.querySelectorAll(".produto")
            produto2[1].textContent = "Como vai?"


            let resultado = document.getElementById("resultado")

            resultado.innerHTML = "<strong>Hello World</strong>"

            // TextContent ele trabalha com texto dentro do JS

            // InnerHTML ele interpreta a string atribuida ao HTML

            // os indices começa em [0] que são métodos que retorna uma coleção

            titulo.style.color = "blue"*/


            // AULA 10

           /* let area = document.getElementById("area")
            

            // Quando o mouse entra na área do elemento
            area.addEventListener("mouseenter", entrar)

            function entrar(){
                area.textContent = "Você entrou na área!"
            }
            

            // Quando vc clicar em um elemento
            area.addEventListener("click", clicar)

            function clicar(){
                area.textContent = "Você Clicou!"
            }
            

            // Quando o mouse de um elemento
            area.addEventListener("mouseout", sair)

            function sair(){
                area.textContent = "Você saiu da área!"
            }
            

            // Quando o mouse se movimenta
            area.addEventListener("mousemove", mover)
            
            function mover(){
                area.textContent = "Você moveu!"
            }
            

            // Quando o botão mouse é pressionado
            area.addEventListener("mousedown", pressionar)

            function pressionar(){
                area.textContent = "Você pressionou!"
            }
            

            // Quando o botão é solto
            area.addEventListener("mouseup", soltar)

            function soltar(){
                area.textContent = "Você soltou!"
            }
            // Quando uma tecla é pressionada
            document.addEventListener("keydown", tecla)

            function tecla(){
                area.textContent = "Uma tecla foi pressionada!"
            }*/

            // O addEventListenet() Esse método registra uma função que será executada quando ocorrer determinado evento.


            // AULA 11

            /*let nota = 8

            if (nota >= 9){
                console.log("Excelente")
            }else if(nota >= 7){
                console.log("Aprovado")
            }else {
                console.log("Reprovado")
            }*/

            // O if - Se... então
            // O else if - Senão, se
            // O else - Senão

            // AULA 12

           /* let dia = 7

            switch (dia){
                case 1:
                    console.log("Domingo")
                break
                case 2:
                    console.log("Segunda-Feira")
                break
                case 3:
                    console.log("Terça-Feira")
                break
                case 4:
                    console.log("Quarta-Feira")
                break
                case 5:
                    console.log("Quinta-Feira")
                break
                case 6:
                    console.log("Sexta-Feira")
                break
                case 7:
                    console.log("Sábado")
                    break

                    default:
                        console.log("Dia não cadastrado")
            }*/

         // Switch: recebe o valor que será analisado

         // Case: representa uma possibilidade

         // Break: encerra o caso atual

         // Default: executa quando nenhum caso corresponde ao valor

         // Condição aninhadas são condições colocadas dentro de outras condições.Elas permitem analisar situações mais complexas
         /*let idade = 19
         let autorizado = true

         if (idade >= 18){
            if (autorizado == true){
                console.log("Entrada permitida")
            }else {
            console.log("Precisa de autorização")
         } 
         } else {
            console.log("Entrada negada")
         }*/





