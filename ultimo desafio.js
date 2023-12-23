class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = "";
  
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou um ataque desconhecido";
      }
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  let mago = new Heroi("Gendalf", 100, "mago");
  let guerreiro = new Heroi("Aragorn", 35, "guerreiro");
  
  mago.atacar(); // Saída: O mago Gendalf atacou usando magia
  guerreiro.atacar(); // Saída: O guerreiro Aragorn atacou usando espada 