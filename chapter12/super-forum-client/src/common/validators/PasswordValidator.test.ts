import { isPasswordValid } from "./PasswordValidator";

describe("PasswordValidator.isPasswordValid", () => {
  it("returns falsy result for password with the length < 8", () => {
    const result = isPasswordValid("skdwlfo");
    expect(result.isValid).toBeFalsy();
  });
  it("returns falsy result for password with without special symbol", () => {
    const result = isPasswordValid("Aljdfj4lfDFldfkl");
    expect(result.isValid).toBeFalsy();
  });
  it("returns truthy result for password with the length > 8, containing capital letter, number & special symbol", () => {
    const result = isPasswordValid("falLLdfj4lf&DFldfkl");
    expect(result.isValid).toBeTruthy();
  });
});
