let telaPrincipalTemplate = `

<!doctype html>
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>

  <style>
     * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
    }

    .row {
      display: table;
      padding-top: 2px;
      padding-right: 2px;
      padding-bottom: 2px;
      padding-left: 0px;
      width: 100%;
    }

    #banner-gradient {
      background-image: linear-gradient(45deg, rgb(122, 188, 255) 0%, rgb(96, 171, 248) 44%, rgb(64, 150, 238) 100%);
      background-position-x: initial;
      background-position-y: initial;
      background-size: initial;
      background-repeat-x: initial;
      background-repeat-y: initial;
      background-attachment: initial;
      background-origin: initial;
      background-clip: initial;
      background-color: initial;
    }

    .col:empty {
      display: table-cell;
      height: 75px;
    }

    #myForm .col:empty {
      display: table-cell;
      height: 75px;
      position: relative;
    }

    #myForm .col:empty::after {
      content: "Add form elements here";
      color: rgb(136, 136, 136);
      position: absolute;
      left: 10px;
      top: 10px;
      display: block;
      width: 400px;
    }

    nav ul a,
    nav .brand-logo {
      color: rgb(68, 68, 68);
    }

    p {
      line-height: 2rem;
    }

    .parallax-container .section {
      width: 100%;
    }

    footer.gram-footer ul.collection>li.collection-item,
    footer.gram-footer ul.collection>li.collection-header {
      background-image: initial;
      background-position-x: initial;
      background-position-y: initial;
      background-size: initial;
      background-repeat-x: initial;
      background-repeat-y: initial;
      background-attachment: initial;
      background-origin: initial;
      background-clip: initial;
      background-color: transparent;
      border-top-width: 0px;
      border-right-width: 0px;
      border-bottom-width: 0px;
      border-left-width: 0px;
      border-top-style: initial;
      border-right-style: initial;
      border-bottom-style: initial;
      border-left-style: initial;
      border-top-color: initial;
      border-right-color: initial;
      border-bottom-color: initial;
      border-left-color: initial;
      border-image-source: initial;
      border-image-slice: initial;
      border-image-width: initial;
      border-image-outset: initial;
      border-image-repeat: initial;
    }

    footer.gram-footer ul.collection {
      border-top-width: 0px;
      border-right-width: 0px;
      border-bottom-width: 0px;
      border-left-width: 0px;
      border-top-style: initial;
      border-right-style: initial;
      border-bottom-style: initial;
      border-left-style: initial;
      border-top-color: initial;
      border-right-color: initial;
      border-bottom-color: initial;
      border-left-color: initial;
      border-image-source: initial;
      border-image-slice: initial;
      border-image-width: initial;
      border-image-outset: initial;
      border-image-repeat: initial;
    }

    .input-field [type="checkbox"]+label,
    .input-field [type="radio"]:not(:checked)+label,
    .input-field [type="radio"]:checked+label {
      pointer-events: auto;
    }

    input:not([type]):focus:not([readonly]),
    input[type="text"]:not(.browser-default):focus:not([readonly]),
    input[type="password"]:not(.browser-default):focus:not([readonly]),
    input[type="email"]:not(.browser-default):focus:not([readonly]),
    input[type="url"]:not(.browser-default):focus:not([readonly]),
    input[type="time"]:not(.browser-default):focus:not([readonly]),
    input[type="date"]:not(.browser-default):focus:not([readonly]),
    input[type="datetime"]:not(.browser-default):focus:not([readonly]),
    input[type="datetime-local"]:not(.browser-default):focus:not([readonly]),
    input[type="tel"]:not(.browser-default):focus:not([readonly]),
    input[type="number"]:not(.browser-default):focus:not([readonly]),
    input[type="search"]:not(.browser-default):focus:not([readonly]),
    textarea.materialize-textarea:focus:not([readonly]) {
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: orange;
      box-shadow: orange 0px 1px 0px 0px;
    }

    #contact input#your-email {
      color: rgb(255, 255, 255);
    }

    #contact textarea#your-message {
      color: rgb(255, 255, 255);
    }

    .icon-block .material-icons {
      font-size: inherit;
    }

    footer.page-footer {
      margin-top: 0px;
      margin-right: 0px;
      margin-bottom: 0px;
      margin-left: 0px;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin-top: 0px;
      margin-right: 0px;
      margin-bottom: 0px;
      margin-left: 0px;
    }

    #ix2y4m {
      height: 100%;
    }

    .red {
      width: 100%;
    }

    .blue {
      float: right;
      width: 100%;
    }

    @media only screen and (max-width: 992px) {
      .parallax-container .section {
        position: absolute;
        top: 40%;
      }
      #index-banner .section {
        top: 10%;
      }
    }

    @media only screen and (max-width: 600px) {
      #index-banner .section {
        top: 0px;
      }
    }

    @media (max-width: 480px) {
      .c3138 {
        width: 100%;
      }
      .c3138 {
        width: 100%;
      }
    }

    #btn-ok {
      background-color: green;
      color: white;
    }

    #div-declarar>button,
    #div-repeticao>button,
    #div-condicional>button {
      background-color: #2196f3;
      margin-right: 10px;

    }

    #div-inserir>button {
      background-color: red;
      margin-right: 10px;

    }

    button,
    a {
      margin-bottom: 5px;
      margin-top: 5px;
    }

    #div-declarar,
    #div-inserir,
    #div-condicional,
    #div-repeticao {
      display: none;
      text-align: center;

    }

    .c4462 {
      margin-top: 5px;
      margin-right: 0px;
      margin-bottom: 0px;
      margin-left: 0px;
      font-size: 15px;
      text-align: center;
    }


    .c4318 {
      text-align: center;
      font-size: 36px;
      margin-top: 5px;
      margin-right: 0px;
      margin-bottom: 0px;
      margin-left: 0px;
    }

    #iwjjee {
      width: 100%;
    }

    #iab7uk {
      width: 100%;
    }



    #btn-condicional {
      margin-left: -12px;
    }

    .modal .modal-content {
      padding: 14px;
    }

    #code{
      padding-top:20px;
    }
    .linkestilo:link{
      color:#FFFAFA;
      text-decoration:none;
    }
    .linkestilo:visited{
      color:#FFDEAD;
      text-decoration:none;
    }
    .linkestilo:hover{
      color:#00FF00;
      text-decoration:underline;
    }
    .linkestilo:active{
      color:#FF0000;
      text-decoration:underline;
      background-color:#000000;
    }

  </style>

</head>

<body>
  <script type="text/javascript">
    $('.modal').modal();
  </script>
  <input style="display: block" id="icon_prefix" type="text" class="validate termo"/>
  <input style="display: block" id="icon_telephone" type="tel" class="validate posicao"/>
  <a style="display: block" class="btn waves-effect waves-light black adicionar">adicionar<br/></a>
  <a style="display: block" class="btn waves-effect waves-light black excluir">excluir<br data-highlightable="1"/></a>
  
  <div id="modal1" class="modal modal-fixed-footer black-text c3138 ">
    <div class="modal-content ">
      <div class="row div-botoes">
        <div class="col m6 btn-condicional  ">
          <a id="btn-condicional" class="btn waves-light blue btn-classe">CONDICIONAL</a>
        </div>
        <div class="col m6 btn-repeticao ">
          <a id="btn-repeticao" class="btn waves-light blue ">REPETIÇÃO</a>
        </div>
      </div>
      <hr/>

      <div id="modal-body">
        <div id="div-condicional">
          <button type="button" id="btn-if" class="btn btn-info btn-lg modal-close" v-on:click="say('if')" >IF</button>
          <button type="button" id="btn-switch" class="btn btn-info btn-lg modal-close" v-on:click="say('switch')" >SWITCH</button>
        </div>
        <div id="div-repeticao">
          <button type="button" id="btn-for" class="btn btn-info btn-lg modal-close" v-on:click="say('for')">FOR</button>
          <button type="button" id="btn-while" class="btn btn-info btn-lg modal-close" v-on:click="say('while')">WHILE</button>
          <button type="button" id="btn-doWhile" class="btn btn-info btn-lg modal-close"v-on:click="say('do while')" >DO WHILE</button>
        </div>

      </div>
    </div>
  
  </div>

  <script type="text/javascript">
    $('.modal').modal();
  </script>
  <div class="fixed-action-btn horizontal click-to-toggle">
    <a href="#modal1" class="btn-floating btn-large     modal-trigger green">
      <i class="material-icons">code
      </i>
    </a>
  </div>
  <div id="ix2y4m" class="row">
  <div id="code"><div>
  </div>
  <!-- this page is generateded by Gramateria -->
  
</body>

</html>

`;





