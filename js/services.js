angular.module("App.services", [])
    .value('version', '0.1')
    .service("UtilService", function () {
        return {
            isAString: function (o) {
                return typeof o == "string" || (typeof o == "object" && o.constructor === String);
            },
            helloWorld: function (name) {
                console.log('opa');
                var result = "Hum, Hello you, but your name is too weird...";
                if (this.isAString(name)) {
                    result = "Hello, " + name;
                }
                return result;
            }
        }
    })
    .service("MaterialService", function () {
        return {
            consultaMaterial: function () {
                return [
                    {
                        id: 1,
                        codigo: "ABC1111111",
                        cor: "Branca",
                        voltagem: "220V",
                        condPagto: "5020",
                        quantidade: "5PC",
                        situacaoCarga: false,
                        precFlexibilidade: "",
                        percRedutorDesconto: "",
                        pvl: "395.47",
                        condPagtoFrete: [
                            "0001",
                            "0901",
                            "5001",
                            "5002",
                            "5003",
                            "5004",
                            "5005"
                        ],
                        valorFrete: "",
                        valorFreteMlog: "",
                        valorNotaFiscalUnitario: "521.33",
                        valorNotaFiscalTotal: "521.33",
                        valorComIcms: "472.20",
                        valorComIpi: "491.09",
                        valorComIcmsSt: "0.00",
                        centro: [
                            "BS-240",
                            "MT-110",
                            "MT-120",
                            "MT-130",
                            "MT-135",
                            "MT-170",
                            "MT-190",
                            "MT-195"],
                        localExpedicao: [
                            "MT-1200",
                            "MT-1201",
                            "MT-1202"
                        ],
                        juros: "0.000",
                        descricao: "Descrição do material"
                    },
                    {
                        id: 2,
                        codigo: "DEF2222222",
                        cor: "Branca",
                        voltagem: "220V",
                        condPagto: "5020",
                        quantidade: "5PC",
                        situacaoCarga: false,
                        precFlexibilidade: "",
                        percRedutorDesconto: "",
                        pvl: "395.47",
                        condPagtoFrete: [
                            "0001",
                            "0901",
                            "5001",
                            "5002",
                            "5003",
                            "5004",
                            "5005"
                        ],
                        valorFrete: "",
                        valorFreteMlog: "",
                        valorNotaFiscalUnitario: "521.33",
                        valorNotaFiscalTotal: "521.33",
                        valorComIcms: "472.20",
                        valorComIpi: "491.09",
                        valorComIcmsSt: "0.00",
                        centro: [
                            "BS-240",
                            "MT-110",
                            "MT-120",
                            "MT-130",
                            "MT-135",
                            "MT-170",
                            "MT-190",
                            "MT-195"],
                        localExpedicao: [
                            "MT-1200",
                            "MT-1201",
                            "MT-1202"
                        ],
                        juros: "0.000",
                        descricao: "Descrição do material"
                    },
                    {
                        id: 3,
                        codigo: "GHI3333333",
                        cor: "Branca",
                        voltagem: "220V",
                        condPagto: "5020",
                        quantidade: "5PC",
                        situacaoCarga: false,
                        precFlexibilidade: "",
                        percRedutorDesconto: "",
                        pvl: "395.47",
                        condPagtoFrete: [
                            "0001",
                            "0901",
                            "5001",
                            "5002",
                            "5003",
                            "5004",
                            "5005"
                        ],
                        valorFrete: "",
                        valorFreteMlog: "",
                        valorNotaFiscalUnitario: "521.33",
                        valorNotaFiscalTotal: "521.33",
                        valorComIcms: "472.20",
                        valorComIpi: "491.09",
                        valorComIcmsSt: "0.00",
                        centro: [
                            "BS-240",
                            "MT-110",
                            "MT-120",
                            "MT-130",
                            "MT-135",
                            "MT-170",
                            "MT-190",
                            "MT-195"],
                        localExpedicao: [
                            "MT-1200",
                            "MT-1201",
                            "MT-1202"
                        ],
                        juros: "0.000",
                        descricao: "Descrição do material"
                    },
                    {
                        id: 4,
                        codigo: "JKL4444444",
                        cor: "Branca",
                        voltagem: "220V",
                        condPagto: "5020",
                        quantidade: "5PC",
                        situacaoCarga: false,
                        precFlexibilidade: "",
                        percRedutorDesconto: "",
                        pvl: "395.47",
                        condPagtoFrete: [
                            "0001",
                            "0901",
                            "5001",
                            "5002",
                            "5003",
                            "5004",
                            "5005"
                        ],
                        valorFrete: "",
                        valorFreteMlog: "",
                        valorNotaFiscalUnitario: "521.33",
                        valorNotaFiscalTotal: "521.33",
                        valorComIcms: "472.20",
                        valorComIpi: "491.09",
                        valorComIcmsSt: "0.00",
                        centro: [
                            "BS-240",
                            "MT-110",
                            "MT-120",
                            "MT-130",
                            "MT-135",
                            "MT-170",
                            "MT-190",
                            "MT-195"],
                        localExpedicao: [
                            "MT-1200",
                            "MT-1201",
                            "MT-1202"
                        ],
                        juros: "0.000",
                        descricao: "Descrição do material"
                    },
                    {
                        id: 5,
                        codigo: "MNO5555555",
                        cor: "Branca",
                        voltagem: "220V",
                        condPagto: "5020",
                        quantidade: "5PC",
                        situacaoCarga: false,
                        precFlexibilidade: "",
                        percRedutorDesconto: "",
                        pvl: "395.47",
                        condPagtoFrete: [
                            "0001",
                            "0901",
                            "5001",
                            "5002",
                            "5003",
                            "5004",
                            "5005"
                        ],
                        valorFrete: "",
                        valorFreteMlog: "",
                        valorNotaFiscalUnitario: "521.33",
                        valorNotaFiscalTotal: "521.33",
                        valorComIcms: "472.20",
                        valorComIpi: "491.09",
                        valorComIcmsSt: "0.00",
                        centro: [
                            "BS-240",
                            "MT-110",
                            "MT-120",
                            "MT-130",
                            "MT-135",
                            "MT-170",
                            "MT-190",
                            "MT-195"],
                        localExpedicao: [
                            "MT-1200",
                            "MT-1201",
                            "MT-1202"
                        ],
                        juros: "0.000",
                        descricao: "Descrição do material"
                    },
                    {
                        id: 6,
                        codigo: "PQR6666666",
                        cor: "Branca",
                        voltagem: "220V",
                        condPagto: "5020",
                        quantidade: "5PC",
                        situacaoCarga: false,
                        precFlexibilidade: "",
                        percRedutorDesconto: "",
                        pvl: "395.47",
                        condPagtoFrete: [
                            "0001",
                            "0901",
                            "5001",
                            "5002",
                            "5003",
                            "5004",
                            "5005"
                        ],
                        valorFrete: "",
                        valorFreteMlog: "",
                        valorNotaFiscalUnitario: "521.33",
                        valorNotaFiscalTotal: "521.33",
                        valorComIcms: "472.20",
                        valorComIpi: "491.09",
                        valorComIcmsSt: "0.00",
                        centro: [
                            "BS-240",
                            "MT-110",
                            "MT-120",
                            "MT-130",
                            "MT-135",
                            "MT-170",
                            "MT-190",
                            "MT-195"],
                        localExpedicao: [
                            "MT-1200",
                            "MT-1201",
                            "MT-1202"
                        ],
                        juros: "0.000",
                        descricao: "Descrição do material"
                    },
                    {
                        id: 7,
                        codigo: "STU7777777",
                        cor: "Branca",
                        voltagem: "220V",
                        condPagto: "5020",
                        quantidade: "5PC",
                        situacaoCarga: false,
                        precFlexibilidade: "",
                        percRedutorDesconto: "",
                        pvl: "395.47",
                        condPagtoFrete: [
                            "0001",
                            "0901",
                            "5001",
                            "5002",
                            "5003",
                            "5004",
                            "5005"
                        ],
                        valorFrete: "",
                        valorFreteMlog: "",
                        valorNotaFiscalUnitario: "521.33",
                        valorNotaFiscalTotal: "521.33",
                        valorComIcms: "472.20",
                        valorComIpi: "491.09",
                        valorComIcmsSt: "0.00",
                        centro: [
                            "BS-240",
                            "MT-110",
                            "MT-120",
                            "MT-130",
                            "MT-135",
                            "MT-170",
                            "MT-190",
                            "MT-195"],
                        localExpedicao: [
                            "MT-1200",
                            "MT-1201",
                            "MT-1202"
                        ],
                        juros: "0.000",
                        descricao: "Descrição do material"
                    },
                    {
                        id: 8,
                        codigo: "VXY8888888",
                        cor: "Branca",
                        voltagem: "220V",
                        condPagto: "5020",
                        quantidade: "5PC",
                        situacaoCarga: false,
                        precFlexibilidade: "",
                        percRedutorDesconto: "",
                        pvl: "395.47",
                        condPagtoFrete: [
                            "0001",
                            "0901",
                            "5001",
                            "5002",
                            "5003",
                            "5004",
                            "5005"
                        ],
                        valorFrete: "",
                        valorFreteMlog: "",
                        valorNotaFiscalUnitario: "521.33",
                        valorNotaFiscalTotal: "521.33",
                        valorComIcms: "472.20",
                        valorComIpi: "491.09",
                        valorComIcmsSt: "0.00",
                        centro: [
                            "BS-240",
                            "MT-110",
                            "MT-120",
                            "MT-130",
                            "MT-135",
                            "MT-170",
                            "MT-190",
                            "MT-195"],
                        localExpedicao: [
                            "MT-1200",
                            "MT-1201",
                            "MT-1202"
                        ],
                        juros: "0.000",
                        descricao: "Descrição do material"
                    },
                    {
                        id: 9,
                        codigo: "ZZZ9999999",
                        cor: "Branca",
                        voltagem: "220V",
                        condPagto: "5020",
                        quantidade: "5PC",
                        situacaoCarga: false,
                        precFlexibilidade: "",
                        percRedutorDesconto: "",
                        pvl: "395.47",
                        condPagtoFrete: [
                            "0001",
                            "0901",
                            "5001",
                            "5002",
                            "5003",
                            "5004",
                            "5005"
                        ],
                        valorFrete: "",
                        valorFreteMlog: "",
                        valorNotaFiscalUnitario: "521.33",
                        valorNotaFiscalTotal: "521.33",
                        valorComIcms: "472.20",
                        valorComIpi: "491.09",
                        valorComIcmsSt: "0.00",
                        centro: [
                            "BS-240",
                            "MT-110",
                            "MT-120",
                            "MT-130",
                            "MT-135",
                            "MT-170",
                            "MT-190",
                            "MT-195"],
                        localExpedicao: [
                            "MT-1200",
                            "MT-1201",
                            "MT-1202"
                        ],
                        juros: "0.000",
                        descricao: "Descrição do material"
                    },
                    {
                        id: 10,
                        codigo: "WWW0000000",
                        cor: "Branca",
                        voltagem: "220V",
                        condPagto: "5020",
                        quantidade: "5PC",
                        situacaoCarga: false,
                        precFlexibilidade: "",
                        percRedutorDesconto: "",
                        pvl: "395.47",
                        condPagtoFrete: [
                            "0001",
                            "0901",
                            "5001",
                            "5002",
                            "5003",
                            "5004",
                            "5005"
                        ],
                        valorFrete: "",
                        valorFreteMlog: "",
                        valorNotaFiscalUnitario: "521.33",
                        valorNotaFiscalTotal: "521.33",
                        valorComIcms: "472.20",
                        valorComIpi: "491.09",
                        valorComIcmsSt: "0.00",
                        centro: [
                            "BS-240",
                            "MT-110",
                            "MT-120",
                            "MT-130",
                            "MT-135",
                            "MT-170",
                            "MT-190",
                            "MT-195"],
                        localExpedicao: [
                            "MT-1200",
                            "MT-1201",
                            "MT-1202"
                        ],
                        juros: "0.000",
                        descricao: "Descrição do material"
                    }
                ];
            },
            consultaReplicas: function () {
                return [
                    {
                        orgVendas: "1000",
                        canal: "11",
                        setor: "10",
                        condPagtos: [
                            "0001",
                            "0901",
                            "5001",
                            "5002",
                            "5003",
                            "5004",
                            "5005"
                        ],
                        incoterms: [
                            "CF",
                            "CFR",
                            "CI",
                            "CIF",
                            "CIP",
                            "CIR",
                            "CPT",
                            "DAF",
                            "DAP",
                            "DAT",
                            "DDP",
                            "DDU",
                            "DEQ",
                            "DES",
                            "EXW",
                            "FAS",
                            "FCA",
                            "FH",
                            "FOB",
                            "TEX",
                            "UN",
                            "ZSF"
                        ],
                        condFrete: [
                            "5050",
                            "5051",
                            "5052",
                            "5053",
                            "5054",
                            "5054"
                        ]
                    },
                    {
                        orgVendas: "1000",
                        canal: "16",
                        setor: "16",
                        condPagtos: [
                            "0001",
                            "0901",
                            "5001",
                            "5002",
                            "5003",
                            "5004",
                            "5005"
                        ],
                        incoterms: [
                            "CF",
                            "CFR",
                            "CI",
                            "CIF",
                            "CIP",
                            "CIR",
                            "CPT",
                            "DAF",
                            "DAP",
                            "DAT",
                            "DDP",
                            "DDU",
                            "DEQ",
                            "DES",
                            "EXW",
                            "FAS",
                            "FCA",
                            "FH",
                            "FOB",
                            "TEX",
                            "UN",
                            "ZSF"
                        ],
                        condFrete: [
                            "5050",
                            "5051",
                            "5052",
                            "5053",
                            "5054",
                            "5054"
                        ]
                    },
                    {
                        orgVendas: "2000",
                        canal: "21",
                        setor: "10",
                       condPagtos: [
                            "0001",
                            "0901",
                            "5001",
                            "5002",
                            "5003",
                            "5004",
                            "5005"
                        ],
                        incoterms: [
                            "CF",
                            "CFR",
                            "CI",
                            "CIF",
                            "CIP",
                            "CIR",
                            "CPT",
                            "DAF",
                            "DAP",
                            "DAT",
                            "DDP",
                            "DDU",
                            "DEQ",
                            "DES",
                            "EXW",
                            "FAS",
                            "FCA",
                            "FH",
                            "FOB",
                            "TEX",
                            "UN",
                            "ZSF"
                        ],
                        condFrete: [
                            "5050",
                            "5051",
                            "5052",
                            "5053",
                            "5054",
                            "5054"
                        ]
                    }
                ];
            },
            consultaMaterialCompleto: function (id) {
                return {
                    codigo: "BRM47867676",
                    modelo: "BRM4",
                    descricao: "",
                    cor: "BRANCA",
                    voltagem: "220V",
                    organiz: "100",
                    canal: "11",
                    setor: "20",
                    centro: "MT-120",
                    localExpedicao: "MT-1200",
                    quantidade: "1",
                    um: "",
                    condPagto: "",
                    incoterms: "CIR",
                    condPagtoFrete: "5052",
                    diasConcessao: "",
                    situacaoCarga: "",
                    precoTabela: "494.34",
                    percDescEscala: "0.000",
                    precDescParceria: "0.000",
                    percDescCanal: "0.000",
                    precDescCategoria: "0.000",
                    percFlexibMaxima: "0.000",
                    precFlexibilidade: "",
                    percRedutorDesconto: "",
                    valorNegociado: "",
                    pvl: "395.47",
                    pvlMinimo: "0.00",
                    percPis: "1.650",
                    precConfins: "7.600",
                    percIcms: "7.000",
                    precIpi: "4.000",
                    percIpiValorFrete: "0.000",
                    precMva: "0.000",
                    percIcmsSt: "17.000",
                    juros: "0.000",
                    valorComIcms: "472.20",
                    valorDoIcms: "33.05",
                    valorComIcmsTotal: "472.20",
                    valorComIpi: "491.09",
                    valorDeIpi: "18.89",
                    valorComIpiTotal: "491.09",
                    valorFrete: "0.00",
                    valorFreteTotal: "0.00",
                    baseIcmsSt: "0.00",
                    valorComIcmsSt: "0.00",
                    valorDeIcmsSt: "0.00",
                    valorFreteMlog: "30.24",
                    valorFreteMlogTotal: "30.24",
                    valorNotaFiscalUnitario: "521.33",
                    valorNotaFiscalTotal: "521.33"
                }
            },
            consultaHistoricoDeVenda: function (id) {
                return [{
                    codigo: "BRM47867676",
                    sku: "123456789",
                    modelo: "BRM4",
                    descricao: "",
                    cor: "BRANCA",
                    voltagem: "220V",
                    organiz: "100",
                    canal: "11",
                    setor: "20",
                    centro: "MT-120",
                    localExpedicao: "MT-1200",
                    quantidade: "1",
                    um: "",
                    condPagto: "",
                    incoterms: "CIR",
                    condPagtoFrete: "5052",
                    diasConcessao: "",
                    situacaoCarga: "",
                    precoTabela: "494.34",
                    percDescEscala: "0.000",
                    precDescParceria: "0.000",
                    percDescCanal: "0.000",
                    precDescCategoria: "0.000",
                    percFlexibMaxima: "0.000",
                    precFlexibilidade: "",
                    percRedutorDesconto: "",
                    valorNegociado: "",
                    pvl: "395.47",
                    pvlMinimo: "0.00",
                    percPis: "1.650",
                    precConfins: "7.600",
                    percIcms: "7.000",
                    precIpi: "4.000",
                    percIpiValorFrete: "0.000",
                    precMva: "0.000",
                    percIcmsSt: "17.000",
                    juros: "0.000",
                    valorComIcms: "472.20",
                    valorDoIcms: "33.05",
                    valorComIcmsTotal: "472.20",
                    valorComIpi: "491.09",
                    valorDeIpi: "18.89",
                    valorComIpiTotal: "491.09",
                    valorFrete: "0.00",
                    valorFreteTotal: "0.00",
                    baseIcmsSt: "0.00",
                    valorComIcmsSt: "0.00",
                    valorDeIcmsSt: "0.00",
                    valorFreteMlog: "30.24",
                    valorFreteMlogTotal: "30.24",
                    valorNotaFiscalUnitario: "521.33",
                    valorNotaFiscalTotal: "521.33"
                }]
            }
        }
    })
    .service("CentroService", function () {
        return {
            consultaCentroPorMaterial: function (materialId) {
                return [
                    {ce: "10", parcNeg: "BS-240", nome1: "BS-MANAUS", nome2: ""},
                    {ce: "10", parcNeg: "MT-110", nome1: "MT-JLLE", nome2: "JOINVILLE"},
                    {ce: "10", parcNeg: "MT-120", nome1: "MT-RCLARO", nome2: "RIO CLARO"},
                    {ce: "10", parcNeg: "MT-130", nome1: "MT-SPLO", nome2: ""},
                    {ce: "10", parcNeg: "MT-135", nome1: "MT-SPLO", nome2: "USP"},
                    {ce: "10", parcNeg: "MT-170", nome1: "MT-TAMBORE", nome2: ""},
                    {ce: "10", parcNeg: "MT-190", nome1: "MT-RECIFE", nome2: ""},
                    {ce: "10", parcNeg: "MT-195", nome1: "MT-RECIFE", nome2: "RECIFE"}
                ]
            }
        }
    })
    .service("LocalExpedicaoService", function () {
        return {
            consultaLocalExpedicaoPorMaterial: function (materialId) {
                return [
                    {parcNeg: "MT-1200", nome1: "RIO CLARO", nome2: ""},
                    {parcNeg: "MT-1201", nome1: "RIO CLARO", nome2: ""},
                    {parcNeg: "MT-1202", nome1: "RIO CLARO", nome2: ""}
                ]
            }
        }
    })
    .service("IncotermsService", function () {
        return {
            consultaIncotermsPorMaterial: function (materialId) {
                return [
                    {incP1: "CF", denominacao: "Custo + frete", loc: false},
                    {incP1: "CFR", denominacao: "Custo e frete", loc: false},
                    {incP1: "CI", denominacao: "Custo + seguro", loc: false},
                    {incP1: "CIF", denominacao: "Custo, seguro & frete", loc: false},
                    {incP1: "CIP", denominacao: "Seguro com frete", loc: false},
                    {incP1: "CIR", denominacao: "Frete MLOG", loc: true},
                    {incP1: "CPT", denominacao: "Frete pago", loc: false},
                    {incP1: "DAF", denominacao: "Entrega na fronteira", loc: false},
                    {incP1: "DAP", denominacao: "", loc: false},
                    {incP1: "DAT", denominacao: "", loc: false},
                    {incP1: "DDP", denominacao: "Entregue desalfandegado", loc: false},
                    {incP1: "DDU", denominacao: "Entregue sem desembaraço alf.", loc: false},
                    {incP1: "DEQ", denominacao: "Entrega no cais(direitos pag.)", loc: false},
                    {incP1: "DES", denominacao: "Entregue no navio", loc: false},
                    {incP1: "EXW", denominacao: "Na fábrica", loc: false},
                    {incP1: "FAS", denominacao: "Posto ao lado do navio", loc: false},
                    {incP1: "FCA", denominacao: "Franco transportador", loc: false},
                    {incP1: "FH", denominacao: "Franco domicilio", loc: false},
                    {incP1: "FOB", denominacao: "Franco a bordo", loc: false},
                    {incP1: "TEX", denominacao: "", loc: false},
                    {incP1: "UN", denominacao: "Porte/Frete a pagar", loc: false},
                    {incP1: "ZSF", denominacao: "Sem Frete", loc: false}
                ]
            },
            consultaIncotermsCruPorMaterial: function (materialId) {
                return [
                    "CF",
                    "CFR",
                    "CI",
                    "CIF",
                    "CIP",
                    "CIR",
                    "CPT",
                    "DAF",
                    "DAP",
                    "DAT",
                    "DDP",
                    "DDU",
                    "DEQ",
                    "DES",
                    "EXW",
                    "FAS",
                    "FCA",
                    "FH",
                    "FOB",
                    "TEX",
                    "UN",
                    "ZSF"
                ]
            }
        }
    })
    .service("FreteService", function () {
        return {
            consultaFreteReplica: function () {
                return [
                    {codigo: "5050", descricao: "Pgto 60/90/120 – Produto Acabado Nacional"},
                    {codigo: "5051", descricao: "Pgto 30/60 – Produto Acabado Nacional"},
                    {codigo: "5052", descricao: "Pgto 30/60/90 – Produto Acabado Nacional"},
                    {codigo: "5053", descricao: "Pgto 15/30/45 – Produto Acabado Nacional"},
                    {codigo: "5054", descricao: "Pgto 15/30/45/60 – Produto Acabado Nacional"},
                    {codigo: "5054", descricao: "Pgto 15/30/45/75/90 – Produto Acabado Nacional"}
                ]
            },
            consultaFreteReplicaCru: function () {
                return [
                    "5050",
                    "5051",
                    "5052",
                    "5053",
                    "5054",
                    "5054"
                ]
            }
        }
    })
    .service("CondicaoPagamentoService", function () {
        return {
            consultaPagamentoPorMaterial: function (materialId) {
                return [
                    {copg: 0001, explicacaoPropria: "pagamento imediato s/desconto", numDias: "000"},
                    {copg: 0901, explicacaoPropria: "pagamento diverso bloqueado (à vista)", numDias: "000"},
                    {copg: 5001, explicacaoPropria: "Pgto à Vista - Imediato", numDias: "000"},
                    {copg: 5002, explicacaoPropria: "Pgto 15 dias - Produto Acabado Nacional", numDias: "015"},
                    {copg: 5003, explicacaoPropria: "Pgto 20 dias - Produto Acabado Nacional", numDias: "020"},
                    {copg: 5004, explicacaoPropria: "Pgto 30 dias - Produto Acabado Nacional", numDias: "030"},
                    {copg: 5005, explicacaoPropria: "Pgto 40 dias - Produto Acabado Nacional", numDias: "040"}
                ]
            },
            consultaPagamentoCruPorMaterial: function (materialId) {
                return [
                    0001,
                    0901,
                    5001,
                    5002,
                    5003,
                    5004,
                    5005
                ]
            },
            consultaPagamentoReplica: function () {
                return [
                    {codigo: "0001", descricao: "Pagamento imediato s/ desconto"},
                    {codigo: "0018", descricao: "pgto 30/60/90"},
                    {codigo: "0019", descricao: "pgto 30/60"},
                    {codigo: "0020", descricao: "pgto 30 dias"},
                    {codigo: "0021", descricao: "pgto 60 Dias"},
                    {codigo: "0090", descricao: "Pgto 90 Dias"},
                    {codigo: "0600", descricao: "A Vista"},
                    {codigo: "0601", descricao: "Contra apresentação (a vista)"},
                    {codigo: "0602", descricao: "Pagamento Antecipado"}
                ]
            }
        }
    })
    .service('UsuarioService', function () {
        return {
            getUsuario: function () {
                return  {
                    nome: "PAULA HERMANN",
                    abreviado: "PHERMANN"
                }
            }
        }
    })
    .service('AcaoPromocionalService', function () {
        return {
            getAcoesPromocionais : function () {
                return [
                    {
                        id: "1",
                        regiao: "TODOS",
                        modelo: "CWE09",
                        desconto: "5 %",
                        vpc: "30PP",
                        outros: "PVL = R$ 230",
                        validoDesde: "24.04.2017",
                        validoAte: "15.05.2017"
                    },
                    {
                        id: "2",
                        regiao: "TODOS",
                        modelo: "CWE11",
                        desconto: "3%",
                        vpc: "MKT",
                        outros: "",
                        validoDesde: "25.03.2017",
                        validoAte: "15.05.2017"
                    },
                    {
                        id: "3",
                        regiao: "TODOS",
                        modelo: "BMF45",
                        desconto: "9%",
                        vpc: "20PP",
                        outros: "",
                        validoDesde: "10.03.2017",
                        validoAte: "15.05.2017"
                    },
                    {
                        id: "4",
                        regiao: "TODOS",
                        modelo: "BRM46",
                        desconto: "6%",
                        vpc: "15PP",
                        outros: "PREÇO BEM ESTAR",
                        validoDesde: "10.03.2017",
                        validoAte: "15.05.2017"
                    },
                    {
                        id: "5",
                        regiao: "TODOS",
                        modelo: "GOK73",
                        desconto: "11%",
                        vpc: "10PP",
                        outros: "PVL=R$ 180",
                        validoDesde: "24.02.2017",
                        validoAte: "15.05.2017"
                    },
                    {
                        id: "6",
                        regiao: "TODOS",
                        modelo: "BWJ11",
                        desconto: "14%",
                        vpc: "MKT",
                        outros: "",
                        validoDesde: "20.02.2017",
                        validoAte: "15.05.2017"
                    },
                    {
                        id: "7",
                        regiao: "TODOS",
                        modelo: "BLF08",
                        desconto: "2%",
                        vpc: "MKT",
                        outros: "PREÇO BEM ESTAR",
                        validoDesde: "20.02.2017",
                        validoAte: "15.05.2017"
                    }
                ];
            }
        }
    })
    .service('ClienteService', function () {
        return{
            buscaClientesPorIdDoVendedor : function(id){
                return [

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

                ]
            }
        }
    });

