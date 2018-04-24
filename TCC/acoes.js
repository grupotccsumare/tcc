$('#btn-js').on("click", function () {
    telaPrincipal.seen = true
    telanodeOuJs.seen = false
})

$('#btn-node').on("click", function () {
    telaPrincipal.seen = true
    telanodeOuJs.seen = false
})

$('#btn-novoProjeto').on("click", function () {
    telanodeOuJs.seen = true
    telanovoOuImportar.seen = false
})