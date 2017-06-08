var App = angular.module('App', ["App.controllers",
    "App.services",
    "App.directives",
    "App.filters",
    "ngRoute",
    "ngResource",
    'ui.bootstrap',
    'ngCsv',
    'ngAnimate',
    'ngSanitize',
    'gridshore.c3js.chart',
    'oitozero.ngSweetAlert',
    'ui.select',
    'ui.grid',
    'ui.grid.exporter',
    'ui.grid.selection',
    'ui.grid.edit',
    'ui.grid.resizeColumns',
    'ui.grid.moveColumns',
    'ui.grid.cellNav',
    'ui.grid.pinning'


])
    .config(function ($routeProvider, $animateProvider) {

        $animateProvider.classNameFilter(/\banimated\b/);

        $routeProvider
            .when('/login', {
                templateUrl: 'view/login.html',
                controller: 'LoginController'
            })
            .when('/home', {
                templateUrl: 'view/home.html',
                controller: 'HomeController'
            })
            .when('/dev', {
                templateUrl: 'view/dev.html',
                controller: 'DevController'
            })
            .when('/cliente', {
                templateUrl: 'view/cliente.html',
                controller: 'ClienteController'
            })
            .when('/graficos', {
                templateUrl: 'view/graficos.html',
                controller: 'GraficosController'
            })

            .when('/tela3', {
                templateUrl: 'view/tela3.html',
                controller: 'Tela3Controller'
            })
            .when('/simulacoes', {
                templateUrl: 'view/simulacoes.html',
                controller: 'SimulacoesController'
            })
            .when('/termometro', {
                templateUrl: 'view/termometro.html',
                controller: 'TermometroController'
            })
            .when('/clientes', {
                templateUrl: 'view/clientes.html',
                controller: 'ClientesController'
            })
            .when('/selecionarCliente', {
                templateUrl: 'view/cliente.html',
                controller: 'ClienteController'
            })
            .when('/sapLink', {
                templateUrl: 'view/sap-links.html',
                controller: ''
            })
            .when('/historico/:idItem', {
                templateUrl: 'view/historico.html',
                controller: 'HistoricoController',
                resolve: {
                    historico: function (MaterialService, $route) {
                        return MaterialService.consultaHistoricoDeVenda($route.current.params.idItem);
                    }
                }
            })
            .when('/efetivarOv/', {
                templateUrl: 'view/efetivar-ov.html',
                controller: 'ModalEfetivarOvCtrl',
                resolve: {
                    lista: function ($route) {
                        return $route.current.params;
                    }
                }
            })
            .when('/efetivarOv2/', {
                templateUrl: 'view/efetivar-ov2.html',
                controller: 'ModalEfetivarOv2Ctrl'
            })
            .otherwise({redirectTo: 'login'});

    });


App.factory('Base64', function() {
    var keyStr = 'ABCDEFGHIJKLMNOP' +
            'QRSTUVWXYZabcdef' +
            'ghijklmnopqrstuv' +
            'wxyz0123456789+/' +
            '=';
    return {
        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                        keyStr.charAt(enc1) +
                        keyStr.charAt(enc2) +
                        keyStr.charAt(enc3) +
                        keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);

            return output;
        },

        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                alert("There were invalid base64 characters in the input text.\n" +
                        "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                        "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            do {
                enc1 = keyStr.indexOf(input.charAt(i++));
                enc2 = keyStr.indexOf(input.charAt(i++));
                enc3 = keyStr.indexOf(input.charAt(i++));
                enc4 = keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";

            } while (i < input.length);

            return output;
        }
    };
});