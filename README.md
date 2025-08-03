# Jornada Espacial de Zogg 🚀



Uma aplicação interativa para calcular o combustível necessário para as viagens intergalácticas de Zogg, o explorador alienígena.

## 📋 Descrição

Este projeto ajuda Zogg a calcular a quantidade de combustível necessária para suas viagens entre planetas, considerando:
- Distância em anos-luz
- Força gravitacional do planeta de destino

**Fórmula do combustível**:  
`combustível = distância * (gravidade + 1)`

## ✨ Funcionalidades

- ✅ Adicionar múltiplas viagens com destino, distância e gravidade
- ✅ Cálculo automático do combustível total
- ✅ Visualização detalhada dos cálculos
- ✅ Interface moderna com tema espacial
- ✅ Design responsivo para todos os dispositivos
- ✅ Animações especiais nos botões

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (com animações e efeitos especiais)
- JavaScript

## 🚀 Como Usar

1. Preencha os campos:
   - **Destino**: Nome do planeta
   - **Distância**: Em anos-luz (número inteiro)
   - **Gravidade**: Força gravitacional (número decimal)

2. Clique em **ADICIONAR** para incluir a viagem

3. Repita para adicionar todas as viagens necessárias

4. Clique em **CALCULAR** para ver o combustível total necessário

5. Use **LIMPAR** para reiniciar os cálculos

## 📊 Exemplo de Cálculo

Para a entrada:
[
{ "destino": "Nebulosa A", "distancia": 2, "gravidade": 1.2 },
{ "destino": "Planeta X", "distancia": 4, "gravidade": 0.8 },
{ "destino": "Estrela Y", "distancia": 5, "gravidade": 1.5 }
]

text

O cálculo será:
Nebulosa A: 2 * (1.2 + 1) = 4.4
Planeta X: 4 * (0.8 + 1) = 7.2
Estrela Y: 5 * (1.5 + 1) = 12.5
Total: 4.4 + 7.2 + 12.5 = 24.1

text

**Saída correta**: 24.1

## 🌌 Personalização

Para alterar o tema:
1. Substitua a imagem de fundo em `styles.css` (linha 14)
2. Ajuste as cores neon no CSS (busque por `#03e9f4`)

## 📱 Responsividade

A aplicação foi projetada para funcionar em:
- Desktop (layout horizontal)
- Mobile (layout vertical)

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

---

Desenvolvido com 💙 para a jornada intergaláctica de Zogg!
