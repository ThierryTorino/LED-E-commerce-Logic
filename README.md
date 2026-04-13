# 💡 Smart Lighting Cart Validator

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

Um mini-projeto prático em **TypeScript** focado em regras de negócio para um e-commerce de iluminação inteligente. O script atua como um middleware de validação para o carrinho de compras, garantindo que os clientes comprem produtos de iluminação (como fitas LED) com as fontes de alimentação compatíveis, evitando acidentes elétricos ou mau funcionamento.

---

## 🎯 O Problema que este código resolve

Comprar produtos de iluminação customizada pode ser confuso para o usuário final. É comum o cliente comprar uma fita de 12V com uma fonte de 24V (gerando curto-circuito) ou comprar uma fonte fraca demais para o comprimento da fita. 

Este validador analisa os itens do carrinho e retorna avisos de segurança antes do checkout.

---

## ✨ Funcionalidades e Regras de Negócio

* **Tipagem Estrita:** Uso de `interfaces` e `Union Types` (`Produto`) para definir o catálogo (Fitas LED, Lâmpadas, Fontes).
* **Prevenção de Curto-Circuito:** Compara a `tensão` (voltagem) da fita escolhida com a `tensaoSaida` da fonte.
* **Cálculo de Potência (Watts):** Calcula o consumo total da fita (Potência por metro $\times$ Comprimento) e adiciona **20% de margem de segurança**.
* **Validação de Amperagem:** Converte os dados da fonte em Watts ($W = V \times A$) para verificar se ela suporta a carga total exigida pelo carrinho.

---

## 💻 Estrutura do Código

O projeto é mantido em um único arquivo de forma enxuta, contendo:
- Tipos literais para segurança de string (ex: `tipo: "FitaLed"`, `bocal: "E27"`).
- A função principal `validarCarrinho(carrinho: Produto[])` que itera sobre o array de compras e processa as validações.

---

## 🚀 Como Executar Localmente

Como é um arquivo TypeScript puro, você precisará do Node.js e do TypeScript instalados.

**1. Clone o repositório ou baixe o arquivo:**
> git clone https://github.com/ThierryTorino/LED-E-commerce-Logic.git

**2. Execute usando `ts-node` (forma mais rápida):**
> npx ts-node nome-do-arquivo.ts

*Alternativamente, você pode compilar para JavaScript usando `tsc nome-do-arquivo.ts` e rodar com `node nome-do-arquivo.js`.*

---

## 📊 Exemplo de Uso (Testes)

Para testar o script, você pode adicionar o seguinte bloco ao final do seu código:

```typescript
const meuCarrinho: Produto[] = [
    { tipo: "FitaLed", tensao: 12, potenciaPorMetro: 14.4, comprimento: 5 },
    { tipo: "PowerSupply", amperagem: 10, tensaoSaida: 12 }
];

validarCarrinho(meuCarrinho);
// Saída esperada: "Você está com a quantidade ideal de wats com base na fonte que escolheu"
