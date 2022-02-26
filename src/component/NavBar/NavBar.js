import React from "react";
import { useState } from "react";
import { Container, Navbar, Form, Button, Modal } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const NavBar = ({
  selectRating,
  setSelectRating,
  setSearchCondition,
  movies,
  setMovies,
}) => {
  const [show, setShow] = useState(false);

  const [movieToAdd, setMovieToAdd] = useState({
    name: "",
    description: "",
    posterurl: "",
    rate: 0,
  });
  const handleAdd = () => {
    setMovies([...movies, movieToAdd]);

    setShow(false);
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark" style={{ marginBottom: "4rem" }}>
        <Container>
          <Navbar.Brand href="#home">MovieApp</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
          <Rating
            onClick={(x) => setSelectRating(x / 20)}
            RatingValue={selectRating}
            size={30}
            style={{ marginRight: "2rem" }}
          />
          <Form.Control
            type="text"
            placeholder="search movies"
            style={{ width: "300px" }}
            onChange={(e) => setSearchCondition(e.target.value)}
          />
        </Container>
        <Button onClick={() => setShow(true)}>ADD Movie</Button>
      </Navbar>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Movie to Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Movie Name</Form.Label>
            <Form.Control
              onChange={(e) =>
                setMovieToAdd({ ...movieToAdd, name: e.target.value })
              }
              type="text"
              placeholder="Name"
            />
            <Form.Label>Movie Description</Form.Label>
            <Form.Control
              onChange={(e) =>
                setMovieToAdd({ ...movieToAdd, description: e.target.value })
              }
              type="text"
              placeholder="Description"
            />
            <Form.Label>Movie Poster URL</Form.Label>
            <Form.Control
              onChange={(e) =>
                setMovieToAdd({ ...movieToAdd, posterurl: e.target.value })
              }
              type="text"
              placeholder="Poster URL"
            />
            <Form.Label>Movie Rating</Form.Label>
            <Form.Control
              onChange={(e) =>
                setMovieToAdd({ ...movieToAdd, rate: e.target.value })
              }
              type="number"
              placeholder="Rating"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleAdd()}>
            ADD Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NavBar;
