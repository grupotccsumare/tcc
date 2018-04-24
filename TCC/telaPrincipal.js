let telaPrincipalTemplate = `


<!doctype html>
<html>
<head>
    <title>TCC</title>
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
            padding-top: 10px;
            padding-right: 0px;
            padding-bottom: 10px;
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

        #tela {
            background-color: rgb(255, 255, 240);
        }

        #div-tela {
            background-color: rgb(232, 232, 232);
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
            .material-icons {
                width: auto;
            }
            .row {
                width: 313px;
                height: 689px;
                min-height: 1px;
                padding: 4px 10px 10px 10px;
                margin: 0px 3.88889px 10px 3.88889px;
            }
            .col.m12 {
                width: 100%;
                height: 100%;
                padding: 0px 0px 0px 0px;
            }
            .row {
                width: 100%;
                height: 100%;
                min-height: 1px;
                padding-top: 4px;
                padding-right: 0px;
                padding-bottom: 10px;
                padding-left: 10px;
                margin-top: 2px;
                margin-right: 1px;
                margin-bottom: 10px;
                margin-left: 0px;
            }
            .col.m12 {
                width: 100%;
                height: 100%;
                padding-top: 0px;
                padding-right: 0px;
                padding-bottom: 0px;
                padding-left: 0px;
            }
            .material-icons {
                width: auto;
            }
            .modal.modal-fixed-footer.black-text {
                margin: 0px 0px 0px 0px;
                width: 100%;
            }
            .modal.modal-fixed-footer.black-text {
                margin-top: 0px;
                margin-right: 0px;
                margin-bottom: 0px;
                margin-left: 0px;
                width: 100%;
            }
        }

        .btn {
            margin-right: 5px;
            margin-bottom: 5px;

            padding-right: -1px;
        }

        .btn-info {
            background-color: blue;
        }

        .btn-danger {
            background-color: red;
        }

        .btn-flat {
            background-color: orange;
            color: white;
        }

        #div-declarar {
            display: none;

        }

        #div-inserir {
            display: none;

        }

        #div-tela {
            background-color: #FFFFF0;
        }
    </style>
    <script>
        $(document).ready(function () {

            $("#btn-conjunto-inserir").click(function () {
                $("#div-inserir").show();
                $("#div-declarar").hide();
            });
            $("#btn-conjunto-declarar").click(function () {
                $("#div-declarar").show();
                $("#div-inserir").hide();
            });

        });
    </script>

</head>

<body>
    <div class="row" id="div-tela">
        <p>codigo aqui</br>

            <div id="modal1" class="modal modal-fixed-footer black-text">
                <div class="modal-content" id="div-tela">
                    <div class="modal-header">

                        <button type="button" id="btn-conjunto-declarar" class="btn btn-info btn-lg">declarar</button>
                        <button type="button" id="btn-conjunto-inserir" class="btn btn-danger btn-lg">inserir</button>
                    </div>
                    <hr/>
                    <!-- CORPO MODAL-->
                    <div class="modal-body">
                        <!-- NICHO DECLARAR -->
                        <div id="div-declarar">
                            <button type="button" id="btn-condicional" class="btn btn-info btn-lg">Condicional</button>
                            <br/>
                            <button type="button" id="btn-repeticao" class="btn btn-info btn-lg">Repetição</button>
                            <br/>
                            <button type="button" id="btn-trycatch" class="btn btn-info btn-lg">TryCatch</button>
                            <br/>
                            <button type="button" id="btn-variavel" class="btn btn-info btn-lg">Varíavel</button>
                        </div>
                        <!-- NICHO INSERIR -->
                        <div id="div-inserir">
                            <button type="button" id="btn-objeto" class="btn btn-danger btn-lg">Objetos</button>
                            <br/>
                            <button type="button" id="btn-operadores" class="btn btn-danger btn-lg">Operadores</button>
                            <br/>
                            <button type="button" id="btn-palavrasReservadas" class="btn btn-danger btn-lg">Palavras Reservadas</button>
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Ok</a>
                </div>
            </div>
            <script type="text/javascript">
                $('.modal').modal();
            </script>
            <div id="div-tela" class="col m12">
            </div>
            <div class="fixed-action-btn horizontal click-to-toggle">
                <a href="#modal1" class="btn-floating btn-large waves-effect waves-light orange btn modal-trigger">
                    <i class="material-icons">code
                    </i>
                </a>
            </div>
    </div>

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