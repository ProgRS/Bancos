const bancos = [
  {
    codigo: "001",
    nome: "Banco do Brasil S.A."
  },
  {
    codigo: "003",
    nome: "Banco da Amazônia S.A."
  },
  {
    codigo: "004",
    nome: "Banco do Nordeste do Brasil S.A."
  },
  {
    codigo: "007",
    nome: "Banco Nacional de Desenvolvimento Econômico e Social BNDES"
  },
  {
    codigo: "010",
    nome: "Credicoamo Crédito Rural Cooperativa"
  },
  {
    codigo: "011",
    nome: "Credit Suisse Hedging-Griffo Corretora de Valores S.A."
  },
  {
    codigo: "012",
    nome: "Banco Inbursa S.A."
  },
  {
    codigo: "014",
    nome: "Natixis Brasil S.A. Banco Múltiplo"
  },
  {
    codigo: "015",
    nome: "UBS Brasil Corretora de Câmbio, Títulos e Valores Mobiliários S.A."
  },
  {
    codigo: "016",
    nome: "Coop de Créd. Mútuo dos Despachantes de Trânsito de SC e Rio Grande do Sul"
  },
  {
    codigo: "017",
    nome: "BNY Mellon Banco S.A."
  },
  {
    codigo: "018",
    nome: "Banco Tricury S.A."
  },
  {
    codigo: "021",
    nome: "Banestes S.A. Banco do Estado do Espírito Santo"
  },
  {
    codigo: "024",
    nome: "Banco Bandepe S.A."
  },
  {
    codigo: "025",
    nome: "Banco Alfa S.A."
  },
  {
    codigo: "029",
    nome: "Banco Itaú Consignado S.A."
  },
  {
    codigo: "033",
    nome: "Banco Santander (Brasil) S. A."
  },
  {
    codigo: "036",
    nome: "Banco Bradesco BBI S.A."
  },
  {
    codigo: "037",
    nome: "Banco do Estado do Pará S.A."
  },
  {
    codigo: "040",
    nome: "Banco Cargill S.A."
  },
  {
    codigo: "041",
    nome: "Banco do Estado do Rio Grande do Sul S.A."
  },
  {
    codigo: "047",
    nome: "Banco do Estado de Sergipe S.A."
  },
  {
    codigo: "060",
    nome: "Confidence Corretora de Câmbio S.A."
  },
  {
    codigo: "062",
    nome: "Hipercard Banco Múltiplo S.A."
  },
  {
    codigo: "063",
    nome: "Banco Bradescard S.A."
  },
  {
    codigo: "064",
    nome: "Goldman Sachs do Brasil  Banco Múltiplo S. A."
  },
  {
    codigo: "065",
    nome: "Banco AndBank (Brasil) S.A."
  },
  {
    codigo: "066",
    nome: "Banco Morgan Stanley S. A."
  },
  {
    codigo: "069",
    nome: "Banco Crefisa S.A."
  },
  {
    codigo: "070",
    nome: "Banco de Brasília S.A."
  },
  {
    codigo: "074",
    nome: "Banco J. Safra S.A."
  },
  {
    codigo: "075",
    nome: "Banco ABN Amro S.A."
  },
  {
    codigo: "076",
    nome: "Banco KDB do Brasil S.A."
  },
  {
    codigo: "077",
    nome: "Banco Inter S.A."
  },
  {
    codigo: "078",
    nome: "Haitong Banco de Investimento do Brasil S.A."
  },
  {
    codigo: "079",
    nome: "Banco Original do Agronegócio S.A."
  },
  {
    codigo: "080",
    nome: "BT Corretora de Câmbio Ltda."
  },
  {
    codigo: "081",
    nome: "BBN Banco Brasileiro de Negocios S.A."
  },
  {
    codigo: "082",
    nome: "Banco Topazio S.A."
  },
  {
    codigo: "083",
    nome: "Banco da China Brasil S.A."
  },
  {
    codigo: "084",
    nome: "Uniprime Norte do Paraná - Cooperativa de Crédito Ltda."
  },
  {
    codigo: "085",
    nome: "Cooperativa Central de Crédito Urbano - Cecred"
  },
  {
    codigo: "089",
    nome: "Cooperativa de Crédito Rural da Região da Mogiana"
  },
  {
    codigo: "091",
    nome: "Central de Cooperativas de Economia e Crédito Mútuo do Est RS - Unicred"
  },
  {
    codigo: "092",
    nome: "BRK S.A. Crédito, Financiamento e Investimento"
  },
  {
    codigo: "093",
    nome: "Pólocred Sociedade de Crédito ao Microempreendedor e à Empresa de Pequeno Porte"
  },
  {
    codigo: "094",
    nome: "Banco Finaxis S.A."
  },
  {
    codigo: "095",
    nome: "Banco Confidence de Câmbio S.A."
  },
  {
    codigo: "096",
    nome: "Banco BMFBovespa de Serviços de Liquidação e Custódia S/A"
  },
  {
    codigo: "097",
    nome: "Cooperativa Central de Crédito Noroeste Brasileiro Ltda - CentralCredi"
  },
  {
    codigo: "098",
    nome: "Credialiança Cooperativa de Crédito Rural"
  },
  {
    codigo: "099",
    nome: "Uniprime Central – Central Interestadual de Cooperativas de Crédito Ltda."
  },
  {
    codigo: "100",
    nome: "Planner Corretora de Valores S.A."
  },
  {
    codigo: "101",
    nome: "Renascença Distribuidora de Títulos e Valores Mobiliários Ltda."
  },
  {
    codigo: "102",
    nome: "XP Investimentos Corretora de Câmbio Títulos e Valores Mobiliários S.A."
  },
  {
    codigo: "104",
    nome: "Caixa Econômica Federal"
  },
  {
    codigo: "105",
    nome: "Lecca Crédito, Financiamento e Investimento S/A"
  },
  {
    codigo: "107",
    nome: "Banco Bocom BBM S.A."
  },
  {
    codigo: "108",
    nome: "PortoCred S.A. Crédito, Financiamento e Investimento"
  },
  {
    codigo: "111",
    nome: "Oliveira Trust Distribuidora de Títulos e Valores Mobiliários S.A."
  },
  {
    codigo: "113",
    nome: "Magliano S.A. Corretora de Cambio e Valores Mobiliarios"
  },
  {
    codigo: "114",
    nome: "Central Cooperativa de Crédito no Estado do Espírito Santo - CECOOP"
  },
  {
    codigo: "117",
    nome: "Advanced Corretora de Câmbio Ltda."
  },
  {
    codigo: "118",
    nome: "Standard Chartered Bank (Brasil) S.A. Banco de Investimento"
  },
  {
    codigo: "119",
    nome: "Banco Western Union do Brasil S.A."
  },
  {
    codigo: "120",
    nome: "Banco Rodobens SA"
  },
  {
    codigo: "121",
    nome: "Banco Agibank S.A."
  },
  {
    codigo: "122",
    nome: "Banco Bradesco BERJ S.A."
  },
  {
    codigo: "124",
    nome: "Banco Woori Bank do Brasil S.A."
  },
  {
    codigo: "125",
    nome: "Brasil Plural S.A. Banco Múltiplo"
  },
  {
    codigo: "126",
    nome: "BR Partners Banco de Investimento S.A."
  },
  {
    codigo: "127",
    nome: "Codepe Corretora de Valores e Câmbio S.A."
  },
  {
    codigo: "128",
    nome: "MS Bank S.A. Banco de Câmbio"
  },
  {
    codigo: "129",
    nome: "UBS Brasil Banco de Investimento S.A."
  },
  {
    codigo: "130",
    nome: "Caruana S.A. Sociedade de Crédito, Financiamento e Investimento"
  },
  {
    codigo: "131",
    nome: "Tullett Prebon Brasil Corretora de Valores e Câmbio Ltda."
  },
  {
    codigo: "132",
    nome: "ICBC do Brasil Banco Múltiplo S.A."
  },
  {
    codigo: "133",
    nome: "Confederação Nacional das Cooperativas Centrais de Crédito e Economia Familiar e"
  },
  {
    codigo: "134",
    nome: "BGC Liquidez Distribuidora de Títulos e Valores Mobiliários Ltda."
  },
  {
    codigo: "135",
    nome: "Gradual Corretora de Câmbio, Títulos e Valores Mobiliários S.A."
  },
  {
    codigo: "136",
    nome: "Confederação Nacional das Cooperativas Centrais Unicred Ltda – Unicred do Brasil"
  },
  {
    codigo: "137",
    nome: "Multimoney Corretora de Câmbio Ltda"
  },
  {
    codigo: "138",
    nome: "Get Money Corretora de Câmbio S.A."
  },
  {
    codigo: "139",
    nome: "Intesa Sanpaolo Brasil S.A. - Banco Múltiplo"
  },
  {
    codigo: "140",
    nome: "Easynvest - Título Corretora de Valores SA"
  },
  {
    codigo: "142",
    nome: "Broker Brasil Corretora de Câmbio Ltda."
  },
  {
    codigo: "143",
    nome: "Treviso Corretora de Câmbio S.A."
  },
  {
    codigo: "144",
    nome: "Bexs Banco de Câmbio S.A."
  },
  {
    codigo: "145",
    nome: "Levycam - Corretora de Câmbio e Valores Ltda."
  },
  {
    codigo: "146",
    nome: "Guitta Corretora de Câmbio Ltda."
  },
  {
    codigo: "149",
    nome: "Facta Financeira S.A. - Crédito Financiamento e Investimento"
  },
  {
    codigo: "157",
    nome: "ICAP do Brasil Corretora de Títulos e Valores Mobiliários Ltda."
  },
  {
    codigo: "159",
    nome: "Casa do Crédito S.A. Sociedade de Crédito ao Microempreendedor"
  },
  {
    codigo: "163",
    nome: "Commerzbank Brasil S.A. - Banco Múltiplo"
  },
  {
    codigo: "169",
    nome: "Banco Olé Bonsucesso Consignado S.A."
  },
  {
    codigo: "172",
    nome: "Albatross Corretora de Câmbio e Valores S.A"
  },
  {
    codigo: "173",
    nome: "BRL Trust Distribuidora de Títulos e Valores Mobiliários S.A."
  },
  {
    codigo: "174",
    nome: "Pernambucanas Financiadora S.A. Crédito, Financiamento e Investimento"
  },
  {
    codigo: "177",
    nome: "Guide Investimentos S.A. Corretora de Valores"
  },
  {
    codigo: "180",
    nome: "CM Capital Markets Corretora de Câmbio, Títulos e Valores Mobiliários Ltda."
  },
  {
    codigo: "182",
    nome: "Dacasa Financeira S/A - Sociedade de Crédito, Financiamento e Investimento"
  },
  {
    codigo: "183",
    nome: "Socred S.A. - Sociedade de Crédito ao Microempreendedor"
  },
  {
    codigo: "184",
    nome: "Banco Itaú BBA S.A."
  },
  {
    codigo: "188",
    nome: "Ativa Investimentos S.A. Corretora de Títulos Câmbio e Valores"
  },
  {
    codigo: "189",
    nome: "HS Financeira S/A Crédito, Financiamento e Investimentos"
  },
  {
    codigo: "190",
    nome: "Cooperativa de Economia e Crédito Mútuo dos Servidores Públicos Estaduais do Rio"
  },
  {
    codigo: "191",
    nome: "Nova Futura Corretora de Títulos e Valores Mobiliários Ltda."
  },
  {
    codigo: "194",
    nome: "Parmetal Distribuidora de Títulos e Valores Mobiliários Ltda."
  },
  {
    codigo: "196",
    nome: "Fair Corretora de Câmbio S.A."
  },
  {
    codigo: "197",
    nome: "Stone Pagamentos S.A."
  },
  {
    codigo: "204",
    nome: "Banco Bradesco Cartões S.A."
  },
  {
    codigo: "208",
    nome: "Banco BTG Pactual S.A."
  },
  {
    codigo: "212",
    nome: "Banco Original S.A."
  },
  {
    codigo: "213",
    nome: "Banco Arbi S.A."
  },
  {
    codigo: "217",
    nome: "Banco John Deere S.A."
  },
  {
    codigo: "218",
    nome: "Banco BS2 S.A."
  },
  {
    codigo: "222",
    nome: "Banco Credit Agrícole Brasil S.A."
  },
  {
    codigo: "224",
    nome: "Banco Fibra S.A."
  },
  {
    codigo: "233",
    nome: "Banco Cifra S.A."
  },
  {
    codigo: "237",
    nome: "Banco Bradesco S.A."
  },
  {
    codigo: "241",
    nome: "Banco Clássico S.A."
  },
  {
    codigo: "243",
    nome: "Banco Máxima S.A."
  },
  {
    codigo: "246",
    nome: "Banco ABC Brasil S.A."
  },
  {
    codigo: "249",
    nome: "Banco Investcred Unibanco S.A."
  },
  {
    codigo: "250",
    nome: "BCV - Banco de Crédito e Varejo S/A"
  },
  {
    codigo: "253",
    nome: "Bexs Corretora de Câmbio S/A"
  },
  {
    codigo: "254",
    nome: "Parana Banco S. A."
  },
  {
    codigo: "260",
    nome: "Nu Pagamentos S.A."
  },
  {
    codigo: "265",
    nome: "Banco Fator S.A."
  },
  {
    codigo: "266",
    nome: "Banco Cédula S.A."
  },
  {
    codigo: "268",
    nome: "Barigui Companhia Hipotecária"
  },
  {
    codigo: "269",
    nome: "HSBC Brasil S.A. Banco de Investimento"
  },
  {
    codigo: "271",
    nome: "IB Corretora de Câmbio, Títulos e Valores Mobiliários Ltda."
  },
  {
    codigo: "300",
    nome: "Banco de la Nacion Argentina"
  },
  {
    codigo: "318",
    nome: "Banco BMG S.A."
  },
  {
    codigo: "320",
    nome: "China Construction Bank (Brasil) Banco Múltiplo S/A"
  },
  {
    codigo: "341",
    nome: "Itaú Unibanco  S.A."
  },
  {
    codigo: "366",
    nome: "Banco Société Générale Brasil S.A."
  },
  {
    codigo: "370",
    nome: "Banco Mizuho do Brasil S.A."
  },
  {
    codigo: "376",
    nome: "Banco J. P. Morgan S. A."
  },
  {
    codigo: "389",
    nome: "Banco Mercantil do Brasil S.A."
  },
  {
    codigo: "394",
    nome: "Banco Bradesco Financiamentos S.A."
  },
  {
    codigo: "399",
    nome: "Kirton Bank S.A. - Banco Múltiplo"
  },
  {
    codigo: "412",
    nome: "Banco Capital S. A."
  },
  {
    codigo: "422",
    nome: "Banco Safra S.A."
  },
  {
    codigo: "456",
    nome: "Banco MUFG Brasil S.A."
  },
  {
    codigo: "464",
    nome: "Banco Sumitomo Mitsui Brasileiro S.A."
  },
  {
    codigo: "473",
    nome: "Banco Caixa Geral - Brasil S.A."
  },
  {
    codigo: "477",
    nome: "Citibank N.A."
  },
  {
    codigo: "479",
    nome: "Banco ItauBank S.A."
  },
  {
    codigo: "487",
    nome: "Deutsche Bank S.A. - Banco Alemão"
  },
  {
    codigo: "488",
    nome: "JPMorgan Chase Bank, National Association"
  },
  {
    codigo: "492",
    nome: "ING Bank N.V."
  },
  {
    codigo: "494",
    nome: "Banco de La Republica Oriental del Uruguay"
  },
  {
    codigo: "495",
    nome: "Banco de La Provincia de Buenos Aires"
  },
  {
    codigo: "505",
    nome: "Banco Credit Suisse (Brasil) S.A."
  },
  {
    codigo: "545",
    nome: "Senso Corretora de Câmbio e Valores Mobiliários S.A."
  },
  {
    codigo: "600",
    nome: "Banco Luso Brasileiro S.A."
  },
  {
    codigo: "604",
    nome: "Banco Industrial do Brasil S.A."
  },
  {
    codigo: "610",
    nome: "Banco VR S.A."
  },
  {
    codigo: "611",
    nome: "Banco Paulista S.A."
  },
  {
    codigo: "612",
    nome: "Banco Guanabara S.A."
  },
  {
    codigo: "613",
    nome: "Omni Banco S.A."
  },
  {
    codigo: "623",
    nome: "Banco Pan S.A."
  },
  {
    codigo: "626",
    nome: "Banco Ficsa S. A."
  },
  {
    codigo: "630",
    nome: "Banco Intercap S.A."
  },
  {
    codigo: "633",
    nome: "Banco Rendimento S.A."
  },
  {
    codigo: "634",
    nome: "Banco Triângulo S.A."
  },
  {
    codigo: "637",
    nome: "Banco Sofisa S. A."
  },
  {
    codigo: "641",
    nome: "Banco Alvorada S.A."
  },
  {
    codigo: "643",
    nome: "Banco Pine S.A."
  },
  {
    codigo: "652",
    nome: "Itaú Unibanco Holding S.A."
  },
  {
    codigo: "653",
    nome: "Banco Indusval S. A."
  },
  {
    codigo: "654",
    nome: "Banco A. J. Renner S.A."
  },
  {
    codigo: "655",
    nome: "Banco Votorantim S.A."
  },
  {
    codigo: "707",
    nome: "Banco Daycoval S.A."
  },
  {
    codigo: "712",
    nome: "Banco Ourinvest S.A."
  },
  {
    codigo: "719",
    nome: "Banif - Bco Internacional do Funchal (Brasil) S.A."
  },
  {
    codigo: "735",
    nome: "Banco Neon S.A."
  },
  {
    codigo: "739",
    nome: "Banco Cetelem S.A."
  },
  {
    codigo: "741",
    nome: "Banco Ribeirão Preto S.A."
  },
  {
    codigo: "743",
    nome: "Banco Semear S.A."
  },
  {
    codigo: "745",
    nome: "Banco Citibank S.A."
  },
  {
    codigo: "746",
    nome: "Banco Modal S.A."
  },
  {
    codigo: "747",
    nome: "Banco Rabobank International Brasil S.A."
  },
  {
    codigo: "748",
    nome: "Banco Cooperativo Sicredi S. A."
  },
  {
    codigo: "751",
    nome: "Scotiabank Brasil S.A. Banco Múltiplo"
  },
  {
    codigo: "752",
    nome: "Banco BNP Paribas Brasil S.A."
  },
  {
    codigo: "753",
    nome: "Novo Banco Continental S.A. - Banco Múltiplo"
  },
  {
    codigo: "754",
    nome: "Banco Sistema S.A."
  },
  {
    codigo: "755",
    nome: "Bank of America Merrill Lynch Banco Múltiplo S.A."
  },
  {
    codigo: "756",
    nome: "Banco Cooperativo do Brasil S/A - Bancoob"
  },
  {
    codigo: "757",
    nome: "Banco Keb Hana do Brasil S. A."
  }
]

export default bancos;