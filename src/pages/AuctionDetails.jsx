import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button, ListGroup, Form } from "react-bootstrap";

const AuctionDetails = () => {
  const { id } = useParams();

  
  const [bids, setBids] = useState([
    { user: "Alice", amount: 500 },
    { user: "Bob", amount: 550 },
  ]);

  const [bidAmount, setBidAmount] = useState("");

  const handlePlaceBid = () => {
    if (bidAmount && bidAmount > bids[bids.length - 1].amount) {
      setBids([...bids, { user: "You", amount: parseInt(bidAmount) }]);
      setBidAmount("");
    } else {
      alert("Your bid must be higher than the current bid!");
    }
  };

  return (
    <Container className="mt-4">
      <Card className="auction-card">
        <Card.Body>
          <Card.Title>Auction Item {id}</Card.Title>
          <Card.Text>
            <span role="img" aria-label="money">💰</span> Current Bid: <strong>${bids[bids.length - 1].amount}</strong>
          </Card.Text>
          <Card.Text>
            <span role="img" aria-label="clock">⏳</span> Time Remaining: <strong>2h 30m</strong>
          </Card.Text>
          <Card.Text>
            <span role="img" aria-label="description">📄</span> Description: This is a high-quality product up for auction.
          </Card.Text>

          
          <Form>
            <Form.Group>
              <Form.Label>Place Your Bid</Form.Label>
              <Form.Control
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                required
              />
            </Form.Group>
            <Button className="mt-2" onClick={handlePlaceBid}>Place Bid</Button>
          </Form>

          
          <h5 className="mt-4">Bid History</h5>
          <ListGroup>
            {bids.map((bid, index) => (
              <ListGroup.Item key={index}>
                {bid.user}: ${bid.amount}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AuctionDetails;