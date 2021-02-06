import { DateTime } from "luxon";

export interface Clock {
  getUTCTime(): DateTime;
}
