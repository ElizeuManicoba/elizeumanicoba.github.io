---
title: 'Correlação −1: o que ela realmente significa na diversificação'
date: 2026-10-13
type: blog
summary: 'Dois ativos com correlação −1 não precisam ter retornos de sinais opostos e nem sempre zeram o risco da carteira. Entenda o que a diversificação de fato aproveita.'
authors: [me]
tags: [Ensino, Investimentos, Diversificação]
categories: [Ensino]
draft: false
image:
  alt_text: 'Telas de cotações de índices de ações com gráficos em vermelho e verde'
  preview_only: true
---

Dois ativos com correlação −1 não precisam ter retornos de sinais opostos, e nem sempre eliminam o risco da carteira. O que eles têm de oposto são os desvios em relação à própria média, e é isso que a diversificação aproveita.

{{< figure src="featured.jpg" alt="Telas de cotações de índices de ações com gráficos em vermelho e verde" caption="Imagem ilustrativa." >}}

Neste texto, com números simples e dados do livro *Asset Allocation*, de Roger Gibson, você vai ver:

- o que a correlação mede de verdade, e o que ela não mede;
- por que dois ativos podem ganhar dinheiro em todos os períodos e ainda assim ter correlação −1;
- por que a correlação −1, sozinha, não zera o risco: o tamanho das oscilações e os pesos da carteira também contam;
- por que risco zero não é o mesmo que bom resultado;
- o que sobra dessa teoria no mundo real, onde a correlação perfeita não existe.

Vamos começar por um resultado que parece mágica. No exemplo de Gibson, dois investimentos rendem 10% ao ano em média, mas oscilam entre +40% e −20%. Sozinhos, cada um acumula só 5,83% ao ano. Combinados em partes iguais, rendem 10% ao ano, todos os anos, sem oscilar.

## O exemplo de Gibson: dois ativos instáveis, uma carteira estável

Quando dois ativos têm a mesma volatilidade e se movem em sentidos opostos de forma perfeita, a oscilação de um compensa a do outro, e a carteira 50/50 rende a média dos dois, sem sustos. Gibson (2008) mostra isso com dois ativos hipotéticos, C e D.

O ativo C rende +40% em um ano e −20% no seguinte, e repete o ciclo. O ativo D faz o contrário: cai 20% quando C sobe 40%, e sobe 40% quando C cai 20%. A carteira investe metade em cada um e volta a 50/50 todo ano.

Dois termos aparecem na tabela. *Volatilidade* é o tamanho das oscilações dos retornos, medido pelo desvio padrão. *Retorno composto* é a taxa anual constante que reproduz o crescimento real do dinheiro.

**Tabela 1 – Retorno médio, volatilidade e retorno composto dos ativos C e D e da carteira 50/50**

| Investimento | Retorno médio ao ano | Volatilidade (desvio padrão) | Retorno composto ao ano |
| --- | --- | --- | --- |
| Ativo C (+40% / −20%) | 10% | 31,62% | 5,83% |
| Ativo D (−20% / +40%) | 10% | 31,62% | 5,83% |
| Carteira 50/50 | 10% | 0% | 10% |

<small>Fonte: Gibson (2008), Exhibit 7.2, p. 131.</small>

Repare na distância entre os 10% de retorno médio e os 5,83% de retorno composto de cada ativo. Se R&#36;&nbsp;1,00 sobe 40%, vira R&#36;&nbsp;1,40; se depois cai 20%, vira R&#36;&nbsp;1,12. Em dois anos o ganho foi de 12%, e não de 21%, que seria o resultado de 10% duas vezes seguidas. Gibson resume assim: a volatilidade prejudica a capitalização dos retornos (Gibson, 2008, p. 128).

A carteira não sofre esse desgaste, porque rende 10% todo ano. Em dez anos, R&#36;&nbsp;1,00 vira R&#36;&nbsp;2,59, contra R&#36;&nbsp;1,76 em C ou em D sozinhos. Nesse caso, a diversificação não só reduziu o risco: ela aumentou o retorno que o investidor de fato recebe.

