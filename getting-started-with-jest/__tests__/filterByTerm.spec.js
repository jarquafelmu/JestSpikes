const filterByTerm = require("../src/filterByTerm");

// https://www.valentinog.com/blog/jest/

describe("Filter function", () => {
  // test stuff
  test("it should filter by a search term (link)", () => {
    // actual test
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);

    expect(filterByTerm(input, "LINK")).toEqual(output);
    expect(filterByTerm(input, "LiNK")).toEqual(output);
  });

  test("it should throw when search term is empty", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];
    expect(() => {
      filterByTerm(input, null);
    }).toThrow("searchTerm cannot be empty");
  });

  test("it should throw when input is null", () => {
    expect(() => {
      filterByTerm(null, "url");
    }).toThrow("inputArr cannot be null");
  });

  test("it should throw when input is empty", () => {
    expect(() => {
      filterByTerm([], "url");
    }).toThrow("inputArr cannot be empty");
  });
});
