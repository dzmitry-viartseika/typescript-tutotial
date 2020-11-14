const arrayOfNumbers: Array<number> = [1,2,3,32,32131];
const arrayOfStrings: Array<string> = ['Hello', 'Dmitry'];

// подстраивается под контент

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}