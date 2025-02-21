import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const auctions = [
  { id: 1, title: "Laptop", bid: "$500", time: "2h 30m" },
  { id: 2, title: "Smartphone", bid: "$300", time: "1h 15m" },
];

const Dashboard = () => {
  const addToWatchlist = (item) => {
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    watchlist.push(item);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    alert("Added to Watchlist!");
  };

  return (
    <Container className="mt-4">
      <h2>Auction Dashboard</h2>
      {auctions.map((item) => (
        <Card key={item.id} className="mb-3">
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>Current Bid: {item.bid}</Card.Text>
            <Card.Text>Time Remaining: {item.time}</Card.Text>
            <Button as={Link} to={'/auction/${item.id}'} variant="primary">
              View Details
            </Button>
            <Button className="ms-2" onClick={() => addToWatchlist(item)}>
              Add to Watchlist
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Dashboard;
