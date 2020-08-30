import React from "react";
import { Card } from "react-bootstrap";

export default function CardComp({ title, body }) {
  return (
    <Card className="h-100" style={{ borderRadius: 12 }}>
      <Card.Body>
        <Card.Title style={{ fontWeight: "bolder", fontSize: 22 }}>
          {title}
        </Card.Title>
        <Card.Text style={{ color: "gray", fontSize: 18 }}>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
}
