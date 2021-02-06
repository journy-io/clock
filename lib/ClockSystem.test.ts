import { DateTime } from "luxon";
import { ClockSystem } from "./ClockSystem";

describe("ClockSystem", () => {
  test("it returns luxon instance in UTC", () => {
    const clock = new ClockSystem();
    expect(clock.getUTCTime()).toBeInstanceOf(DateTime);
    expect(clock.getUTCTime().zoneName).toEqual("UTC");
  });
});
