"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
//import prompt from "prompt-sync";
//const sync = prompt;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
// Functions
function getPokemon(name) {
    return __awaiter(this, void 0, void 0, function () {
        var response, pokemonData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, fetch("https://pokeapi.co/api/v2/pokemon/".concat(name))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    pokemonData = _a.sent();
                    return [2 /*return*/, {
                            name: pokemonData.name,
                            types: pokemonData.types.map(function (type) { return type.type.name; }),
                            hp: pokemonData.stats[0].base_stat,
                        }];
                case 3: return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/, null];
            }
        });
    });
}
function getPokemonType(typeName) {
    return __awaiter(this, void 0, void 0, function () {
        var response, pokemonData, pokemon, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, fetch("https://pokeapi.co/api/v2/type/".concat(typeName))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    pokemonData = _a.sent();
                    if (pokemonData.pokemon.length > 0) {
                        pokemon = pokemonData.pokemon[0].pokemon;
                        return [2 /*return*/, {
                                name: pokemon.name,
                                types: pokemon.types.map(function (type) { return type.type.name; }),
                                hp: pokemon.stats[0].base_stat,
                            }];
                    }
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/, null];
            }
        });
    });
}
function battle() {
    return __awaiter(this, void 0, void 0, function () {
        var pokeMo, pokemon, pokemon1Name, pokemon2Name, pokemon1, pokemon2, battlePokemon1, battlePokemon2, attack1, attack2, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 3];
                    console.log("▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒");
                    console.log("▒                                    ▒");
                    console.log("▒     Pokémon Battle Simulator       ▒");
                    console.log("▒                                    ▒");
                    console.log("▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒");
                    pokeMo = prompt("test");
                    return [4 /*yield*/, getPokemon(pokeMo)];
                case 1:
                    pokemon = _a.sent();
                    if (!pokemon) {
                        console.log("Pokémon not found!");
                        return [3 /*break*/, 0];
                    }
                    pokemon1Name = pokeMo;
                    pokemon2Name = sync("Enter the name of the second Pokémon: ");
                    pokemon1 = pokemon;
                    return [4 /*yield*/, getPokemon(pokemon2Name)];
                case 2:
                    pokemon2 = _a.sent();
                    if (!pokemon2) {
                        console.log("One or both Pokémon not found!");
                        return [3 /*break*/, 0];
                    }
                    battlePokemon1 = __assign(__assign({}, pokemon1), { power: 10, currentHp: pokemon1.hp });
                    battlePokemon2 = __assign(__assign({}, pokemon2), { power: 10, currentHp: pokemon2.hp });
                    console.log("Battle between ".concat(pokemon1Name, " and ").concat(pokemon2Name, "!"));
                    while (battlePokemon1.currentHp > 0 && battlePokemon2.currentHp > 0) {
                        attack1 = Math.floor(Math.random() * 10) + 1;
                        attack2 = Math.floor(Math.random() * 10) + 1;
                        battlePokemon2.currentHp -= attack1;
                        console.log("".concat(pokemon1Name, " attacks ").concat(pokemon2Name, " for ").concat(attack1, " damage!"));
                        if (battlePokemon2.currentHp > 0) {
                            battlePokemon1.currentHp -= attack2;
                            console.log("".concat(pokemon2Name, " attacks ").concat(pokemon1Name, " for ").concat(attack2, " damage!"));
                        }
                    }
                    if (battlePokemon1.currentHp > 0) {
                        console.log("▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒");
                        console.log("▒                                    ▒");
                        console.log("           ".concat(pokemon1Name, " wins!      "));
                        console.log("▒                                    ▒");
                        console.log("▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒");
                    }
                    else {
                        console.log("▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒");
                        console.log("▒                                    ▒");
                        console.log("            ".concat(pokemon2Name, " wins!     "));
                        console.log("▒                                    ▒");
                        console.log("▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒");
                    }
                    response = sync("Do you want to battle again? (y/n) ");
                    if (response.toLowerCase() !== 'y') {
                        return [3 /*break*/, 3];
                    }
                    return [3 /*break*/, 0];
                case 3: return [2 /*return*/];
            }
        });
    });
}
battle();
