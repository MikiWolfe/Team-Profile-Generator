const Manager = require("../lib/Manager")

describe("Manager", () => {
    it("should extend the Employee object with a office phone number via constructor arguments", () =>{
        const officeNumber = 8
        const e = new Manager("Karen", 1, "test@email.com", officeNumber)
        expect(e.officeNumber).toEqual(officeNumber)
    })
})

describe("getOfficeNumber", () => {
    it('should return officeNumber',() =>{
        const officeNumber = 8
        const e = new Manager("Karen", 1, "test@email.com", officeNumber)
        expect(e.getOfficeNumber()).toEqual(officeNumber)
    })
})

describe("getRole", () => {
    it('should return Manager', () =>{
        const role = "Manager"
        const e = new Manager ("Karen", 1, "test@email.com", 8)
        expect(e.getRole()).toEqual(role)
    })
})