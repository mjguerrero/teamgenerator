const { TestResult } = require("@jest/types");
const Engineer = require('../lib/Engineer');

// test for name, email, id, role validity

const testEngineer = new Engineer("neil", "ndino@gmail.com", 3 , "engineer", "ngdino")
test('has a name', () => {
    expect(testEngineer.name).toEqual(expect.any(String))
    expect(testEngineer.name.length).toBeGreaterThan(2)
})

test('has an email a valid email', () =>{
    expect(testEngineer.email).toEqual(expect.stringContaining('@'))
})

test('has a role of Engineer', () => {
    expect(testEngineer.role).toBe('engineer')
})

test('Id has value', () =>{
    expect(testEngineer.id).toEqual(expect.any(Number))
})

test('Entered a github', () =>{
    objectKeys= Object.keys(testEngineer)
    keyGH = objectKeys[4]
    expect(keyGH).toBe('gitHub')
    expect(testEngineer.gitHub).toEqual(expect.any(String))
})
