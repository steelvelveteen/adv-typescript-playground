import { addUID2 } from './generics-ninja.ts'; // Adjust the import if needed

describe('addUID2 Function', () => {
    it('should add a uid to the given object', () => {
        const result = addUID2({ name: 'Joshua' });
        expect(result).toHaveProperty('uid');
        expect(result.name).toBe('Joshua');
    });

    it('should return the original properties along with the uid', () => {
        const obj = { name: 'Joanna', age: 30 };
        const result = addUID2(obj);
        expect(result).toHaveProperty('uid');
        expect(result.name).toBe('Joanna');
        expect(result.age).toBe(30);
    });
});
