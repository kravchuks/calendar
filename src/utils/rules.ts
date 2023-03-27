import { Dayjs } from "dayjs";

export const rules = {
  required: (message: string = "Required field") => ({
    required: true,
    message,
  }),
  isDayAfter: (message: string = "Date must be after today") => ({
    validator(_: any, value: Dayjs) {
      if (!value || value.isAfter(new Date())) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(message));
    },
  }),
};
