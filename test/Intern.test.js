const Intern = require('../lib/Intern');

describe("Intern", () =>{
    it('should extend the Employee object with a school via constructor arguments', () =>{
        const school = "NYU"
        const e = new Intern("Jill", 6, "test@email.com", school)
        expect(e.school).toBe(school)
    })
})

describe("getSchool", () => {
    it('should return school',() =>{
        const school = "NYU"
        const e = new Intern("Jill", 6, "test@email.com", school)
        expect(e.getSchool()).toBe(school)
    })
})

describe("getRole", () => {
    it('should return Intern', () =>{
        const role = "Intern"
        const e = new Intern("Jill", 6, "test@email.com", "NYU")
        expect(e.getRole()).toBe(role)
    })
})