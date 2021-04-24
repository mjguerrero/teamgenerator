const { TestResult } = require("@jest/types");
const Intern = require('../lib/Intern');

// test for name, email, id, role validity

const testIntern = new Intern("neil", "ndino@gmail.com", 3 , "intern", "FSU")
test('has a name', () => {
    expect(testIntern.name).toEqual(expect.any(String))
    expect(testIntern.name.length).toBeGreaterThan(2)
})

test('has an email a valid email', () =>{
    expect(testIntern.email).toEqual(expect.stringContaining('@'))
})

test('has a role ofintern', () => {
    expect(testIntern.role).toBe('intern')
})

test('Id has value', () =>{
    expect(testIntern.id).toEqual(expect.any(Number))
})

test('Entered a school', () =>{
    objectKeys= Object.keys(testIntern)
    keyGH = objectKeys[4]
    expect(keyGH).toBe('school')
    expect(testIntern.school).toEqual(expect.any(String))
})
