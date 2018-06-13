




//script teleprincipal
$(document).ready(function () {
  $("#btn-condicional").click(function () {
    $("#div-condicional").show();
    $(".div-voltar").show();
    $(".div-botoes").hide();
    $("#div-repeticao").hide();
    $("#div-declaracao").hide();
    $("#div-funcao").hide();
    $("#div-objeto").hide();
    $("#div-escrever").hide();
  });
  $("#btn-repeticao").click(function () {
    $("#div-repeticao").show();
    $(".div-voltar").show();
    $(".div-botoes").hide();
    $("#div-condicional").hide();
    $("#div-declaracao").hide();
    $("#div-funcao").hide();
    $("#div-objeto").hide();
    $("#div-escrever").hide();
  });
  
  $("#btn-declaracao").click(function () {
    $("#div-declaracao").show();
    $(".div-voltar").show();
    $(".div-botoes").hide();
    $("#div-condicional").hide();
    $("#div-repeticao").hide();
    $("#div-funcao").hide();
    $("#div-objeto").hide();
    $("#div-escrever").hide();
  });
  
  $("#btn-funcao").click(function () {
    $("#div-funcao").show();
    $(".div-voltar").show();
    $(".div-botoes").hide();
    $("#div-condicional").hide();
    $("#div-repeticao").hide();
    $("#div-declaracao").hide();
    $("#div-objeto").hide();
    $("#div-escrever").hide();
  });
  
  $("#btn-obj").click(function () {
    $("#div-objeto").show();
    $(".div-voltar").show();
    $(".div-botoes").hide();
    $("#div-condicional").hide();
    $("#div-repeticao").hide();
    $("#div-declaracao").hide();
    $("#div-funcao").hide();
    $("#div-escrever").hide();
   
  });

  $("#btn-escrever").click(function () {
    $("#div-escrever").show();
    $(".div-voltar").show();
    $(".div-botoes").hide();
    $("#div-condicional").hide();
    $("#div-repeticao").hide();
    $("#div-declaracao").hide();
    $("#div-funcao").hide();
    $("#div-objeto").hide();

  });
  
  $("#btn-voltar").click(function () {
    $(".div-botoes").show();
    $(".div-voltar").hide();
    $("#div-condicional").hide();
    $("#div-repeticao").hide();
    $("#div-declaracao").hide();
    $("#div-funcao").hide();
    $("#div-objeto").hide();
    $("#div-escrever").hide();
  });
  
  
  });

/**/ 
$(document).ready(function () {
  $("#input-funcao").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
  });
  });