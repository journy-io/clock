import { DateTime } from "luxon";
import { Clock } from "./Clock";

export class ClockSystem implements Clock {
  getUTCTime() {
    return DateTime.utc();
  }
}
