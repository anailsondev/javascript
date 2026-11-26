// ============================================================
// AULA 03 — Entrada e saída de dados com alert e prompt
// Exemplos: exibir mensagens e receber nome e cidade do usuário.
// ============================================================

// EXEMPLO 01
// Descricao: Entrada: solicita nome e cidade e monta uma saudacao.

/*window.alert('Seja Bem-Vindo!')
let nome = window.prompt('Qual seu nome?')
let cidade = window.prompt('Qual sua cidade?')
window.alert(`Olá,  ${nome} voce mora em ${cidade}`)*/


// ============================================================
// AULA 04 — Variáveis de texto e propriedades do documento
// Exemplo: mostrar uma mensagem no console e alterar o título.
// ============================================================

// EXEMPLO 01
// Descricao: Guarda uma mensagem, imprime no console e altera o titulo da pagina.

/*let mensagem = 'Estou aprendendo JavaScript'
console.log(mensagem)
document.title = "JavaScript"*/


// ============================================================
// AULA 05 — Tipos de dados, typeof, let e const
// Exemplos: texto, número, booleano, undefined, null e constantes.
// ============================================================

// EXEMPLO 01
// Descricao: Declara dados de varios tipos e verifica cada tipo com typeof.

/*let nome = 'Anailson DJB'
let idade = 21
let curso = 'ADS'
let estudando = true
let telefone 
let email = null

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof curso)
console.log(typeof estudando)
console.log(typeof telefone)
console.log(typeof email)*/

// EXEMPLO 02
// Descricao: Imprime dados de um produto e verifica seus tipos.

/*let preco = 49.90
let produto = "Teclado"
let disponivel = true

console.log(preco)
console.log(produto)
console.log(disponivel)

console.log(typeof preco)
console.log(typeof produto)
console.log(typeof disponivel)*/

// EXEMPLO 03
// Descricao: Altera o preco com let e mantem o nome declarado com const.

/*const nome = 'Anailson DJB'
let preco = 100
preco = 80

console.log(nome)
console.log(preco)*/


// ============================================================
// AULA 06 — Conversão e tratamento de tipos numéricos
// Exemplos: Number, String, parseInt e parseFloat.
// ============================================================

// EXEMPLO 01
// Descricao: Converte respostas do prompt para numeros e soma os valores.

/*window.alert('Seja Bem-Vindo! ')
let n1 = Number(Window.prompt("Qual o preço do produto?"))
let n2 = Number(window.prompt("Qual a quantidade?"))
let soma = n1 + n2
window.alert(`O valor total é R$ ${soma}`)*/

// EXEMPLO 02
// Descricao: Converte o preco para texto e consulta o tipo resultante.

/*let preco = 50
let texto = String(preco)
console.log(typeof texto)*/

// EXEMPLO 03
// Descricao: Converte o preco para inteiro, sem casas decimais.

/*let preco = Number.parseInt(49.90)
console.log(preco) 
console.log(typeof preco)*/

// EXEMPLO 04
// Descricao: Converte o preco para numero decimal.

/*let preco = Number.parseFloat(49.90)
console.log(preco)
console.log(typeof preco)*/

// EXEMPLO 05
// Descricao: Compara conversoes para texto, inteiro e decimal.

/*let preco = 50
let texto = String(50)
console.log(typeof texto)

let produto = Number.parseFloat("25.90")
console.log(produto)

let cafe = Number.parseInt("39.90")
console.log(cafe)*/


// ============================================================
// AULA 07 — Operadores aritméticos, de atribuição e comparação
// Exemplos: contas, incremento, atribuição composta e igualdade.
// ============================================================

// EXEMPLO 01
// Descricao: Testa soma, subtracao, multiplicacao, divisao, potencia e resto.

/*let n1 = 20
let n2 = 6
console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 ** n2)
console.log(n1 % n2)*/

// EXEMPLO 02
// Descricao: Incrementa e decrementa o estoque.

/*let estoque = 10
estoque++
estoque--
console.log(estoque)*/

// EXEMPLO 03
// Descricao: Atualiza o saldo usando atribuicoes compostas.

/*let saldo = 500
saldo += 200
saldo -= 100
saldo *= 2
saldo /= 2
console.log(saldo)*/

// EXEMPLO 04
// Descricao: Compara dois numeros usando maior, menor e igual.

/*let n1 = 15
let n2 = 10
console.log(n1 > n2)
console.log(n1 < n2)
console.log(n1 >= n2)
console.log(n1 == n2)
console.log(n1 != n2)*/

// EXEMPLO 05
// Descricao: Compara igualdade simples e estrita entre numero e texto.

