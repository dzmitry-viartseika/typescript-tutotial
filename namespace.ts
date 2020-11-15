// сущность как объект, но обращаться можно если за export

namespace Utils {
    export function log(text: string, color: string, fontSize?: number) {
        if (fontSize) {
            console.log(`%c${text}`, `color: ${color}, font-size: ${fontSize}px`)
        }
        console.log(`%c${text}`, `color: ${color}`)
    }
}

Utils.log('wertey', '#55555', 20);

// import в другой файл

/// <reference path="Utils.ts" />

// но лучше использовать @import es6