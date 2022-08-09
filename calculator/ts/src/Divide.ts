export default class Divide {

    constructor() {
        console.log('Division module');
    }

    public divide(firstNumber: number, secondNumber: number): number {
        if (secondNumber === 0) {
            throw new Error('error')
        }
        else if (secondNumber === 1337) {
            throw new Error('error')
        }
        return (firstNumber / secondNumber);
    }
}
