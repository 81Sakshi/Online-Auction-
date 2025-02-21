import React from "react";
import { Container, ListGroup } from "react-bootstrap";

const Notifications = () => {
  const notifications = JSON.parse(localStorage.getItem("notifications")) || [];

  return (
    <Container className="mt-4">
      <h2>Notifications</h2>
      {notifications.length === 0 ? <p>No new notifications.</p> : (
        <ListGroup>
          {notifications.map((note, index) => (
            <ListGroup.Item key={index}>{note}</ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default Notifications;