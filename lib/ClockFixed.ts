import { DateTime, Duration } from "luxon";
import { Clock } from "./Clock";

// noinspection JSMethodCanBeStatic
export class ClockFixed implements Clock {
  constructor(private dateTime: DateTime) {
    this.guardDateTimeUsesUTC(this.dateTime);
  }

  getUTCTime() {
    return this.dateTime;
  }

  advance(duration: Duration) {
    this.dateTime = this.dateTime.plus(duration);
  }

  private guardDateTimeUsesUTC(time: DateTime) {
    if (time.zoneName !== "UTC") {
      throw new Error("UTC is required!");
    }
  }

  setTime(time: DateTime) {
    this.guardDateTimeUsesUTC(time);
    this.dateTime = time;
  }
}
