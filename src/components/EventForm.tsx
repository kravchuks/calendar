import React, { FC, useState } from "react";
import { Form, Input, DatePicker, Row, Button, Select } from "antd";
import { Dayjs } from "dayjs";

import { rules } from "utils/rules";
import { IUser } from "models/IUser";
import { useTypedSelector } from "hooks/useTypedSelector";
import { IEvent } from "models/IEvent";

interface EventFormProps {
  guests: IUser[];
  onSubmit: (event: IEvent) => void;
}

const EventForm: FC<EventFormProps> = ({ guests, onSubmit }) => {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [guest, setGuest] = useState("");
  const { user } = useTypedSelector((state) => state.auth);
  const { isLoading, error } = useTypedSelector((state) => state.event);

  const selectDate = (date: Dayjs | null) => {
    if (date) {
      setDate(date.format("YYYY-MM-DD"));
    }
  };

  const formSubmit = () => {
    const author = user.username;
    onSubmit({ author, guest, date, description });
  };

  return (
    <Form onFinish={formSubmit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form.Item
        label="Description of Event"
        name="description"
        rules={[rules.required()]}
      >
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Date of Event"
        name="date"
        rules={[rules.required(), rules.isDayAfter()]}
      >
        <DatePicker onChange={(date) => selectDate(date)} />
      </Form.Item>

      <Form.Item
        label="Select Guests"
        name="guests"
        rules={[rules.required("Please select at least one guest")]}
      >
        <Select
          options={guests.map((guest) => ({
            label: guest.username,
            value: guest.username,
          }))}
          value={guest}
          onChange={(value) => setGuest(value)}
        />
      </Form.Item>

      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
