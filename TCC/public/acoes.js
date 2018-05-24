$('#btn-js').on("click", function () {
    telaPrincipal.seen = true
    telanodeOuJs.seen = false
    //alert('aaaa')
})

$('#btn-node').on("click", function () {
    telaPrincipal.seen = true
    telanodeOuJs.seen = false
    //alert('aaaa')
})

$('#btn-novoProjeto').on("click", function () {
    telanodeOuJs.seen = true
    telanovoOuImportar.seen = false
})




//script teleprincipal
$(document).ready(function () {

  $("#btn-condicional").click(function () {
    $("#div-condicional").show();
    $("#div-repeticao").hide();
  });
  $("#btn-repeticao").click(function () {
    $("#div-repeticao").show();
    $("#div-condicional").hide();
  });


});