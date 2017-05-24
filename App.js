angular.module('App', ["App.controllers", 
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
    'ui.grid.cellNav'



    ])
    .config(function($routeProvider, $animateProvider) {

        $animateProvider.classNameFilter( /\banimated\b/ );

        $routeProvider
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
            .otherwise({ redirectTo: 'cliente' });

    });
