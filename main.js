novatag = function (tag) {
    return document.createElement(tag)
}

add = function (tag) {
    return app.appendChild(tag)
}

document.write('')
codigos = []

app = novatag('div')
app.id = "app"

divCodigo = novatag('div')
divCodigo.id = 'divCodigo'

let divControles = novatag('div')
divControles.id = 'divControles'

let inputBtn = document.createElement('input')

divControles.appendChild(inputBtn)

let inputPonteiro = document.createElement('input')

divControles.appendChild(inputPonteiro)

let btnEnvia = document.createElement('input')
btnEnvia.type = 'button'
btnEnvia.value = 'ok'
btnEnvia.addEventListener('click', function () {
    console.log('ok')
})
divControles.appendChild(btnEnvia)

document.append(app)

add(divCodigo)
add(divControles)