angular.module("App.controllers", [])
    .constant('_', _)
    .constant('moment', moment)
    .controller("LoginController", function ($scope, $location, $uibModal) {

        

                 var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: './view/modal/login.html',
                    controller: 'LoginModalController',
                    backdrop: 'static',
                    size: "md"
                    
                });


    })
     .controller("LoginModalController", function ($scope, $location, $uibModalInstance) {

        $scope.login = function (){
            $uibModalInstance.close();
             $location.path("/cliente");
        }
    })
    .controller("HomeController", function ($scope) {
        "use strict";


        $scope.items = [
            {href: "#/cliente", label: 'cliente!'},
            {href: "#/tela3", label: 'tela3.'},
            {href: "#/simulacoes", label: 'termometro'}
        ];

        $scope.status = {
            isopen: false
        };

        $scope.toggled = function (open) {
        };

        $scope.toggleDropdown = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };


    })
    .controller("DevController", function ($scope, $rootScope) {


    })
    .controller("ClienteController", function ($http, $scope, $rootScope, $location, $uibModal, SweetAlert, moment, Base64) {
        "use strict";


/* INICIO TESTES*/
/*
    $http.defaults.headers.common = {
                                        "Accept"                            : "application/json",
                                        "Access-Control-Request-Headers"    : "accept, origin, authorization",
                                        "Access-Control-Allow-Methods"      : "GET, PUT, POST, OPTIONS, DELETE",
                                        "Access-Control-Allow-Origin"       : "*",
                                        "Authorization"                     : "Basic cXFtaWFvcjpWU0YzenJtaQ=="

                                    }; 
    $http({method: 'GET', url: 'http://10.17.237.22:8000/sap/opu/odata/sap/ZBRLAR_B2BONDEMAND_SRV/GetCustomerListSet'}).
            success(function(data, status, headers, config) {
                console.log("### Success");
                $rootScope.retornoServico = "deu certo!!!";
                console.log(data);
            }).
            error(function(data, status, headers, config) {
                console.log("### Error");
                $rootScope.retornoServico = "deu erro!!!";
                console.log(data);
            });

GET Example
--------------------------------------------------------------------------------------------------------
var url = "<<your gateway service base url>>";
            
$http({
  method: 'GET',
  url:url+"<<your entity set>>?$format=json",
  headers: { 
   'x-csrf-token': 'Fetch',
   'Authorization': 'Basic <<base64 encoded username:pass>>'
  }
}).then(function(response){
 $scope.token = response.headers('x-csrf-token');
});
--------------------------------------------------------------------------------------------------------

To do an insert/update, the code becomes a bit more complicated. Since SAP uses the x-csrf-token http header for cross site request forgery protection, we first need to fetch the token using a get request (as shown above). Using the x-csrf-token from the response we can then send a POST/PUT/DELETE request to the OData service.

POST Example
--------------------------------------------------------------------------------------------------------
var url = "<<your gateway service base url>>";
var entity = {};

entity.attribute1 = "Hello";
entity.attribute2 = "World";

$http({
  method: 'POST',
  url:url+"<<your entity set>>",
  data: JSON.stringify(entity),
  headers: { 
   'x-csrf-token': $scope.token,
   'Authorization': 'Basic <<base64 encoded username:pass>>'
  }
}).then(function(response){

});*/

/*FIM TESTES*/

        $scope.selectedClientB = {};
        $scope.filtro2 = "";
        $scope.filtro3 = "";
        $scope.lastProcesso = 0;
        $scope.lastContato = 0;
        $scope.isBlocked = true;
        $scope.mostra = true;
        $scope.isBlockedTos = false;
        $scope.perfilLoja1 = 0;
        $scope.perfilLoja2 = 1;
        $scope.perfilLoja3 = 1;
        $scope.perfilLoja4 = 0;
        $scope.titulo = 'Últimos Processos';
        $scope.painelTabela = {
            quantidadeDeTabela: 3,
            tabelaAtual: 1,
            tituloTabelaAtual: 'Últimos Processos'
        };
        $scope.processos = [
            {data: "14.04.17", cliente: "Carrefour", processo: 423476, status: "Pendente"},
            {data: "14.04.17", cliente: "Carrefour", processo: 423476, status: "Pendente"},
            {data: "14.04.17", cliente: "Carrefour", processo: 423476, status: "Pendente"},
            {data: "20.04.17", cliente: "Carrefour", processo: 564654, status: "Pendente"}
        ];
        $scope.contatos = [
            {

                data: "14.04.17",
                descricao: "0000456456",
                emissor: 423476,
                statusTitulo: "Aguardando retorno",
                statusCorpo: "Atualização: 03.05.2017 - PHERMANN\n\nAguardando retorno do cliente"
            },
            {

                data: "14.04.17",
                descricao: "0000456456",
                emissor: 423476,
                statusTitulo: "Aguardando retorno",
                statusCorpo: "Atualização: 03.05.2017 - PHERMANN\n\nAguardando retorno do cliente"
            },
            {

                data: "14.04.17",
                descricao: "0000456457",
                emissor: 423476,
                statusTitulo: "Aguardando retorno",
                statusCorpo: "Atualização: 03.05.2017 - PHERMANN\n\nAguardando retorno do cliente"
            },
            {

                data: "20.04.17",
                descricao: "0000456458",
                emissor: 564654,
                statusTitulo: "Aguardando retorno",
                statusCorpo: "Atualização: 03.05.2017 - PHERMANN\n\nAguardando retorno do cliente"
            }

        ];


        $scope.gerais = [
            {
                id: 0,
                titulo: 'Comportamento',
                texto: 'Texto Comportamento - Feito contato com o cliente que comentou sobre promoções de outros concorrentes'
            }, {
                id: 1,
                titulo: 'Mercado',
                texto: 'Mercado - Feito contato com o cliente que comentou sobre promoções de outros concorrentes'
            }, {
                id: 2,
                titulo: 'Concorrência',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorrentes'
            }
        ];
        $scope.geraisB = [];

        $rootScope.pontuais = [
            {
                id: 0,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorrentes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }, {
                id: 1,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorrentes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }, {
                id: 2,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorrentes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }
        ];

        $scope.gridProcessos = {
            enableGridMenu: true,
            rowHeight: 20,
            enableFiltering: true,
            enableHorizontalScrollbar: 0,
            data: 'processos',
            columnDefs: [
                {
                    field: 'data',
                    width: '100',
                    headerCellClass: 'background-color:gray',
                    displayName: 'Data'
                },
                {
                    field: 'cliente',
                    width: '120',
                    displayName: 'Cliente'
                },
                {
                    field: 'processo',
                    width: '150',
                    displayName: 'Processo'
                },
                {
                    field: 'status',
                    width: '150',
                    displayName: 'Status'
                }

            ]
        };
        $scope.gridApiProcessos = {};
        $scope.gridProcessos.onRegisterApi = function (gridApi) {
            $scope.gridApiProcessos = gridApi;
        };

        $scope.gridContatos = {
            enableGridMenu: true,
            rowHeight: 20,
            enableHorizontalScrollbar: 0,
            data: 'contatos',
            columnDefs: [{
                field: 'data',
                headerCellClass: 'background-color:gray',
                displayName: 'Data',
                cellTemplate: '<div ng-click="grid.appScope.editarContatos(row.entity);">{{COL_FIELD}}</div>'
            }, {
                field: 'descricao',
                displayName: 'Descrição',
                cellTemplate: '<div ng-click="grid.appScope.editarContatos(row.entity);">{{COL_FIELD}}</div>'
            }, {
                field: 'emissor',
                displayName: 'Emissor',
                cellTemplate: '<div ng-click="grid.appScope.editarContatos(row.entity);">{{COL_FIELD}}</div>'
            }

            ]
        };

        $scope.gridLinhaBranca = {
            enableHorizontalScrollbar: 0,
            enableGridMenu: true,
            rowHeight: 20,
            enableFiltering: true,
            data: 'linhaBranca',
            columnDefs: [{
                field: 'nome',
                displayName: 'Nome'
            }, {
                field: 'quantidade',
                displayName: '%',
                enableFiltering: false
            }, {
                field: 'acao',
                width: '10',
                enableColumnMenu: false,
                displayName: '',
                enableFiltering: false,
                cellTemplate: '  <div class="action-buttons"> ' +
                ' <a class="blue" style="color: blue"  ng-click="grid.appScope.editarLinhaBranca(row.entity)" href=""><i class="fa fa-pencil bigger-130"></i></a>' +
                ' </div>'
            }

            ]
        };
        $scope.gridApiLinhaBranca = {};
        $scope.gridLinhaBranca.onRegisterApi = function (gridApi) {
            $scope.gridApiLinhaBranca = gridApi;
        };

        $scope.gridConcorrentes = {
            enableHorizontalScrollbar: 0,
            enableColumnMenus: false,
            rowHeight: 20,
            enableGridMenu: true,
            data: 'concorrentesRevenda',
            columnDefs: [{
                field: 'nome',
                displayName: 'Nome'
            }, {
                field: 'acao',
                displayName: '',
                enableColumnMenu: false,
                cellTemplate: '  <div class="action-buttons"> ' +
                ' <a class="blue" style="color: blue"  ng-click="grid.appScope.editarConcorrenteRevenda(row.entity)" href=""><i class="fa fa-pencil bigger-130"></i></a>' +
                ' </div>'
            }

            ]
        };
        $scope.gridApiConcorrentes = {};
        $scope.gridConcorrentes.onRegisterApi = function (gridApi) {
            $scope.gridApiConcorrentes = gridApi;
        };

        function init() {
            if ($rootScope.selectedClient == null) {

                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: './view/selecionar-cliente.html',
                    controller: 'ModalSelecionarClienteCtrl',
                    backdrop: 'static',
                    size: "lg",
                    resolve: {
                        url: function () {
                            return "/cliente";
                        }
                    }
                });

                modalInstance.result.then(function (cliente) {
                    $scope.selectedClientB = angular.copy(cliente);
                });

            } else {
                $scope.selectedClientB = angular.copy($rootScope.selectedClient);
            }
            $scope.geraisB = angular.copy($scope.gerais);
        }

        init();

        $scope.adicionarContatos = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop:'static',
                templateUrl: './view/editar-contato.html',
                controller: 'ModalUltimosContatosCtrl',
                resolve: {
                    contato: function () {
                        return {};
                    }
                }
            });
        };

        $scope.proximaTabela = function () {
            if ($scope.painelTabela.tabelaAtual + 1 <= $scope.painelTabela.quantidadeDeTabela) {
                $scope.painelTabela.tabelaAtual = $scope.painelTabela.tabelaAtual + 1;
                $scope.painelTabela.tituloTabelaAtual = 'Últimos Contatos';
            }
            $scope.changeHeaderTitle();
        };

        $scope.tabelaAnterior = function () {
            if ($scope.painelTabela.tabelaAtual - 1 > 0) {
                $scope.painelTabela.tabelaAtual = $scope.painelTabela.tabelaAtual - 1;
            }
            $scope.changeHeaderTitle();
        };

        $scope.changeHeaderTitle = function () {
            if ($scope.painelTabela.tabelaAtual == 1) {
                $scope.painelTabela.tituloTabelaAtual = 'Últimos Processos';
            } else if ($scope.painelTabela.tabelaAtual == 2) {
                $scope.painelTabela.tituloTabelaAtual = 'Últimos Contatos';
            } else if ($scope.painelTabela.tabelaAtual == 3) {
                $scope.painelTabela.tituloTabelaAtual = 'Concorrentes';
            }
        };

        $scope.adicionarPontual = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop:'static',
                templateUrl: './view/adicionar-pontual.html',
                controller: 'ModalCriarPontualCtrl'
            });
        };

        $scope.editarContatos = function (contato) {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop:'static',
                templateUrl: './view/editar-contato.html',
                controller: 'ModalUltimosContatosCtrl',
                resolve: {
                    contato: function () {
                        return contato;
                    }
                }
            });
        };

        $scope.editarDadosCliente = function (cliente) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/expandir-contato.html',
                controller: 'ModalManutencaoContatoCtrl',
                backdrop: 'static',
                size: "custom"
            });
        };

        $scope.atualizarProcesso = function () {
            $scope.filtro2 = "";
            switch ($scope.lastProcesso) {
                case 0:
                    $rootScope.processos = $rootScope.processos1;
                    $scope.lastProcesso = 1;
                    break;
                case 1:
                    $rootScope.processos = $rootScope.processos2;
                    $scope.lastProcesso = 2;
                    break;
                case 2:
                    $rootScope.processos = $rootScope.processos3;
                    $scope.lastProcesso = 0;
                    break;
                default:
                    $rootScope.processos = $rootScope.processos;
            }

        };

        $scope.atualizarContatos = function () {
            $scope.filtro3 = "";
            switch ($scope.lastContato) {
                case 0:
                    $rootScope.contatos = $rootScope.contatos2;
                    $scope.lastContato = 1;
                    break;
                case 1:
                    $rootScope.contatos = $rootScope.contatos1;
                    $scope.lastContato = 0;
                    break;
                default:
                    $rootScope.contatos = $rootScope.contatos1;
            }

        };

        $scope.removePontual = function (pontual) {
            var alertExclusao = {
                title: "Exclusão de nota",
                text: "Tem certeza que gostaria de excluir essa nota?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sim, excluir!",
                cancelButtonText:"Cancelar",
                closeOnConfirm: false,
                closeOnCancel: true,
                showLoaderOnConfirm: true
            };
            SweetAlert.swal(
                alertExclusao, function (isConfirm) {
                    if (isConfirm) {
                        $rootScope.pontuais = _.without($rootScope.pontuais, _.findWhere($rootScope.pontuais, {id: pontual.id}));
                        SweetAlert.swal({
                            title: "Sucesso",
                            text: "Nota excluída com sucesso",
                            customClass: 'sweetalert-sm'
                        });

                    } else {
                        return;
                    }

                }
            );
        };

        $scope.gotoDev = function () {
            $location.path("/dev");
        };

        $scope.editarTos = function () {
            $scope.isBlockedTos = !$scope.isBlockedTos;
        };

        $scope.calculaTos = function () {
            $rootScope.selectedClient.revenda.tos.total = parseInt($rootScope.selectedClient.revenda.tos.refrigerador) + parseInt($rootScope.selectedClient.revenda.tos.lavadora) + parseInt($rootScope.selectedClient.revenda.tos.fogao);
        };

        $scope.editarLinhaBranca = function (produto) {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop:'static',
                templateUrl: './view/editar-linhaBranca.html',
                controller: 'ModalProdutoCtrl',
                resolve: {
                    produto: function () {
                        return produto;
                    }
                }
            });
        };

        $scope.removerLinhaBranca = function (produto) {
            if ($scope.gridApiLinhaBranca.selection.getSelectedRows().length > 0) {
                var alertExclusao = {
                    title: "Exclusão de Player",
                    text: "Confirma a exclusão do(s) player(s) selecionado(s)?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Sim, excluir!",
                    cancelButtonText:"Cancelar",
                    closeOnConfirm: false,
                    closeOnCancel: true,
                    showLoaderOnConfirm: true
                };
                SweetAlert.swal(
                    alertExclusao, function (isConfirm) {
                        if (isConfirm) {
                            angular.forEach($scope.gridApiLinhaBranca.selection.getSelectedRows(), function (data, index) {
                                $scope.linhaBranca.splice($scope.linhaBranca.lastIndexOf(data), 1);
                            });
                            SweetAlert.swal({
                                title: "Sucesso",
                                text: "Player(s) excluído(s) com sucesso",
                                customClass: 'sweetalert-sm'
                            });

                        } else {
                            return;
                        }

                    }
                );
            }
        };

        $scope.adicionarLinhaBranca = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop:'static',
                templateUrl: './view/editar-linhaBranca.html',
                controller: 'ModalProdutoCtrl',
                resolve: {
                    produto: function () {
                        return "";
                    }
                }
            });
        };

        $scope.editarConcorrenteRevenda = function (produto) {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop:'static',
                templateUrl: './view/editar-concorrente.html',
                controller: 'ModalProdutoCtrl',
                resolve: {
                    produto: function () {
                        return produto;
                    }
                }
            });
        };

        $scope.removerConcorrenteRevenda = function (produto) {
            if ($scope.gridApiConcorrentes.selection.getSelectedRows().length > 0) {
                var alertExclusao = {
                    title: "Exclusão de Concorrente",
                    text: "Confirma a exclusão do(s) concorrente(s) selecionado(s)?",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Sim, excluir!",
                    cancelButtonText:"Cancelar",
                    closeOnConfirm: false,
                    closeOnCancel: true,
                    showLoaderOnConfirm: true
                };
                SweetAlert.swal(
                    alertExclusao, function (isConfirm) {
                        if (isConfirm) {
                            angular.forEach($scope.gridApiConcorrentes.selection.getSelectedRows(), function (data, index) {
                                $scope.concorrentesRevenda.splice($scope.concorrentesRevenda.lastIndexOf(data), 1);
                            });
                            SweetAlert.swal({
                                title: "Sucesso",
                                text: "Concorrente(s) excluído(s) com sucesso",
                                customClass: 'sweetalert-sm'
                            });

                        } else {
                            return;
                        }

                    }
                );
            }
        };

        $scope.adicionarConcorrenteRevenda = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop:'static',
                templateUrl: './view/editar-concorrente.html',
                controller: 'ModalProdutoCtrl',
                resolve: {
                    produto: function () {
                        return "";
                    }
                }
            });
        };

        $scope.editarPerfilDeRevenda = function () {
            $scope.isBlocked = !$scope.isBlocked;
           if(!$scope.isBlockedTos){
               $scope.isBlockedTos = !$scope.isBlockedTos;
           }
        };

        $scope.salvarEdicaoRevenda = function () {
            if (angular.equals($scope.selectedClientB.revenda, $rootScope.selectedClient.revenda)) {
                $scope.isBlocked = !$scope.isBlocked
            } else {
                $rootScope.selectedClient.revenda.data = moment().format("DD.MM.YYYY")
                $scope.isBlocked = !$scope.isBlocked
            }
            if($scope.isBlockedTos){
                $scope.isBlockedTos = !$scope.isBlockedTos;
            }
        };

        $scope.cancelarEdicaoRevenda = function () {
            if (angular.equals($scope.selectedClientB.revenda, $rootScope.selectedClient.revenda)) {
                $scope.isBlocked = !$scope.isBlocked
            } else {
                $rootScope.selectedClient.revenda = angular.copy($scope.selectedClientB.revenda);
                $scope.isBlocked = !$scope.isBlocked
            }
            if($scope.isBlockedTos){
                $scope.isBlockedTos = !$scope.isBlockedTos;
            }
        };

        $scope.editarNotas = function () {
            $scope.mostra = !$scope.mostra;
        };

        $scope.salvarNotas = function () {
            $scope.geraisB = angular.copy($scope.gerais);
            $scope.mostra = !$scope.mostra;
        };

        $scope.cancelarNotas = function () {
            $scope.gerais = angular.copy($scope.geraisB);
            $scope.mostra = !$scope.mostra;
        };

        $rootScope.dadosGraficos = [
            {
                "x": "Fogão",
                "voltyd16": 1,
                "voltyd17": 0
            }, {
                "x": "Forno Microondas",
                "voltyd16": 0,
                "voltyd17": 6
            }, {
                "x": "Freezer Horizontal",
                "voltyd16": 0,
                "voltyd17": 3
            }, {
                "x": "Freezer Vertical",
                "voltyd16": 0,
                "voltyd17": 2
            }, {
                "x": "Lavadora Roupas",
                "voltyd16": 1,
                "voltyd17": 8
            }, {
                "x": "Refrigerador Elétrico",
                "voltyd16": 12,
                "voltyd17": 11
            }];

        $rootScope.dadosGraficosColunas = [
            {
                "id": "voltyd16",
                "type": "bar",
                "name": "voltyd16"
            },
            {
                "id": "voltyd17",
                "type": "bar",
                "name": "voltyd17"
            }];

        $rootScope.datax = {
            "id": "x"
        };

    })
    .controller("ModalSelecionarClienteCtrl", function ($scope, $rootScope, $location, $uibModalInstance, _, url, ClienteService) {
        "use strict";

        $scope.url = url;
        $rootScope.clientesBuscados = [];
        $scope.bloqueiaCNPJ = false;
        $scope.bloqueiaEmail = false;
        $scope.bloqueiaId = false;
        $scope.filtroCliente = true;
        $scope.busca = {
            cnpj: "",
            id: "",
            email: ""
        };

        function init() {
            $scope.listaClientes = ClienteService.buscaClientesPorIdDoVendedor(1);
        }

        init();

        $scope.close = function () {
            if ($rootScope.selectedClient == null) {
                return
            } else {
                $uibModalInstance.close();

            }
        };

        $scope.todosClientes = function () {
            $scope.filtroCliente = false;
            $scope.listaClientes = ClienteService.buscaTodosClientes();
        };

        $scope.buscaClienteFiltrado = function () {
            $scope.filtroCliente = true;
            $scope.listaClientes = ClienteService.buscaClientesPorIdDoVendedor(1);
        };

        $scope.selectClient = function (cliente) {
            //console.log("selectClient() " + client);

            if (!!$rootScope.selectedClient && cliente.clienteEmissorId == $rootScope.selectedClient.clienteEmissorId) {
                $uibModalInstance.dismiss('cancel');
            } else {

                $rootScope.selectedClient = cliente;
                $uibModalInstance.close($rootScope.selectedClient);
                $location.path($scope.url);
            }

        };

        $scope.bloqueiaBusca = function () {
            if ($scope.busca.email != "") {
                $scope.bloqueiaCNPJ = true;
                $scope.bloqueiaId = true;
            } else if ($scope.busca.cnpj != "") {
                $scope.bloqueiaEmail = true;
                $scope.bloqueiaId = true;
            } else if ($scope.busca.id != "") {
                $scope.bloqueiaCNPJ = true;
                $scope.bloqueiaEmail = true;
            } else {
                $scope.bloqueiaCNPJ = false;
                $scope.bloqueiaEmail = false;
                $scope.bloqueiaId = false;
            }
        }

        $scope.goCliente = function () {
            $uibModalInstance.close();
        };

        $scope.buscarCliente = function () {
            if ($scope.busca.email != "") {
                $rootScope.clientesBuscados = _.where($rootScope.clientes, {email: $scope.busca.email});
            } else if ($scope.busca.cnpj != "") {
                $rootScope.clientesBuscados = _.where($rootScope.clientes, {cnpj: $scope.busca.cnpj});
            } else if ($scope.busca.id != "") {
                $rootScope.clientesBuscados = _.where($rootScope.clientes, {clienteEmissorId: $scope.busca.id});
            } else {
                $rootScope.clientesBuscados = [];
            }


        }

    })
    .controller("ModalProdutoCtrl", function ($scope, $rootScope, $uibModalInstance, produto) {
        "use strict";
        $scope.produto = produto;

        $scope.listaLinhaBranca = [
            {id:1,nome:'Electrolux'},
            {id:2,nome:'Panasonic'},
            {id:3,nome:'Atlas'},
            {id:4,nome:'Esmaltec'},
            {id:5,nome:'Colormaq'},
            {id:6,nome:'Mueller'},
            {id:7,nome:'Fischer'}
        ];


        function init() {
            if($scope.produto != null){
                angular.forEach($scope.listaLinhaBranca, function (value, key) {
                    if(value.nome.toLowerCase() == produto.nome.toLowerCase()){
                        $scope.produto.nome = value.nome.toUpperCase();
                    }
                });
            }
        }

        init()

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.adicionarConcorrente = function (contato) {
            if (contato.id != null && contato.id != undefined) {
                $uibModalInstance.close();
            } else {
                contato.id = $rootScope.contatos.length + 1;
                contato.quantidade = contato.quantidade + '%';
                $rootScope.concorrentesRevenda.push(contato);
                $uibModalInstance.close();
            }

        };

        $scope.adicionarLinha = function (contato) {
            if (contato.id != null && contato.id != undefined) {
                contato.quantidade = contato.quantidade + '%';
                $uibModalInstance.close();
            } else {
                contato.id = $rootScope.contatos.length + 1;
                contato.quantidade = contato.quantidade + '%';
                $rootScope.linhaBranca.push(contato);
                $uibModalInstance.close();
            }

        };

    })
    .controller("ModalEmailCtrl", function ($scope, $rootScope, $uibModalInstance, contato) {
        "use strict";
        //como vem de uma funcao do ui-grid ele pode retornar mais de 1 logo um array
        //porém estou bloqueando a adição de email e telefone quando o usuario selecionar mais de um
        //todo seria legal colocar algum tipo de alerta
        $scope.contato = angular.copy(contato[0]);
        $scope.email = {};

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.adicionarEmail = function (email) {
            $scope.contato.id = null;
            $scope.contato.prioritario = false;
            $scope.contato.email = email.email;
            $scope.contato.emailPrioritario = email.prioritario;
            //todo substitiur $rootscope e retornar objeto pleso close do modal
            // e no Controller do manutenção adicionar na lista ou chamar o service
            $rootScope.tabelaDesnormalizada.push( $scope.contato);
            $uibModalInstance.close();
        };

    })
    .controller("ModalTelefoneCtrl", function ($scope, $rootScope, $uibModalInstance, contato) {
        "use strict";
        $scope.contato = angular.copy(contato[0]);
        $scope.telefone = {};

        $scope.close = function () {
            $uibModalInstance.close();
        };
        $scope.adicionarTelefone = function (telefone) {
            $scope.contato.id = null;
            $scope.contato.prioritario = false;
            $scope.contato.telefone = telefone.numero;
            $scope.contato.telefonePrioritario = telefone.prioritario;
            //todo substitiur $rootscope e retornar objeto pleso close do modal
            // e no Controller do manutenção adicionar na lista ou chamar o service
            $rootScope.tabelaDesnormalizada.push( $scope.contato);

            $uibModalInstance.close();
        };

    })
    .controller("ModalCriarPontualCtrl", function ($scope, $rootScope, $uibModalInstance) {
        "use strict";
        $scope.pontual = {
            texto: "",
            data: new Date()
        };

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.adicionarPontualNaLista = function (pontual) {
            $uibModalInstance.close();
            pontual.id = $rootScope.pontuais.length + 1;
            pontual.user = $rootScope.user;
            $rootScope.pontuais.unshift(pontual);
        };
    })
    .controller("ModalTextoOvCtrl", function ($scope, $rootScope, $uibModalInstance) {
        "use strict";
        $scope.texto = {
            observacao: "",
            corpo: "",
            data: new Date()

        };

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.salvar = function () {
            $uibModalInstance.close();
        };

        $scope.adicionarPontualNaLista = function (texto) {
            $uibModalInstance.close();
        };
    })
    .controller("ModalCriarPontualSimulacoesCtrl", function ($scope, $rootScope, $uibModalInstance) {
        "use strict";
        $scope.pontual = {
            texto: "",
            data: new Date()
        };

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.adicionarPontualNaLista = function (pontual) {
            $uibModalInstance.close();
            pontual.id = $rootScope.simulacaoPontuais.length;
            pontual.user = $rootScope.user;
            $rootScope.simulacaoPontuais.unshift(pontual);
        };
    })
    .controller("ModalManutencaoContatoCtrl", function ($scope, $rootScope, $uibModalInstance, $uibModal, SweetAlert, _) {
        "use strict";
        $scope.close = function () {
            $uibModalInstance.close();
        };

        var gridOptions = {};
        gridOptions.columnDefs = [
            {field: 'Contato', displayName: 'ID'},
            {field: 'Cargo'},
            {field: 'Telefone', enableSorting: true},
            {
                field: 'Prioritário',
                cellTemplate: '<div ng-if="{{row.value}}" class="ui-grid-cell-contents tooltip-uigrid" title="{{COL_FIELD}}">' +
                '<a ng-if="" ui-sref="main.placeDetail{{placeId: {{row.entity.id}} }}">{{COL_FIELD CUSTOM_FILTERS}}</a></div>'
            },
            {field: 'Email', enableSorting: true},
            {field: 'Prioritário'}
        ];

        $scope.agrupadoresClientes = [
            {
                clienteEmissorId: 9746513213,
                agrupador: 123456789,
                razao: "CARREFOUR",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                telefone: "11 1234-4321",
                pais: "BRASIL",
                email: "carrefour@carrefour.com.br",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603123",
                status: "Em Processamento"
            },
            {
                clienteEmissorId: 9746513213,
                agrupador: 123456789,
                razao: "CARREFOUR",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                telefone: "11 1234-4321",
                pais: "BRASIL",
                email: "testeasd.carrefour@carrefour.com.br",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603123",
                status: "Em Processamento"
            }
        ];

        $scope.gridAgrupadorXCliente = {
            enableGridMenu: true,
            enableHorizontalScrollbar: false,
            data: 'agrupadoresClientes',
            columnDefs: [
                {field: 'agrupador', width: '80', displayName: 'Agrupador'},
                {field: 'clienteEmissorId', width: '80', displayName: 'Emissor'},
                {field: 'razao', width: '100', displayName: 'Nome'},
                {field: 'cidade', width: '100', displayName: 'Cidade'},
                {field: 'uf', width: '40', displayName: 'UF'},
                {field: 'cnpj', width: '110', displayName: 'Cnpj'},
                {field: 'endereco', width: '200', displayName: 'Endereço'},
                {field: 'cep', width: '70', displayName: 'Cep'},
                {field: 'telefone', width: '90', displayName: 'Telefone'},
                {field: 'email', width: '190', displayName: 'Email'},
                {field: 'inscricaoEstadual', width: '100', displayName: 'I.E'},
                {field: 'status', width: '150', displayName: 'Status'}
            ]
        };

        $scope.gridTabelaDesnormalizada = {
            enableHorizontalScrollbar: 0,
            enableGridMenu: true,
            onRegisterApi: function (gridApi) {
                $scope.gridApiTabelaDesnormalizada = gridApi;
            },
            data: 'tabelaDesnormalizada',
            columnDefs: [
                
                {
                    field: 'contato',
                    width: '140',
                    displayName: 'Contato'
                },

                {
                    field: 'cargo',
                    width: '90',

                    displayName: 'Cargo'
                },
                {
                    field: 'telefone',
                    width: '100',
                    displayName: 'Telefone'
                },
                {
                    field: 'telefonePrioritario',
                    displayName: 'Prioritário',
                    width: '80',
                    cellTemplate: ' <div ng-click="grid.appScope.alterarPrioridadeTelefone(row.entity)">' +
                    '<div ng-if="!COL_FIELD" class="hidden-sm hidden-xs action-buttons">' +
                    '<a class="red" style="color: red" href=""><i class="fa fa-times-circle-o bigger-130"></i></a></div>' +
                    '<div ng-if="COL_FIELD" class="hidden-sm hidden-xs action-buttons">' +
                    '<a class="green" style="color: green" href=""><i class="fa fa-check-circle-o bigger-130"></i></a></div></div>'
                },
                {
                    field: 'email',
                    width: '260',

                    displayName: 'Email'
                },
                {
                    field: 'emailPrioritario',
                    displayName: 'Prioritário',
                    width: '80',
                    cellTemplate: ' <div ng-click="grid.appScope.alterarPrioridadeEmail(row.entity)">' +
                    '<div ng-if="!COL_FIELD" class="hidden-sm hidden-xs action-buttons">' +
                    '<a class="red" style="color: red" href=""><i class="fa fa-times-circle-o bigger-130"></i></a></div>' +
                    '<div ng-if="COL_FIELD" class="hidden-sm hidden-xs action-buttons">' +
                    '<a class="green" style="color: green" href=""><i class="fa fa-check-circle-o bigger-130"></i></a></div></div>'
                },
                {
                    field: 'acao',
                    width: '100',
                    displayName: 'Ação',
                    cellTemplate: '  <div class="action-buttons"> ' +
                    ' <a class="blue" style="color: blue"  ng-click="grid.appScope.editarContato(row.entity)" href=""><i class="fa fa-pencil bigger-130"></i></a>' +
                    ' <a class="blue" style="color: blue"  ng-click="grid.appScope.aumentarPosContato(row.entity)" href=""><i class="fa fa-sort-desc" aria-hidden="true"></i></a>' +
                    ' <a class="blue" style="color: blue"  ng-click="grid.appScope.diminuirPosContato(row.entity)" href=""><i class="fa fa-sort-asc" aria-hidden="true"></i></a>' +

                    ' </div>'
                }

            ]
        };

        $scope.aumentarPosContato = function(contato){
            var next = _.findWhere($scope.tabelaDesnormalizada,{order: (contato.order+1)});
            if(next != undefined){
                var temp = next.order;
                next.order = contato.order;
                contato.order = temp;
                $scope.tabelaDesnormalizada.sort(function(a,b){
                    return a.order - b.order;
                });
            }
        };
        $scope.diminuirPosContato = function(contato){
            var previous = _.findWhere($scope.tabelaDesnormalizada, {order: (contato.order-1)});
            if(previous != undefined){
                var temp = previous.order;
                previous.order = contato.order;
                contato.order = temp;
                $scope.tabelaDesnormalizada.sort(function(a,b){
                    return a.order - b.order;
                });
            }
        };
        $scope.excluirContatos = function () {
            if ($scope.tabelaDesnormalizada.length <= 0 || $scope.gridApiTabelaDesnormalizada.selection.getSelectedRows().length <= 0) {
                return;
            }
            var alertExclusao = {
                title: "Exclusão de contatos",
                text: "Confirma a exclusão dos contatos selecionados?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sim, excluir!",
                cancelButtonText:"Cancelar",
                closeOnConfirm: false,
                closeOnCancel: true,
                showLoaderOnConfirm: true
            };
            SweetAlert.swal(
                alertExclusao, function (isConfirm) {
                    if (isConfirm) {

                        angular.forEach($scope.gridApiTabelaDesnormalizada.selection.getSelectedRows(), function (data, index) {
                            $scope.tabelaDesnormalizada.splice($scope.tabelaDesnormalizada.lastIndexOf(data), 1);
                        });
                        SweetAlert.swal({
                            title: "Sucesso",
                            text: "Contatos excluídos com sucesso",
                            customClass: 'sweetalert-sm'
                        });

                    } else {
                        return;
                    }

                }
            );
        };

        $scope.removerContato = function (contato) {
            $rootScope.tabelaDesnormalizada = _.without($rootScope.tabelaDesnormalizada, _.findWhere($rootScope.tabelaDesnormalizada, {id: contato.id}));
        };

        $scope.deleteSelected = function () {
            angular.forEach($scope.gridApi.selection.getSelectedRows(), function (data, index) {
                $scope.gridTabelaDesnormalizada.data.splice($scope.gridTabelaDesnormalizada.data.lastIndexOf(data), 1);
            });
        };

        $scope.adicionarTelefone = function (telefone) {
            if ($scope.tabelaDesnormalizada.length <= 0 || $scope.gridApiTabelaDesnormalizada.selection.getSelectedRows().length <= 0 || $scope.gridApiTabelaDesnormalizada.selection.getSelectedRows().length > 1) {
                return;
            }
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop:'static',
                templateUrl: './view/adicionar-telefone.html',
                controller: 'ModalTelefoneCtrl',
                resolve : {
                    contato : function (){
                        return  $scope.gridApiTabelaDesnormalizada.selection.getSelectedRows();
                    }
                }
            });
        };

        $scope.adicionarEmail = function (email) {
            if ($scope.tabelaDesnormalizada.length <= 0 || $scope.gridApiTabelaDesnormalizada.selection.getSelectedRows().length <= 0 || $scope.gridApiTabelaDesnormalizada.selection.getSelectedRows().length > 1) {
                return;
            }
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop:'static',
                templateUrl: './view/adicionar-email.html',
                controller: 'ModalEmailCtrl',
                resolve : {
                    contato : function (){
                        return  $scope.gridApiTabelaDesnormalizada.selection.getSelectedRows();
                    }
                }
            });
        };

        $scope.alterarPrioridadeEmail = function (item) {
            item.prioritario = !item.prioritario;
        };

        $scope.alterarPrioridadeTelefone = function (item) {
            item.telefonePrioritario = !item.telefonePrioritario;
        };

        $scope.alterarPrioridadeContato = function (item) {
            for (var i = 0; i < $rootScope.tabelaDesnormalizada.length; i++) {
                $rootScope.tabelaDesnormalizada[i].prioritario = false;
            }
            item.prioritario = !item.prioritario;
        };

        $scope.removerEmail = function (email) {
            var alertExclusao = {
                title: "Exclusão de email",
                text: "Tem certeza que gostaria de excluir esse email?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sim, excluir!",
                cancelButtonText:"Cancelar",
                closeOnConfirm: false,
                closeOnCancel: true,
                showLoaderOnConfirm: true
            };
            SweetAlert.swal(
                alertExclusao, function (isConfirm) {
                    if (isConfirm) {
                        $rootScope.selectedClient.contatos[0].emails = _.without($rootScope.selectedClient.contatos[0].emails, _.findWhere($rootScope.selectedClient.contatos[0].emails, {id: email.id}));
                        SweetAlert.swal('Email excluído com sucesso.');

                    } else {
                        return;
                    }

                }
            );
        };

        $scope.removerTelefone = function (telefone) {
            $rootScope.selectedClient.contatos[0].telefones = _.without($rootScope.selectedClient.contatos[0].telefones, _.findWhere($rootScope.selectedClient.contatos[0].telefones, {id: telefone.id}));
        };

        $scope.criarContato = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop:'static',
                templateUrl: './view/novo-contato.html',
                controller: 'ModalNovoContatoCtrl',
                resolve: {
                    contato: function () {
                        return "";
                    }
                }

            });
        };

        $scope.salvarAlteracaoContato = function () {
            var alertExclusao = {
                title: "Alteração de dados de contato",
                text: "Tem certeza que gostaria de alterar os dados?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sim, excluir!",
                cancelButtonText:"Cancelar",
                closeOnConfirm: false,
                closeOnCancel: true,
                showLoaderOnConfirm: true
            };
            SweetAlert.swal(
                alertExclusao, function (isConfirm) {
                    if (isConfirm) {


                        SweetAlert.swal({
                            title: "Sucesso",
                            text: "Dados alterados com sucesso",
                            customClass: 'sweetalert-sm'
                        });
                        $uibModalInstance.close();
                    } else {
                        return;
                    }

                }
            );
        };

        $scope.editarContato = function (contato) {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop:'static',
                templateUrl: './view/novo-contato.html',
                controller: 'ModalNovoContatoCtrl',
                resolve: {
                    contato: function () {
                        return contato;
                    }
                }

            });
        };

    })
    .controller("ModalNovoContatoCtrl", function ($scope, $rootScope, $uibModalInstance, contato) {
        "use strict";

        $scope.contato = contato;

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.adicionarNovoContato = function (contato) {

            if (contato.id != null) {
                $uibModalInstance.close();
            } else {
                contato.telefonePrioritario = false;
                contato.emailPrioritario = false;
                $rootScope.tabelaDesnormalizada.push(contato);
                $rootScope.selectedClient.contatos.push(contato);
                $uibModalInstance.close();
            }

        };


    })
    .controller("ModalUltimosContatosCtrl", function ($scope, $rootScope, $uibModalInstance, contato) {
        "use strict";
        $scope.contato = contato;
        $scope.titulo = null;
        $scope.editable = false;

        function init(){
            if (!!contato.id){
                $scope.titulo = "Editar Contato"
            }else {
                $scope.titulo = "Criar Contato"
            }
        }

        init();

        $scope.isAnitgo = true;

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.adicionarUltimosContatos = function (contato) {
            if (!!contato.id) {
                $uibModalInstance.close();
            } else {
                contato.data = "17.05.2017";
                //todo chamar serviço retornar id
                if ($rootScope.contatos == undefined){
                    $rootScope.contatos = [];
                }
                contato.id = $rootScope.contatos.length + 1;
                $rootScope.contatos.push(contato);

                $uibModalInstance.close();
            }

        };
        $scope.setEditable = function(){
            console.log("setEditable()");
            $scope.editable = !$scope.editable;
        }



        $scope.criarUltimosContatos = function (contato) {
            $scope.isAntigo = false;
            $scope.contato = {};
        };

    })
    .controller("ModalDadosEntregaCtrl", function ($scope, $rootScope, dadosEntrega, $uibModalInstance) {

        $scope.dadosEntrega = dadosEntrega;

        $scope.formato = 'dd-MM-yyyy';

        $scope.teste = "";

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.popup = {
            opened: false
        };

        $scope.open = function () {
            $scope.popup.opened = true;
        };

        $scope.popupDataRemessa = {
            opened: false
        };

        $scope.openDataRemessa = function () {
            $scope.popupDataRemessa.opened = true;
        };

        $scope.salvarDadosEntrega = function () {
            $rootScope.selectedClient.simulacao.dadosEntrega = $scope.dadosEntrega;
            $uibModalInstance.close()
        }

    })
    .controller("ModalReplicarCtrl", function ($scope, $rootScope, $uibModalInstance, replicas, FreteService, CondicaoPagamentoService, SweetAlert) {
        "use strict";
        $scope.replicas = replicas;
        $scope.listaCondicaoPagamento = [];
        $scope.listaCondicaoFrete = [];

        function init() {
            //todo fazer padrão promessa
        }

        init();

        $scope.gridReplicas = {
            enableHorizontalScrollbar: true,
            enableGridMenu: true,
            data: 'replicas',
            columnDefs: [
                {
                    field: 'orgVendas',
                    displayName: 'Org. Vendas'
                },
                {
                    field: 'canal',
                    displayName: 'Canal'
                },
                {
                    field: 'setor',
                    displayName: 'Setor'
                },
                {
                    displayName: 'Cond. Pagtos',
                    width: '150',
                    field: 'condPagtos',
                    enableCellEdit: false,
                    cellTemplate: '<select ng-model="condPagtos" ng-options="pgto for pgto in COL_FIELD"></select>'
                },
                {
                    field: 'incoterms',
                    displayName: 'Incoterms',
                    enableCellEdit: false,
                    cellTemplate: '<select ng-model="condFrete" ng-options="frete for frete in COL_FIELD"></select>'
                },
                {
                    displayName: 'Cond. Frete',
                    width: '150',
                    field: 'condFrete',
                    enableCellEdit: false,
                    cellTemplate: '<select ng-model="condFrete" ng-options="frete for frete in COL_FIELD"></select>'
                }
            ]
        };

        $scope.gridApiReplicas = {};
        $scope.gridReplicas.onRegisterApi = function (gridApi) {
            $scope.gridApiReplicas = gridApi;
        };

        $scope.excluirReplicasSelecionadas = function () {
            if ($scope.replicas.length <= 0 || $scope.gridApiReplicas.selection.getSelectedRows().length <= 0) {
                return;
            }
            var alertExclusao = {
                title: "Exclusão de replicas",
                text: "Tem certeza que gostaria de excluir as replicas selecionadas?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sim, excluir!",
                cancelButtonText:"Cancelar",
                closeOnConfirm: false,
                closeOnCancel: true,
                showLoaderOnConfirm: true
            };
            SweetAlert.swal(
                alertExclusao, function (isConfirm) {
                    if (isConfirm) {

                        angular.forEach($scope.gridApiReplicas.selection.getSelectedRows(), function (data, index) {
                            $scope.replicas.splice($scope.replicas.lastIndexOf(data), 1);
                        });
                        SweetAlert.swal({
                            title: "Sucesso",
                            text: "Replicas excluídas com sucesso",
                            customClass: 'sweetalert-sm'
                        });

                    } else {
                        return;
                    }

                }
            );
        };

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.replicar = function () {
            $uibModalInstance.close();
        };

    })
    .controller("ModalProgramarEntregaCtrl", function ($scope, $rootScope, $uibModalInstance) {

        $scope.datasProgramadas = [
            {
                agendaEntrega: '25.05.2017',
                quatidadeDistribuicao: 1

            }
        ];

        $scope.gridProgramaEntrega = {
            enableRowSelection: true,
            enableGridMenu: true,
            data: 'datasProgramadas',
            onRegisterApi: function (gridApi) {
                $scope.gridApi = gridApi;
            },
            columnDefs: [
                {
                    field: 'agendamentoEntrega',
                    displayName: 'Agend. Entrega',
                    cellEditableCondition: true
                },
                {
                    field: 'quatidadeDistribuicao',
                    displayName: 'Qt. Distribuição',
                    cellEditableCondition: true
                }
            ]
        };

        $scope.excluirProgramaEntrega = function () {
            angular.forEach($scope.gridApi.selection.getSelectedRows(), function (data, index) {
                $scope.datasProgramadas.splice($scope.datasProgramadas.lastIndexOf(data), 1);
            });
        }

        $scope.adicionarProgramaEntrega = function () {
            $scope.datasProgramadas.push({agendaEntrega: 'Editar', quatidadeDistribuicao: 0})
        }

        $scope.criarProgramaEntrega = function () {
            $uibModalInstance.close();
        };

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.replicar = function () {
            $uibModalInstance.close();
        }

    })
    .controller("ModalEfetivarOvCtrl", function ($scope, $rootScope, lista, $uibModal, $location, $timeout) {

        $scope.showDetalhe = false;

        $scope.gridSimulacao = {
            enableRowSelection: true,
            multiSelect: false,
            enableRowHeaderSelection: false,
            enableCellEditOnFocus: true,
            data: 'listaMateriais',
            enableGridMenu: true,
            columnDefs: [
                {
                    field: 'codigo',
                    width: '150',
                    displayName: 'Material',
                    cellTemplate: '<div ng-click="grid.appScope.abriDetalhe(row.entity);">{{COL_FIELD}}</div>'
                },
                {
                    field: 'modelo',
                    width: '150',
                    displayName: 'Modelo',
                    cellTemplate: '<div ng-click="grid.appScope.abriDetalhe(row.entity);">{{COL_FIELD}}</div>'
                },
                {
                    field: 'cor',
                    width: '150',
                    displayName: 'Cor',
                    cellTemplate: '<div ng-click="grid.appScope.abriDetalhe(row.entity);">{{COL_FIELD}}</div>'
                },
                {
                    field: 'voltagem',
                    width: '80',
                    displayName: 'Voltagem',
                    cellTemplate: '<div ng-click="grid.appScope.abriDetalhe(row.entity);">{{COL_FIELD}}</div>'
                },
                {
                    field: 'quantidade',
                    width: '70',
                    displayName: 'Qtd'
                }
            ]
        };

        $scope.gridApiSimulacao = {};
        $scope.gridSimulacao.onRegisterApi = function (gridApi) {
            $scope.gridApiSimulacao = gridApi;
        };

        $scope.gridDetalhe = {
            enableGridMenu: true,
            data: 'listaMateriais',
            columnDefs: [
                {
                    field: 'progDeEntrega',
                    displayName: 'Prog. De Entrega',
                    cellTemplate: '  <div class="action-buttons"> ' +
                    ' <a class="blue" style="color: black"  ng-click="grid.appScope.programarEntrega(row.entity)" href=""><i class="fa fa-calendar bigger-130"></i></a>' +
                    ' </div>'
                },
                {
                    field: 'clienteEmissor',
                    displayName: 'Cliente Emissor'
                },
                {
                    field: 'nome',
                    displayName: 'Nome'
                },
                {
                    field: 'quatidadeDistribuicao',
                    enableCellEdit: true,
                    displayName: 'QTD. Distribuição'
                },
                {
                    field: 'dataDesejada',
                    displayName: 'Data Desej.'
                },
                {
                    field: 'endereco',
                    displayName: 'Endereço.'
                },
                {
                    field: 'cidade',
                    displayName: 'Cidade'
                },
                {
                    field: 'estado',
                    displayName: 'Estado'
                },
                {
                    field: 'cnpj',
                    displayName: 'CNPJ'
                },
                {
                    field: 'incricaoEstadual',
                    displayName: 'Inscr. Estadual.'
                },
                {
                    field: 'status',
                    displayName: 'Status'
                }
            ]
        };

        $scope.abriDetalhe = function (materiais) {
            $timeout(function () {
                if ($scope.gridApiSimulacao.selection.getSelectedRows().length <= 0) {
                    $scope.showDetalhe = false;
                } else {
                    $scope.showDetalhe = true;
                }
            }, 0);
        };

        $scope.programarEntrega = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop:'static',
                templateUrl: './view/programar-entrega.html',
                controller: 'ModalProgramarEntregaCtrl',
                size: 'md'
            });
        };

        $scope.efetivarOvStep2 = function () {
            /*var modalInstance = $uibModal.open({
             animation: true,
             templateUrl: './view/efetivar-ov2.html',
             controller: 'ModalEfetivarOv2Ctrl',
             backdrop: 'static',
             size: 'lg'
             });*/
            $location.path("/efetivarOv2")
        };

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.replicar = function () {
            $uibModalInstance.close();
        };

        $scope.goBackSimulacao = function () {
            $location.path("/simulacoes");
        }

    })
    .controller("ModalBonificacaoCtrl", function ($scope, $rootScope, $uibModal, $uibModalInstance) {

        $scope.showDetalhe = false;

        $scope.abriDetalhe = function (materiais) {
            $scope.showDetalhe = !$scope.showDetalhe;
        }

        $scope.listaMateriais = []

        $scope.gridBonificacoes = {
            data: 'listaMateriais',
            enableGridMenu: true,
            columnDefs: [
                {
                    field: 'marcar',
                    displayName: 'Marcar'
                },
                {
                    field: 'organizacao',
                    displayName: 'Organização'
                },
                {
                    field: 'canal',
                    displayName: 'Canal'
                },
                {
                    field: 'setor',
                    displayName: 'Setor'
                },
                {
                    field: 'produto',
                    displayName: 'Produto'
                },
                {
                    field: 'quantidade',
                    displayName: 'Quantidade'
                }
            ]
        };

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.replicar = function () {
            $uibModalInstance.close();
        }

    })
    .controller("ModalBuscarMaterialCtrl", function ($scope, $rootScope, $uibModal, $uibModalInstance, MaterialService, $timeout) {

        $scope.showDetalhe = false;

        $scope.busca = {
            codigo: "",
            descricao: ""
        };

        $scope.materiais = {
            codigos: ""
        };

        $scope.abriDetalhe = function (materiais) {
            $scope.showDetalhe = !$scope.showDetalhe;
        };

        $scope.materiaisAchados = [];


        function init() {
            $scope.materiaisAchados = MaterialService.consultaMaterial();
        }

        init();

        $scope.listaMateriais = [];

        $scope.gridBuscaMaterial = {
            enableFiltering: true,
            data: 'materiaisAchados',
            enableGridMenu: true,
            columnDefs: [
                {
                    field: 'codigo',
                    width:'130',
                    displayName: 'Código do Material'
                },
                {
                    field: 'descricao',
                    displayName: 'Descrição'
                }
            ]
        };

        $scope.gridApiBuscaMaterial = {};
        $scope.gridBuscaMaterial.onRegisterApi = function (gridApi) {
            $scope.gridApiBuscaMaterial = gridApi;
        };

        $scope.filtraMaterialCodigo = function () {
            $timeout(function () {
                if ($scope.busca.codigo != "" && $scope.busca.codigo != null && $scope.busca.codigo.length > 3) {
                    $scope.gridApiBuscaMaterial.grid.columns[1].filters[0].term = $scope.busca.codigo;
                }
            }, 0);
        };

        $scope.filtraMaterialDescricao = function () {
            $timeout(function () {
                if ($scope.busca.codigo != "" && $scope.busca.codigo != null && $scope.busca.codigo.length > 3) {
                    $scope.gridApiBuscaMaterial.grid.columns[2].filters[0].term = $scope.busca.codigo;
                }
            }, 0);
        };

        $scope.adicionarMateriaisSelecionados = function () {
            angular.forEach($scope.gridApiBuscaMaterial.selection.getSelectedRows(), function (data, index) {
                $scope.listaMateriais.push(data);
            });

            $uibModalInstance.close($scope.listaMateriais);
        };

        $scope.deletarMateriaisSelecionados = function(){
            angular.forEach($scope.gridApiBuscaMaterial.selection.getSelectedRows(), function(data, index){
                //console.log("data.codigo | " + data.codigo);  

                angular.forEach($rootScope.listaMateriais, function(value, key){
                    
                      if(value.codigo == data.codigo){
                         $rootScope.listaMateriais.splice(key, 1);
                      }
                   });

                //$rootScope.listaMateriais = _.without($rootScope.listaMateriais, data);
            });

           // $scope.gridBuscaMaterial.data = $rootScope.listaMateriais;

           // console.log(">> " + $rootScope.listaMateriais.length);

            //$uibModalInstance.close($scope.listaMateriais);
        };
        $scope.close = function () {
            $uibModalInstance.close();
        };


    })
    .controller("ModalEfetivarOv2Ctrl", function ($scope, $rootScope, $uibModal, _, $location) {

        $scope.showDetalhe = false;

        $scope.codProcEsp = [
            "TRUCK ABERTO",
            "TRUCK BAU",
            "TOCO ABERTO",
            "TOCO BAU"
        ];

        $scope.listaOrdenASeremEfetivadas = [
            {
                status: "",
                organizacao: "OV 1000",
                canal: "11",
                setor: "10",
                situacaoCarga: false,
                codProcEsp: [
                    "TRUCK ABERTO",
                    "TRUCK BAU",
                    "TOCO ABERTO",
                    "TOCO BAU"
                ],
                emissor: "",
                recebedor: "0000021777",
                tipo: "ZVPB",
                preOrdem: "0000000001",
                statusPreOrdem: "Não Efetivada",
                ordem: "",
                imprimir: ""
            },
            {
                status: "",
                organizacao: "OV 1000",
                canal: "11",
                setor: "10",
                situacaoCarga: false,
                codProcEsp: [
                    "TRUCK ABERTO",
                    "TRUCK BAU",
                    "TOCO ABERTO",
                    "TOCO BAU"
                ],
                emissor: "",
                recebedor: "0000041203",
                tipo: "ZVPB",
                preOrdem: "0000000002",
                statusPreOrdem: "Não Efetivada",
                ordem: "",
                imprimir: ""
            }
        ];

        $scope.goBackOv = function () {
            $location.path("/efetivarOv")
        };

        $scope.textoOv = [
            {
                id: 0,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorrentes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }, {
                id: 1,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorrentes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }
        ];

        $scope.textoSimulacao = [
            {
                id: 0,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorrentes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }, {
                id: 1,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorrentes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }
        ];

        $scope.abriDetalhe = function (materiais) {
            $scope.showDetalhe = !$scope.showDetalhe;
        };

        $scope.brindesEBonificacoes = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/bonificacao.html',
                controller: 'ModalBonificacaoCtrl',
                backdrop: 'static',
                size: 'lg'
            });
        };

        $scope.gridOrdenASeremEfetivadas = {
            data: 'listaOrdenASeremEfetivadas',
            enableGridMenu: true,
            columnDefs: [
                {
                    field: 'status',
                    width: '100',
                    displayName: 'Status'
                },
                {
                    field: 'organizacao',
                    width: '100',
                    displayName: 'Organização'
                },
                {
                    field: 'canal',
                    width: '50',

                    displayName: 'Canal'
                },
                {
                    field: 'setor',
                    width: '50',

                    displayName: 'Setor'
                },
                {
                    field: 'situacaoCarga',
                    width: '70',

                    displayName: 'Sit. Carga',
                    cellTemplate: ' <div ng-click="grid.appScope.alterarSituacaoCarga(row.entity)">' +
                    '<div ng-if="!COL_FIELD" class="hidden-sm hidden-xs action-buttons">' +
                    '<a class="red" style="color: red" href=""><i class="fa fa-times-circle-o bigger-130"></i></a></div>' +
                    '<div ng-if="COL_FIELD" class="hidden-sm hidden-xs action-buttons">' +
                    '<a class="green" style="color: green" href=""><i class="fa fa-check-circle-o bigger-130"></i></a></div></div>'
                },
                {
                    field: 'codProcEsp',
                    width: '150',
                    displayName: 'CódProcEsp',
                    enableCellEdit: false,
                    cellTemplate: '<select ng-model="codProcEsp" ng-options="frete for frete in COL_FIELD"></select>'
                },
                {
                    field: 'emissor',
                    width: '100',
                    displayName: 'Emissor'
                },
                {
                    field: 'recebedor',
                    width: '100',
                    displayName: 'Recebedor'
                },
                {
                    field: 'tipo',
                    width: '50',

                    displayName: 'Tipo'
                },
                {
                    field: 'preOrdem',
                    width: '100',
                    displayName: 'Pré Ordem'
                },
                {
                    field: 'statusPreOrdem',
                    width: '100',
                    displayName: 'Status Pré Ordem'
                },
                {
                    field: 'ordem',
                    width: '100',
                    displayName: 'Ordem'
                },
                {
                    field: 'textoOv',
                    width: '100',
                    displayName: 'Texto O.V',
                    cellTemplate: '  <div class="action-buttons"> ' +
                    ' <a class="black" style="color: black"  ng-click="grid.appScope.adicionarTextoOv(row.entity)" href=""><i class="fa fa-file-text bigger-130"></i></a>' +
                    ' </div>'
                },
                {
                    field: 'textoSimulacao',
                    width: '100',
                    displayName: 'Texto Simulação',
                    cellTemplate: '  <div class="action-buttons"> ' +
                    ' <a class="black" style="color: black"  ng-click="grid.appScope.adicionarTextoSimulacao(row.entity)" href=""><i class="fa fa-file-text bigger-130"></i></a>' +
                    ' </div>'
                },
                {
                    field: 'imprimir',
                    width: '100',
                    displayName: 'Imprimir',
                    cellTemplate: '  <div class="action-buttons"> ' +
                    ' <a class="black" style="color: black"  ng-click="grid.appScope.imprimir(row.entity)" href=""><i class="fa fa-print bigger-130"></i></a>' +
                    ' </div>'
                }
            ]
        };

        $scope.alterarSituacaoCarga = function (item) {
            item.situacaoCarga = !item.situacaoCarga;
        };

        $scope.gridDetalhe = {
            data: 'listaMateriais',
            enableGridMenu: true,
            columnDefs: [
                {
                    field: 'progDeEntrega',
                    displayName: 'Prog. De Entrega',
                    cellTemplate: '  <div class="action-buttons"> ' +
                    ' <a class="blue" style="color: black"  ng-click="grid.appScope.programarEntrega(row.entity)" href=""><i class="fa fa-calendar bigger-130"></i></a>' +
                    ' </div>'
                },
                {
                    field: 'clienteEmissor',
                    displayName: 'Cliente Emissor'
                },
                {
                    field: 'nome',
                    displayName: 'Nome'
                },
                {
                    field: 'quatidadeDistribuicao',
                    displayName: 'QTD. Distribuição'
                },
                {
                    field: 'dataDesejada',
                    displayName: 'Data Desej.'
                },
                {
                    field: 'endereco',
                    displayName: 'Endereço.'
                },
                {
                    field: 'cidade',
                    displayName: 'Cidade'
                },
                {
                    field: 'estado',
                    displayName: 'Estado'
                },
                {
                    field: 'cnpj',
                    displayName: 'CNPJ'
                },
                {
                    field: 'incricaoEstadual',
                    displayName: 'Inscr. Estadual.'
                },
                {
                    field: 'status',
                    displayName: 'Status'
                }
            ]
        };

        $scope.programarEntrega = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop:'static',
                templateUrl: './view/programar-entrega.html',
                controller: 'ModalProgramarEntregaCtrl',
                size: 'md'
            });
        };

        $scope.removeTextoOv = function (texto) {
            $scope.textoOv = _.without($scope.textoOv, _.findWhere($scope.textoOv, {id: texto.id}));
        };

        $scope.removeTextoSimulacao = function (texto) {
            $scope.textoSimulacao = _.without($scope.textoSimulacao, _.findWhere($scope.textoSimulacao, {id: texto.id}));
        };

        $scope.adicionarTextoOv = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop:'static',
                templateUrl: './view/adicionar-texto-ov.html',
                controller: 'ModalTextoOvCtrl'
            });
        };

        $scope.adicionarTextoSimulacao = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop:'static',
                templateUrl: './view/adicionar-texto-simulacao.html',
                controller: 'ModalTextoOvCtrl'
            });
        };

        $scope.efetivarOrdensDeVenda = function () {
            $scope.listaOrdenASeremEfetivadas[0].ordem = 123123213;
        };

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.replicar = function () {
            $uibModalInstance.close();
        };

    })
    .controller("ModalMaterialCompletoCtrl", function ($scope, $rootScope, $uibModalInstance, material, CentroService, LocalExpedicaoService, IncotermsService, CondicaoPagamentoService) {


        $scope.material = material;
        $scope.listaDeCentros = [];
        $scope.listaDeLocaisExpedicao = [];
        $scope.listaDeIncoterms = [];


        function init() {
            //todo fazer padrão promessa
            $scope.listaDeCentros = CentroService.consultaCentroPorMaterial(material.id);
            $scope.listaDeLocaisExpedicao = LocalExpedicaoService.consultaLocalExpedicaoPorMaterial(material.id);
            $scope.listaDeIncoterms = IncotermsService.consultaIncotermsPorMaterial(material.id);
            $scope.listaCondPgto = CondicaoPagamentoService.consultaPagamentoPorMaterial(material.id);

        }

        init();

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.transferirMaterial = function (material) {
            $uibModalInstance.close();
        };

        $scope.salvarMaterial = function () {
            $uibModalInstance.close();
        };

        $scope.popup = {
            opened: false
        };

        $scope.open = function () {
            $scope.popup.opened = true;
        };

    })
    .controller("HistoricoController", function ($scope, $rootScope, historico, MaterialService) {

        $scope.listaHistoricoVenda = [];
        $scope.loading = false;

        function init() {
            //todo fazer padrão promessa
            $scope.loading = true;
            $scope.listaHistoricoVenda = historico;
            //$scope.listaHistoricoVenda = [];
            $scope.loading = false;
        }

        init();

        $scope.gridHistoricoVenda = {
            enableHorizontalScrollbar: 0,
            enableGridMenu: true,
            data: 'listaHistoricoVenda',
            columnDefs: [
                {
                    field: 'sku',
                    width: '150',
                    displayName: 'SKU'
                },
                {
                    field: 'data',
                    width: '150',
                    displayName: 'Data'
                },
                {
                    field: 'pvl',
                    width: '70',
                    displayName: 'PVL'
                },
                {
                    field: 'percDesc',
                    width: '100',
                    displayName: '% Desc'
                },
                {
                    field: 'percAcres',
                    width: '100',
                    displayName: '% Acres'
                },
                {
                    field: 'valorTotalNf',
                    width: '150',
                    displayName: 'Valor Total NF'
                },
                {
                    field: 'quantidade',
                    width: '50',
                    displayName: 'Qtde'
                },
                {
                    field: 'condPagto',
                    width: '150',
                    displayName: 'Cond. Pagto'
                },
                {
                    field: 'sap',
                    width: '100',
                    displayName: 'SAP'
                },
                {
                    field: 'ordemDeVenda',
                    width: '150',
                    displayName: 'Ordem de Venda'
                }
            ]
        };

        $scope.close = function () {
            $uibModalInstance.close();
        };

    })
    .controller("SimulacoesController", function ($scope, $rootScope, $location, _, $uibModal, MaterialService, CentroService, LocalExpedicaoService, IncotermsService, SweetAlert, uiGridConstants) {
        "use strict";
        $scope.gotoDev = function () {
            $location.path("/dev");
        };

        $rootScope.listaMateriais = [];
        $scope.filtro={
            filtroUltimasSimulacoes : ""
        };
        $scope.listaDeCentros = [];
        $scope.listaDeLocaisExpedicao = [];
        $scope.listaDeIncoterms = [];
        $scope.replicas = [];
        $scope.painelTabela = {
            quantidadeDeTabela: 2,
            tabelaAtual: 1,
            tituloTabelaAtual: 'Condições de Pagamento'
        };
        $scope.editable = false;


        function init() {
            if ($rootScope.selectedClient == null) {

                var modalInstance = $uibModal.open({
                    animation: true,
                    backdrop:'static',
                    templateUrl: './view/selecionar-cliente.html',
                    controller: 'ModalSelecionarClienteCtrl',
                    size: "lg",
                    resolve: {
                        url: function () {
                            return "/simulacoes";
                        }
                    }
                });

            }
            //todo fazer padrão promessa
            $rootScope.listaMateriais = MaterialService.consultaMaterial();
            $scope.listaDeCentros = CentroService.consultaCentroPorMaterial(1);
            $scope.listaDeLocaisExpedicao = LocalExpedicaoService.consultaLocalExpedicaoPorMaterial(1);
            $scope.listaDeIncoterms  = IncotermsService.consultaIncotermsPorMaterial(1);
            $scope.replicas = MaterialService.consultaReplicas();
        }

        init();

        $scope.setEditable = function () {
            $scope.editable = !$scope.editable
        };
        $scope.proximaTabela = function () {
            if ($scope.painelTabela.tabelaAtual + 1 <= $scope.painelTabela.quantidadeDeTabela) {
                $scope.painelTabela.tabelaAtual = $scope.painelTabela.tabelaAtual + 1;
            }
            $scope.changeHeaderTitle();
        };

        $scope.tabelaAnterior = function () {
            if ($scope.painelTabela.tabelaAtual - 1 > 0) {
                $scope.painelTabela.tabelaAtual = $scope.painelTabela.tabelaAtual - 1;
            }
            $scope.changeHeaderTitle();
        };

        $scope.changeHeaderTitle = function () {
            if ($scope.painelTabela.tabelaAtual == 1) {
                $scope.painelTabela.tituloTabelaAtual = 'Condições de Pagamento';
            } else if ($scope.painelTabela.tabelaAtual == 2) {
                $scope.painelTabela.tituloTabelaAtual = 'Histórico';
            }
        };

        $scope.replicar = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/replicar.html',
                controller: 'ModalReplicarCtrl',
                size: 'lg',
                backdrop: 'static',
                resolve: {
                    replicas: function () {
                        return MaterialService.consultaReplicas();
                    }
                }
            });
        };

        $scope.efetivarOv = function () {
            /*var modalInstance = $uibModal.open({
             animation: true,
             templateUrl: './view/efetivar-ov.html',
             controller: 'ModalEfetivarOvCtrl',
             size: 'lg',
             backdrop: 'static',
             resolve: {
             materiais: function () {
             return $rootScope.listaMateriais;
             }
             }
             });*/

            $location.path("/efetivarOv");
        };

        $scope.consultarMaterialCompleto = function (id) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/material-completo.html',
                controller: 'ModalMaterialCompletoCtrl',
                size: 'lg',
                backdrop:'static',
                resolve: {
                    material: function () {
                        return MaterialService.consultaMaterialCompleto(id);
                    }
                }

            });
        };

        $scope.abrirHitoriocoMaterial = function (material) {
            /* var modalInstance = $uibModal.open({
             animation: true,
             templateUrl: './view/historico-material.html',
             controller: 'ModalHistoricoMaterialCtrl',
             backdrop: 'static',
             size: 'lg',

             resolve: {
             material: function () {
             return MaterialService.consultaMaterialCompleto(material.id);
             }
             }

             });*/
            $location.path("/historico/" + material.id);

        };

        $scope.codProcEsp = [
            {sppi: 16, denominacao: "TRUCK ABERTO"},
            {sppi: 17, denominacao: "TRUCK BAU"},
            {sppi: 18, denominacao: "TOCO ABERTO"},
            {sppi: 19, denominacao: "TOCO BAU"}
        ];

        $scope.gridReplicas = {
            enableHorizontalScrollbar: 0,

            enableVerticalScrollbar: 0,
            enableGridMenu: true,
            data: 'replicas',
            
            enableGridMenu: true,
            data: 'replicas',
            columnDefs: [
                {
                    field: 'orgVendas',
                    width: '40',
                    displayName: 'OV'
                },
                {
                    field: 'canal',
                    width: '35',
                    displayName: 'CD'
                },
                {
                    field: 'setor',
                    width: '35',
                    displayName: 'SA'
                },
                {
                    displayName: 'Cond.Pgto',
                    width: '75',
                    field: 'condPagtos',
                    enableCellEdit: false,
                    cellTemplate: '<select ng-model="condPagtos" ng-options="pgto for pgto in COL_FIELD"></select>'
                },
                {
                    field: 'incoterms',
                    width: '65',
                    displayName: 'Inc',
                    enableCellEdit: false,
                    cellTemplate: '<select ng-model="condFrete" ng-options="frete for frete in COL_FIELD"></select>'
                },
                {
                    displayName: 'Cond.Frete',
                    width: '80',
                    field: 'condFrete',
                    enableCellEdit: false,
                    cellTemplate: '<select ng-model="condFrete" ng-options="frete for frete in COL_FIELD"></select>'
                }
            ]
        };

        $scope.gridApiReplicas = {};
        $scope.gridReplicas.onRegisterApi = function (gridApi) {
            $scope.gridApiReplicas = gridApi;
        };

        $scope.excluirReplicasSelecionadas = function () {
            $scope.temp = angular.copy($scope.replicas);
            $scope.replica = [];

            $scope.replicas = angular.copy($scope.temp);

           // $scope.gridReplicas.data = $scope.replicas;

        };

        $scope.replicar = function () {
            $uibModalInstance.close();
        };

        $scope.gridMateriais = {
            enableHorizontalScrollbar: true,
            showColumnFooter: true,
            enableGridMenu: true,
            rowHeight: 19,
            data: 'listaMateriais',
            columnDefs: [
                {
                    field: 'acao',
                    enableColumnMenu: false,
                    enableCellEdit: false,
                    pinnedLeft:true,
                    width: '20',
                    displayName: '',
                    cellTemplate: '  <div class="action-buttons"> ' +
                    ' <a class="black" style="color: black"  ng-click="grid.appScope.abrirHitoriocoMaterial(row.entity)" href=""><i class="fa fa-book bigger-130"></i></a>' +
                    ' </div>'
                },
                {
                    field: 'codigo',
                    width: '100',
                    pinnedLeft:true,
                    displayName: 'Material',
                    footerCellTemplate: '<div class="ui-grid-cell-contents" >Total:</div>',
                    cellTemplate: '  <a href="" ng-click="grid.appScope.consultarMaterialCompleto(COL_FIELD)">{{COL_FIELD}}</a>'
                },
                {
                    field: 'cor',
                    width: '80',
                    pinnedLeft:true,
                    displayName: 'Cor'
                },
                {
                    field: 'voltagem',
                    width: '80',
                    pinnedLeft:true,
                    displayName: 'Voltagem'
                },
                {
                    field: 'condPagto',
                    width: '100',
                    displayName: 'Cond. Pgto'
                },
                {
                    field: 'quantidade',
                    width: '90',
                    aggregationType: uiGridConstants.aggregationTypes.sum,
                    footerCellTemplate: '<div class="ui-grid-cell-contents" >{{col.getAggregationValue()}}</div>',
                    displayName: 'Quantidade'
                },
                {
                    field: 'situacaoCarga',
                    width: '80',
                    displayName: 'Sit. Carga',
                    cellTemplate: ' <div ng-click="grid.appScope.alterarSituacaoCarga(row.entity)">' +
                    '<div ng-if="!COL_FIELD" class="hidden-sm hidden-xs action-buttons">' +
                    '<a class="red" style="color: red" href=""><i class="fa fa-times-circle-o bigger-130"></i></a></div>' +
                    '<div ng-if="COL_FIELD" class="hidden-sm hidden-xs action-buttons">' +
                    '<a class="green" style="color: green" href=""><i class="fa fa-check-circle-o bigger-130"></i></a></div></div>'
                },
                {
                    field: 'precFlexibilidade',
                    width: '80',
                    displayName: '%Flexib'
                },
                {
                    field: 'percRedutorDesconto',
                    width: '80',
                    displayName: '%Redut.'
                },
                {
                    field: 'pvl',
                    width: '80',
                    displayName: 'PVL'
                },
                {
                    field: 'condPagtoFrete',
                    width: '80',
                    displayName: 'Cond. Frete',
                    enableCellEdit: false,
                    cellTemplate: '<select ng-model="condPagtoFrete" ng-options="frete for frete in COL_FIELD"></select>'
                },
                {
                    field: 'valorFrete',
                    width: '80',
                    displayName: 'VL.Frete'
                },
                {
                    field: 'valorFreteMlog',
                    width: '80',
                    displayName: 'VL.Frete MLOG'
                },
                {
                    field: 'valorNotaFiscalUnitario',
                    width: '100',
                    displayName: 'Valor NF Unit.'
                },
                {
                    field: 'valorNotaFiscalTotal',
                    width: '100',
                    aggregationType: uiGridConstants.aggregationTypes.sum,
                    footerCellTemplate: '<div class="ui-grid-cell-contents" >{{col.getAggregationValue() | currency:"R$ ":2 }}</div>',
                    displayName: 'Valor NF Total'
                },
                {
                    field: 'valorComIcms',
                    width: '100',
                    displayName: 'VL.C/ ICMS'
                },
                {
                    field: 'valorComIpi',
                    width: '100',
                    displayName: 'VL.C/ IPI'
                },
                {
                    field: 'valorComIcmsSt',
                    width: '100',
                    displayName: 'VL.C/ ICMS ST'
                },
                {
                    displayName: 'Centro',
                    width: '80',
                    enableCellEdit: false,
                    field: 'centro',
                    cellTemplate: '<select ng-model="centro" ng-options="centro for centro in COL_FIELD"></select>'
                },
                {
                    displayName: 'Local Expedicao',
                    width: '110',
                    field: 'localExpedicao',
                    enableCellEdit: false,
                    cellTemplate: '<select ng-model="localExpedicao" ng-options="local for local in COL_FIELD"></select>'
                },
                {
                    field: 'juros',
                    width: '80',
                    displayName: '%Juros'
                },
                {
                    field: 'descricao',
                    width: '80',
                    displayName: 'Descricao'
                }
            ]
        };

        $scope.gridApiMateriais = {};
        $scope.gridMateriais.onRegisterApi = function (gridApi) {
            $scope.gridApiMateriais = gridApi;
        };

        $scope.deletarMateriaisSelecionados = function () {
            if ($rootScope.listaMateriais.length <= 0 || $scope.gridApiMateriais.selection.getSelectedRows().length <= 0) {
                return;
            }
            var alertExclusao = {
                title: "Exclusão de itens de simulação",
                text: "Tem certeza que gostaria de excluir os itens selecionados?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sim, excluir!",
                cancelButtonText:"Cancelar",
                closeOnConfirm: true,
                closeOnCancel: true,
                showLoaderOnConfirm: true
            };
            SweetAlert.swal(
                alertExclusao, function (isConfirm) {
                    if (isConfirm) {

                        angular.forEach($scope.gridApiMateriais.selection.getSelectedRows(), function (data, index) {
                            $rootScope.listaMateriais.splice($rootScope.listaMateriais.lastIndexOf(data), 1);
                        });

                    } else {
                        return;
                    }

                }
            );
        };

        $scope.ultimasSimulacoes = [
            {
                id: 1,
                data: '15.04.2017',
                descricao: '',
                emissor: '1234567890',
                valor: 'R$ 76.000,00',
                status: 'GRAVADA'
            },
            {
                id: 2,
                data: '05.04.2017',
                descricao: '',
                emissor: '1234567890',
                valor: 'R$ 44.000,00',
                status: 'EFETUADA'
            },
            {
                id: 3,
                data: '25.03.2017',
                descricao: '',
                emissor: '1234567890',
                valor: 'R$ 150.000,00',
                status: 'GRAVADA'
            },
            {
                id: 4,
                data: '10.02.2017',
                descricao: '',
                emissor: '1234567890',
                valor: 'R$ 99.000,00',
                status: 'CANCELADA'
            }
        ];

        $scope.gridUltimasSimulacoes = {
            enableHorizontalScrollbar: 0,
            enableGridMenu: true,
            enableFiltering: true,
            data: 'ultimasSimulacoes',
            columnDefs: [
                {
                    field: 'data',
                    width: '100',
                    displayName: 'Data'
                },
                {
                    field: 'descricao',
                    width: '150',
                    displayName: 'Descrição'
                },
                {
                    field: 'emissor',
                    width: '100',
                    displayName: 'Emissor'
                },
                {
                    field: 'status',
                    width: '150',
                    displayName: 'Status'
                }
            ]
        };

        $scope.gridApiUltimasSimulacoes = {};
        $scope.gridUltimasSimulacoes.onRegisterApi = function (gridApi) {
            $scope.gridApiUltimasSimulacoes = gridApi;
            $scope.gridApiUltimasSimulacoes.grid.registerRowsProcessor( $scope.filtraUltimasSimulacoesApi, 200 );
        };

        $rootScope.simulacaoPontuais = [
            {
                id: 0,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorrentes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }, {
                id: 1,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorrentes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }, {
                id: 2,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorrentes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }
        ];

        $scope.alterarSituacaoCarga = function (item) {
            item.situacaoCarga = !item.situacaoCarga;
        };

        $scope.buscarMaterial = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/buscar-material.html',
                controller: 'ModalBuscarMaterialCtrl',
                size: 'md',
                backdrop: 'static'
            });

            modalInstance.result.then(function (listaMateriais) {
                angular.forEach(listaMateriais, function (data, index) {
                    $rootScope.listaMateriais.push(data);
                });

            });
        };

        $scope.removePontual = function (pontual) {
            var alertExclusao = {
                title: "Exclusão de nota",
                text: "Tem certeza que gostaria de excluir essa nota?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sim, excluir!",
                cancelButtonText:"Cancelar",
                closeOnConfirm: false,
                closeOnCancel: true,
                showLoaderOnConfirm: true
            };
            SweetAlert.swal(
                alertExclusao, function (isConfirm) {
                    if (isConfirm) {
                        $rootScope.simulacaoPontuais = _.without($rootScope.simulacaoPontuais, _.findWhere($rootScope.simulacaoPontuais, {id: pontual.id}));
                        SweetAlert.swal({
                            title: "Sucesso",
                            text: "Nota excluída com sucesso",
                            customClass: 'sweetalert-sm'
                        });

                    } else {
                        return;
                    }

                }
            );
        };

        $scope.adicionarPontual = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop:'static',
                templateUrl: './view/adicionar-pontual.html',
                controller: 'ModalCriarPontualSimulacoesCtrl'
            });
        };

        $scope.editarDadosEntrega = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop:'static',
                templateUrl: './view/editar-dadosEntrega.html',
                controller: 'ModalDadosEntregaCtrl',
                resolve: {
                    dadosEntrega: function () {
                        return $rootScope.selectedClient.simulacao.dadosEntrega;
                    }
                }
            });
        };

        //caso insistam na edição dos dados de entrega na tela
        /*
         $scope.editarDadosEntrega = function () {
            $scope.dadosEntregaEditavel = !$scope.dadosEntregaEditavel
         };
         */
         $scope.formato = 'dd-MM-yyyy';

         $scope.popupDataEntrega = {
            opened: false
         };

         $scope.openDataEntrega = function () {
            $scope.popupDataEntrega.opened = true;
         };

         $scope.popupDataRemessa = {
            opened: false
         };

         $scope.openDataRemessa = function () {
            $scope.popupDataRemessa.opened = true;
         };

         $scope.salvarDadosEntrega = function () {
            $rootScope.selectedClient.simulacao.dadosEntrega = $scope.dadosEntrega;
            $uibModalInstance.close()
         }
         

         $scope.formato = 'dd-MM-yyyy';

         $scope.popupDataEntrega = {
         opened: false
         };

         $scope.openDataEntrega = function () {
         $scope.popupDataEntrega.opened = true;
         };

         $scope.popupDataRemessa = {
         opened: false
         };

         $scope.openDataRemessa = function () {
         $scope.popupDataRemessa.opened = true;
         };

         $scope.salvarDadosEntrega = function () {
         $rootScope.selectedClient.simulacao.dadosEntrega = $scope.dadosEntrega;
         $uibModalInstance.close()
         }


        $scope.bonificacao = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/bonificacao.html',
                controller: 'ModalBonificacaoCtrl',
                backdrop: 'static',
                size: 'lg'
            });
        };

        $scope.salvarSimulacao = function () {
            var alertExclusao = {
                title: "Salvar simulação",
                text: "Tem certeza que gostaria de salvar essa simulação?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sim, salvar!",
                cancelButtonText:"Cancelar",
                closeOnConfirm: false,
                closeOnCancel: true,
                showLoaderOnConfirm: true
            };
            SweetAlert.swal(
                alertExclusao, function (isConfirm) {
                    if (isConfirm) {
                        $rootScope.numeroSimulacao = "00000010";
                        SweetAlert.swal({
                            title: "Sucesso",
                            text: "Simulação: " + $rootScope.numeroSimulacao + " salva com sucesso",
                            customClass: 'sweetalert-sm'
                        });

                    } else {
                        return;
                    }

                }
            );
        };

        $scope.filtraUltimasSimulacoes = function(){
            $scope.gridApiUltimasSimulacoes.grid.refresh();
        };

        $scope.filtraUltimasSimulacoesApi = function (renderableRows) {
            var matcher = new RegExp($scope.filtro.filtroUltimasSimulacoes.toLowerCase());
            renderableRows.forEach(function (row) {
                var match = false;
                ['data', 'status'].forEach(function (field) {
                    var temp = row.entity[field].toLowerCase();
                    if (temp.match(matcher)) {
                        match = true;
                    }
                });
                if (!match) {
                    row.visible = false;
                }
            });
            return renderableRows;
        };

    })
    .controller("GraficosController", function ($scope, $rootScope) {

        $rootScope.dadosGraficos = [
            {
                "x": "Fogão",
                "voltyd16": 1,
                "voltyd17": 0
            }, {
                "x": "Forno Microondas",
                "voltyd16": 0,
                "voltyd17": 6
            }, {
                "x": "Freezer Horizontal",
                "voltyd16": 0,
                "voltyd17": 3
            }, {
                "x": "Freezer Vertical",
                "voltyd16": 0,
                "voltyd17": 2
            }, {
                "x": "Lavadora Roupas",
                "voltyd16": 1,
                "voltyd17": 8
            }, {
                "x": "Refrigerador Elétrico",
                "voltyd16": 12,
                "voltyd17": 11
            }];


        $rootScope.dadosGraficosColunas = [
            {
                "id": "voltyd16",
                "type": "bar",
                "name": "voltyd16"
            },
            {
                "id": "voltyd17",
                "type": "bar",
                "name": "voltyd17"
            }];

        $rootScope.datax = {
            "id": "x"
        };

    })
    .controller("MainController", function ($scope, $rootScope, $filter, $uibModal, $document, $location, UsuarioService, AcaoPromocionalService, uiGridConstants) {
        "use strict";
        $rootScope.gotoCliente = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop:'static',
                templateUrl: './view/selecionar-cliente.html',
                controller: 'ModalSelecionarClienteCtrl',
                size: "lg",
                resolve: {
                    url: function () {
                        return "/cliente";
                    }
                }
            });
        };
        $rootScope.numeroSimulacao = "";
        $rootScope.sapLink = function () {
            $location.path("/sapLink");
        };

        //oninit
        $rootScope.user = UsuarioService.getUsuario();

        $rootScope.linksMenu = [
            {
                nome: 'Cliente',
                link: '/cliente',
                icon: 'fa-user'

            }, {
                nome: 'Simulações',
                link: '/simulacoes',
                icon: 'fa-usd'

            }];

        $rootScope.divLink = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop:'static',
                templateUrl: './view/sap-links.html',
                controller: ''
            });
        };

        $rootScope.linhaBranca = [
            {id: 0, nome: "ELECTROLUX", quantidade: "45%"},
            {id: 1, nome: "PANASONIC", quantidade: "25%"},
            {id: 2, nome: "SAMSUNG", quantidade: "30%"},
            {id: 3, nome: "ATLAS", quantidade: "5%"}

        ];

        $rootScope.concorrentesRevenda = [
            {id: 0, nome: "ELECTROLUX", quantidade: "45%"},
            {id: 1, nome: "PANASONIC", quantidade: "25%"},
            {id: 2, nome: "SAMSUNG", quantidade: "30%"},
            {id: 3, nome: "ATLAS", quantidade: "5%"}

        ];

        $rootScope.categoriaLinks = [
            {
                nome: "Acesso Restrito",
                icone: "fa fa-lock",
                links: [
                    {
                        titulo: "ZTLV18 - Administração Menu",
                        url: ""
                    },
                    {
                        titulo: "ZTLV14 - Código de Marca e Categoria Mix",
                        url: ""
                    },
                    {
                        titulo: "ZTLV19 - Cadastro Ação Promocional e Mapa da Mina",
                        url: ""
                    },
                    {
                        titulo: "ZTLV15 - Texos Fixos - Simulação e OV",
                        url: ""
                    },
                    {titulo: "ZTLV20 - TAB PRE Atribuir Marca e Categoria", url: ""},
                    {
                        titulo: "ZTLV11 - ZROUTE",
                        url: ""
                    },
                    {
                        titulo: "ZTABP - Gerar de tabela de Preço",
                        url: ""
                    },
                    {titulo: "ZEXEC - Exceção de materiais - TAB preço", url: ""}]
            },
            {
                nome: "Cliente",
                icone: "fa fa-user",
                links: [
                    {
                        titulo: "XD03 - Consulta Cadastro Cliente",
                        url: ""
                    },
                    {
                        titulo: "ZTLV09 - Relação de Telefones",
                        url: ""
                    }]
            },
            {
                nome: "Atividades",
                icone: "fa fa-newspaper-o",
                links: [{titulo: "ZTLV22 - Criar Providência", url: ""}, {
                    titulo: "ZC10 - Relatório de atividades",
                    url: ""
                }, {titulo: "MM03 - Cadastro de Produto", url: ""}]
            },
            {
                nome: "Estoque",
                icone: "fa fa-inbox",
                links: [{titulo: "ZVSCE17 - Sintese de Estoque", url: ""}, {
                    titulo: "ZMBE - Consulta Estoque",
                    url: ""
                }]
            },
            {
                nome: "Ordem/NF",
                icone: "fa fa-shopping-basket",
                links: [{titulo: "ZV20 - Lista Ordem", url: ""}, {
                    titulo: "ZV40 - Lista Ordem Orig.",
                    url: ""
                }, {titulo: "VA01 - Criar Ordem R3", url: ""}, {
                    titulo: "VA02 - Alterar Ordem R3",
                    url: ""
                }, {titulo: "ZVC16 - Ordens Faturadas", url: ""}, {
                    titulo: "ZSTR14 - Posição de Entrega",
                    url: ""
                }, {titulo: "J1B3N - Exibir NF", url: ""}, {
                    titulo: "ZSTR52 - Rel de ocorrências",
                    url: ""
                }, {titulo: "ZSER - Consulta nº série do Produto", url: ""}]
            },
            {
                nome: "Meta/Var",
                icone: "fa fa-signal",
                links: [{titulo: "ZV57 - Informações Gerenciais", url: ""}]
            },
            {
                nome: "Cred/Cob",
                icone: "fa fa-calculator",
                links: [{
                    titulo: "FBL6N - Partidas Individuais",
                    url: ""
                }, {titulo: "ZFI46 - Crédito do Cliente - Média ", url: ""}, {
                    titulo: "FD33 - Crédito do Cliente",
                    url: ""
                }, {titulo: "ZFE15 - Rel. Fretes Contas RE", url: ""}]
            },
            {
                nome: "Preço",
                icone: "fa fa-money",
                links: [{titulo: "ZTLV21 – Solicitações de Lista de Preços", url: ""}]
            },
            {
                nome: "Verbas",
                icone: "fa fa-usd",
                links: [{titulo: "CJ37 - Empenho da verbas", url: ""}, {
                    titulo: "CJ30 - 1º Empenho na Campanha",
                    url: ""
                }, {titulo: "CJ31 - Consulta de verbas", url: ""}, {
                    titulo: "CJ20N - Criar Campanha",
                    url: ""
                }, {titulo: "ZPSR1 - Extrato Detalhado PEP", url: ""}, {
                    titulo: "ZTLV10G - Consulta Bonificação",
                    url: ""
                }]
            }
        ];

        $rootScope.$on('$routeChangeSuccess', function (e, current, pre) {
            $rootScope.currentRoute = $location.path();
        });

        $rootScope.currentRoute = "/home";

        $rootScope.clientes = [
            {
                clienteEmissorId: 974651321318,
                razao: "CARREFOUR",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                revenda: {
                    numeroLojas: 12,
                    faturamentoMensal: 1234567,
                    lb: 12,
                    tos: {
                        refrigerador: 12,
                        fogao: 12,
                        lavadora: 15,
                        total: 39
                    },
                    principalSegmento: 123,
                    principalSegmentoValor: 12,
                    markup: 12,
                    data: "12.12.2012"
                },
                email: "carrefour@carrefour.com",
                inscricaoEstadual: "255155603",
                contatoPrioritario: {
                    numero: 45698744,
                    nome: "José Cachoeira",
                    prioritario: true,
                    agrupador: {
                        numero: 45698744,
                        nome: "José Cachoeira"
                    },
                    supervisor: {
                        numero: 45648948,
                        nome: "Paula Hermann"
                    },
                    cargo: "Gerente",
                    telefones: [
                        {
                            id: 0,
                            numero: "+55 11 1234-5678",
                            prioritario: true
                        },
                        {
                            id: 1,
                            numero: "+55 11 7894-4563",
                            prioritario: false
                        }
                    ],
                    emails: [
                        {
                            id: 0,
                            email: "joao@carrefour.com.br",
                            prioritario: true
                        },
                        {
                            id: 1,
                            email: "comercial@carrefour.com.br",
                            prioritario: false
                        }
                    ]

                },
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ],
                simulacao: {
                    dadosEntrega: {
                        dataEntrega: "",
                        dataRemessa: "",
                        diasCont: "",
                        pedido: "",
                    }
                }
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente1",
                email: "cliente1@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente2",
                email: "cliente2@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente3",
                email: "cliente3@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente4",
                email: "cliente4@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente5",
                email: "cliente5@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente6",
                email: "cliente6@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente7",
                email: "cliente7@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente8",
                email: "cliente8@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente9",
                email: "cliente9@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente10",
                email: "cliente10@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente11",
                email: "cliente11@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente12",
                email: "cliente12@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente13",
                email: "cliente13@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente14",
                email: "cliente14@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente15",
                email: "cliente15@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente16",
                email: "cliente16@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente17",
                email: "cliente17@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente18",
                email: "cliente18@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente19",
                email: "cliente19@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente20",
                email: "cliente20@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente21",
                email: "cliente21@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            },
            {
                clienteEmissorId: 974651321318,
                razao: "Cliente22",
                email: "cliente22@carrefour.com",
                cnpj: "08675549000156",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                contatos: [
                    {
                        numero: 45698744,
                        nome: "José Cachoeira",
                        prioritario: true,
                        agrupador: {
                            numero: 45698744,
                            nome: "José Cachoeira"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Gerente",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "joao@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    },
                    {
                        numero: 45698744,
                        nome: "Comercial",
                        prioritario: false,
                        agrupador: {
                            numero: 45698744,
                            nome: "Comercial"
                        },
                        supervisor: {
                            numero: 45648948,
                            nome: "Paula Hermann"
                        },
                        cargo: "Comercial",
                        telefones: [
                            {
                                id: 0,
                                numero: "+55 11 1234-5678",
                                prioritario: true
                            },
                            {
                                id: 1,
                                numero: "+55 11 7894-4563",
                                prioritario: false
                            }
                        ],
                        emails: [
                            {
                                id: 0,
                                email: "comercial@carrefour.com.br",
                                prioritario: true
                            },
                            {
                                id: 1,
                                email: "Comercial@carrefour.com.br",
                                prioritario: false
                            }
                        ]
                    }
                ]
            }


        ];

        $rootScope.ultimosProcessos = [];

        $rootScope.tabelaDesnormalizada = [
            {
                id: 1,
                order: 1,
                cod:'0001', 
                contato: "Ricardo",
                cargo: "Comprador",
                prioritario: true,
                telefone: "4932330591",
                telefonePrioritario: false,
                email: "compras@lamarsupercenter.com.br",
                emailPrioritario: true
            },
            {
                id: 2,
                order: 2,
                cod:'0001',
                contato: "Ricardo",
                cargo: "Comprador",
                prioritario: false,
                telefone: "4932331883",
                telefonePrioritario: false,
                email: "",
                emailPrioritario: false
            },
            {
                id: 3,
                order: 3,
                cod:'0001',
                contato: "Ricardo",
                cargo: "Comprador",
                prioritario: false,
                telefone: "4932331807",
                telefonePrioritario: false,
                email: "",
                emailPrioritario: false
            },
            {
                id: 4,
                order: 4,
                cod:'0002',
                contato: "Keli",
                cargo: "Gerente",
                prioritario: false,
                telefone: "4932331884",
                telefonePrioritario: false,
                email: "keli@lamarsupercenter.com.br",
                emailPrioritario: false
            },
            {
                id: 5,
                order: 5,
                cod:'0002',
                contato: "Keli",
                cargo: "Gerente",
                prioritario: false,
                telefone: "4932331806",
                telefonePrioritario: false,
                email: "gerente@lamarsupercenter.com.br",
                emailPrioritario: true
            },
            {
                id: 6,
                order: 6,
                cod:'0002',
                contato: "Keli",
                cargo: "Gerente",
                prioritario: false,
                telefone: "",
                telefonePrioritario: false,
                email: "kelicompras@lamarsupercenter.com.br",
                emailPrioritario: false
            },
            {
                id: 7,
                order: 7,
                cod:'0002',
                contato: "Keli",
                cargo: "Gerente",
                prioritario: false,
                telefone: "",
                telefonePrioritario: false,
                email: "keligerente@lamarsupercenter.com.br",
                emailPrioritario: false
            }
        ];

        $rootScope.products = [{
            material: '',
            cor: '',
            voltagem: '',
            cond_pagamento: '',
            qnt: '',
            sit_carga: '',
            perc_flex: '',
            perc_redux: '',
            perc_pvl: '',
            cond_frete: '',
            valor_frete: '',
            valor_frete_mlog: '',
            valor_nf_unit: '',
            valor_nf_total: '',
            valor_c_icms: '',
            valor_c_ipi: '',
            valor_c_icms_st: '',
            centro: '',
            loc_expedicao: '',
            perc_juros: '',
            valor_icms: '',
            valor_ipi: '',
            valor_icms_st: '',
            valor_negociado: ''
        }];

        $scope.acoesPromocionais = AcaoPromocionalService.getAcoesPromocionais();

        $rootScope.status = {
            isOpenAcoes: false,
            isOpenCreditos: false
        };

        $rootScope.gridAcoesPromocionais = {
            enableHorizontalScrollbar: 0,
            data: 'acoesPromocionais',
            columnDefs: [
                {
                    field: 'id',
                    width: '50',
                    displayName: 'Id'
                },
                {
                    field: 'regiao',
                    width: '100',
                    displayName: 'Região'
                },
                {
                    field: 'modulo',
                    width: '100',
                    displayName: 'Modelo'
                },
                {
                    field: 'desconto',
                    width: '100',
                    displayName: 'Desconto'
                },
                {
                    field: 'vpc',
                    width: '100',
                    displayName: 'VPC'
                },
                {
                    field: 'outros',
                    width: '130',
                    displayName: 'Outros'
                },
                {
                    field: 'validoDesde',
                    width: '100',
                    displayName: 'Válido Desde'
                },
                {
                    field: 'validoAte',
                    width: '100',
                    displayName: 'Válido Até'
                }
            ]
        };

        $rootScope.creditos = [
            {
                id: 1,
                emissor: 445646546,
                limiteTotal: 110000.00,
                limiteWhp: 85000.00,
                exposicaoWRP: 25000.00,
                emAbertoWRP: 50000.00
            },
            {
                id: 2,
                emissor: 98794656,
                limiteTotal: 60000.00,
                limiteWhp: 45000.00,
                exposicaoWRP: 150000.00,
                emAbertoWRP: 20000.00
            },
            {
                id: 3,
                emissor: 654654646,
                limiteTotal: 160000.00,
                limiteWhp: 145000.00,
                exposicaoWRP: 115000.00,
                emAbertoWRP: 90000.00
            }
        ];

        $rootScope.gridCredito = {
            data: 'creditos',
            showColumnFooter: true,
            columnDefs: [
                {
                    field: 'emissor',
                    displayName: 'Emissor',
                    footerCellTemplate: '<div class="ui-grid-cell-contents" >Total:</div>'
                },
                {
                    field: 'limiteTotal',
                    aggregationType: uiGridConstants.aggregationTypes.sum,
                    displayName: 'Limite Total',
                    cellTemplate: '<div class="ui-grid-cell-contents" >{{COL_FIELD | currency:"R$ ":0 }}</div>',
                    footerCellTemplate: '<div class="ui-grid-cell-contents" >{{col.getAggregationValue() | currency:"R$ ":0 }}</div>'

                },
                {
                    field: 'limiteWhp',
                    aggregationType: uiGridConstants.aggregationTypes.sum,
                    displayName: 'Limite WHP',
                    cellTemplate: '<div class="ui-grid-cell-contents" >{{COL_FIELD | currency:"R$ ":0 }}</div>',
                    footerCellTemplate: '<div class="ui-grid-cell-contents" >{{col.getAggregationValue() | currency:"R$ ":0 }}</div>'
                },
                {
                    field: 'exposicaoWRP',
                    aggregationType: uiGridConstants.aggregationTypes.sum,
                    cellTemplate: '<div class="ui-grid-cell-contents" >{{COL_FIELD | currency:"R$ ":0 }}</div>',
                    displayName: 'Exposição WRP',
                    footerCellTemplate: '<div class="ui-grid-cell-contents" >{{col.getAggregationValue() | currency:"R$ ":0 }}</div>'

                },
                {
                    field: 'emAbertoWRP',
                    aggregationType: uiGridConstants.aggregationTypes.sum,
                    cellTemplate: '<div class="ui-grid-cell-contents" >{{COL_FIELD | currency:"R$ ":0 }}</div>',
                    footerCellTemplate: '<div class="ui-grid-cell-contents" >{{col.getAggregationValue() | currency:"R$ ":0 }}</div>',
                    displayName: 'Em Aberto WRP.'
                }
            ]
        };

    });
