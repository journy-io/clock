import { DateTime, Duration } from "luxon";
import { ClockFixed } from "./ClockFixed";

describe("ClockFixed", () => {
  test("it throw error if zone is not UTC", () => {
    expect(() => {
      new ClockFixed(DateTime.utc().setZone("Europe/Brussels"));
    }).toThrowError();
  });

  test("it returns fixed datetime", () => {
    const now = DateTime.utc();
    const clock = new ClockFixed(now);
    expect(clock.getUTCTime()).toEqual(now);
  });

  test("it advances with a duration", () => {
    const now = DateTime.utc();
    const clock = new ClockFixed(now);
    clock.advance(Duration.fromObject({ hour: 1 }));
    expect(clock.getUTCTime()).toEqual(
      now.plus(Duration.fromObject({ hour: 1 }))
    );
  });

  test("it sets to another date", () => {
    const now = DateTime.utc();
    const clock = new ClockFixed(now);
    clock.setTime(now.minus({ hour: 1 }));
    expect(clock.getUTCTime()).toEqual(now.minus({ hour: 1 }));
  });
});
