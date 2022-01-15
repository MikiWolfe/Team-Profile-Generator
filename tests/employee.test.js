const Employee = require('../lib/Employee');

describe( "Employee", () =>{
 describe( 'intialization / constructor', ()=>{
     it( "should build with prop x when give y", () => 
     {
    const e = new Employee();
    expect(typeof(e)).toBe(Object)
     })
 })

describe("getName" , () =>{

    it("should return name", () =>{
        const name = Karen
        const e = new Employee (name)
        expect(e.name).toBe(name)
    })
})
describe("getID" , () =>{
    
 it("should return ID", () =>{
     const id = 5
     const e = new Employee (id)
     expect(e.id).toBe(id)
 })
    })
describe("getEmail" , () =>{
       
     it("should return email", () =>{
         const email = testEmail
         const e =new Employee (email);
         expect(e.email).toBe(email)
     })
    })

 describe("getRole", () =>{
           
 it("should return 'Employee;", () =>{
    (expect (return "Employee"))
 })        
    })

})