angular.module("App.services", [])
    .value('version', '0.1')
    .service("UtilService", function() {
        return {
            isAString: function(o) {
                return typeof o == "string" || (typeof o == "object" && o.constructor === String);
            },
            helloWorld: function(name) {
                console.log('opa');
                var result = "Hum, Hello you, but your name is too weird...";
                if (this.isAString(name)) {
                    result = "Hello, " + name;
                }
                return result;
            }
        }
    })
    .service("MaterialService", function(){
        return {
            consultaMaterial: function() {
                return [
                    {
                        id:1,
                        codigo:"BRM47867676",
                        cor:"Branca",
                        voltagem:"220V",
                        condPagto:"5020",
                        quantidade:"5PC",
                        situacaoCarga:false,
                        precFlexibilidade:"",
                        percRedutorDesconto:"",
                        pvl:"395.47",
                        condPagtoFrete:"",
                        valorFrete:"",
                        valorFreteMlog:"",
                        valorNotaFiscalUnitario:"521.33",
                        valorNotaFiscalTotal:"521.33",
                        valorComIcms:"472.20",
                        valorComIpi:"491.09",
                        valorComIcmsSt:"0.00",
                        centro:[
                            "BS-240",
                            "MT-110",
                            "MT-120",
                            "MT-130",
                            "MT-135",
                            "MT-170",
                            "MT-190",
                            "MT-195"
                        ],
                        localExpedicao:[
                            "MT-1200",
                            "MT-1201",
                            "MT-1202"
                        ],
                        juros:"0.000",
                        descricao:""
                    },
                    {
                        id:2,
                        codigo:"BRM47867676",
                        cor:"Branca",
                        voltagem:"220V",
                        condPagto:"5020",
                        quantidade:"5PC",
                        situacaoCarga:false,
                        precFlexibilidade:"",
                        percRedutorDesconto:"",
                        pvl:"395.47",
                        condPagtoFrete:"",
                        valorFrete:"",
                        valorFreteMlog:"",
                        valorNotaFiscalUnitario:"521.33",
                        valorNotaFiscalTotal:"521.33",
                        valorComIcms:"472.20",
                        valorComIpi:"491.09",
                        valorComIcmsSt:"0.00",
                        centro:[
                            "BS-240",
                            "MT-110",
                            "MT-120",
                            "MT-130",
                            "MT-135",
                            "MT-170",
                            "MT-190",
                            "MT-195"
                        ],
                        localExpedicao:[
                            "MT-1200",
                            "MT-1201",
                            "MT-1202"
                        ],
                        juros:"0.000",
                        descricao:""
                    },
                    {
                        id:3,
                        codigo:"BRM47867676",
                        cor:"Branca",
                        voltagem:"220V",
                        condPagto:"5020",
                        quantidade:"5PC",
                        situacaoCarga:false,
                        precFlexibilidade:"",
                        percRedutorDesconto:"",
                        pvl:"395.47",
                        condPagtoFrete:"",
                        valorFrete:"",
                        valorFreteMlog:"",
                        valorNotaFiscalUnitario:"521.33",
                        valorNotaFiscalTotal:"521.33",
                        valorComIcms:"472.20",
                        valorComIpi:"491.09",
                        valorComIcmsSt:"0.00",
                        centro:[
                            "BS-240",
                            "MT-110",
                            "MT-120",
                            "MT-130",
                            "MT-135",
                            "MT-170",
                            "MT-190",
                            "MT-195"
                        ],
                        localExpedicao:[
                            "MT-1200",
                            "MT-1201",
                            "MT-1202"
                        ],
                        juros:"0.000",
                        descricao:""
                    },
                    {
                        id:4,
                        codigo:"BRM47867676",
                        cor:"Branca",
                        voltagem:"220V",
                        condPagto:"5020",
                        quantidade:"5PC",
                        situacaoCarga:false,
                        precFlexibilidade:"",
                        percRedutorDesconto:"",
                        pvl:"395.47",
                        condPagtoFrete:"",
                        valorFrete:"",
                        valorFreteMlog:"",
                        valorNotaFiscalUnitario:"521.33",
                        valorNotaFiscalTotal:"521.33",
                        valorComIcms:"472.20",
                        valorComIpi:"491.09",
                        valorComIcmsSt:"0.00",
                        centro:[
                            "BS-240",
                            "MT-110",
                            "MT-120",
                            "MT-130",
                            "MT-135",
                            "MT-170",
                            "MT-190",
                            "MT-195"
                        ],
                        localExpedicao:[
                            "MT-1200",
                            "MT-1201",
                            "MT-1202"
                        ],
                        juros:"0.000",
                        descricao:""
                    }
                ];
            },
            consultaReplicas: function () {
                return  [
                    {
                        orgVendas:"1000",
                        canal:"11",
                        setor:"10",
                        condPagtos:[
                            {codigo:"0001",descricao:"Pagamento imediato s/ desconto"},
                            {codigo:"0018",descricao:"pgto 30/60/90"},
                            {codigo:"0019",descricao:"pgto 30/60"},
                            {codigo:"0020",descricao:"pgto 30 dias"},
                            {codigo:"0021",descricao:"pgto 60 Dias"},
                            {codigo:"0090",descricao:"Pgto 90 Dias"},
                            {codigo:"0600",descricao:"A Vista"},
                            {codigo:"0601",descricao:"Contra apresentação (a vista)"},
                            {codigo:"0602",descricao:"Pagamento Antecipado"}
                        ],
                        incoterms:"",
                        condFrete:[
                            {codigo:"5050", descricao:"Pgto 60/90/120 – Produto Acabado Nacional"},
                            {codigo:"5051", descricao:"Pgto 30/60 – Produto Acabado Nacional"},
                            {codigo:"5052", descricao:"Pgto 30/60/90 – Produto Acabado Nacional"},
                            {codigo:"5053", descricao:"Pgto 15/30/45 – Produto Acabado Nacional"},
                            {codigo:"5054", descricao:"Pgto 15/30/45/60 – Produto Acabado Nacional"},
                            {codigo:"5054", descricao:"Pgto 15/30/45/75/90 – Produto Acabado Nacional"}
                        ]
                    },
                    {
                        orgVendas:"1000",
                        canal:"16",
                        setor:"16",
                        condPagtos:[
                            {codigo:"0001",descricao:"Pagamento imediato s/ desconto"},
                            {codigo:"0018",descricao:"pgto 30/60/90"},
                            {codigo:"0019",descricao:"pgto 30/60"},
                            {codigo:"0020",descricao:"pgto 30 dias"},
                            {codigo:"0021",descricao:"pgto 60 Dias"},
                            {codigo:"0090",descricao:"Pgto 90 Dias"},
                            {codigo:"0600",descricao:"A Vista"},
                            {codigo:"0601",descricao:"Contra apresentação (a vista)"},
                            {codigo:"0602",descricao:"Pagamento Antecipado"}
                        ],
                        incoterms:"",
                        condFrete:[
                            {codigo:"5050", descricao:"Pgto 60/90/120 – Produto Acabado Nacional"},
                            {codigo:"5051", descricao:"Pgto 30/60 – Produto Acabado Nacional"},
                            {codigo:"5052", descricao:"Pgto 30/60/90 – Produto Acabado Nacional"},
                            {codigo:"5053", descricao:"Pgto 15/30/45 – Produto Acabado Nacional"},
                            {codigo:"5054", descricao:"Pgto 15/30/45/60 – Produto Acabado Nacional"},
                            {codigo:"5054", descricao:"Pgto 15/30/45/75/90 – Produto Acabado Nacional"}
                        ]
                    },
                    {
                        orgVendas:"2000",
                        canal:"21",
                        setor:"10",
                        condPagtos:[
                            {codigo:"0001",descricao:"Pagamento imediato s/ desconto"},
                            {codigo:"0018",descricao:"pgto 30/60/90"},
                            {codigo:"0019",descricao:"pgto 30/60"},
                            {codigo:"0020",descricao:"pgto 30 dias"},
                            {codigo:"0021",descricao:"pgto 60 Dias"},
                            {codigo:"0090",descricao:"Pgto 90 Dias"},
                            {codigo:"0600",descricao:"A Vista"},
                            {codigo:"0601",descricao:"Contra apresentação (a vista)"},
                            {codigo:"0602",descricao:"Pagamento Antecipado"}
                        ],
                        incoterms:"",
                        condFrete:[
                            {codigo:"5050", descricao:"Pgto 60/90/120 – Produto Acabado Nacional"},
                            {codigo:"5051", descricao:"Pgto 30/60 – Produto Acabado Nacional"},
                            {codigo:"5052", descricao:"Pgto 30/60/90 – Produto Acabado Nacional"},
                            {codigo:"5053", descricao:"Pgto 15/30/45 – Produto Acabado Nacional"},
                            {codigo:"5054", descricao:"Pgto 15/30/45/60 – Produto Acabado Nacional"},
                            {codigo:"5054", descricao:"Pgto 15/30/45/75/90 – Produto Acabado Nacional"}
                        ]
                    }
                ];
            },
            consultaMaterialCompleto: function (id) {
                return {
                    codigo:"BRM47867676",
                    modelo:"BRM4",
                    descricao:"",
                    cor:"BRANCA",
                    voltagem:"220V",
                    organiz:"100",
                    canal:"11",
                    setor:"20",
                    centro:"MT-120",
                    localExpedicao:"MT-1200",
                    quantidade:"1",
                    um:"",
                    condPagto:"",
                    incoterms:"CIR",
                    condPagtoFrete:"5052",
                    diasConcessao:"",
                    situacaoCarga:"",
                    precoTabela:"494.34",
                    percDescEscala:"0.000",
                    precDescParceria:"0.000",
                    percDescCanal:"0.000",
                    precDescCategoria:"0.000",
                    percFlexibMaxima:"0.000",
                    precFlexibilidade:"",
                    percRedutorDesconto:"",
                    valorNegociado:"",
                    pvl:"395.47",
                    pvlMinimo:"0.00",
                    percPis:"1.650",
                    precConfins:"7.600",
                    percIcms:"7.000",
                    precIpi:"4.000",
                    percIpiValorFrete:"0.000",
                    precMva:"0.000",
                    percIcmsSt:"17.000",
                    juros:"0.000",
                    valorComIcms:"472.20",
                    valorDoIcms:"33.05",
                    valorComIcmsTotal:"472.20",
                    valorComIpi:"491.09",
                    valorDeIpi:"18.89",
                    valorComIpiTotal:"491.09",
                    valorFrete:"0.00",
                    valorFreteTotal:"0.00",
                    baseIcmsSt:"0.00",
                    valorComIcmsSt:"0.00",
                    valorDeIcmsSt:"0.00",
                    valorFreteMlog:"30.24",
                    valorFreteMlogTotal:"30.24",
                    valorNotaFiscalUnitario:"521.33",
                    valorNotaFiscalTotal:"521.33"
                }
            }
        }
    })
    .service("CentroService", function () {
        return {
            consultaCentroPorMaterial : function (materialId) {
                return [
                    {ce:"10",parcNeg:"BS-240",nome1:"BS-MANAUS",nome2:""},
                    {ce:"10",parcNeg:"MT-110",nome1:"MT-JLLE",nome2:"JOINVILLE"},
                    {ce:"10",parcNeg:"MT-120",nome1:"MT-RCLARO",nome2:"RIO CLARO"},
                    {ce:"10",parcNeg:"MT-130",nome1:"MT-SPLO",nome2:""},
                    {ce:"10",parcNeg:"MT-135",nome1:"MT-SPLO",nome2:"USP"},
                    {ce:"10",parcNeg:"MT-170",nome1:"MT-TAMBORE",nome2:""},
                    {ce:"10",parcNeg:"MT-190",nome1:"MT-RECIFE",nome2:""},
                    {ce:"10",parcNeg:"MT-195",nome1:"MT-RECIFE",nome2:"RECIFE"}
                ]
            }
        }
    })
    .service("LocalExpedicaoService", function () {
        return {
            consultaLocalExpedicaoPorMaterial : function (materialId) {
                return [
                    {parcNeg:"MT-1200",nome1:"RIO CLARO",nome2:""},
                    {parcNeg:"MT-1201",nome1:"RIO CLARO",nome2:""},
                    {parcNeg:"MT-1202",nome1:"RIO CLARO",nome2:""}
                ]
            }
        }
    })
    .service("IncotermsService", function () {
        return {
            consultaIncotermsPorMaterial : function (materialId) {
                return [
                    {incP1:"CF",denominacao:"Custo + frete",loc:false},
                    {incP1:"CFR",denominacao:"Custo e frete",loc:false},
                    {incP1:"CI",denominacao:"Custo + seguro",loc:false},
                    {incP1:"CIF",denominacao:"Custo, seguro & frete",loc:false},
                    {incP1:"CIP",denominacao:"Seguro com frete",loc:false},
                    {incP1:"CIR",denominacao:"Frete MLOG",loc:true},
                    {incP1:"CPT",denominacao:"Frete pago",loc:false},
                    {incP1:"DAF",denominacao:"Entrega na fronteira",loc:false},
                    {incP1:"DAP",denominacao:"",loc:false},
                    {incP1:"DAT",denominacao:"",loc:false},
                    {incP1:"DDP",denominacao:"Entregue desalfandegado",loc:false},
                    {incP1:"DDU",denominacao:"Entregue sem desembaraço alf.",loc:false},
                    {incP1:"DEQ",denominacao:"Entrega no cais(direitos pag.)",loc:false},
                    {incP1:"DES",denominacao:"Entregue no navio",loc:false},
                    {incP1:"EXW",denominacao:"Na fábrica",loc:false},
                    {incP1:"FAS",denominacao:"Posto ao lado do navio",loc:false},
                    {incP1:"FCA",denominacao:"Franco transportador",loc:false},
                    {incP1:"FH",denominacao:"Franco domicilio",loc:false},
                    {incP1:"FOB",denominacao:"Franco a bordo",loc:false},
                    {incP1:"TEX",denominacao:"",loc:false},
                    {incP1:"UN",denominacao:"Porte/Frete a pagar",loc:false},
                    {incP1:"ZSF",denominacao:"Sem Frete",loc:false}
                ]
            }
        }
    });
