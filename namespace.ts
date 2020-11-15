namespace Utils {
    export function log(text: string, color: string, fontSize?: number) {
        if (fontSize) {
            console.log(`%c${text}`, `color: ${color}, font-size: ${fontSize}px`)
        }
        console.log(`%c${text}`, `color: ${color}`)
    }
}

Utils.log('wertey', '#55555', 20);