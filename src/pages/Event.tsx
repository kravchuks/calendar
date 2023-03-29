import React, { FC, useState, useEffect } from "react";
import { Layout, Row, Button, Modal } from "antd";

import EventCalendar from "components/EventCalendar";
import EventForm from "components/EventForm";
import { useActions } from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import { IEvent } from "models/IEvent";

const Event: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { getGuests, createEvent, getEvents } = useActions();
  const { guests, events } = useTypedSelector((state) => state.event);
  const { user } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    getGuests();
    getEvents();
  }, []);

  const filteredEvents = events.filter(
    (event) => event.author === user.username || event.guest === user.username
  );

  const addNewEvent = (event: IEvent) => {
    createEvent(event);
    setIsModalVisible(false);
  };

  return (
    <Layout style={{ margin: "0 5vh" }}>
      <EventCalendar events={filteredEvents} />

      <Row justify="center">
        <Button
          type="primary"
          size="large"
          style={{ width: "100%" }}
          onClick={() => setIsModalVisible(true)}
        >
          Add Event
        </Button>
      </Row>

      <Modal
        title="Add Event"
        open={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
      >
        <EventForm guests={guests} onSubmit={addNewEvent} />
      </Modal>
    </Layout>
  );
};

export default Event;
