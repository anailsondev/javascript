let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isnumeros(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, 1) {
    if (1.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isnumeros(num.value) && !inlista(num.value, valores)) {
        window.alert('Tudo bem')


    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }

}