**Figura 1 – Crescimento de R&#36;&nbsp;1,00 investido nos ativos C e D e na carteira 50/50, em dez anos**

{{< figure src="grafico-crescimento.png" alt="Gráfico de linhas: o valor de R$ 1,00 investido oscila em zigue-zague nos ativos C e D e sobe de forma contínua na carteira 50/50, chegando a R$ 2,59 no ano 10, contra R$ 1,76 nos dois ativos." caption="Fonte: elaboração própria, a partir dos retornos anuais de Gibson (2008), Exhibit 7.2, p. 131." >}}

C e D só se encontram nos anos pares, e sempre abaixo da carteira. A partir do oitavo ano, a carteira fica à frente de ambos de forma permanente (Gibson, 2008, p. 130).

## Correlação mede desvios da própria média, não o sinal do retorno

A correlação não pergunta se o retorno foi positivo ou negativo. Ela pergunta se cada ativo ficou acima ou abaixo do seu próprio normal, e na mesma proporção.

Pense em um vendedor de sorvete e em um de guarda-chuva. Cada um tem o seu faturamento normal. Em semana de sol, o sorvete vende acima do normal e o guarda-chuva, abaixo. Os dois podem ter lucro na semana e, ainda assim, se mover em espelho.

A correlação vai de −1 a +1. Em +1, os desvios têm sempre o mesmo sentido; em −1, são sempre opostos; perto de zero, um ativo não informa nada sobre o outro. Tecnicamente, é a covariância dividida pelo produto dos desvios padrão (Gibson, 2008, p. 134).

O exemplo a seguir é hipotético e tem correlação −1. Repare que A e B ganham dinheiro em todos os anos. O desvio é o retorno do ano menos a média do próprio ativo, em pontos percentuais (p.p.).

**Tabela 2 – Exemplo hipotético com correlação −1: retornos, desvios e carteira 50/50**

| Ano | Retorno de A | Retorno de B | Desvio de A (média 7%) | Desvio de B (média 6%) | Carteira 50/50 |
| --- | --- | --- | --- | --- | --- |
| 1 | 9% | 4% | +2 p.p. | −2 p.p. | 6,5% |
| 2 | 3% | 10% | −4 p.p. | +4 p.p. | 6,5% |
| 3 | 6% | 7% | −1 p.p. | +1 p.p. | 6,5% |
| 4 | 12% | 1% | +5 p.p. | −5 p.p. | 6,5% |
| 5 | 5% | 8% | −2 p.p. | +2 p.p. | 6,5% |

<small>Fonte: exemplo hipotético elaborado para este texto.</small>

No ano 1, A rende 9% e B rende 4%: os dois ganham. Só que A ficou 2 p.p. acima da sua média (7%), enquanto B ficou 2 p.p. abaixo da sua (6%). Nos cinco anos, o desvio de B é exatamente o de A com o sinal trocado.

Os estatísticos medem esse desvio em unidades de volatilidade, o chamado *Z-score*. No ano 1, o Z-score de A é +0,57 e o de B é −0,57. Com correlação −1, o Z-score de B é sempre o de A com o sinal trocado.

Por isso a carteira 50/50 rende 6,5% todo ano: a soma dos dois retornos é sempre 13%. Quando um ativo passa da sua média, o outro fica aquém da dele na mesma medida.

Correlação −1 não exige retornos de sinais opostos. Exige uma relação em linha reta e decrescente entre os desvios dos dois ativos.

**Figura 2 – Retornos anuais de A e de B (Tabela 2): correlação −1,00, com todos os pontos sobre a reta B = 13 − A**

{{< figure src="grafico-dispersao.png" alt="Gráfico de dispersão com cinco pontos alinhados sobre uma reta decrescente. As linhas tracejadas marcam as médias de A (7%) e de B (6%). Todos os pontos ficam nos quadrantes em que um ativo está acima da média e o outro, abaixo." caption="Fonte: exemplo hipotético elaborado para este texto." >}}

