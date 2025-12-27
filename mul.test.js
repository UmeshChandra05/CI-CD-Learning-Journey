const mul = require("./mul.js");

test("Multiplies 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
});

test("Multiplies 3 * 4 to equal 12", () => {
    expect(mul(3, 4)).toBe(12);
});