const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

describe("check addCommas result when localString method is used", () => {
  test("it works using localString method", () => {
    expect(addCommas("localString", 100000)).toEqual("100,000")
  })
  test("it works using localString method including decimals", () => {
    expect(addCommas("localString", 123456789.123)).toEqual("123,456,789.123")
  })
  test("it works using localString method rounding decimals", () => {
    expect(addCommas("localString", 123456789123.123456789)).toEqual("123,456,789,123.123")
  })
  test("it works using localString method when no commas are necessary", () => {
    expect(addCommas("localString", 100)).toEqual("100")
  })
})

describe("check addCommas result when regularExpression method is used", () => {
  test("it works using regularExpression method", () => {
    expect(addCommas("regularExpression", 100000)).toEqual("100,000")
  })
  test("it works using regularExpression method including decimals", () => {
    expect(addCommas("regularExpression", 123456789.123)).toEqual("123,456,789.123")
  })
  test("it works using regularExpression method rounding decimals", () => {
    expect(addCommas("regularExpression", 123456789123.123456789)).toEqual("123,456,789,123.12346")
  })
  test("it works using regularExpression method when no commas are necessary", () => {
    expect(addCommas("regularExpression", 100)).toEqual("100")
  })
})

describe("check addCommas result when intlFormat method is used", () => {
  test("it works using intlFormat method", () => {
    expect(addCommas("intlFormat", 100000)).toEqual("100,000")
  })
  test("it works using intlFormat method including decimals", () => {
    expect(addCommas("intlFormat", 123456789.123)).toEqual("123,456,789.123")
  })
  test("it works using intlFormat method rounding decimals", () => {
    expect(addCommas("intlFormat", 123456789123.123456789)).toEqual("123,456,789,123.123")
  })
  test("it works using intlFormat method when no commas are necessary", () => {
    expect(addCommas("intlFormat", 100)).toEqual("100")
  })
})