class Typescript {
    version: string

    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

// class Car {
//     readonly model: string,
//     readonly numberOfWheels: number = 4,
//
//     constructor(theModel: string) {
//         // можем перезаписать только в конструкторе!!!
//         this.model = theModel;
//     }
// }

// или

class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {
    }
}

// модификаторы

// private доступны в том классе где определены
// protected - данные поля доступны в классе где описан + где extends
// public - по умолчанию


class Animal {
    protected voice: string = ''
    public color: string = 'black'
    private go() {
        console.log('go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
    }
}

const cat = new Cat();
cat.setVoice('test');

// абстрактные классы для того чтобы можно было наследоваться

abstract class Component {
    abstract render(): void
    abstract info(): void
}

class AppComponent extends Component {
    render(): void {
        console.log('onRender');
    }

    info(): void {
        console.log('This is info')
    }
}


type MyArray<T> = T[];
const arr: MyArray<string> = ['wertey', 'heoo'];

function echo<T> (x: T): T {
    return x;
};

// arrow function

const echoF = <T>(x: T): T => {
    return x;
}

const result: string = echo('Helllo world');



