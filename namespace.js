var Utils;
(function (Utils) {
    function log(text, color, fontSize) {
        if (fontSize) {
            console.log("%c" + text, "color: " + color + ", font-size: " + fontSize + "px");
        }
        console.log("%c" + text, "color: " + color);
    }
    Utils.log = log;
})(Utils || (Utils = {}));
Utils.log('wertey', '#55555', 20);
