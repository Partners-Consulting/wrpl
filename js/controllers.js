angular.module("App.controllers", [])
    .constant('_', _)
    .constant('moment', moment)
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
    .controller("ClienteController", function ($scope, $rootScope, $location, $uibModal, SweetAlert, moment) {
        "use strict";

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
            quantidadeDeTabela: 4,
            tabelaAtual: 1,
            tituloTabelaAtual: 'Últimos Processos'
        }
        $scope.processos = [
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
            }

            ]
        };

        $scope.gridLinhaBranca = {
            enableHorizontalScrollbar: 0,
            enableGridMenu: true,
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
                displayName: 'Ação',
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
            enableGridMenu: true,
            data: 'concorrentesRevenda',
            columnDefs: [{
                field: 'nome',
                displayName: 'Nome'
            }, {
                field: 'acao',
                displayName: 'Ação',
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

            }

            $scope.selectedClientB = angular.copy($rootScope.selectedClient);
            $scope.geraisB = angular.copy($scope.gerais);
        }

        init();

        $scope.adicionarContatos = function () {
            var modalInstance = $uibModal.open({
                animation: true,
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
                $scope.painelTabela.tituloTabelaAtual = 'Concorrentes Linha Branca';
            } else if ($scope.painelTabela.tabelaAtual == 4) {
                $scope.painelTabela.tituloTabelaAtual = 'Concorrentes Revenda';
            }
        };

        $scope.adicionarPontual = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/adicionar-pontual.html',
                controller: 'ModalCriarPontualCtrl'
            });
        };

        $scope.editarContatos = function (contato) {
            var modalInstance = $uibModal.open({
                animation: true,
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
            var alertExclusao = {
                title: "Exclusão de nota",
                text: "Tem certeza que gostaria de excluir essa nota?",
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
            if ($scope.gridApiConcorrentes.selection.getSelectedRows().length > 0) {
                var alertExclusao = {
                    title: "Exclusão de Concorrente",
                    text: "Confirma a exclusão do(s) concorrente(s) selecionado(s)?",
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
            $scope.isBlocked = !$scope.isBlocked
        };

        $scope.salvarEdicaoRevenda = function () {
            if (angular.equals($scope.selectedClientB.revenda, $rootScope.selectedClient.revenda)) {
                $scope.isBlocked = !$scope.isBlocked
            } else {
                $rootScope.selectedClient.revenda.data = moment().format("DD.MM.YYYY")
                $scope.isBlocked = !$scope.isBlocked
            }
        };

        $scope.cancelarEdicaoRevenda = function () {
            if (angular.equals($scope.selectedClientB.revenda, $rootScope.selectedClient.revenda)) {
                $scope.isBlocked = !$scope.isBlocked
            } else {
                $rootScope.selectedClient.revenda = angular.copy($scope.selectedClientB.revenda);
                $scope.isBlocked = !$scope.isBlocked
            }
        };

        $scope.editarNotas = function () {
            $scope.mostra = !$scope.mostra;
        };

        $scope.salvarNotas = function() {
            $scope.geraisB = angular.copy($scope.gerais);
            $scope.mostra = !$scope.mostra;
        };

        $scope.cancelarNotas = function(){
            $scope.gerais = angular.copy($scope.geraisB);
            $scope.mostra = !$scope.mostra;
        }

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
            pontual.id = $rootScope.simulacaoPontuais.length + 1;
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

        $scope.salvarAlteracaoContato = function () {
            var alertExclusao = {
                title: "Alteração de dados de contato",
                text: "Tem certeza que gostaria de alterar os dados?",
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
        }

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
    .controller("ModalUltimosContatosCtrl", function ($scope, $rootScope, $uibModalInstance, contato) {
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
                contato.data = "17.05.2017"
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
        }

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
    .controller("ModalEfetivarOvCtrl", function ($scope, $rootScope, materiais, $uibModal, $uibModalInstance, $timeout) {

        $scope.showDetalhe = false;
        $scope.listaMateriais = materiais


        $scope.listaMateriais = materiais

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
                    width: '250',
                    displayName: 'Material',
                    cellTemplate: '<div ng-click="grid.appScope.abriDetalhe(row.entity);">{{COL_FIELD}}</div>'
                },
                {
                    field: 'modelo',
                    width: '260',
                    displayName: 'Modelo',
                    cellTemplate: '<div ng-click="grid.appScope.abriDetalhe(row.entity);">{{COL_FIELD}}</div>'
                },
                {
                    field: 'cor',
                    width: '200',
                    displayName: 'Cor',
                    cellTemplate: '<div ng-click="grid.appScope.abriDetalhe(row.entity);">{{COL_FIELD}}</div>'
                },
                {
                    field: 'voltagem',
                    width: '70',
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
            }, 0)
        }

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
                backdrop: 'static',
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
    .controller("ModalBuscarMaterialCtrl", function ($scope, $rootScope, $uibModal, $uibModalInstance, MaterialService, $timeout) {

        $scope.showDetalhe = false;

        $scope.busca = {
            codigo: "",
            descricao: ""
        };

        $scope.materiais = {
            codigos: ""
        }

        $scope.abriDetalhe = function (materiais) {
            $scope.showDetalhe = !$scope.showDetalhe;
        }

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

        $scope.close = function () {
            $uibModalInstance.close();
        };


    })
    .controller("ModalEfetivarOv2Ctrl", function ($scope, $rootScope, $uibModal, $uibModalInstance, _) {

        $scope.showDetalhe = false;

        $scope.codProcEsp = [
            "TRUCK ABERTO",
            "TRUCK BAU",
            "TOCO ABERTO",
            "TOCO BAU"
        ]

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
        ]

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
        ]

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
        ]

        $scope.abriDetalhe = function (materiais) {
            $scope.showDetalhe = !$scope.showDetalhe;
        }

        $scope.brindesEBonificacoes = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: './view/bonificacao.html',
                controller: 'ModalBonificacaoCtrl',
                backdrop: 'static',
                size: 'lg'
            });
        }

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
                    width: '100',
                    displayName: 'Canal'
                },
                {
                    field: 'setor',
                    width: '100',
                    displayName: 'Setor'
                },
                {
                    field: 'situacaoCarga',
                    width: '100',
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
                    width: '100',
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
        }

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
    .controller("SimulacoesController", function ($scope, $rootScope, $location, _, $uibModal, MaterialService, CentroService, LocalExpedicaoService, IncotermsService, SweetAlert) {
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
            $location.path("/historico/"+material.id);

        };

        $scope.codProcEsp = [
            {sppi: 16, denominacao: "TRUCK ABERTO"},
            {sppi: 17, denominacao: "TRUCK BAU"},
            {sppi: 18, denominacao: "TOCO ABERTO"},
            {sppi: 19, denominacao: "TOCO BAU"}
        ]

        $scope.gridMateriais = {
            enableHorizontalScrollbar: true,
            enableGridMenu: true,
            rowHeight:20,
            data: 'listaMateriais',
            columnDefs: [
                {
                    field: 'acao',
                    enableCellEdit: false,
                    width: '70',
                    displayName: 'Ação',
                    cellTemplate: '  <div class="action-buttons"> ' +
                    ' <a class="black" style="color: black"  ng-click="grid.appScope.abrirHitoriocoMaterial(row.entity)" href=""><i class="fa fa-book bigger-130"></i></a>' +
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
                    displayName: 'Sit. Carga',
                    cellTemplate: ' <div ng-click="grid.appScope.alterarSituacaoCarga(row.entity)">' +
                    '<div ng-if="!COL_FIELD" class="hidden-sm hidden-xs action-buttons">' +
                    '<a class="red" style="color: red" href=""><i class="fa fa-times-circle-o bigger-130"></i></a></div>' +
                    '<div ng-if="COL_FIELD" class="hidden-sm hidden-xs action-buttons">' +
                    '<a class="green" style="color: green" href=""><i class="fa fa-check-circle-o bigger-130"></i></a></div></div>'
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
                    displayName: 'Cond. Frete',
                    enableCellEdit: false,
                    cellTemplate: '<select ng-model="condPagtoFrete" ng-options="frete for frete in COL_FIELD"></select>'
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
                    enableCellEdit: false,
                    field: 'centro',
                    cellTemplate: '<select ng-model="centro" ng-options="centro for centro in COL_FIELD"></select>'
                },
                {
                    displayName: 'Local Expedicao',
                    width: '150',
                    field: 'localExpedicao',
                    enableCellEdit: false,
                    cellTemplate: '<select ng-model="localExpedicao" ng-options="local for local in COL_FIELD"></select>'
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

        $scope.gridApiMateriais = {};
        $scope.gridMateriais.onRegisterApi = function (gridApi) {
            $scope.gridApiMateriais = gridApi;
        };

        $scope.deletarMateriaisSelecionados = function () {
            if ($scope.listaMateriais.length <= 0 || $scope.gridApiMateriais.selection.getSelectedRows().length <= 0) {
                return;
            }
            var alertExclusao = {
                title: "Exclusão de itens de simulação",
                text: "Tem certeza que gostaria de excluir os itens selecionados?",
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

                        angular.forEach($scope.gridApiMateriais.selection.getSelectedRows(), function (data, index) {
                            $scope.listaMateriais.splice($scope.listaMateriais.lastIndexOf(data), 1);
                        });
                        SweetAlert.swal({
                            title: "Sucesso",
                            text: "Itens de simulação excluídos com sucesso",
                            customClass: 'sweetalert-sm'
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
                emissor: '',
                valor: 'R$ 76.000,00',
                status: 'GRAVADA'
            },
            {
                id: 2,
                data: '05.04.2017',
                descricao: '',
                emissor: '',
                valor: 'R$ 44.000,00',
                status: 'EFETUADA'
            },
            {
                id: 3,
                data: '25.03.2017',
                descricao: '',
                emissor: '',
                valor: 'R$ 150.000,00',
                status: 'GRAVADA'
            },
            {
                id: 4,
                data: '10.02.2017',
                descricao: '',
                emissor: '',
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
                    $scope.listaMateriais.push(data);
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
                templateUrl: './view/adicionar-pontual.html',
                controller: 'ModalCriarPontualSimulacoesCtrl'
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
        };

        //caso insistam na edição dos dados de entrega na tela
        /*
        $scope.editarDadosEntrega = function () {
           $scope.dadosEntregaEditavel = !$scope.dadosEntregaEditavel
        };

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
        */

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
                confirmButtonText: "Sim, excluir!",
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
        }

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
    .controller("ClientesController", function ($scope, $rootScope) {


    })
    .controller("MainController", function ($scope, $rootScope, $filter, $uibModal, $document, $location, UsuarioService, AcaoPromocionalService) {
        "use strict";
        $rootScope.gotoCliente = function () {
            $rootScope.selectedClient = null;
            $location.path("/selecionarCliente");
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

        $scope.acoesPromocionais = AcaoPromocionalService.getAcoesPromocionais();

        $rootScope.status = {
            isOpen: false
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

    });
