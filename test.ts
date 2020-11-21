// let a: number = 1;
let b: string = 'Hello';
let c: number[] = [1,2];

const obj: {a: number, b: number  } = {
        a: 100,
        b: 100
    }
type Cat = {
    name: string,
    purrs: boolean
}

type Dog = {
    name: string,
    barks: boolean,
    wags: boolean
}

type CatAndDog = Cat & Dog;
type CatOrDogOrBorth = Cat | Dog;

const bb: CatOrDogOrBorth = {
    name: 'Wertey',
    barks: true,
    purrs: true,
    wags: true
};

console.log('bb', bb);

