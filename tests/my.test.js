// Importera stackmodulen 
const stack = require('../src/stack');

describe('Egna tester för stack', () => {
    // Återställ stack före varje test
    beforeEach(() => {
        // töm stack helt
        while(stack.pop() !== undefined) {}
        
    });

    test('peek ändrar ej stackens storlek', () => {
        stack.push(1);
        stack.push(2);

        const top = stack.peek();

        expect(top).toBe(2); // Korrigerat felet 
        expect(stack.pop()).toBe(2);
    });

    test('push och pop fungerar i korrekt ordning, LIFO', () => {
        stack.push('a');
        stack.push('b');
        stack.push('c');

        expect(stack.pop()).toBe('c');
        expect(stack.pop()).toBe('b');
        expect(stack.pop()).toBe('a');
    });

    test('stacken fungerar med olika datatyper', () => {
        const object = { key: "value "};

        stack.push(42);
        stack.push("text");
        stack.push(object);

        expect(stack.pop()).toEqual(object);
        expect(stack.pop()).toBe("text");
        expect(stack.pop()).toBe(42);
    });
});