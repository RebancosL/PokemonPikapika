import prompt from "prompt-sync";
const sync = prompt();

// Interfaces
interface Pokemon {
  name: string;
  types: string[];
  hp: number;
}

interface BattlePokemon extends Pokemon {
  power: number;
  currentHp: number;
}

// Functions
async function getPokemon(name: string): Promise<Pokemon | null> {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (response.ok) {
      const pokemonData = await response.json();
      return {
        name: pokemonData.name,
        types: pokemonData.types.map((type: { type: { name: string } }) => type.type.name),
        hp: pokemonData.stats[0].base_stat,
      };
    }
  } catch (error) {
    console.error(error);
  }
  return null;
}

async function getPokemonType(typeName: string): Promise<Pokemon | null> {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`);
    if (response.ok) {
      const pokemonData = await response.json();
      if (pokemonData.pokemon.length > 0) {
        const pokemon = pokemonData.pokemon[0].pokemon;
        return {
          name: pokemon.name,
          types: pokemon.types.map((type: { type: { name: string } }) => type.type.name),
          hp: pokemon.stats[0].base_stat,
        };
      }
    }
  } catch (error) {
    console.error(error);
  }
  return null;
}

async function battle() {
  while (true) {
    console.log("▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒");
    console.log("▒                                    ▒");
    console.log("▒     Pokémon Battle Simulator       ▒");
    console.log("▒                                    ▒");
    console.log("▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒");

     let pokeMo = sync("Who will be your pokemon? ");
        // pokeMo = sync("test") as string;
    const pokemon = await getPokemon(pokeMo);

    if (!pokemon) {
      console.log("Pokémon not found!");
      continue;
    }

    const pokemon1Name = pokeMo;
    const pokemon2Name = sync("Enter the name of the second Pokémon: ");

    const pokemon1 = pokemon;
    const pokemon2 = await getPokemon(pokemon2Name);

    if (!pokemon2) {
      console.log("One or both Pokémon not found!");
      continue;
    }

    const battlePokemon1: BattlePokemon = { ...pokemon1, power: 10, currentHp: pokemon1.hp };
    const battlePokemon2: BattlePokemon = { ...pokemon2, power: 10, currentHp: pokemon2.hp };

    console.log(`Battle between ${pokemon1Name} and ${pokemon2Name}!`);

    while (battlePokemon1.currentHp > 0 && battlePokemon2.currentHp > 0) {
      const attack1 = Math.floor(Math.random() * 10) + 1;
      const attack2 = Math.floor(Math.random() * 10) + 1;

      battlePokemon2.currentHp -= attack1;
      console.log(`${pokemon1Name} attacks ${pokemon2Name} for ${attack1} damage!`);

      if (battlePokemon2.currentHp > 0) {
        battlePokemon1.currentHp -= attack2;
        console.log(`${pokemon2Name} attacks ${pokemon1Name} for ${attack2} damage!`);
      }
    }

    if (battlePokemon1.currentHp > 0) {
        console.log("▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒");
        console.log("▒                                    ▒");
        console.log(`           ${pokemon1Name} wins!      `);
        console.log("▒                                    ▒");
        console.log("▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒");
    } else {
        console.log("▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒");
        console.log("▒                                    ▒");
        console.log(`            ${pokemon2Name} wins!     `);
        console.log("▒                                    ▒");
        console.log("▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒");
    }

    const response = sync("Do you want to battle again? (y/n) ");
    if (response.toLowerCase() !== 'y') {
      break;
    }
  }
}

battle();