Com correlação +1, os pontos formariam uma reta crescente e cairiam nos outros dois quadrantes: os dois ativos acima da média juntos, ou abaixo dela juntos.

## A correlação dá a direção; a volatilidade dá o tamanho

Com correlação −1, o risco da carteira só zera se os pesos compensarem a diferença de volatilidade entre os ativos.

No exemplo anterior, A e B tinham a mesma volatilidade, e o 50/50 bastou. E se um ativo oscilar o dobro do outro? A Tabela 3 mostra um caso com correlação −1 em que a volatilidade de B é metade da de A.

**Tabela 3 – Exemplo hipotético com correlação −1 e volatilidades diferentes**

| Ano | Retorno de A | Retorno de B | Carteira 50/50 | Carteira 1/3 A + 2/3 B |
| --- | --- | --- | --- | --- |
| 1 | 20% | 2% | 11% | 8% |
| 2 | 4% | 10% | 7% | 8% |
| 3 | 16% | 4% | 10% | 8% |
| 4 | 8% | 8% | 8% | 8% |
| **Retorno médio** | 12% | 6% | 9% | 8% |
| **Volatilidade** | 7,30 p.p. | 3,65 p.p. | 1,83 p.p. | 0 |

<small>Fonte: exemplo hipotético elaborado para este texto. Volatilidade = desvio padrão amostral (n − 1).</small>

A correlação é −1, mas o 50/50 ainda oscila 1,83 p.p. O espelho existe, só que A se mexe o dobro de B. Para compensar, A precisa entrar com metade do peso de B: 1/3 contra 2/3.

Pense em uma gangorra, que equilibra quando peso × distância é igual dos dois lados. Na carteira, o equilíbrio vem quando peso × volatilidade é igual nos dois ativos: 1/3 × 7,30 = 2/3 × 3,65 = 2,43. O ativo mais agitado sempre recebe o menor peso.

A regra geral, para dois ativos com correlação −1, é: **peso de A = volatilidade de B ÷ (volatilidade de A + volatilidade de B)**.

**Tabela 4 – Pesos que zeram o risco, conforme a volatilidade de B em relação à de A**

| Volatilidade de B em relação à de A | Peso em A | Peso em B |
| --- | --- | --- |
| Metade | 33,3% | 66,7% |
| Igual | 50% | 50% |
| O dobro | 66,7% | 33,3% |

Gibson (2008, p. 145–146) faz a mesma conta no apêndice, com um ativo de 18% de volatilidade e outro de 10%. Com correlação −1, cerca de 64% no ativo de 10% zera o risco, com retorno esperado de 8,7%.

## Risco zero não é o mesmo que bom resultado

Zerar a volatilidade não garante retorno bom: a carteira rende sempre a média ponderada dos retornos dos ativos, seja ela positiva ou negativa (Gibson, 2008, p. 134).

O exemplo da Tabela 5 tem correlação −1, volatilidade zero e prejuízo certo.

**Tabela 5 – Exemplo hipotético com correlação −1, risco zero e prejuízo certo**

| Ano | Retorno de A | Retorno de B | Carteira 50/50 |
| --- | --- | --- | --- |
| 1 | −2% | −6% | −4% |
| 2 | −6% | −2% | −4% |
| 3 | −3% | −5% | −4% |
| 4 | −5% | −3% | −4% |

<small>Fonte: exemplo hipotético elaborado para este texto.</small>

A carteira perde exatamente 4% ao ano, sem nenhuma surpresa. A diversificação eliminou a oscilação, mas não criou retorno: ele continua vindo dos ativos.

Zerar o risco também pode custar retorno. Na Tabela 3, o 50/50 teve retorno médio de 9% e a carteira de risco zero, 8%. A Tabela 6 mostra o que cada escolha entrega.

**Tabela 6 – Carteira 50/50 e carteira de risco zero, lado a lado (exemplo da Tabela 3)**

| Carteira | Retorno médio ao ano | Retorno composto ao ano | Volatilidade |
| --- | --- | --- | --- |
| 50/50 | 9% | 8,99% | 1,83 p.p. |
| 1/3 A + 2/3 B | 8% | 8,00% | 0 |

