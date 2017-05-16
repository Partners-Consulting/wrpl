angular.module("App.controllers", [])
    .constant('_', _)
    .controller("HomeController", function ($scope, $rootScope, $location, $uibModal) {
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
    .controller("ClienteController", function ($scope, $rootScope, $location, $uibModal) {
        "use strict";

        $scope.filtro2 = "";
        $scope.filtro3 = "";
        $scope.lastProcesso = 0;
        $scope.lastContato = 0;
        $scope.isBlocked = true;
        $scope.isBlockedTos = false;
        $scope.titulo = 'Últimos Processos';
        $scope.painelTabela = {
            quantidadeDeTabela: 4,
            tabelaAtual: 1,
            tituloTabelaAtual: 'Últimos Processos'
        }


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
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorremtes'
            }
        ];

        $rootScope.pontuais = [
            {
                id: 0,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorremtes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }, {
                id: 1,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorremtes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }, {
                id: 2,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorremtes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }, {
                id: 3,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorremtes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }
        ];

        $scope.gridProcessos = {
            enableGridMenu: true,
            enableFiltering: true,
            enableHorizontalScrollbar: 0,
            data: 'processos',
            columnDefs: [
                {
                    field: 'data',
                    headerCellClass: 'background-color:gray',
                    displayName: 'Data'
                },
                {
                    field: 'cliente',
                    displayName: 'Cliente'
                },
                {
                    field: 'processo',
                    displayName: 'Processo'
                },
                {
                    field: 'status',
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
            }, {
                field: 'status',
                displayName: 'Status',
                cellTemplate: '<div ng-click="grid.appScope.editarContatos(row.entity);">{{COL_FIELD}}</div>'
            }

            ]
        };

        $scope.gridLinhaBranca = {
            enableHorizontalScrollbar: 0,
            enableGridMenu: true,
            enableFiltering: true,
            data: 'linhaBranca',
            columnDefs: [{
                field: 'id',
                displayName: 'Id',
                enableFiltering: false
            }, {
                field: 'nome',
                displayName: 'Nome'
            }, {
                field: 'quantidade',
                displayName: '%',
                enableFiltering: false
            }, {
                field: 'acao',
                displayName: 'Ação',
                enableFiltering: false,
                cellTemplate: '  <div class="action-buttons"> ' +
                ' <a class="blue" style="color: blue"  ng-click="grid.appScope.editarLinhaBranca(row.entity)" href=""><i class="fa fa-pencil bigger-130"></i></a>' +
                ' <a class="red" style="color: red"  ng-click="grid.appScope.removerLinhaBranca(row.entity)" href=""><i class="fa fa-minus bigger-130"></i></a>' +
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
            enableGridMenu: true,
            data: 'concorrentesRevenda',
            columnDefs: [{
                field: 'id',
                displayName: 'Id'
            }, {
                field: 'nome',
                displayName: 'Nome'
            }, {
                field: 'acao',
                displayName: 'Ação',
                cellTemplate: '  <div class="action-buttons"> ' +
                ' <a class="blue" style="color: blue"  ng-click="grid.appScope.editarConcorrenteRevenda(row.entity)" href=""><i class="fa fa-pencil bigger-130"></i></a>' +
                ' <a class="red" style="color: red"  ng-click="grid.appScope.removerConcorrenteRevenda(row.entity)" href=""><i class="fa fa-minus bigger-130"></i></a>' +
                ' </div>'
            }

            ]
        };

        function init() {
            if ($rootScope.selectedClient == null) {

                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: './view/selecionar-cliente.html',
                    controller: 'ModalSelecionarClienteCtrl',
                    backdrop:'static',
                    size: "lg",
                    resolve: {
                        url: function () {
                            return "/cliente";
                        }
                    }
                });

            }
        }

        init();

        $scope.proximaTabela = function () {
            if ($scope.painelTabela.tabelaAtual + 1 <= $scope.painelTabela.quantidadeDeTabela) {
                $scope.painelTabela.tabelaAtual = $scope.painelTabela.tabelaAtual + 1;
                $scope.painelTabela.tituloTabelaAtual = 'Últimos Contatos';
            }
            $scope.changeHeaderTitle();
        }

        $scope.tabelaAnterior = function () {
            if ($scope.painelTabela.tabelaAtual - 1 > 0) {
                $scope.painelTabela.tabelaAtual = $scope.painelTabela.tabelaAtual - 1;
            }
            $scope.changeHeaderTitle();
        }

        $scope.changeHeaderTitle = function () {
            if ($scope.painelTabela.tabelaAtual == 1) {
                $scope.painelTabela.tituloTabelaAtual = 'Últimos Processos';
            } else if ($scope.painelTabela.tabelaAtual == 2) {
                $scope.painelTabela.tituloTabelaAtual = 'Últimos Contatos';
            } else if ($scope.painelTabela.tabelaAtual == 3) {
                $scope.painelTabela.tituloTabelaAtual = 'Players Linha Branca';
            } else if ($scope.painelTabela.tabelaAtual == 4) {
                $scope.painelTabela.tituloTabelaAtual = 'Concorrentes Revenda';
            }
        }

        $scope.adicionarPontual = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/adicionar-pontual.html',
                controller: 'ModalInstanceCriarPontualCtrl'
            });
        };

        $scope.editarContatos = function (contato) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/editar-contato.html',
                controller: 'ModalInstanceUltimosContatosCtrl',
                resolve: {
                    contato: function () {
                        return contato;
                    }
                }
            });
        };

        $scope.editarPerfilDeRevenda = function () {
            $scope.isBlocked = !$scope.isBlocked
        };

        $scope.editarDadosCliente = function (cliente) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/expandir-contato.html',
                controller: 'ModalInstanceCtrl',
                backdrop:'static',
                size: "lg",
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

        $scope.atualizarContatoss = function () {
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
            $rootScope.pontuais = _.without($rootScope.pontuais, _.findWhere($rootScope.pontuais, {id: pontual.id}));
        }

        $scope.gotoDev = function () {
            $location.path("/dev");
        };

        $scope.editarTos = function () {
            $scope.isBlockedTos = !$scope.isBlockedTos;
        }

        $scope.calculaTos = function () {
            $rootScope.selectedClient.revenda.tos.total = parseInt($rootScope.selectedClient.revenda.tos.refrigerador) + parseInt($rootScope.selectedClient.revenda.tos.lavadora) + parseInt($rootScope.selectedClient.revenda.tos.fogao);
        }

        $scope.editarLinhaBranca = function (produto) {
            var modalInstance = $uibModal.open({
                animation: true,
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
            $rootScope.linhaBranca = _.without($rootScope.linhaBranca, _.findWhere($rootScope.linhaBranca, {id: produto.id}));
        };

        $scope.adicionarLinhaBranca = function () {
            var modalInstance = $uibModal.open({
                animation: true,
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
            $rootScope.concorrentesRevenda = _.without($rootScope.concorrentesRevenda, _.findWhere($rootScope.concorrentesRevenda, {id: produto.id}));
        };

        $scope.adicionarConcorrenteRevenda = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/editar-concorrente.html',
                controller: 'ModalProdutoCtrl',
                resolve: {
                    produto: function () {
                        return "";
                    }
                }
            });
        };


    })
    .controller("CaminhoCtrl", function ($scope, $rootScope, $uibModal) {


    })
    .controller("ModalSelecionarClienteCtrl", function ($scope, $rootScope, $location, $uibModalInstance, _, url) {
        "use strict";

        $scope.url = url;
        $rootScope.clientesBuscados = [];
        $scope.bloqueiaCNPJ = false;
        $scope.bloqueiaEmail = false;
        $scope.bloqueiaId = false;
        $scope.busca = {
            cnpj: "",
            id: "",
            email: ""
        };

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.selectClient = function (client) {
            //console.log("selectClient() " + client);
            $uibModalInstance.dismiss('cancel');

            $rootScope.selectedClient = client;
            $location.path($scope.url);
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
    .controller("ModalInstancePerfilDeRevendaCtrl", function ($scope, $rootScope, $uibModalInstance, $uibModal, _) {
        "use strict";


        $scope.close = function () {
            $uibModalInstance.close();
        };


        $scope.adicionarPontualNaLista = function (pontual) {
            $uibModalInstance.close();
            $rootScope.pontuais.unshift(pontual);
        };
    })
    .controller("ModalProdutoCtrl", function ($scope, $rootScope, $uibModalInstance, produto) {
        "use strict";
        $scope.produto = produto;

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
    .controller("ModalEmailCtrl", function ($scope, $rootScope, $uibModalInstance) {
        "use strict";
        $scope.email = {};

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.adicionarEmail = function (email) {

            var contato = {
                contato: "Ricardo",
                cargo: "Comprador",
                prioritario: false,
                telefone: "",
                telefonePrioritario: "",
                email: email.email,
                emailPrioritario: email.prioritario
            };
            $rootScope.tabelaDesnormalizada.push(contato);
            $uibModalInstance.close();
        };

    })
    .controller("ModalTelefoneCtrl", function ($scope, $rootScope, $uibModalInstance) {
        "use strict";
        $scope.telefone = {};

        $scope.close = function () {
            $uibModalInstance.close();
        };
        $scope.adicionarTelefone = function (telefone) {
            var contato = {
                contato: "Ricardo",
                cargo: "Comprador",
                prioritario: false,
                telefone: telefone.numero,
                telefonePrioritario: telefone.prioritario,
                email: "",
                emailPrioritario: ""
            };
            $rootScope.tabelaDesnormalizada.push(contato);

            $uibModalInstance.close();
        };

    })
    .controller("ModalInstanceCriarPontualCtrl", function ($scope, $rootScope, $uibModalInstance) {
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

        $scope.adicionarPontualNaLista = function (texto) {
            $uibModalInstance.close();
        };
    })
    .controller("ModalInstanceCriarPontualSimulacoesCtrl", function ($scope, $rootScope, $uibModalInstance) {
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
            pontual.id = $rootScope.simulacaoPontuais.length + 1;
            pontual.user = $rootScope.user;
            $rootScope.simulacaoPontuais.unshift(pontual);
        };
    })
    .controller("ModalInstanceCtrl", function ($scope, $rootScope, $uibModalInstance, $uibModal, SweetAlert, _) {
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
                clienteEmissorId: 974651321318,
                agrupador: 123456789,
                razao: "CARREFOUR",
                cnpj: "08.675.549/0001-56",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                telefone: "11 1234-4321",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                status: "EM PROCESSAMENTO"
            },
            {
                clienteEmissorId: 974651321318,
                agrupador: 123456789,
                razao: "CARREFOUR",
                cnpj: "08.675.549/0001-56",
                cidade: "SÃO PAULO",
                endereco: "RUA PROCOPIO LOHN",
                uf: "SP",
                telefone: "11 1234-4321",
                pais: "BRASIL",
                domicilioFiscal: "SC 0015",
                cep: "88410-000",
                inscricaoEstadual: "255155603",
                status: "EM PROCESSAMENTO"
            },
        ];

        $scope.gridAgrupadorXCliente = {
            enableGridMenu: true,
            enableHorizontalScrollbar: false,
            data: 'agrupadoresClientes',
            columnDefs: [
                {field: 'agrupador', width: '150', displayName: 'Cliente agrupador'},
                {field: 'clienteEmissorId', width: '150', displayName: 'Cliente Emissor'},
                {field: 'razao', width: '100', displayName: 'Nome'},
                {field: 'cidade', width: '100', displayName: 'CIDADE'},
                {field: 'uf', width: '70', displayName: 'ESTADO'},
                {field: 'cnpj', width: '200', displayName: 'CNPJ'},
                {field: 'endereco', width: '200', displayName: 'ENDEREÇO'},
                {field: 'cep', width: '100', displayName: 'CEP'},
                {field: 'telefone', width: '100', displayName: 'TELEFONE'},
                {field: 'email', width: '250', displayName: 'EMAIL'},
                {field: 'inscricaoEstadual', width: '200', displayName: 'INSCRIÇÃO ESTADUAL'},
                {field: 'status', width: '150', displayName: 'STATUS'}
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
                    field: 'prioritario',
                    width: '60',
                    displayName: 'Priori.',
                    cellTemplate: ' <div ng-click="grid.appScope.alterarPrioridadeContato(row.entity)">' +
                    '<div ng-if="!COL_FIELD" class="hidden-sm hidden-xs action-buttons">' +
                    '<a class="red" style="color: red" href=""><i class="fa fa-times-circle-o bigger-130"></i></a></div>' +
                    '<div ng-if="COL_FIELD" class="hidden-sm hidden-xs action-buttons">' +
                    '<a class="green" style="color: green" href=""><i class="fa fa-check-circle-o bigger-130"></i></a></div></div>'
                },
                {
                    field: 'cargo',
                    width: '80',
                    displayName: 'Cargo'
                },
                {
                    field: 'telefone',
                    width: '100',
                    displayName: 'Telefone'
                },
                {
                    field: 'telefonePrioritario',
                    displayName: 'Priori.',
                    width: '60',
                    cellTemplate: ' <div ng-click="grid.appScope.alterarPrioridadeTelefone(row.entity)">' +
                    '<div ng-if="!COL_FIELD" class="hidden-sm hidden-xs action-buttons">' +
                    '<a class="red" style="color: red" href=""><i class="fa fa-times-circle-o bigger-130"></i></a></div>' +
                    '<div ng-if="COL_FIELD" class="hidden-sm hidden-xs action-buttons">' +
                    '<a class="green" style="color: green" href=""><i class="fa fa-check-circle-o bigger-130"></i></a></div></div>'
                },
                {
                    field: 'email',
                    width: '250',
                    displayName: 'Email'
                },
                {
                    field: 'emailPrioritario',
                    displayName: 'Priori.',
                    width: '58',
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
                    ' </div>'
                }

            ]
        };

        $scope.excluirContatos = function () {
            if($scope.tabelaDesnormalizada.length <= 0 || $scope.gridApiTabelaDesnormalizada.selection.getSelectedRows().length <= 0){
                return;
            }
            var alertExclusao = {
                title: "Exclusão de contatos",
                text: "Tem certeza que gostaria de excluir todos os contatos?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sim, excluir!",
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
        }

        $scope.removerContato = function (contato) {
            $rootScope.tabelaDesnormalizada = _.without($rootScope.tabelaDesnormalizada, _.findWhere($rootScope.tabelaDesnormalizada, {id: contato.id}));
        }

        $scope.deleteSelected = function () {
            angular.forEach($scope.gridApi.selection.getSelectedRows(), function (data, index) {
                $scope.gridTabelaDesnormalizada.data.splice($scope.gridTabelaDesnormalizada.data.lastIndexOf(data), 1);
            });
        }

        $scope.adicionarTelefone = function (telefone) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/adicionar-telefone.html',
                controller: 'ModalTelefoneCtrl'
            });
        };

        $scope.adicionarEmail = function (email) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/adicionar-email.html',
                controller: 'ModalEmailCtrl'
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

        $scope.removerTodosTelefones = function () {
            $rootScope.selectedClient.contatos[0].telefones = [];
        };

        $scope.removerTodosEmails = function () {
            $rootScope.selectedClient.contatos[0].emails = [];
        };

        $scope.removerEmail = function (email) {
            var alertExclusao = {
                title: "Exclusão de email",
                text: "Tem certeza que gostaria de excluir esse email?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sim, excluir!",
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
                templateUrl: './view/novo-contato.html',
                controller: 'ModalNovoContatoCtrl',
                resolve: {
                    contato: function () {
                        return "";
                    }
                }

            });
        };

        $scope.editarContato = function (contato) {
            var modalInstance = $uibModal.open({
                animation: true,
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
    .controller("ModalInstanceUltimosContatosCtrl", function ($scope, $rootScope, $uibModalInstance, contato) {
        "use strict";
        $scope.contato = contato;

        $scope.isAnitgo = true;

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.adicionarUltimosContatos = function (contato) {
            if (!!contato.id) {
                $uibModalInstance.close();
            } else {
                contato.data = new Date();
                contato.id = $rootScope.contatos.length + 1;
                $rootScope.contatos.push(contato);
                $uibModalInstance.close();
            }

        };

        $scope.criarUltimosContatos = function (contato) {
            $scope.isAntigo = false;
            $scope.contato = {};
        };

    })
    .controller("Tela3Controller", function ($scope, $rootScope) {


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

        $scope.popupDataRemessa = {
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
    .controller("ModalReplicarCtrl", function ($scope, $rootScope, $uibModalInstance, replicas, FreteService, CondicaoPagamentoService) {
        "use strict";
        $scope.replicas = replicas;
        $scope.listaCondicaoPagamento = [];
        $scope.listaCondicaoFrete = [];

        function init() {
            //todo fazer padrão promessa
            $scope.listaCondicaoPagamento = CondicaoPagamentoService.consultaPagamentoReplica();
            $scope.listaCondicaoFrete = FreteService.consultaFreteReplica();
        }

        init();

        $scope.gridReplicas = {
            enableHorizontalScrollbar: true,
            enableGridMenu: true,
            data: 'replicas',
            columnDefs: [
                {
                    field: 'acao',
                    displayName: 'Ação',
                    cellTemplate: '  <div class="action-buttons"> ' +
                    ' <a class="blue" style="color: blue"  ng-click="grid.appScope.editarMateria(row.entity)" href=""><i class="fa fa-pencil bigger-130"></i></a>' +
                    ' <a class="red" style="color: red"  ng-click="grid.appScope.removerMaterial(row.entity)" href=""><i class="fa fa-minus bigger-130"></i></a>' +
                    ' </div>'
                },
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
                    field: 'condPagtos.codigo',
                    editModelField: 'condPagtos',
                    editDropdownValueLabel: 'codigo',
                    editableCellTemplate: './view/uiGridTemplates/ui-select.html',
                    editDropdownOptionsArray: $scope.listaCondicaoPagamento
                },
                {
                    field: 'incoterms',
                    displayName: 'Incoterms'
                },
                {
                    displayName: 'Cond. Frete',
                    width: '150',
                    field: 'condFrete.codigo',
                    editModelField: 'condFrete',
                    editDropdownValueLabel: 'codigo',
                    editableCellTemplate: './view/uiGridTemplates/ui-select.html',
                    editDropdownOptionsArray: $scope.listaCondicaoFrete
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
    .controller("ModalEfetivarOvCtrl", function ($scope, $rootScope, materiais, $uibModal, $uibModalInstance) {

        $scope.showDetalhe = false;
        $scope.listaMateriais = materiais

        $scope.abriDetalhe = function (materiais) {
            $scope.showDetalhe = !$scope.showDetalhe;
        }

        $scope.listaMateriais = materiais

        $scope.gridSimulacao = {
            data: 'listaMateriais',
            enableGridMenu: true,
            columnDefs: [
                {
                    field: 'codigo',
                    displayName: 'Material',
                    cellTemplate: '<div ng-click="grid.appScope.abriDetalhe(row.entity);">{{COL_FIELD}}</div>'
                },
                {
                    field: 'modelo',
                    displayName: 'modelo',
                    cellTemplate: '<div ng-click="grid.appScope.abriDetalhe(row.entity);">{{COL_FIELD}}</div>'
                },
                {
                    field: 'cor',
                    displayName: 'Cor',
                    cellTemplate: '<div ng-click="grid.appScope.abriDetalhe(row.entity);">{{COL_FIELD}}</div>'
                },
                {
                    field: 'voltagem',
                    displayName: 'Voltagem',
                    cellTemplate: '<div ng-click="grid.appScope.abriDetalhe(row.entity);">{{COL_FIELD}}</div>'
                },
                {
                    field: 'quantidade',
                    displayName: 'qtd',
                    cellTemplate: '<div ng-click="grid.appScope.abriDetalhe(row.entity);">{{COL_FIELD}}</div>'
                }
            ]
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
                templateUrl: './view/programar-entrega.html',
                controller: 'ModalProgramarEntregaCtrl',
                size: 'md'
            });
        }

        $scope.efetivarOvStep2 = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/efetivar-ov2.html',
                controller: 'ModalEfetivarOv2Ctrl',
                size: 'lg'
            });
        }

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.replicar = function () {
            $uibModalInstance.close();
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
    .controller("ModalEfetivarOv2Ctrl", function ($scope, $rootScope, $uibModal, $uibModalInstance, _) {

        $scope.showDetalhe = false;

        $scope.listaOrdenASeremEfetivadas = [
            {
                status: "",
                organizacao: "OV 1000",
                canal: "11",
                setor: "10",
                situacaoCargao: "",
                codProcEsp: "",
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
                situacaoCargao: "",
                codProcEsp: "",
                emissor: "",
                recebedor: "0000041203",
                tipo: "ZVPB",
                preOrdem: "0000000002",
                statusPreOrdem: "Não Efetivada",
                ordem: "",
                imprimir: ""
            }
        ]

        $scope.textoOv = [
            {
                id: 0,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorremtes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }, {
                id: 1,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorremtes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }
        ]

        $scope.textoSimulacao = [
            {
                id: 0,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorremtes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }, {
                id: 1,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorremtes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }
        ]

        $scope.abriDetalhe = function (materiais) {
            $scope.showDetalhe = !$scope.showDetalhe;
        }

        $scope.brindesEBonificacoes = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/bonificacao.html',
                controller: 'ModalBonificacaoCtrl',
                size: 'lg'
            });
        }

        $scope.gridOrdenASeremEfetivadas = {
            data: 'listaOrdenASeremEfetivadas',
            enableGridMenu: true,
            columnDefs: [
                {
                    field: 'status',
                    displayName: 'Status'
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
                    field: 'situacaoCargao',
                    displayName: 'Sit. Carga'
                },
                {
                    field: 'codProcEsp',
                    displayName: 'CódProcEsp'
                },
                {
                    field: 'emissor',
                    displayName: 'Emissor'
                },
                {
                    field: 'recebedor',
                    displayName: 'Recebedor'
                },
                {
                    field: 'tipo',
                    displayName: 'Tipo'
                },
                {
                    field: 'preOrdem',
                    displayName: 'Pré Ordem'
                },
                {
                    field: 'statusPreOrdem',
                    displayName: 'Status Pré Ordem'
                },
                {
                    field: 'ordem',
                    displayName: 'Ordem'
                },
                {
                    field: 'imprimir',
                    displayName: 'Imprimir'
                }
            ]
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
                templateUrl: './view/programar-entrega.html',
                controller: 'ModalProgramarEntregaCtrl',
                size: 'md'
            });
        }

        $scope.removeTextoOv = function (texto) {
            $scope.textoOv = _.without($scope.textoOv, _.findWhere($scope.textoOv, {id: texto.id}));
        }

        $scope.removeTextoSimulacao = function (texto) {
            $scope.textoSimulacao = _.without($scope.textoSimulacao, _.findWhere($scope.textoSimulacao, {id: texto.id}));
        }

        $scope.adicionarTextoOv = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/adicionar-texto-ov.html',
                controller: 'ModalTextoOvCtrl'
            });
        };

        $scope.adicionarTextoSimulacao = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/adicionar-texto-simulacao.html',
                controller: 'ModalTextoOvCtrl'
            });
        };

        $scope.efetivarOrdensDeVenda = function () {
            $scope.listaOrdenASeremEfetivadas[0].ordem = 123123213;
        }

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.replicar = function () {
            $uibModalInstance.close();
        }

    })
    .controller("ModalMaterialCompletoCtrl", function ($scope, $rootScope, $uibModalInstance, material, CentroService, LocalExpedicaoService, IncotermsService) {

        $scope.material = material;
        $scope.listaDeCentros = [];
        $scope.listaDeLocaisExpedicao = [];
        $scope.listaDeIncoterms = [];


        function init() {
            //todo fazer padrão promessa
            $scope.listaDeCentros = CentroService.consultaCentroPorMaterial(material.id);
            $scope.listaDeLocaisExpedicao = LocalExpedicaoService.consultaLocalExpedicaoPorMaterial(material.id);
            $scope.listaDeIncoterms = IncotermsService.consultaIncotermsPorMaterial(material.id);
        }

        init();

        $scope.close = function () {
            $uibModalInstance.close();
        };

        $scope.transferirMaterial = function (material) {
            $uibModalInstance.close();
        }

        $scope.salvarMaterial = function () {
            $uibModalInstance.close();
        }

    })
    .controller("ModalHistoricoMaterialCtrl", function ($scope, $rootScope, $uibModalInstance, material, MaterialService) {

        $scope.material = material;
        $scope.listaHistoricoVenda = [];
        $scope.loading = false;

        function init() {
            //todo fazer padrão promessa
            $scope.loading = true;
            $scope.listaHistoricoVenda = MaterialService.consultaHistoricoDeVenda(material.id);
            //$scope.listaHistoricoVenda = [];
            $scope.loading = false;
        }

        init();

        $scope.gridHistoricoVenda = {
            enableHorizontalScrollbar: true,
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
                    width: '150',
                    displayName: 'PVL'
                },
                {
                    field: 'percDesc',
                    width: '150',
                    displayName: '% Desc'
                },
                {
                    field: 'percAcres',
                    width: '150',
                    displayName: '% Acres'
                },
                {
                    field: 'valorTotalNf',
                    width: '150',
                    displayName: 'Valor Total NF'
                },
                {
                    field: 'quantidade',
                    width: '150',
                    displayName: 'Qtde'
                },
                {
                    field: 'condPagto',
                    width: '150',
                    displayName: 'Cond. Pagto'
                },
                {
                    field: 'sap',
                    width: '150',
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
    .controller("SimulacoesController", function ($scope, $rootScope, $location, _, $uibModal, MaterialService, CentroService, LocalExpedicaoService, IncotermsService) {
        "use strict";
        $scope.gotoDev = function () {
            $location.path("/dev");
        };

        $scope.listaMateriais = [];
        $scope.listaDeCentros = [];
        $scope.listaDeLocaisExpedicao = [];
        $scope.listaDeIncoterms = [];

        function init() {
            if ($rootScope.selectedClient == null) {

                var modalInstance = $uibModal.open({
                    animation: true,
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
            $scope.listaMateriais = MaterialService.consultaMaterial();
            $scope.listaDeCentros = CentroService.consultaCentroPorMaterial(1);
            $scope.listaDeLocaisExpedicao = LocalExpedicaoService.consultaLocalExpedicaoPorMaterial(1);
            $scope.listaDeIncoterms = IncotermsService.consultaIncotermsPorMaterial(1);
        }

        init();

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
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/efetivar-ov.html',
                controller: 'ModalEfetivarOvCtrl',
                size: 'lg',
                backdrop: 'static',
                resolve: {
                    materiais: function () {
                        return $scope.listaMateriais;
                    }
                }
            });
        };

        $scope.consultarMaterialCompleto = function (id) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/material-completo.html',
                controller: 'ModalMaterialCompletoCtrl',
                size: 'lg',
                resolve: {
                    material: function () {
                        return MaterialService.consultaMaterialCompleto(id);
                    }
                }

            });
        };

        $scope.abrirHitoriocoMaterial = function (material) {
            var modalInstance = $uibModal.open({
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

            });
        };

        $scope.gridMateriais = {
            enableHorizontalScrollbar: true,
            enableGridMenu: true,
            data: 'listaMateriais',
            columnDefs: [
                {
                    field: 'acao',
                    width: '150',
                    displayName: 'Ação',
                    cellTemplate: '  <div class="action-buttons"> ' +
                    ' <a class="blue" style="color: blue"  ng-click="grid.appScope.editarMateria(row.entity)" href=""><i class="fa fa-pencil bigger-130"></i></a>' +
                    ' <a class="black" style="color: black"  ng-click="grid.appScope.abrirHitoriocoMaterial(row.entity)" href=""><i class="fa fa-book bigger-130"></i></a>' +
                    ' <a class="red" style="color: red"  ng-click="grid.appScope.removerMaterial(row.entity)" href=""><i class="fa fa-minus bigger-130"></i></a>' +
                    ' </div>'
                },
                {
                    field: 'codigo',
                    width: '150',
                    displayName: 'Material',
                    cellTemplate: '  <a href="" ng-click="grid.appScope.consultarMaterialCompleto(COL_FIELD)">{{COL_FIELD}}</a>'
                },
                {
                    field: 'cor',
                    width: '150',
                    displayName: 'Cor'
                },
                {
                    field: 'voltagem',
                    width: '150',
                    displayName: 'Voltagem'
                },
                {
                    field: 'condPagto',
                    width: '150',
                    displayName: 'Cond. Pagamento'
                },
                {
                    field: 'quantidade',
                    width: '150',
                    displayName: 'Quantidade'
                },
                {
                    field: 'situacaoCarga',
                    width: '150',
                    displayName: 'Sit. Carga'
                },
                {
                    field: 'precFlexibilidade',
                    width: '150',
                    displayName: '%Flexib'
                },
                {
                    field: 'percRedutorDesconto',
                    width: '150',
                    displayName: '%Redut.'
                },
                {
                    field: 'pvl',
                    width: '150',
                    displayName: 'PVL'
                },
                {
                    field: 'condPagtoFrete',
                    width: '150',
                    displayName: 'Cond. Frete'
                },
                {
                    field: 'valorFrete',
                    width: '150',
                    displayName: 'VL. Frete'
                },
                {
                    field: 'valorFreteMlog',
                    width: '150',
                    displayName: 'VL. Frete MLOG'
                },
                {
                    field: 'valorNotaFiscalUnitario',
                    width: '150',
                    displayName: 'Valor NF Unit.'
                },
                {
                    field: 'valorNotaFiscalTotal',
                    width: '150',
                    displayName: 'Valor NF Total'
                },
                {
                    field: 'valorComIcms',
                    width: '150',
                    displayName: 'VL. C/ ICMS'
                },
                {
                    field: 'valorComIpi',
                    width: '150',
                    displayName: 'VL. C/ IPI'
                },
                {
                    field: 'valorComIcmsSt',
                    width: '150',
                    displayName: 'VL. C/ ICMS ST'
                },
                {
                    displayName: 'Centro',
                    width: '150',
                    field: 'centro.parcNeg',
                    editModelField: 'centro',
                    editDropdownValueLabel: 'parcNeg',
                    editableCellTemplate: './view/uiGridTemplates/ui-select.html',
                    editDropdownOptionsArray: $scope.listaDeCentros
                },
                {
                    displayName: 'Local Expedicao',
                    width: '150',
                    field: 'localExpedicao.parcNeg',
                    editModelField: 'localExpedicao',
                    editDropdownValueLabel: 'parcNeg',
                    editableCellTemplate: './view/uiGridTemplates/ui-select.html',
                    editDropdownOptionsArray: $scope.listaDeLocaisExpedicao
                },
                {
                    field: 'juros',
                    width: '150',
                    displayName: '%Juros'
                },
                {
                    field: 'descricao',
                    width: '150',
                    displayName: 'Descricao'
                }
            ]
        };

        $scope.ultimasSimulacoes = [
            {
                id:1,
                data:'15.04.2017',
                descricao:'',
                emissor:'',
                valor:'R$ 76.000,00',
                status:'GRAVADA'
            },
            {
                id:2,
                data:'05.04.2017',
                descricao:'',
                emissor:'',
                valor:'R$ 44.000,00',
                status:'EFETUADA'
            },
            {
                id:3,
                data:'25.03.2017',
                descricao:'',
                emissor:'',
                valor:'R$ 150.000,00',
                status:'GRAVADA'
            },
            {
                id:4,
                data:'10.02.2017',
                descricao:'',
                emissor:'',
                valor:'R$ 99.000,00',
                status:'CANCELADA'
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
                    width: '200',
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
        };

        $rootScope.simulacaoPontuais = [
            {
                id: 0,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorremtes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }, {
                id: 1,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorremtes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }, {
                id: 2,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorremtes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }, {
                id: 3,
                data: '03.04.2017',
                texto: 'Feito contato com o cliente que comentou sobre promoções de outros concorremtes',
                user: {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }
        ];

        $scope.removePontual = function (pontual) {
            $rootScope.simulacaoPontuais = _.without($rootScope.simulacaoPontuais, _.findWhere($rootScope.simulacaoPontuais, {id: pontual.id}));
        }

        $scope.adicionarPontual = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/adicionar-pontual.html',
                controller: 'ModalInstanceCriarPontualSimulacoesCtrl'
            });
        };

        $scope.editarDadosEntrega = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/editar-dadosEntrega.html',
                controller: 'ModalDadosEntregaCtrl',
                resolve: {
                    dadosEntrega: function () {
                        return $rootScope.selectedClient.simulacao.dadosEntrega;
                    }
                }
            });
        }

    })
    .controller("TermometroController", function ($scope, $rootScope) {


    })

    .controller("GraficosController", function ($scope, $rootScope) {

        $rootScope.dadosGraficos = [
        {
            "x": "Fogão",
            "voltyd16": 1,
            "voltyd17": 0
        },{
            "x": "Forno Microondas",
            "voltyd16": 0,
            "voltyd17": 6
        },{
            "x": "Freezer Horizontal",
            "voltyd16": 0,
            "voltyd17": 3
        },{
            "x": "Freezer Vertical",
            "voltyd16": 0,
            "voltyd17": 2
        },{
            "x": "Lavadora Roupas",
            "voltyd16": 1,
            "voltyd17": 8
        },{
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


    .controller("ClientesController", function ($scope, $rootScope) {


    })
    .controller("MainController", function ($scope, $rootScope, $filter, $uibModal, $document, $location) {
        "use strict";
        $rootScope.gotoCliente = function () {
            $rootScope.selectedClient = null;
            $location.path("/selecionarCliente");
        };

        $rootScope.sapLink = function () {
            $location.path("/sapLink");
        };

        $rootScope.user = {
            nome: "PAULA HERMANN",
            abreviado: "PHERMANN"
        }

        $rootScope.linksMenu = [
            {
                nome: 'Cliente',
                link: '/cliente',
                icon: 'fa-user'

            }, {
                nome: 'Simulações',
                link: '/simulacoes',
                icon: 'fa-usd'

            }, {
                nome: 'Gráficos',
                link: '/graficos',
                icon: 'fa-bar-chart'

            }];

        $rootScope.divLink = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/sap-links.html',
                controller: ''
            });
        }

        $rootScope.dadosGraficos = [
            {"x": "VALORES", "LB": 47, "LM": 36, "OUTROS": 25, "TOS": 37, "MARKUP": 23}
        ];

        $rootScope.dadosGraficosColunas = [
            {"id": "LB", "type": "bar", "name": "LB"},
            {"id": "LM", "type": "bar", "name": "LM"},
            {"id": "OUTROS", "type": "bar", "name": "OUTROS"},
            {"id": "TOS", "type": "bar", "name": "TOS"},
            {"id": "MARKUP", "type": "bar", "name": "MARKUP"}
        ];

        $rootScope.datax = {"id": "x"};

        $rootScope.perfilLoja1 = 0;

        $rootScope.perfilLoja2 = 1;

        $rootScope.perfilLoja3 = 1;

        $rootScope.perfilLoja4 = 0;

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
                        titulo: "ZTLV14 - Cod. De marca e Categoria Mix",
                        url: ""
                    },
                    {
                        titulo: "ZTLV19 - Cadastro Ação Promo. E Mapa da Mina",
                        url: ""
                    }, {
                        titulo: "ZTLV15 - Texos Fixos - Simulação e OV",
                        url: ""
                    }, {titulo: "ZTLV20 - TAB PRE Atribuir Marca e Categ", url: ""}, {
                        titulo: "ZTLV11 - ZROUTE",
                        url: ""
                    }, {
                        titulo: "ZTABP - Gerar de tabela de Preço",
                        url: ""
                    }, {titulo: "ZEXEC - Exceção de materiais - TAB preço", url: ""}]
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
                        titulo: "ZTLV09 -Relação de telefones",
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

        $rootScope.credito = [
            {
                id: 1,
                emissor:445646546 ,
                limiteTotal: 'R$ 110.000,00',
                limiteWhp: 'R$ 85.000,00',
                exposicaoWRP: 'R$ 25.000,00',
                emAbertoWRP: 'R$ 5.000,00'
            },
            {
                id: 2 ,
                emissor:98794656 ,
                limiteTotal: 'R$ 60.000,00',
                limiteWhp: 'R$ 45.000, 00',
                exposicaoWRP: 'R$ 15.000, 00',
                emAbertoWRP: 'R$ 2.000, 00'
            },
            {
                id: 3 ,
                emissor:654654646 ,
                limiteTotal: 'R$ 160.000, 00',
                limiteWhp: 'R$ 145.000, 00',
                exposicaoWRP: 'R$ 115.000, 00',
                emAbertoWRP: 'R$ 90.000, 00'
            }
        ];

        $rootScope.gridCredito = {
            data: 'credito',
            enableGridMenu: true,
            columnDefs: [
                {
                    field: 'id',
                    displayName: '#'
                },
                {
                    field: 'emissor',
                    displayName: 'Emissor'
                },
                {
                    field: 'limiteTotal',
                    displayName: 'Limite Total'
                },
                {
                    field: 'limiteWhp',
                    displayName: 'Limite WHP'
                },
                {
                    field: 'exposicaoWRP',
                    displayName: 'Exposição WRP'
                },
                {
                    field: 'emAbertoWRP',
                    displayName: 'Em Aberto WRP.'
                }
            ]
        };

        $rootScope.currentRoute = "/home";

        $rootScope.processos = [
            {data: "14.04.17", cliente: "Carrefour", processo: 423476, status: "Pendente"},
            {data: "20.04.17", cliente: "Carrefour", processo: 564654, status: "Pendente"}
        ];

        $rootScope.processos1 = [
            {data: "14.04.17", cliente: "Carrefour", processo: 423476, status: "Em processamento"},
            {data: "20.04.17", cliente: "Carrefour", processo: 564654, status: "Cancelado"}
        ];

        $rootScope.processos2 = [
            {data: "14.04.17", cliente: "Carrefour", processo: 423476, status: "Finalizado"},
            {data: "20.04.17", cliente: "Carrefour", processo: 564654, status: "Encerrado"}
        ];

        $rootScope.processos3 = [
            {data: "14.04.17", cliente: "Carrefour", processo: 423476, status: "Pendente"},
            {data: "20.04.17", cliente: "Carrefour", processo: 564654, status: "Pendente"}
        ];

        $rootScope.contatos = [
            {

                data: "14.04.17",
                descricao: "0000456456",
                emissor: 423476,
                status: "Atualização: 03.05.2017 - PHERMANN\n\nAguardando retorno do cliente"
            },
            {

                data: "14.04.17",
                descricao: "0000456457",
                emissor: 423476,
                status: "Atualização: 03.05.2017 - PHERMANN\n\nAguardando retorno do cliente"
            },
            {

                data: "20.04.17",
                descricao: "0000456458",
                emissor: 564654,
                status: "Atualização: 03.05.2017 - PHERMANN\n\nAguardando retorno do cliente"
            }

        ];

        $rootScope.contatos2 = [
            {

                data: "14.04.17",
                descricao: "11111456456",
                emissor: 423476,
                status: "Atualização: 03.05.2017 - PHERMANN\n\nAguardando retorno do cliente"
            },
            {

                data: "14.04.17",
                descricao: "1111456457",
                emissor: 423476,
                status: "Atualização: 03.05.2017 - PHERMANN\n\nAguardando retorno do cliente"
            },
            {

                data: "20.04.17",
                descricao: "1111456458",
                emissor: 564654,
                status: "Atualização: 03.05.2017 - PHERMANN\n\nAguardando retorno do cliente"
            }

        ];

        $rootScope.contatos1 = [
            {

                data: "14.04.17",
                descricao: "0000456456",
                emissor: 423476,
                status: "Atualização: 03.05.2017 - PHERMANN\n\nAguardando retorno do cliente"
            },
            {

                data: "14.04.17",
                descricao: "0000456457",
                emissor: 423476,
                status: "Atualização: 03.05.2017 - PHERMANN\n\nAguardando retorno do cliente"
            },
            {

                data: "20.04.17",
                descricao: "0000456458",
                emissor: 564654,
                status: "Atualização: 03.05.2017 - PHERMANN\n\nAguardando retorno do cliente"
            }

        ];

        $rootScope.clientes = [
            {
                clienteEmissorId: 974651321318,
                razao: "CARREFOUR",
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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
                cnpj: "08.675.549/0001-56",
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


    });
