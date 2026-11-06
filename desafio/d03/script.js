//  Aula 07

/*let n1 = 20
let n2 = 6
console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 ** n2)
console.log(n1 % n2)*/


/*let estoque = 10
estoque++
estoque--
console.log(estoque)*/

/*let saldo = 500
saldo += 200
saldo -= 100
saldo *= 2
saldo /= 2
console.log(saldo)*/

/*let n1 = 15
let n2 = 10
console.log(n1 > n2)
console.log(n1 < n2)
console.log(n1 >= n2)
console.log(n1 == n2)
console.log(n1 != n2)*/

/*let idade = 20
let texto = "20"
console.log(idade == texto)
console.log(idade === texto)
console.log(idade != texto)
console.log(idade !== texto) */

/*console.log(10 + 5 * 2)
console.log((10 + 5) * 2)
console.log(20 - 4 / 2)
console.log((20 - 4) / 2)
console.log(2 ** 3 + 5)*/

// AULA 08

/*let idade = 25
console.log(idade >= 18 && idade <= 60)
console.log(idade >= 30 && idade <= 50)
console.log(idade <= 18 && idade >= 10) */

/*let idade = 16
let autorizado = true
console.log(idade >= 18 || autorizado)
console.log(idade > 20 ||  idade < 10)
console.log(idade < 18 || idade > 60)*/

/*let ativo = true
let bloqueado = false
console.log(!ativo)
console.log(!bloqueado)
console.log(!!bloqueado)*/

/*let idade = 17
let resultado = idade >= 18 ? "maior de idade" : "menor de idade"
console.log(resultado)*/

/*let idade = 17
let autorizado = false
console.log(idade >= 18 && autorizado)
console.log(idade >= 18 || autorizado)
console.log(idade < 18 && !autorizado)*/

// Aula 03
/*window.alert('Seja Bem-Vindo!')
let nome = window.prompt('Qual seu nome?')
let cidade = window.prompt('Qual sua cidade?')
window.alert(`Olá,  ${nome} voce mora em ${cidade}`)*/

// aula 04

/*let mensagem = 'Estou aprendendo JavaScript'
console.log(mensagem)
document.title = "JavaScript"*/

//AULA 05

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

/*let preco = 49.90
let produto = "Teclado"
let disponivel = true

console.log(preco)
console.log(produto)
console.log(disponivel)

console.log(typeof preco)
console.log(typeof produto)
console.log(typeof disponivel)*/

/*const nome = 'Anailson DJB'
let preco = 100
preco = 80

console.log(nome)
console.log(preco)*/

//AULA 06
/*window.alert('Seja Bem-Vindo! ')
let n1 = Number(Window.prompt("Qual o preço do produto?"))
let n2 = Number(window.prompt("Qual a quantidade?"))
let soma = n1 + n2
window.alert(`O valor total é R$ ${soma}`)*/

/*let preco = 50
let texto = String(preco)
console.log(typeof texto)*/

/*let preco = Number.parseInt(49.90)
console.log(preco) 
console.log(typeof preco)*/

/*let preco = Number.parseFloat(49.90)
console.log(preco)
console.log(typeof preco)*/

/*let preco = 50
let texto = String(50)
console.log(typeof texto)

let produto = Number.parseFloat("25.90")
console.log(produto)

let cafe = Number.parseInt("39.90")
console.log(cafe)*/



    //Aula 09

    /*const texto = document.getElementById("titulo");

    texto.textContent = "Estou aprendendo DOM!";*/

    /*const paragrafo = document.querySelector(".texto");

    paragrafo.textContent = "Aprendendo JavaScript!";*/


    /*const paragrafo = document.querySelectorAll(".texto")[1]

    paragrafo.textContent = "Aprendendo Dom!"*/

    /*const cor = document.getElementById("titulo")

    cor.style.color = 'blue'*/

    /*const texto = document.getElementById("titulo")

    texto.innerHTML = "Estou aprendendo <strong>dom</strong>!."*/

    /*const t = document.getElementById("titulo")
    t.textContent = "Aula 09 concluída!."

    const p = document.querySelector(".texto")
    p.textContent = "Estou aprendendo dom!"
     
    const cor = document.getElementById("titulo")
    cor.style.color = 'blue'*/


    // Aula 10


    /*const botao = document.getElementById("botao")
    const mensagem = document.getElementById("mensagem")


    botao.addEventListener("click", function() {
        mensagem.textContent = "Você clicou no botão!"
    })*/


       /* const texto = document.getElementById("texto")

        texto.addEventListener("mouseenter", function(){
            texto.style.color = 'blue'
        })

        texto.addEventListener("mouseout", function(){
            texto.style.color = 'black'

        })*/

        /*const nome = document.getElementById("tx1")
        const resultado = document.getElementById("resultado")

        nome.addEventListener("input", function(){
            resultado.textContent = nome.value
        })*/

            /*const texto = document.getElementById("texto")

            texto.addEventListener("keydown", function(){
                window.alert("Uma tecla foi pressionada!")
            })*/

                /*const texto = document.getElementById("texto")

                texto.addEventListener("keyup", function(){
                    window.alert("Você soltou uma tecla!")
                })*/


     const nome = document.getElementById("nome") 
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
     })