<small>Fonte: exemplo hipotético elaborado para este texto.</small>

O investidor trocou 1 ponto percentual de retorno por risco zero. A troca entre risco e retorno não desaparece: para ganhar mais retorno, é preciso aceitar mais volatilidade (Gibson, 2008, p. 140).

## No mundo real, a correlação perfeita não existe

Correlação −1 é um caso-limite: serve para entender o mecanismo, mas não aparece nos mercados. Gibson (2008, p. 130) observa que investimentos perfeitamente negativos não existem na prática e que, se existissem, ninguém compraria um título sem risco rendendo 4%.

Com dados de 1926 a 2005, as ações de grandes empresas dos EUA renderam 12,3% ao ano em média, com volatilidade de 20,2%. Os títulos corporativos de longo prazo renderam 6,2%, com volatilidade de 8,5%. A correlação entre os dois foi de +0,19 (Gibson, 2008, p. 135).

A Figura 3 mostra a volatilidade da carteira conforme a fatia em ações, para três correlações: +1 (nenhuma diversificação), +0,19 (o dado real) e −1 (o caso-limite).

**Figura 3 – Volatilidade de uma carteira de ações e títulos, conforme a parcela em ações e a correlação**

{{< figure src="grafico-volatilidade.png" alt="Gráfico de linhas com a volatilidade da carteira em função da parcela em ações, para três correlações. Com correlação +1, a volatilidade sobe em linha reta de 8,5% a 20,2%. Com +0,19, a curva desce um pouco abaixo de 8,5% perto de 10% em ações e depois sobe. Com −1, forma um V que toca zero em cerca de 29,6% em ações." caption="Fonte: curvas calculadas com a fórmula da variância de dois ativos, a partir dos dados de Gibson (2008), p. 135. Ponto marcado: valor publicado por Gibson (2008), p. 136." >}}

Com +0,19, a curva fica abaixo da reta e o ponto mais baixo não é 100% em títulos. Segundo Gibson (2008, p. 136), a carteira de menor volatilidade tem 90,2% em títulos e 9,8% em ações. Sua volatilidade é de 8,3%, contra 8,5% só em títulos, e o retorno esperado é de 6,8%, mais de meio ponto acima.

Há outro uso do mesmo efeito: manter a volatilidade dos títulos e ganhar retorno. Com 19,2% em ações, a volatilidade continua em 8,5% e o retorno esperado sobe para 7,4%, 1,2 ponto acima do retorno dos títulos (Gibson, 2008, p. 136).

> **Nota de verificação.** Recalculando com os dados arredondados do livro, a carteira de menor volatilidade tem cerca de 9,5% em ações, e não 9,8%. A diferença vem do arredondamento das entradas, e os valores de volatilidade (8,3%) e retorno (6,8%) coincidem com os publicados.

Se a correlação fosse −1, 29,6% em ações e 70,4% em títulos zerariam o risco, com retorno de 8,0%. Essa carteira não existe, e é por isso que a diversificação real é parcial.

A correlação também muda com o tempo. Em janelas móveis de cinco anos, ela variou de +0,62 a −0,28, e a diversificação é mais forte nos períodos de correlação negativa (Gibson, 2008, p. 138).

## O que levar para casa

- **Correlação −1 significa desvios opostos** em relação à média de cada ativo, e não retornos de sinais opostos. Dois ativos podem ganhar em todos os períodos e ter correlação −1.
- **A correlação dá a direção; a volatilidade dá o tamanho.** Para zerar o risco, o peso de cada ativo deve ser inverso à sua volatilidade.
- **Risco zero não é o mesmo que bom resultado:** a carteira rende a média ponderada dos ativos, e zerar o risco pode custar retorno.
- **No mundo real, a correlação perfeita não existe.** Entre ações e títulos ela foi de +0,19, e a redução de risco é parcial, mas útil.
- **Diversificar é mais do que não pôr todos os ovos na mesma cesta:** o que conta é como os ativos se comportam entre si (Gibson, 2008, p. 127).

