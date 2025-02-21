import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";

const WatchList = () => {
  const [watchlist, setWatchlist] = useState(JSON.parse(localStorage.getItem("watchlist")) || []);

  return (
    <Container className="mt-4">
      <h2>My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No items in watchlist</p>
      ) : (
        watchlist.map((item, index) => (
          <Card key={index} className="mb-3">
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>Current Bid: {item.bid}</Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
};

export default WatchList;
