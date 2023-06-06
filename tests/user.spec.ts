import { v4 as uuidv4 } from 'uuid';
import User from "../src/user";

describe("User", () => {
  it('name returns fullname', () => {
    const user = new User({ id: uuidv4(), firstName: "Courage", lastName: "Francis" });

    expect(user.name).toBe("Courage Francis");
  })
})
