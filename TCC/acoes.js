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





$(document).ready(function () {

    $("#btn-inserir").click(function () {
      $("#div-inserir").show();
      $("#div-declarar").hide();

      $("#div-variavel").hide();
      $("#div-condicional").hide();
      $("#div-repeticao").hide();

    });
    $("#btn-declarar").click(function () {
      $("#div-declarar").show();
      $("#div-inserir").hide();

      $("#div-variavel").hide();
      $("#div-condicional").hide();
      $("#div-repeticao").hide();

    });

    $("#btn-condicional").click(function () {
      $("#div-condicional").show();
      $("#div-declarar").hide();
      $("#div-inserir").hide();
    });
    $("#btn-repeticao").click(function () {
      $("#div-repeticao").show();
      $("#div-declarar").hide();
      $("#div-inserir").hide();
    });
    $("#btn-variavel").click(function () {
      $("#div-variavel").show();
      $("#div-declarar").hide();
      $("#div-inserir").hide();
    });


  });