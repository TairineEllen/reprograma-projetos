# Projeto JavaScript - Pokedex

## Pokedex

O primeiro projeto guiado consistiu em construir uma Pokedex, um tipo de "base de dados" responsável por guardar as informações dos pokemons. Para isso, temos as opções de registrar e treinar pokemons.

Ao rodar o programinha, obtemos uma tabela contendo os pokemons existentes na base e um menu com três opções: 
1. Registrar
2. Treinar
3. Sair

Caso o usuário não digite uma dessas opções, o programa retorna um erro.


### Registrar pokemons

Ao escolher a primeira opção, o programa vai:

- Receber via terminal as entradas de um pokemon encontrado a ser adicionado;
- Perguntar o nivel do pokemon e receber um inteiro;
- Perguntar o nome do pokemon e receber uma string;
- Perguntar o tipo do pokemon e receber um array de strings;
- Apresentar no console a tabela contendo os pokemons existentes e o pokemon recém adicionado.

### Treinar pokémons

Ao escolher a segunda opção, o programa vai:

- Perguntar o ID do pokemon a ser treinado;
- Se não for encontrado, mostrar uma mensagem de erro: "Pokemon não encontrado", e perguntar de novo;
- Se for encontrado, perguntar a quantidade de níveis que será adicionado ao Pokémon;
- Apresentar no console a tabela contendo os pokemons existentes e o pokemon recém treinado, ordenados do maior nível para o menor.

## Observação

O nível máximo de um pokemon é 100. Ou seja, se um pokemon tem nível 99 e você quer adicionar mais 20 níveis de treinamento, então esse pokemon terá um nível 100, e os outros 19 níveis serão ignorados. 
