import { differenceInMinutes, format } from "date-fns";

const ISO_DATE_TIME_FORMAT = "yyyy-MM-dd";
const ONE_HOUR_IN_MINUTES = 60;
const ONE_DAY_IN_MINUTES = 24 * ONE_HOUR_IN_MINUTES;

export const DateTimeUtils = {
  getTimePastIfLessThanDay: (dateTime: Date | null): string => {
    if (!dateTime) return "";

    const now: Date = new Date();
    const diffInMinutes: number = differenceInMinutes(now, dateTime);

    console.log("Diff in minutes:", diffInMinutes);

    if (diffInMinutes > ONE_HOUR_IN_MINUTES) {
      if (diffInMinutes > ONE_DAY_IN_MINUTES) {
        return format(dateTime, ISO_DATE_TIME_FORMAT);
      }
      return Math.round(diffInMinutes / 60) + "h ago";
    }

    return Math.round(diffInMinutes) + "m ago";
  },
} as const;