let telaPrincipal = new Vue({
  el: "#telaprincipal",
  data: {
    template: telaPrincipalTemplate,
    seen: true
  }
});

let app = new Vue({
  el: "#modal-body",
  methods: {
    say: function (message) {
      $(".termo").val(message);
      $(".adicionar").trigger("click");
    }
  }
});

///////////////////////////////////////////////////////////////////////////////

let divCodigo = $('#code')
let inputPosicao = $('.posicao')
let inputToken = $('.termo')
let botaoAdicionar = $('.adicionar')
let botaoExcluir = $('.excluir')
let arrayTokens = []

/////////////////////////////////////////////////////////////////////////////////

let escreverCodigoNaTela = function (viewCodigo, codigoProcessado) {
  viewCodigo.empty();
  viewCodigo.append(codigoProcessado)
  carregarClick($('.posicaoArray'))
}

//////////////////////////////////////////////////////////////////////////////////

let manipuladorDoArrayCodigo = function (arrayCode, posicaoQueSeraInseridoNoArray, tokemQueSeraInseridoNoArray, quantidadeDeElementosDoArrayQueSeramExcluidos) {
  arrayCode.splice(posicaoQueSeraInseridoNoArray, quantidadeDeElementosDoArrayQueSeramExcluidos, tokemQueSeraInseridoNoArray);
  escreverCodigoNaTela(divCodigo, arrayToHTML(arrayCode))
}

