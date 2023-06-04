import User from "../src/user";

describe("User", () => {
  it('name returns fullname', () => {
    const user = new User({ firstName: "Courage", lastName: "Francis" });

    expect(user.name).toBe("Courage Francis");
  })
})
