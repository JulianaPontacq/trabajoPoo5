interface IAnimal {
    emitirSonido(): void;
    moverse(): void;
}

abstract class Animal implements IAnimal {
    constructor(protected name: string) {}

    moverse(): void {
        console.log(`${this.name} se mueve.`);
    }

    abstract emitirSonido(): void;
    abstract tipoDeDieta(): void;
}

class Perro extends Animal {
    emitirSonido(): void {
        console.log("¡Guau, guau!"); 
    }

    tipoDeDieta(): void {
        console.log("El perro es omnívoro.");
    }
}

class Gato extends Animal {
    emitirSonido(): void {
        console.log("¡Miau, miau!"); 
    }

    tipoDeDieta(): void {
        console.log("El gato es carnívoro.");
    }
}

const perro = new Perro("Pipo");
const gato = new Gato("Lolo");

perro.emitirSonido();
perro.moverse();
perro.tipoDeDieta();

gato.emitirSonido();
gato.moverse();
gato.tipoDeDieta();
