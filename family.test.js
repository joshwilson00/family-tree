const family = require('./family');

describe('Name return tests.', ()=> {
    test('should return the family members name', () => {
        expect(family[0].getName()).toBe('Josh');
    });
    test('should NOT return the family members name', () => {
        expect(family[0].name).toBeUndefined();
    });
    test('should return the 2nd family members name.', () => {
        expect(family[1].getName()).toBe('Sam');
    });    
});

describe('childOf funcionality testing', ()=>{
    test('should return the names of both parents.', () => {
        expect(family[0].childOf()).toBe('David & Janine');
    });
    test('should return parents unknown.', () => {
        expect(family[2].childOf()).toBe('Parents unknown.');
    });
});

describe('listSiblings functionality testing', ()=>{
    test('should return Sam', () => {
        expect(family[0].listSiblings()).toBe('Sam');
    });
    test('should return Josh', () => {
        expect(family[1].listSiblings()).toBe('Josh');
    })
});