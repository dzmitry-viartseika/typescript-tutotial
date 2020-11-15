// нужны только на этапе разработки
// ? - не обязательно добавлять
// readonly - только чтение
//  название интерфейсов начинается с IName
// implements для применения интерфейса к классу
// наобъектная сущность
var rect = {
    id: '1234',
    size: {
        width: 100,
        height: 100
    }
};
console.log('rect', rect);
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: '123',
    size: {
        width: 100,
        height: 100
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid red',
    marginTop: '2px',
    borderRadius: '5px'
};
var Dmitry = {
    name: 'Dmitry',
    age: 30,
    nickName: 'Wertey'
};
console.log('Dmitry', Dmitry);
var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());
console.log('Test', Test);
