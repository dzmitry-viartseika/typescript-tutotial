interface Person {
    name: string,
    age: number,
};

type PersonKeys = keyof Person // PersonKeys // name | age

let key: PersonKeys = 'name';
key = 'age';

type User = {
    _id: number,
    name: string,
    email: string,
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // name email остальные поля исключены
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // забирает поля мейл и нейм


// ?? если null or undefined

let a: number | undefined | null;
let b: number = a ?? 100