/*let idade = 20
let texto = "20"
console.log(idade == texto)
console.log(idade === texto)
console.log(idade != texto)
console.log(idade !== texto) */

// EXEMPLO 06
// Descricao: Compara a precedencia das operacoes com e sem parenteses.

/*console.log(10 + 5 * 2)
console.log((10 + 5) * 2)
console.log(20 - 4 / 2)
console.log((20 - 4) / 2)
console.log(2 ** 3 + 5)*/


// ============================================================
// AULA 08 — Operadores lógicos e operador ternário
// Exemplos: &&, ||, ! e condições compactas.
// ============================================================

// EXEMPLO 01
// Descricao: Usa && para verificar intervalos de idade.

/*let idade = 25
console.log(idade >= 18 && idade <= 60)
console.log(idade >= 30 && idade <= 50)
console.log(idade <= 18 && idade >= 10) */

// EXEMPLO 02
// Descricao: Usa || para testar idade ou autorizacao.

/*let idade = 16
let autorizado = true
console.log(idade >= 18 || autorizado)
console.log(idade > 20 ||  idade < 10)
console.log(idade < 18 || idade > 60)*/

// EXEMPLO 03
// Descricao: Usa ! e !! para inverter valores booleanos.

/*let ativo = true
let bloqueado = false
console.log(!ativo)
console.log(!bloqueado)
console.log(!!bloqueado)*/

// EXEMPLO 04
// Descricao: Usa o ternario para escolher uma mensagem pela idade.

/*let idade = 17
let resultado = idade >= 18 ? "maior de idade" : "menor de idade"
console.log(resultado)*/

// EXEMPLO 05
// Descricao: Combina &&, || e ! nas condicoes de idade e autorizacao.

/*let idade = 17
let autorizado = false
console.log(idade >= 18 && autorizado)
console.log(idade >= 18 || autorizado)
console.log(idade < 18 && !autorizado)*/


// ============================================================
// AULA 09 — DOM: selecionar e alterar elementos da página
// Exemplos: texto, estilo, innerHTML e seleção de elementos.
// ============================================================

// EXEMPLO 01
// Descricao: Seleciona o titulo pelo id e altera seu texto.

/*const texto = document.getElementById("titulo");

    texto.textContent = "Estou aprendendo DOM!";*/

// EXEMPLO 02
// Descricao: Seleciona o primeiro elemento .texto e altera seu conteudo.

/*const paragrafo = document.querySelector(".texto");

    paragrafo.textContent = "Aprendendo JavaScript!";*/

// EXEMPLO 03
// Descricao: Seleciona o segundo elemento .texto e altera seu conteudo.

/*const paragrafo = document.querySelectorAll(".texto")[1]

    paragrafo.textContent = "Aprendendo Dom!"*/

// EXEMPLO 04
// Descricao: Seleciona o titulo e altera sua cor para azul.

/*const cor = document.getElementById("titulo")

    cor.style.color = 'blue'*/

// EXEMPLO 05
// Descricao: Insere texto com uma palavra em negrito no titulo.

/*const texto = document.getElementById("titulo")

    texto.innerHTML = "Estou aprendendo <strong>dom</strong>!."*/

// EXEMPLO 06
// Descricao: Altera o titulo, o paragrafo e a cor do titulo.

/*const t = document.getElementById("titulo")
    t.textContent = "Aula 09 concluída!."

    const p = document.querySelector(".texto")
    p.textContent = "Estou aprendendo dom!"
     
    const cor = document.getElementById("titulo")
    cor.style.color = 'blue'*/


// ============================================================
// AULA 10 — Eventos: clique, mouse e teclado; entrada de texto
// Exemplos: addEventListener, input, mouseenter, keydown e keyup.
// ============================================================

// EXEMPLO 01
// Descricao: Ao clicar no botao, atualiza a mensagem na pagina.

/*const botao = document.getElementById("botao")
    const mensagem = document.getElementById("mensagem")


    botao.addEventListener("click", function() {
        mensagem.textContent = "Você clicou no botão!"
    })*/

// EXEMPLO 02
// Descricao: Muda a cor do texto quando o mouse entra e sai.

/* const texto = document.getElementById("texto")

        texto.addEventListener("mouseenter", function(){
            texto.style.color = 'blue'
        })

        texto.addEventListener("mouseout", function(){
            texto.style.color = 'black'

        })*/

// EXEMPLO 03
// Descricao: Mostra no resultado o valor digitado no campo.

/*const nome = document.getElementById("tx1")
        const resultado = document.getElementById("resultado")

        nome.addEventListener("input", function(){
            resultado.textContent = nome.value
        })*/

// EXEMPLO 04
// Descricao: Exibe um alerta quando uma tecla e pressionada.

