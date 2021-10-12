const {test, expect} = require("@jest/globals");
const lib = require("./lib")

test("sum([1, 2]) should be 3", ()=>
{
    expect(lib.sum([1, 2])).toBe(5);
});
test("avg([-5, 5]) should be 0", () =>
{
    expect(lib.avg([-5, 5])).toBe(0);
});
test("avg([1, 2, 3]) should be 2", () =>
{
    expect(lib.avg([1, 2, 3])).toBe(2);
});
test("max([-5, 5]) should be 5", () =>
{
    expect(lib.max([-5, 5])).toBe(5);
});