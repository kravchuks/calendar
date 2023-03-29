import React, { FC, useEffect } from "react";
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
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          whiteSpace: "nowrap",
        }}
      >
        {currentDayEvents.map((event, index) => (
          <li key={index}>
            <Badge status="warning" text={event.description} />
          </li>
        ))}
      </ul>
    );
  };

  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