//////////////////////////////////////////////////////////////////////////////////

let snippets = function (arrayTokens, arraySnippet) {
  let posicao = Number(inputPosicao.val())
  arraySnippet.forEach(function (elemento) {
    manipuladorDoArrayCodigo(arrayTokens, posicao, elemento, 0)
    posicao++
  })
}


//////////////////////////////////////////////////////////////////////////////////

let arrayToHTML = function (arrayCode) {
  let posicaoCodigo = 0
  return arrayCode.reduce(function (acumulador, atual) {
    
    if (atual == '{') {
      let className = `class='posicaoArray ${posicaoCodigo}'`
      acumulador += `<span ${className}>${atual}</span><br><br>`
      posicaoCodigo++
    } else {
      let className = `class='posicaoArray ${posicaoCodigo}'`
      acumulador += `<span ${className}>${atual}</span>`
      posicaoCodigo++
    }
    return acumulador
  }, "")
}

/////////////////////////////////////////////////////////////////////////////////

let carregarClick = function (elementoClicavel) {
  let posicaoArray = elementoClicavel
  posicaoArray.on('click', function (eventoClick) {
    let classDoClick = eventoClick.target.classList.value;
    classDoClick.split(" ").forEach(function (elementoDoArray) {
      let elementoStringConvertidoParaNumber = Number(elementoDoArray);
      if (!Number.isNaN(elementoStringConvertidoParaNumber)) {
        inputPosicao.val(elementoStringConvertidoParaNumber)
      }
    });
  })
}

//////////////////////////////////////////////////////////////////////////////////

botaoAdicionar.on('click', function () {
  let token = inputToken.val()
  if (token == 'if') {
    snippets(arrayTokens, ['if', '(', ')', '{', '***','}'])
  } else if (token == 'function') {
    snippets(arrayTokens, ['function', prompt('nome da função'), '(', ')', '{', '<br>', '<br>', '}'])
  } else if (token == 'for') {
    snippets(arrayTokens, ['for', '(', prompt('primeiro parametro'), prompt('segundo parametro'), prompt('terceiro parametro'), ')', '{', '<br>', '<br>', '}'])
  } else if (token == 'while') {
    snippets(arrayTokens, ['while', '(', ')', '{', '<br>', '<br>', '}'])
  } else if (token == 'do while') {
    snippets(arrayTokens, ['do', '{', '<br>', '<br>', '}', 'while', '(', ')'])
  } else if (token == 'switch') {
    snippets(arrayTokens, ['switch', '(', ')', '{', '}', '<br>', 'case', '<br>', '<br>', 'break', '<br>', 'default'])
  } else {
    manipuladorDoArrayCodigo(arrayTokens, Number(inputPosicao.val()), inputToken.val(), 0)
  }
})

//////////////////////////////////////////////////////////////////////////////////

botaoExcluir.on("click", function () {
  let posicaoQueSeraRetirada = Number(inputPosicao.val())
  let arrayCode = arrayTokens
  arrayCode.splice(posicaoQueSeraRetirada, 1)
  escreverCodigoNaTela(divCodigo, arrayToHTML(arrayCode))
});

/*
  $(".excluir").on("click", function() {
    appTcc["posicao"] = Number($(".posicao").val()); 
    appTcc["main"].splice(appTcc["posicao"], 1); 
   
    render();
    carregarClique();
  });

  let arrayToHTML = function (arrayCode) {
  let posicaoCodigo = 0
  return arrayCode.reduce(function (acumulador, atual) {
    let className = ''
    if (atual == '}' || atual == 'if' || atual == '{' || atual == ')' || atual == '<br>' || atual == ';') {
      className = `class='posicaoArray ${posicaoCodigo}'`
      acumulador += `<span ${className}>${atual}</span>`
      posicaoCodigo++
    } else {
      className = `class='posicaoArray ${posicaoCodigo}'`
      acumulador += `<span ${className}>${atual}</span>`
      posicaoCodigo++
      className = `class='posicaoArray ${posicaoCodigo}'`
      acumulador += `<span ${className}> *** </span>`
      posicaoCodigo++
    }
    return acumulador
  }, "")
}
*/