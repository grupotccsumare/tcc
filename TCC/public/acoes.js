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

/*29/05
adicionei o função q abre a div de funções e apliquei mais um .hide() nos outros botoes
*/ 


//script teleprincipal
$(document).ready(function () {
  $("#btn-condicional").click(function () {
    $("#div-condicional").show();
    $("#div-repeticao").hide();
    $("#div-declaracao").hide();
    $("#div-funcao").hide();
    $("#div-objeto").hide();
    $("#div-escrever").hide();
  });
  $("#btn-repeticao").click(function () {
    $("#div-repeticao").show();
    $("#div-condicional").hide();
    $("#div-declaracao").hide();
    $("#div-funcao").hide();
    $("#div-objeto").hide();
    $("#div-escrever").hide();
  });
  
  $("#btn-declaracao").click(function () {
    $("#div-declaracao").show();
    $("#div-condicional").hide();
    $("#div-repeticao").hide();
    $("#div-funcao").hide();
    $("#div-objeto").hide();
    $("#div-escrever").hide();
  });
  
  $("#btn-funcao").click(function () {
    $("#div-funcao").show();
    $("#div-condicional").hide();
    $("#div-repeticao").hide();
    $("#div-declaracao").hide();
    $("#div-objeto").hide();
    $("#div-escrever").hide();
  });
  
  $("#btn-obj").click(function () {
    $("#div-objeto").show();
    $("#div-condicional").hide();
    $("#div-repeticao").hide();
    $("#div-declaracao").hide();
    $("#div-funcao").hide();
    $("#div-escrever").hide();
   
  });

  $("#btn-escrever").click(function () {
    $("#div-escrever").show();
    $("#div-condicional").hide();
    $("#div-repeticao").hide();
    $("#div-declaracao").hide();
    $("#div-funcao").hide();
    $("#div-objeto").hide();
  });
  
  
  
  });

/**/ 