angular.module("App.services", [])
    .value('version', '0.1')
    .service("UtilSrvc", function() {
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
                        condicaoPagamento:"5020",
                        quatidade:"5PC",
                        alt:"-5%",
                        pvl:"R$ 885,00",
                        condicaoFrente:"CIP",
                        valorFrete:"R$ 45,34",
                        valorNotaFiscalUnitario:"R$ 924,34",
                        valorICMS:"R$ 13,05",
                        valorIPI:"R$ 8,56",
                        centroExpList:["C010","C011","C012"]
                    },
                    {
                        id:2,
                        codigo:"BRM47867676",
                        cor:"Branca",
                        voltagem:"220V",
                        condicaoPagamento:"5020",
                        quatidade:"5PC",
                        alt:"-5%",
                        pvl:"R$ 885,00",
                        condicaoFrente:"CIP",
                        valorFrete:"R$ 45,34",
                        valorNotaFiscalUnitario:"R$ 924,34",
                        valorICMS:"R$ 13,05",
                        valorIPI:"R$ 8,56",
                        centroExpList:["C010","C011","C012"]
                    },
                    {
                        id:3,
                        codigo:"BRM47867676",
                        cor:"Branca",
                        voltagem:"220V",
                        condicaoPagamento:"5020",
                        quatidade:"5PC",
                        alt:"-5%",
                        pvl:"R$ 885,00",
                        condicaoFrente:"CIP",
                        valorFrete:"R$ 45,34",
                        valorNotaFiscalUnitario:"R$ 924,34",
                        valorICMS:"R$ 13,05",
                        valorIPI:"R$ 8,56",
                        centroExpList:["C010","C011","C012"]
                    },
                    {
                        id:4,
                        codigo:"BRM47867676",
                        cor:"Branca",
                        voltagem:"220V",
                        condicaoPagamento:"5020",
                        quatidade:"5PC",
                        alt:"-5%",
                        pvl:"R$ 885,00",
                        condicaoFrente:"CIP",
                        valorFrete:"R$ 45,34",
                        valorNotaFiscalUnitario:"R$ 924,34",
                        valorICMS:"R$ 13,05",
                        valorIPI:"R$ 8,56",
                        centroExpList:["C010","C011","C012"]
                    }
                ];
            }
        }
    });
