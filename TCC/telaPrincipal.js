let telaPrincipalTemplate = `

<!doctype html>
<html>

<head>
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>

  <style>
    # * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
    }

    .row {
      display: table;
      padding-top: 2px;
      padding-right: 10px;
      padding-bottom: 2px;
      padding-left: 10px;
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
    #div-repeticao,
    #div-variavel {
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

      #iwjjee{
	width:100%;
  }
  #iab7uk{
	width:100%;
  }
  </style>

</head>

<body>
  <script type="text/javascript">
    $('.modal').modal();
  </script>
  <div id="modal1" class="modal modal-fixed-footer black-text c3138">
    <div class="modal-content">
      <div class="row">
        <div class="col m6">
          <a id="btn-declarar" class="btn waves-light blue">DECLARAR</a>
        </div>
        <div class="col m6">
          <a id="btn-inserir" class="btn waves-light red">INSERIR</a>
        </div>
      </div>
      <hr/>
      <div id="modal-body">
        <div id="div-declarar">

          <button type="button" id="btn-trycatch" class="btn btn-info btn-lg">TRY CATCH</button>
          <button type="button" id="btn-condicional" class="btn btn-info btn-lg">CONDICIONAL</button>
          </br>
          <button type="button" id="btn-repeticao" class="btn btn-info btn-lg">REPETICAO</button>
          <button type="button" id="btn-variavel" class="btn btn-info btn-lg">VARÍAVEL</button>

        </div>

        <div id="div-inserir">

          <button type="button" id="btn-objeto" class="btn btn-danger btn-lg">OBJETO</button>
          <button type="button" id="btn-operadores" class="btn btn-danger btn-lg">OPERADORES</button>
          <button type="button" id="btn-palavrasReservadas" class="btn btn-danger btn-lg">PALAVRAS RESERVADAS</button>

        </div>

        <!--declarar-->
        <div id="div-condicional">
          <button type="button" id="btn-if" class="btn btn-info btn-lg">IF</button>
          <button type="button" id="btn-switch" class="btn btn-info btn-lg">SWITCH</button>
        </div>
        <div id="div-repeticao">
          <button type="button" id="btn-for" class="btn btn-info btn-lg">FOR</button>
          <button type="button" id="btn-while" class="btn btn-info btn-lg">WHILE</button>
          <button type="button" id="btn-doWhile" class="btn btn-info btn-lg">DO WHILE</button>
        </div>
        <div id="div-variavel">

          <div class- "row">
            <div class="c4318">VARÍAVEL
            </div>
            <div class="c4462">TIPO DE DECLARAÇÃO
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">

              <input name="group1" type="radio" id="test1" />
              <label for="test1">VAR</label>

              <input name="group1" type="radio" id="test2" />
              <label for="test2">LET</label>

              <input name="group1" type="radio" id="test3" class="with-gap" />
              <label for="test3">CONST</label>

            </div>
          </div>
          <div class="row">
            <div id="iwjjee" class="input-field col s6">
              <input id="icon_prefix" type="text" class="validate" />
              <label for="icon_prefix">NOME DA DECLARAÇÃO</label>
            </div>
            <div id="iab7uk" class="input-field col s6 c8609">
              <input type="text" class="validate" />
              <label for="icon_prefix">VALOR DA DECLARAÇÃO</label>
            </div>
          </div>









        </div>

        <!--inserir-->





      </div>
    </div>
    <div class="modal-footer">
      <a id="btn-ok" href="#!" class="modal-action modal-close waves-green btn-flat">OK</a>
    </div>
  </div>

  <script type="text/javascript">
    $('.modal').modal();
  </script>
  <div class="fixed-action-btn horizontal click-to-toggle">
    <a href="#modal1" class="btn-floating btn-large   modal-trigger green">
      <i class="material-icons">code
      </i>
    </a>
  </div>
  <div id="ix2y4m" class="row">
  </div>
  <!-- this page is generateded by Gramateria -->
</body>

</html>

`

var telaPrincipal = new Vue({
	el: '#telaprincipal',
	data : {
		template : telaPrincipalTemplate,
		seen : false
	}
})