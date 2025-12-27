const div = require("./div.js")

test("Divides 5 by 5 equals 1", () => {
    expect(div(5, 5)).toBe(1);
});

test("Divided 5 By 0 equals undefined", () =>{
    expect(div(5, 0)).toBe(Infinity);
});