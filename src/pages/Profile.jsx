import React, { useState } from "react";
import { Container, Form, Button, ListGroup, Card } from "react-bootstrap";
import "/src/Profile.css"; 

const Profile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [auctionHistory] = useState([
    { id: 1, item: "iPhone 14", status: "Won", price: "$850" },
    { id: 2, item: "Laptop", status: "Lost", price: "$1100" },
  ]);

  const handleProfilePicChange = (event) => {
    if (event.target.files[0]) {
      setProfilePic(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <Container className="mt-4 profile-container">
      <h2 className="text-center mb-4">Profile</h2>
      <Card className="p-4 profile-card">
        <div className="text-center profile-pic-section">
          <img
            src={profilePic || "https://via.placeholder.com/150"}
            alt="Profile"
            className="profile-img rounded-circle"
          />
          <br />
          <label htmlFor="file-upload" className="custom-file-upload">
            Change Profile Picture
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
          />
        </div>

        <Form className="mt-3">
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" className="mt-3 w-100">
            Update Profile
          </Button>
        </Form>

        <h4 className="mt-4 text-center">Auction History</h4>
        <ListGroup className="auction-history">
          {auctionHistory.map((auction) => (
            <ListGroup.Item key={auction.id} className={'auction-${auction.status.toLowerCase()}'}>
              <strong>{auction.item}</strong> - {auction.status} at {auction.price}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </Container>
  );
};

export default Profile;
