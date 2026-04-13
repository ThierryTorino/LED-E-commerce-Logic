interface LedStrip{
    tipo: "FitaLed"
    tensao: 12 | 24
    potenciaPorMetro: number
    comprimento: number
}

interface LedLamp{
    tipo: "LedLamp"
    bocal: "E27" | "GU10"
    potenciaTotal: number
}

interface PowerSupply{
    tipo: "PowerSupply"
    amperagem: number
    tensaoSaida: number
}

type Produto = LedStrip | LedLamp | PowerSupply

const validarCarrinho = (carrinho: Produto[]) =>{
    let tensaoFitaCarrinho: number | null = null
    let tensaoFonteCarrinho: number | null = null
    let consumoNecessario = 0
    let temFonte = false
    let totalDasFontes = 0
    for (const produtoAtual of carrinho){
        if(produtoAtual.tipo === "FitaLed"){
            tensaoFitaCarrinho = produtoAtual.tensao
        consumoNecessario = produtoAtual.potenciaPorMetro * produtoAtual.comprimento
        consumoNecessario += consumoNecessario * 0.2
        }

        if(produtoAtual.tipo === "PowerSupply"){
            tensaoFonteCarrinho = produtoAtual.tensaoSaida
            temFonte = true
            let potenciaDaFonte = produtoAtual.amperagem * produtoAtual.tensaoSaida

            totalDasFontes += potenciaDaFonte
        }
        
    }

    if(tensaoFitaCarrinho != null && tensaoFonteCarrinho != null){
        if(tensaoFitaCarrinho != tensaoFonteCarrinho){
        console.log("Perigo, Curto Circuito")
        }
    }

    if (!temFonte){
        console.log("você nao escolheu nehuma fonte!!!!")
    } else if(consumoNecessario <= totalDasFontes){
        console.log("Você está com a quantidade ideal de wats com base na fonte que escolheu")
    } else {
        console.log("Sua fonte está com uma baixa quantidade de wats para o tanto de led que vc vai comprar, opite para escolher uma fonte com a voltagem maior")
    }
}