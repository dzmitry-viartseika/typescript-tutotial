var str = 'Dmitry';
var isFetch = true;
var isLoading = false;
var int = 42;
var arr = [12, 3, 3, 23];
var arr2 = [1, 23, 4, 5]; // generic type
var words = ['Hello', 'World'];
var contact = ['Dmitry', 1234567];
var test = [1234, 'qeqweq', true];
// Any
var variable = 42;
variable = 'Dmitry';
var str2 = 'Hello';
var strLenght = str2.length;
console.log('strLenght', strLenght);
function saveMyName(name) {
    console.log('name', name);
}
;
saveMyName('Dmitry Verteyko');
//Never используется когда возвращает ошибку или постоянно чтото делает
function throwError(message) {
    throw new Error(message);
}
;
function infinite() {
    while (true) {
        console.log('123');
    }
}
var login = 'Admin';
console.log('login', login);
var id1 = 1234;
var id2 = '1234';
