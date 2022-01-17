const Engineer = require('../lib/Engineer');

describe("Eningeer", () =>{
    it('should extend Employee object with a gitHub via constructor arguments', () =>{
       const github ="cat"
       const e = new Engineer("Bill", 7, "test@test.com", github)
       expect(e.github).toEqual(github)
    })
})

describe("getGithub", () => {
    it('should return gitHub',() =>{
        const github = "cat"
        const e = new Engineer("Bill", 7, "test@email.com", github)
        expect(e.getGithub()).toEqual(github)
    })
})

describe("getRole", () => {
    it('should return Engineer', () =>{
        const role = "Engineer"
        const e = new Engineer("Bill", 7, "test@email.com", "cat")
        expect(e.getRole()).toEqual(role)
    })
})