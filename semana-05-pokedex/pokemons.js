const db = require('./database');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons);

let menu = () => {
  rl.question('O que você gostaria de fazer com seus pokemons? \n 1. Registrar \n 2. Treinar \n 3. Sair da Pokedex \n', instruction => {
    if (instruction == 'Registrar' || instruction == 'registrar' || instruction == 1) {
      rl.question('\n Qual o nome do pokemon? \n', namePokemon => {
        rl.question('\n Qual o nível do pokemon? \n', levelPokemon => {
          rl.question('\n Qual o tipo do pokemon? \n', typePokemon => {

            const registerPokemon = (name, level, type) => {
              const pokemon = {
                id: db.pokemons.length + 1,
                name: name,
                level: parseInt(level),
                type: type.split(', ')
              };
              return db.pokemons.push(pokemon);
            };

            registerPokemon(namePokemon, levelPokemon, typePokemon);
            console.log(`\n ${namePokemon} foi registrado com sucesso :D \n`);
            console.table(db.pokemons);
            rl.close();
          });
        });
      }); 
    } else if (instruction == 'Treinar' || instruction == 'treinar' || instruction == 2) {
      let question = () => {
        rl.question('Qual o ID do pokemon? \n', idPokemon => {
          const pokemonInTraining = db.pokemons.find((pokemon) => pokemon.id == idPokemon);
          if (!db.pokemons.find((pokemon) => pokemon.id == idPokemon)) {
            console.log('Pokemon não encontrado! Tente novamente.');
            question();          
          };
          
          rl.question('Quantos níveis quer adicionar? \n', levelsPokemon => {
            const trainPokemon = (id, levels) => {                      
              const newLevel = pokemonInTraining.level + parseInt(levels);
              newLevel > 100 ? pokemonInTraining.level = 100 : pokemonInTraining.level = newLevel;
            }
            trainPokemon(idPokemon, levelsPokemon);
            console.log(`\n ${pokemonInTraining.name} subiu de nível :D \n`);
            const highestLevel = db.pokemons.sort( (a, b) => b.level - a.level);
            console.table(highestLevel);
            rl.close();        
        });
      }); 
    };
    question();
    } else if (instruction == 'Sair' || instruction == 'sair' || instruction == 3) {
      console.log('Até mais!');
      rl.close();    
    } else {
      console.log('\n Instrução inválida. Escolha Registrar ou Treinar. \n');
      menu();
    }; 
  });
};
menu(); 