/*const texto = document.getElementById("texto")

            texto.addEventListener("keydown", function(){
                window.alert("Uma tecla foi pressionada!")
            })*/

// EXEMPLO 05
// Descricao: Exibe um alerta quando uma tecla e solta.

/*const texto = document.getElementById("texto")

                texto.addEventListener("keyup", function(){
                    window.alert("Você soltou uma tecla!")
                })*/

// EXEMPLO 06
// Descricao: Mostra o texto digitado; o botao limpa campo e resultado.

/*const nome = document.getElementById("nome") 
     const resultado = document.getElementById("resultado") 

     nome.addEventListener("input", function(){
        resultado.textContent = nome.value
     })

     const botao = document.getElementById("botao")

     botao.addEventListener("click", function(){
         nome.value = ""
     })

     botao.addEventListener("click", function(){
        resultado.textContent ="Seu nome aparecerá aqui."
     })*/


// ============================================================
// AULA 11 — Condicionais if, else if e else
// Exemplos: verificar idade, aprovação, classificação e preço.
// O último exemplo fica ativo e aparece no console.
// ============================================================

// EXEMPLO 01
// Descricao: Usa if/else para informar maioridade ou menoridade.

/*let idade = 20
        if(idade >= 18){
            console.log("Maior de idade!")
        } else {
            console.log("Menor de idade!")
        }*/

// EXEMPLO 02
// Descricao: Usa if/else para aprovar ou reprovar pela nota.

/*let nota = 5
        if(nota >= 7){
            console.log("Aprovado!")
        } else {
            console.log("Reprovado!")
        }*/

// EXEMPLO 03
// Descricao: Classifica a nota como excelente, aprovada ou reprovada.

/*let nota = 5
        if(nota >= 9){
            console.log("Excelente!")
        } else if(nota >= 7) {
            console.log("Aprovado!")
            
        } else{
            console.log("Reprovado!")
        }*/

// EXEMPLO 04
// Descricao: Classifica a pessoa por faixa etaria.

/*let idade = 10
      if(idade < 12){
        console.log("Criança")
      }else if(idade < 18){
        console.log("Adolescente")
      }else{
        console.log("Adulto")
      }*/

// EXEMPLO 05
// Descricao: Classifica o preco como caro, medio ou barato.

/*let preco = 150 
    if(preco > 200){
        console.log("Caro")
    }else if(preco >= 100){
        console.log("Preço médio")
    }else{
        console.log("Barato")
    }*/

// EXEMPLO 06
// Descricao: classifica a nota e mostra o nome e a nota do aluno no console.

/*let nome = "Anailson"
let nota = 8
if(nota >= 9){
    console.log("Excelente!")
}else if(nota >= 7){
    console.log("Aprovado!")
}else{
    console.log("Reprovado!")
}
console.log(`Aluno: ${nome} | Nota: ${nota}`)*/


           //AULA 12

//EXEMPLO 1

   /*let idade = 20
 if(idade < 18) {
    console.log(`Menor de idade`)
 } else {
    if (idade < 21){
        console.log(`Jovem adulto`)
    } else {
        console.log(`Adulto`)
    }

 }*/

/*let dia = 3
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
        default:
        console.log("Dia inválido")
}

let agora = new Date()
let dia = agora.getDay()
switch(dia){
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda-Feira")
        break
    case 2:
        console.log("Terça-Feira")
        break
    case 3:
        console.log("Quarta-Feira")
        break
    case 4:
        console.log("Quinta-Feira")
        break
    case 5:
        console.log("Sexta-Feira")
        break
    case 6:
        console.log("Sábado-Feira")
        break
        default:
        console.log("Dia invalido")
}*/
   


    //  AULA 13
    // While repete comandos enquanto a condição for verdadeira
   /* let contador = 1

    while (contador <= 5){
        console.log(contador)
        contador++
        
    }*/

    
   /* let contador = 10
    while (contador >= 1){
        console.log(contador)
        contador--
    }*/


   /*let contador = 1
   let soma = 0
   while (contador <= 5){
     soma = soma + contador
     contador++
   }

   console.log(soma)*/

   // esse código comece em 2 menor ou igual a 100 e percorra somente números pares
   /*let numero = 2
   while (numero <= 10){
    console.log(numero)
    numero = numero + 2
   }*/
    // esse código comece em 1 menor ou igual a 100 e percorra somente números impares
    /*let impar = 1
    while (impar <= 100){
        console.log(impar)
        impar = impar + 2
    }*/

    //  Mostrar números Pares e impares
    let numero = 1
    while (numero <= 10){
        if (numero % 2 == 0){
            console.log(`Número par: ${numero}`)
        }else{
    console.log(`Número impar: ${numero}`)
        }
        numero++
    }
   
