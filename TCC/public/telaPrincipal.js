let telaPrincipalTemplate = `

<!doctype html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>

<style>
        /* --------*/

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
        #div-repeticao,
        #div-declaracao,
        #div-funcao,
        .div-voltar,
        #div-obj,
        #div-escrever,
        #div-obj-date {
            display: none;
            text-align: center;

        }

        .c4462 {
            margin-top: 5px;
            margin-right: 0px;
            margin-bottom: 0px;
            margin-left: 0px;
            font-size: 15px;

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

        .mesmo-tamanho {
            width: 50%;
            white-space: normal;
        }

        #btn-condicional {
            margin-left: -12px;
        }

        .modal .modal-content {
            padding: 14px;
        }

    

        #btn-opcoes {
            margin-bottom: 35px;
        }

        /*acrecentar a div para os operadores*/

        #div-operadores {}

        .toolbar-fixed {
            width: 100%;
            padding: 0;
            height: 50px;
            position: fixed;
            bottom: 0px;
        }

        .toolbar-fixed.active>ai {
            opacity: 0;
        }

        .toolbar-fixed ul {
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            top: 0;
            bottom: 0;
        }

        .toolbar-fixed ul li {
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
            display: inline-block;

            height: 100%;
            transition: none;
            position: relative;
            top: -15px;
        }

        .toolbar-fixed ul li a {
            display: block;
            overflow: hidden;
            position: relative;
            width: 100%;
            height: 100%;
            background-color: transparent;
            box-shadow: none;
            color: #fff;
            line-height: 56px;
            z-index: 1;
        }

        .toolbar-fixed ul li ai {
            line-height: inherit;
        }

        .toolbar-fixed ul {
            left: 0;
            right: 0;
            text-align: center;
        }

        .toolbar-fixed ul li {
            margin-bottom: 15px;
        }

        #code {
            margin: 1px;
        }

        .concertaTextoCondicional {
            margin-left: -10px;
        }

        #div-declaracao button {
            background-color: #2196F3;
        }


        /* @30-05 */

        #btn-executa {
            margin-top: -25px;
            margin-right: 20px;
        }

        #div-play {
            text-align: center;
        }

        #div-ferramentas {

            height: 15%;
            width: 60px;
            float: right;
        }



        #btn-ferramentas {

            float: right;
            margin-right: 5px;
        }

        .btn btn-funcoes-list{
          height:20px;;
        }


        /*08-06*/
        .selecionado:link{
            color:#FFFAFA;
            text-decoration:none;
          }
          .selecionado:visited{
            color:#FFDEAD;
            text-decoration:none;
          }
          .selecionado:hover{
            color:#00FF00;
            text-decoration:underline;
          }
          .selecionado:active{
            color:#FF0000;
            text-decoration:underline;
            background-color:#000000;
          }
          .a-escrever{
              float:right;
          }
          .tela-escreve{
              font-size:18px;
              font-family:Arial Narrow;
              padding-left:2%;
              padding-right:5%;
              padding-top:2%;
          }
          div.scrollmenu1 {
            background-color: black;
            overflow: auto;
            white-space: nowrap;
            font-size: 14px;
            position: relative;

        }

        div.scrollmenu1 a {
            display: inline-block;
            color: white;
            text-align: center;
            padding: 5px;
            text-decoration: none;
           
            height: 50px;
            width: 50px;
            margin-top: -1px;
            margin-bottom:2px;
        }
        div.scrollmenu1 body {
            margin: 0;
        }
        .footer1 {
            
            bottom: 0;
            left: 0;
            height: 50px;
            position: fixed;
            width: 100%;
        }
        .aoperadores{
            background-color: black;
        }
        .aoperadores:hover {
            background-color: white;
            color: black;
        }

        .aicons1{
            background-color: green;
        }
        .aicons2{
            background-color: red;
        }
         .aicons2:hover {
            background-color: white;
            color: red;
        }
        .aicons1:hover {
            background-color: white;
            color: green;
        }

        /*------------------12-06------
        nao selecionar---------*/
        .footer1, div-ferramentas,  #modal1, .material-icons, btn-opcoes {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
         }


         .div-voltar {
            margin-top: -25px;
            margin-right: 20px;
            text-align: center;
            height: 17px;
        }


        .cor-executar{
            color:red;
        }
    </style>

</head>

<body>
  <script type="text/javascript">
    $('.modal').modal();
  </script>

  <div id="div-ferramentas">
        <a id="btn-ferramentas" href="#" data-activates="dropdown1" class="dropdown-button btn-floating black">
            <i class="material-icons ">settings
            </i>
        </a>
        <ul id="dropdown1" class="dropdown-content">
            <li>
                <a href="#!" class="white-text black">
                    <i class="material-icons">delete_forever
                    </i>.</a>
            </li>
            <li>
                <a href="#!" class="white-text black">
                    <i class="material-icons">save
                    </i>.</a>
            </li>
            <li>
                <a href="#modal2" class="white-text modal-trigger black">
                    <i class="material-icons">list
                    </i>.</a>
            </li>
            <li>
                <a  class="white-text modal-trigger black cor-executar">
                    <i class="material-icons cor-executar">play_arrow
                    </i>.</a>
            </li>
        </ul>
    </div>
     <div id="modal2" class="modal modal-fixed-footer black-text">
        <div class="modal-content">
            <h3>Selecione</h3>
            <div class="input-field col s12">
                <select>
                    <option value="" disabled="" selected="">Escolha </option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    <option value="3">Option 4</option>
                    <option value="3">Option 5</option>
                </select>

                <label>Arquivos salvos</label>
            </div>
            <script>
                $('select').material_select();
            </script>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">OK</a>
        </div>
    </div>



    <!--08-06-->
  <div id="code" class="tela-escreve">
TESTE
    </div>

    <!-- ******** DIV HONORIO TESTE*********** -->
  <div id="telahonorio" style="display:none">
  <input style="display: block" id="icon_prefix" type="text" class="validate termo"/>
  <input style="display: block" id="icon_telephone" type="tel" class="validate posicao"/>
  <a style="display: block" class="btn waves-effect  black adicionar">adicionar<br/></a>
<a style="display: block" class="btn waves-effect  black salvar">salvar<br/></a>
  <a style="display: block" class="btn waves-effect  black selecao">selecao<br/></a>
  <a style="display: block" class="btn waves-effect  black excluir">excluir<br data-highlightable="1"/></a>
  </div>

  <!-- ********  MODAL*********** -->
  <div id="modal1" class="modal modal-fixed-footer black-text c3138 ">
  <div class="modal-content ">

      <div class="row div-botoes">
          <div class="col m6 btn-condicional  mesmo-tamanho ">
              <a id="btn-condicional" class="btn  blue btn-classe">
                  <span class="concertaTextoCondicional">CONDICIONAL</span>
              </a>
          </div>
          <div class="col m6 btn-repeticao  mesmo-tamanho">
              <a id="btn-repeticao" class="btn  blue">REPETIÇÃO</a>
          </div>
          <div class="col m6 btn-funcao mesmo-tamanho ">
              <a id="btn-funcao" class="btn blue ">FUNÇÃO</a>
          </div>
          <div class="col m6 btn-declaração mesmo-tamanho">
              <a id="btn-declaracao" class="btn  blue ">
                  <span class="concertaTextoCondicional">DECLARAÇÃO</span>
              </a>
          </div>
          <!--08-06-->
          <div class="col m6 btn-declaração mesmo-tamanho">
              <a id="btn-obj" class="btn  blue ">
                  <span class="concertaTextoCondicional">OBJETO</span>
              </a>
          </div>
          <div class="col m6 btn-declaração mesmo-tamanho">
              <a id="btn-escrever" class="btn  blue ">
                  <span class="concertaTextoCondicional">ESCREVER</span>
              </a>
          </div>
      </div>
      <!--08-06-->
      <hr/>

      <div id="modal-body">
          <div id="div-condicional">
          <h3>Condicionais</h3>
          <hr/>
              <button type="button" id="btn-if" class="btn btn-info btn-lg modal-close" v-on:click="say('if')">IF</button>
              <button type="button" id="btn-switch" class="btn btn-info btn-lg modal-close" v-on:click="say('switch')">SWITCH</button>
          </div>
          <div id="div-repeticao">
          <h3>Repetições</h3>
          <hr/>
              <button type="button" id="btn-for" class="btn btn-info btn-lg modal-close" v-on:click="say('for')">FOR</button>
              <button type="button" id="btn-while" class="btn btn-info btn-lg modal-close" v-on:click="say('while')">WHILE</button>
              <button type="button" id="btn-doWhile" class="btn btn-info btn-lg modal-close" v-on:click="say('do while')">DO WHILE</button>
          </div>
          <div id="div-declaracao">
          <h3>Declarações</h3>
          <hr/>
              <button type="button" id="btn-const" class="btn btn-info btn-lg modal-close " v-on:click="say('const')">CONST</button>
              <button type="button" id="btn-let" class="btn btn-info btn-lg modal-close " v-on:click="say('let')">LET</button>
              <button type="button" id="btn-var" class="btn btn-info btn-lg modal-close " v-on:click="say('var')">VAR</button>
          </div>
          <!--*************FUNCOES****************--> 
          <div id="div-funcao">
          <h3>Funções</h3>
          <hr/>
              <div class="row">
                  <div class="input-field col s12">
                      <i class="material-icons prefix">search
                      </i>
                      <input class="input-filter" type="text" class="validate" />
                      <label for="icon_prefix">Função</label>
                  </div>
              </div>
              <div id="div-funcao-lista">
                  <table class="responsive-table centered striped highlight bordered">

                      <!--corpo-->
                      <tbody class="myTable">
                          <tr>
                              <td v-on:click="say('prompt')"  class="modal-close"> prompt
                              </td>
                          </tr>
                          <tr>
                              <td v-on:click="say('print')" class="modal-close">print
                              </td>
                          </tr>
                          <tr>
                              <td v-on:click="say('releaseEvents')" class="modal-close">releaseEvents
                              </td>
                          </tr>
                          <tr>
                              <td  v-on:click="say('event')" class="modal-close">event
                              </td>
                          </tr>
                          <tr>
                              <td v-on:click="say('error')" class="modal-close">error
                              </td>
                          </tr>
                          <tr>
                              <td v-on:click="say('number')" class="modal-close">number
                              </td>
                          </tr>
                          <tr>
                              <td v-on:click="say('node')" class="modal-close">node
                              </td >
                          </tr>
                          <tr>
                              <td v-on:click="say('iframe')" class="modal-close">iframe
                              </td>
                          </tr>
                          <tr>
                              <td v-on:click="say('bluer')" class="modal-close">bluer
                              </td>
                          </tr>
                          <tr>
                              <td v-on:click="say('close')" class="modal-close">close
                              </td>
                          </tr>
                          <tr>
                              <td v-on:click="say('clearTimeout')" class="modal-close">clearTimeout
                              </td>
                          </tr>
                          <tr>
                              <td v-on:click="say('clearInterval')" class="modal-close">clearInterval
                              </td>
                          </tr>
                          <tr>
                              <td v-on:click="say('focus')" class="modal-close">focus
                              </td>
                          </tr>
                          <tr>
                              <td v-on:click="say('find')" class="modal-close">find
                              </td>
                          </tr>
                          <tr>
                              <td v-on:click="say('moveTo')" class="modal-close">moveTo
                              </td>
                          </tr>
                          <tr>
                              <td v-on:click="say('moveBy')" class="modal-close">moveBy
                              </td>
                          </tr>
                          <tr>
                              <td v-on:click="say('resizeTo')" class="modal-close">resizeTo
                              </td>
                          </tr>
                          <tr>
                              <td v-on:click="say('resizeBy')" class="modal-close">resizeBy
                              </td>
                          </tr>
                          <tr>
                              <td v-on:click="say('scroll')" class="modal-close">scroll
                              </td>
                          </tr>
                          <tr>
                              <td v-on:click="say('open')" class="modal-close">open
                              </td>
                          </tr>
                          <tr>
                              <td v-on:click="say('openDatabase')" class="modal-close">openDatabase
                              </td>
                          </tr>
                      </tbody>
                  </table>

              </div>
          </div> 
          <!--*************OBJETO****************-->  
          <div id="div-obj">
          <h3>Objetos</h3>
          <hr/>
          <div class="row">
              <div class="input-field col s12">
                  <i class="material-icons prefix">search
                  </i>
                  <input class="input-filter" id="input-obj" type="text" class="validate" />
                  <label for="icon_prefix">Objeto</label>
              </div>
          </div>
          <div class="div-funcao-lista">
              <table class="responsive-table centered striped highlight bordered">
                  <!--corpo-->
                  <tbody class="myTable">
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-date" class="btn  blue ">
                                      <span class="concertaTextoCondicional">Date</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-date" class="btn  blue ">
                                      <span class="concertaTextoCondicional">Math</span>
                                  </a>
                              </div>
                          </td>
                      </tr>

                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-number" class="btn  blue ">
                                      <span class="concertaTextoCondicional">Number</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-regExp" class="btn  blue ">
                                      <span class="concertaTextoCondicional">RegExp</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-String" class="btn  blue ">
                                      <span class="concertaTextoCondicional">String</span>
                                  </a>
                              </div>
                          </td>
                      </tr>

                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-Object" class="btn  blue ">
                                      <span class="concertaTextoCondicional">Object</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-Function" class="btn  blue ">
                                      <span class="concertaTextoCondicional">Function</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-Symbol" class="btn  blue ">
                                      <span class="concertaTextoCondicional">Symbol</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-Error" class="btn  blue ">
                                      <span class="concertaTextoCondicional">Error</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-InternalError" class="btn  blue ">
                                      <span class="concertaTextoCondicional">InternalError</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-InternalError" class="btn  blue ">
                                      <span class="concertaTextoCondicional">InternalError</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-RangeError" class="btn  blue ">
                                      <span class="concertaTextoCondicional">RangeError</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-Array" class="btn  blue ">
                                      <span class="concertaTextoCondicional">Array</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-Map" class="btn  blue ">
                                      <span class="concertaTextoCondicional">Map</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-Set" class="btn  blue ">
                                      <span class="concertaTextoCondicional">Set</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-WeakMap" class="btn  blue ">
                                      <span class="concertaTextoCondicional">WeakMap</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-WeakSet" class="btn  blue ">
                                      <span class="concertaTextoCondicional">WeakSet</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-WeakSet" class="btn  blue ">
                                      <span class="concertaTextoCondicional">ArrayBuffer</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-WeakSet" class="btn  blue ">
                                      <span class="concertaTextoCondicional">DataView</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-WeakSet" class="btn  blue ">
                                      <span class="concertaTextoCondicional">JSON</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-Promise" class="btn  blue ">
                                      <span class="concertaTextoCondicional">Promise</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-Generator" class="btn  blue ">
                                      <span class="concertaTextoCondicional">Generator</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-Reflect" class="btn  blue ">
                                      <span class="concertaTextoCondicional">Reflect</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-Proxy" class="btn  blue ">
                                      <span class="concertaTextoCondicional">Proxy</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-Intl" class="btn  blue ">
                                      <span class="concertaTextoCondicional">Intl</span>
                                  </a>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div class="col m10 ">
                                  <a id="btn-obj-Iterator" class="btn  blue ">
                                      <span class="concertaTextoCondicional">Iterator</span>
                                  </a>
                              </div>
                          </td>
                      </tr>


                  </tbody>
              </table>

          </div>
      </div>

      <!--***********OBJ DATE********** -->
      <div id="div-obj-date">
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">search
                            </i>
                            <input class="input-filter"  id="input-date" type="text" class="validate" />
                            <label for="icon_prefix">Date</label>
                        </div>
                    </div>
                    <table class="responsive-table centered striped highlight bordered">
                        <!--corpo-->
                        <tbody class="myTable">
                            <tr>
                                <td v-on:click="say('value')" class="modal-close"> value
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('dataString')" class="modal-close">dataString
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('month')" class="modal-close">month
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('day')" class="modal-close">day

                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('hour')" class="modal-close">hour
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('minute')" class="modal-close">minute
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('second')" class="modal-close">second
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('millisecond')" class="modal-close">millisecond
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('now()')" class="modal-close">now()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('close()')" class="modal-close">parse()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('UTC()')" class="modal-close">UTC()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.getDate()')" class="modal-close">prototype.getDate()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.getDay()')" class="modal-close">prototype.getDay()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.getFullYear()')" class="modal-close">prototype.getFullYear()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.getHours()')" class="modal-close">prototype.getHours()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.getMilliseconds()')" class="modal-close">prototype.getMilliseconds()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.getMinutes()')" class="modal-close">prototype.getMinutes()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.getMonth()')" class="modal-close">prototype.getMonth()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.getSeconds()')" class="modal-close">prototype.getSeconds()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.getTime()')" class="modal-close">prototype.getTime()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.getTimezoneOffset()')" class="modal-close">prototype.getTimezoneOffset()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.getUTCDate()')" class="modal-close">prototype.getUTCDate()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.getUTCDay()')" class="modal-close">prototype.getUTCDay()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.getUTCFullYear()')" class="modal-close">prototype.getUTCFullYear()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.getUTCHours()')" class="modal-close">prototype.getUTCHours()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.xgetUTCMilliseconds()')" class="modal-close">prototype.getUTCMilliseconds()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.getUTCMinutes()')" class="modal-close">prototype.getUTCMinutes()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.getUTCMonth()')" class="modal-close">prototype.getUTCMonth()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.getUTCSeconds()')" class="modal-close">prototype.getUTCSeconds()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.setDate()')" class="modal-close">prototype.setDate()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.setFullYear()')" class="modal-close">prototype.setFullYear()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.setHours()')" class="modal-close">prototype.setHours()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.setMilliseconds()')" class="modal-close">prototype.setMilliseconds()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.setMinutes()')" class="modal-close">prototype.setMinutes()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.setMonth()')" class="modal-close">prototype.setMonth()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.setSeconds()')" class="modal-close">prototype.setSeconds()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.setTime()')" class="modal-close">prototype.setTime()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.setUTCDate()')" class="modal-close">prototype.setUTCDate()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.setUTCHours()')" class="modal-close">prototype.setUTCHours()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.setUTCMilliseconds()')" class="modal-close">prototype.setUTCMilliseconds()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.setUTCMinutes()')" class="modal-close">prototype.setUTCMinutes()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.setUTCMonth()')" class="modal-close">prototype.setUTCMonth()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.setUTCSeconds()')" class="modal-close">prototype.setUTCSeconds()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.toDateString()')" class="modal-close">prototype.toDateString()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.toISOString()')" class="modal-close">prototype.toISOString()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.toJSON()')" class="modal-close">prototype.toJSON()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.toLocaleDateString()')" class="modal-close">prototype.toLocaleDateString()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.toLocaleString()')" class="modal-close">prototype.toLocaleString()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.toLocaleTimeString()')" class="modal-close">prototype.toLocaleTimeString()
                                </td>
                            </tr>
                            <tr>
                                <td v-on:click="say('prototype.valueOf()')" class="modal-close">prototype.valueOf()
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
         
          <div id="div-escrever" >
          <h3>Escrever</h3>
          <hr/>
          <div class="row">
              <div class="input-field col s12">
                  <i class="material-icons prefix">search
                  </i>
                  <input id="input-funcao" type="text" class="validate" />
                  <label for="icon_prefix">escrever</label>
                    <a class="btn-floating btn-large blue a-escrever modal-close"><i class="material-icons">done
                    </i></a>
              </div>
              
        
          </div>
          <!--08-06-->
          
          
      </div>

         
          
          </div>
      
          </div>



  <!--@30-05-->
  <div class="modal-footer" id="div-play">
  <!--***********12-06********-->
  <div class="row div-voltar">
      <a id="btn-voltar" class="btn-floating btn-large   green ">
          <i class="large material-icons">home
          </i>
      </a>
  </div>
  </div>
</div>
  
  
 

  <script type="text/javascript">
    $('.modal').modal();
  </script>
  <!-- ******** BOTAO  PARA ABRIR O MODAL*********** -->
  <div id="btn-opcoes" class="fixed-action-btn horizontal click-to-toggle">
        <a href="#modal1" class="btn-floating btn-large  modal-trigger green">
            <i class=" medium material-icons">add
            </i>
        </a>
    </div>
  

  <!-- *****      div operadores ******-->
  <div class="footer1">
        <div class="  scrollmenu1">
            <a class=" aicons1">
                <i class="material-icons selecao" >adjust</i>
            </a>

            <a class="  aicons2">
                <i class="material-icons excluir">delete</i>
            </a>
            <a class=" aoperadores" v-on:click=".">
                <i class="material-icons">.</i>
            </a>
            <a class="aoperadores " v-on:click="say('( )')">
                <i class="material-icons">( )</i>
            </a>
            <a class=" aoperadores" v-on:click="say('[ ])">
                <i class="material-icons">[ ]</i>
            </a>
            <a class="aoperadores " v-on:click="say('{ }')">
                <i class="material-icons">{ }</i>
            </a>
            <a class="aoperadores " v-on:click="say('=')">
                <i class="material-icons">=</i>
            </a>
            <a class=" aoperadores" v-on:click="say(':')">
                <i class="material-icons">:</i>
            </a>
            <a class=" aoperadores" v-on:click="say('\"\"')">
                <i class="material-icons">" "</i>
            </a>

            <a class="aoperadores " v-on:click="say('\'\'')">
                <i class="material-icons">' '</i>
            </a>
            <a class="aoperadores " v-on:click="say(',')">
                <i class="material-icons">,</i>
            </a>

            <a class=" aoperadores" v-on:click="say(';')">
                <i class="material-icons">;</i>
            </a>
            <a class=" aoperadores" v-on:click="say('/')">
                    <i class="material-icons">/</i>
            </a>
            <a class=" aoperadores" v-on:click="say('\\')">
                    <i class="material-icons">\\</i>
            </a>
            <a class=" aoperadores" v-on:click="say('*')">
                    <i class="material-icons">*</i>
            </a>
            <a class=" aoperadores" v-on:click="say('-')">
                    <i class="material-icons">-</i>
            </a>
            <a class=" aoperadores" v-on:click="say('+')">
                    <i class="material-icons">+</i>
            </a>
            <a class=" aoperadores" v-on:click="say('?')">
                    <i class="material-icons">?</i>
            </a>
            <a class=" aoperadores" v-on:click="say('!')">
                    <i class="material-icons">!</i>
            </a>
            <a class=" aoperadores" v-on:click="say('%')">
                    <i class="material-icons">%</i>
            </a>
            <a class=" aoperadores" v-on:click="say('$')">
                    <i class="material-icons">$</i>
            </a>
            <a class=" aoperadores" v-on:click="say('#')">
                    <i class="material-icons">#</i>
            </a>
            <a class=" aoperadores" v-on:click="say('@')">
                    <i class="material-icons">@</i>
            </a>
            <a class=" aoperadores" v-on:click="say('&')">
                    <i class="material-icons">&</i>
            </a>
            <a class=" aoperadores" v-on:click="say('|')">
                    <i class="material-icons">|</i>
            </a>
            <a class=" aoperadores" v-on:click="say('<')">
                    <i class="material-icons"><</i>
            </a>
            <a class=" aoperadores" v-on:click="say('>')">
                    <i class="material-icons">></i>
            </a>
            <a class=" aoperadores" v-on:click="say('break')">
                    <i class="material-icons"></i>break</i>
            </a>
            <a class=" aoperadores" v-on:click="say('return')">
                    <i class="material-icons"></i>return</i>
            </a>
            <a class=" aoperadores" v-on:click="say('continue')">
                    <i class="material-icons"></i>continue</i>
            </a>
            <a class=" aoperadores" v-on:click="say('typeof')">
                    <i class="material-icons" v-on:click="say('typeof')"></i>typeof</i>
            </a>
            <a class=" aoperadores" v-on:click="say('finally')">
                    <i class="material-icons"></i>finally</i>
            </a>

        </div>
    </div>
  
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
let botaoSalvar = $('.salvar')
let arrayTokens = []

//arrayTokens = JSON.parse(localStorage.getItem("code"))



/////////////////////////////////////////////////////////////////////////////////

let escreverCodigoNaTela = function (viewCodigo, codigoProcessado) {
    viewCodigo.empty();
    viewCodigo.append(codigoProcessado)
    carregarClick($('.posicaoArray'), $('.selecionado'))
}

//////////////////////////////////////////////////////////////////////////////////

let manipuladorDoArrayCodigo = function (arrayCode, posicaoQueSeraInseridoNoArray, tokemQueSeraInseridoNoArray, quantidadeDeElementosDoArrayQueSeramExcluidos) {
    arrayCode.splice(posicaoQueSeraInseridoNoArray, quantidadeDeElementosDoArrayQueSeramExcluidos, tokemQueSeraInseridoNoArray);
    escreverCodigoNaTela(divCodigo, arrayToHTML(arrayCode))
    inputPosicao.val(posicaoQueSeraInseridoNoArray)
}

//////////////////////////////////////////////////////////////////////////////////

let snippets = function (arrayTokens, arraySnippet) {
    let posicao = Number(inputPosicao.val()) + 1
    arraySnippet.forEach(function (elemento) {
        manipuladorDoArrayCodigo(arrayTokens, posicao, elemento, 0)
        posicao++
    })
}


//////////////////////////////////////////////////////////////////////////////////

function arrayToHTML(arrayCode) {
    console.log(arrayCode)
    localStorage.setItem("code", JSON.stringify(arrayCode));
    console.log(arrayTokens)
    let chaves = 0
    return arrayCode.reduce(function (acumulador, atual, index) {

        if (atual == '{') {
            console.log(chaves++)
            let className = `class='selecionado posicaoArray ${index}'`
            acumulador += `<span>${atual}</span><br>`
            for (let i = 0; i < chaves; i++)
                acumulador += `<span class="tab">-----</span>`
            acumulador += `<span ${className}> * </span>`
        } else if (atual == ';') {
            let className = `class='selecionado posicaoArray ${index}'`
            acumulador += `<span>${atual}</span><br>`
            for (let i = 0; i < chaves; i++)
                acumulador += `<span class="tab">-----</span>`
            acumulador += `<span ${className}>*</span>`

        } else if (atual == '}') {
            console.log(chaves--)
            let className = `class='selecionado posicaoArray ${index}'`
            acumulador += `<br>`
            for (let i = 0; i < chaves; i++)
                acumulador += `<span class="tab">-----</span>`
            acumulador += `<span>${atual}</span>`
            acumulador += `<span ${className}> * </span>`

        } else {
            let className = `class='selecionado posicaoArray ${index}'`
            acumulador += `<span>${atual}</span> `
            acumulador += `<span ${className}> * </span>`
        }

        return acumulador
    }, "")
}

/////////////////////////////////////////////////////////////////////////////////

function carregarClick(elementoClicavel, elementoClicavelDeSelecao) {
    let a = elementoClicavelDeSelecao
    let posicaoArray = elementoClicavel


    a.on('click', function () {
        inputToken.val('')
        inputToken.focus()
    })

    $('.tab').css('color', 'white')

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
        snippets(arrayTokens, ['if', '(', ')', '{', '', '}'])
    } else if (token == 'function') {
        snippets(arrayTokens, ['function', prompt('nome da função'), '(', ')', '{', '}'])
    } else if (token == 'for') {
        snippets(arrayTokens, ['for', '(', prompt('primeiro parametro'), prompt('segundo parametro'), prompt('terceiro parametro'), ')', '{', '<br>', '<br>', '}'])
    } else if (token == 'while') {
        snippets(arrayTokens, ['while', '(', ')', '{', '<br>', '<br>', '}'])
    } else if (token == 'do while') {
        snippets(arrayTokens, ['do', '{', '<br>', '<br>', '}', 'while', '(', ')'])
    } else if (token == 'switch') {
        snippets(arrayTokens, ['switch', '(', ')', '{', '}', '<br>', 'case', '<br>', '<br>', 'break', '<br>', 'default'])
    } else {
        let posicaoDoArray = Number(inputPosicao.val()) + 1
        console.log(arrayTokens)
        manipuladorDoArrayCodigo(arrayTokens, posicaoDoArray, token)
    }
})

//////////////////////////////////////////////////////////////////////////////////

botaoExcluir.on("click", function () {
    let posicaoQueSeraRetirada = Number(inputPosicao.val())
    let arrayCode = arrayTokens
    arrayCode.splice(posicaoQueSeraRetirada, 1)
    escreverCodigoNaTela(divCodigo, arrayToHTML(arrayCode))
});

botaoSalvar.on('click', function () {
    fetch('http://port-3001.tcc-hmneto911871.codeanyapp.com', {
        method: 'post',
        body: JSON.stringify(arrayTokens)
    }).then(function () {
        window.location = "mynewfile3.html";
    })
})



$('.selecao').on('click', function () {
    $('.selecionado').toggle()
})

escreverCodigoNaTela(divCodigo, arrayToHTML(JSON.parse(localStorage.getItem("code"))))