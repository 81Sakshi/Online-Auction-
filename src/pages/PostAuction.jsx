import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const PostAuction = () => {
  const [title, setTitle] = useState("");
  const [startingBid, setStartingBid] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Auction Created: ${title} with Starting Bid: ${startingBid}');
  };

  return (
    <Container className="mt-4">
      <h2>Post a New Auction</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Item Title</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Starting Bid</Form.Label>
          <Form.Control type="number" value={startingBid} onChange={(e) => setStartingBid(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
        </Form.Group>
        <Button type="submit" variant="primary">Submit Auction</Button>
      </Form>
    </Container>
  );
};

export default PostAuction;
