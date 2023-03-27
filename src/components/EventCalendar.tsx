import React, { FC } from "react";
import { Calendar, Badge } from "antd";
import { Dayjs } from "dayjs";

import { IEvent } from "../models/IEvent";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = ({ events }) => {
  const dateCellRender = (value: Dayjs) => {
    const formattedDate = value.format("YYYY-MM-DD");
    const currentDayEvents = events.filter(
      (event) => event.date === formattedDate
    );
    return (
      <ul style={{ listStyle: "none" }}>
        {currentDayEvents.map((event) => (
          <li key={event.author}>
            <Badge status="success" text={event.description} />
          </li>
        ))}
      </ul>
    );
  };

  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
