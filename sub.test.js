const sub = require("./sub.js")

test("Subtracts 8 from 7 equals 1", () =>{
    expect(sub(7, 8)).toBe(-1);
});

test("Subtracts 2 from 5 equals 1", () =>{
    expect(sub(5, 2)).toBe(3);
});