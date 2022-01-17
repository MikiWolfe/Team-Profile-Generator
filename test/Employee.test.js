const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("intialization / constructor", () => {
    it("should build with prop x when give y", () => {
      const e = new Employee("Beth", 2, "test@email.com");
expect(e.name).toEqual("Beth")
expect(e.id).toEqual(2)
expect(e.email).toEqual("test@email.com")
    });

  });
});
describe("getName", () => {
  it("should return name", () => {
    const name = "Beth";
    const e = new Employee("Beth");
    expect(e.name).toBe(name);
  });
});
describe("getId", () => {
  it("should return id", () => {
    const id = 2;
    const e = new Employee("Beth", 2);
    expect(e.id).toBe(id);
  });
});

describe("getEmail", () => {
  it("should retun email", () => {
    const email = "test@email.com";
    const e = new Employee("Beth", 2, email);
    expect(e.email).toBe(email);
  });
});

describe("getRole", () => {
  it("should return 'Employee;", () => {
    const role = "Employee";
    const e = new Employee("Beth", 2, "test@email.com");
    expect(e.getRole()).toBe(role);
  });
});
