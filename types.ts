let str: string = 'Dmitry';

let isFetch: boolean = true;
let isLoading: boolean = false;

const int: number = 42;

const arr: number[] = [12,3,3,23];
const arr2: Array<number> = [1,23,4,5]; // generic type
const words: string[] = ['Hello', 'World'];

const contact: [string,number] = ['Dmitry', 1234567];
const test: (string | number | boolean)[] = [1234, 'qeqweq', true];

// Any

let variable: any = 42;
variable = 'Dmitry';


function saveMyName(name: string): void {
    console.log('name', name);
};

saveMyName('Dmitry Verteyko');

//Never используется когда возвращает ошибку или постоянно чтото делает

function throwError(message: string): never {
    throw new Error(message)
};

function infinite(): never {
    while(true) {
        console.log('123');
    }
}

// Type можно создавать собственные типы
// удобства именнованных типов

type Login = string;

const login: Login = 'Admin';

console.log('login', login);

type ID = string | number;

const id1: ID = 1234;
const id2: ID = '1234';

type SomeType = string | null | undefined;

type J = 1 | 2 | 3;
type test = 'a' | true | 44;