## Para quem quer ir além: a matemática

{{< figure src="ilustracao-matematica.jpg" alt="Gráfico em dente de serra com amplitude decrescente em uma página de livro, fotografado de perto" caption="Imagem ilustrativa." >}}

A variância de uma carteira de dois ativos depende dos pesos, das volatilidades e da correlação:

$$\sigma_p^2 = w_A^2\sigma_A^2 + w_B^2\sigma_B^2 + 2\,w_A w_B\,\rho\,\sigma_A\sigma_B$$

Aqui, \(\sigma_p\) é a volatilidade da carteira, \(w_A\) e \(w_B\) são os pesos, \(\sigma_A\) e \(\sigma_B\) são as volatilidades dos ativos e \(\rho\) é a correlação. Com \(\rho = +1\), o resultado é \((w_A\sigma_A + w_B\sigma_B)^2\), a média ponderada das volatilidades: nenhuma diversificação. Com \(\rho = -1\), a expressão vira um quadrado perfeito:

$$\sigma_p = \left| w_A\sigma_A - w_B\sigma_B \right|$$

Isso zera quando \(w_A\sigma_A = w_B\sigma_B\). Como \(w_A + w_B = 1\), o peso que zera o risco é:

$$w_A = \frac{\sigma_B}{\sigma_A + \sigma_B}$$

Na Tabela 3, em que A oscila o dobro de B: \(w_A = 3{,}65 \div (7{,}30 + 3{,}65) = 1/3\).

Correlação −1 equivale a uma relação exata \(B = a - k \times A\), com \(k = \sigma_B \div \sigma_A\). Na Tabela 2 (A e B com a mesma volatilidade), \(B = 13 - A\) e \(k = 1\). Na Tabela 3 (A oscila o dobro de B), \(B = 12 - 0{,}5 \times A\) e \(k = 0{,}5\).

O Z-score é \(Z = (\text{retorno} - \text{média}) \div \text{volatilidade}\). Dizer que a correlação é −1 equivale a dizer que \(Z_B = -Z_A\) em todos os períodos.

Os desvios padrão deste texto são amostrais, com denominador \(n - 1\), como no exemplo de Gibson. Com denominador \(n\), o desvio de 31,62% do exemplo de Gibson seria 30,00%, e o Z-score de A no ano 1 da Tabela 2 passaria de +0,57 para +0,63. A correlação e os pesos de risco mínimo não mudam.

A correlação mede apenas relações lineares, é estimada com dados do passado e muda com o tempo. Por isso, é um ponto de partida para construir carteiras, e não uma garantia. Essa estrutura de retorno esperado, volatilidade e correlação é a base da análise média-variância, proposta por Markowitz (1952).

## Referências

- Gibson, R. C. (2008). *Asset allocation: balancing financial risk* (4. ed.). McGraw-Hill. Capítulo 7, "Diversification: The Third Dimension", p. 127–155. Origem do exemplo dos ativos C e D (Exhibit 7.2), dos dados de ações e títulos (p. 135–138) e do exemplo do apêndice (p. 145–146).
- Markowitz, H. (1952). Portfolio selection. *The Journal of Finance*, *7*(1), 77–91. Referência de base da análise média-variância; nenhum número deste texto vem dele.

**Sobre os números.** Os exemplos com os ativos A e B são hipotéticos e foram elaborados para este texto. Todos os números, inclusive os do exemplo de Gibson, foram recalculados em Python com desvio padrão amostral. As curvas da Figura 3 usam a fórmula da variância de uma carteira de dois ativos e os dados de Gibson (2008, p. 135).

*Conteúdo educacional. Os exemplos são hipotéticos e não constituem recomendação de investimento. Rentabilidade passada não garante resultado futuro.*

{{< veja-tambem area="Ensino" titulo="Por que a média não basta para entender os dados" url="/blog/media-nao-basta/" texto="O mesmo cuidado vale aqui: o retorno médio sozinho esconde a oscilação, e é a volatilidade que mostra o tamanho do risco." >}}
