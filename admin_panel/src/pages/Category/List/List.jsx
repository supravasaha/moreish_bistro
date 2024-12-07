import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./List.css";

import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const MySwal = withReactContent(Swal);

const ListCategory = ({ url }) => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  const onOpenModal = (category) => {
    setSelectedCategory(category);
    setUpdatedName(category.name);
    setOpen(true);
  };

  const onCloseModal = () => setOpen(false);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${url}/api/categories`);
      if (response.data) {
        setCategories(response.data);
      } else {
        MySwal.fire(
          "Error",
          "Failed to fetch categories: " + response.data.message,
          "error"
        );
      }
    } catch (error) {
      MySwal.fire("Error", "API call failed: " + error.message, "error"); //
    }
  };

  const updateCategory = async () => {
    try {
      const response = await axios.put(
        `${url}/api/categories/${selectedCategory._id}`,
        { name: updatedName }
      );
      if (response.data) {
        MySwal.fire("Success", "Category updated successfully", "success");
        fetchCategories();
        onCloseModal();
      } else {
        MySwal.fire(
          "Error",
          "Failed to update category: " + response.data.message,
          "error"
        );
      }
    } catch (error) {
      MySwal.fire(
        "Error",
        "Error updating category: " + error.message,
        "error"
      );
    }
  };

  const removeCategory = async (categoryId) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(
            `${url}/api/categories/${categoryId}`
          );
          if (response.data) {
            MySwal.fire(
              "Deleted!",
              "Your category has been deleted.",
              "success"
            );
            fetchCategories();
          } else {
            MySwal.fire(
              "Error",
              "Failed to remove category: " + response.data.message,
              "error"
            );
          }
        } catch (error) {
          MySwal.fire(
            "Error",
            "Error removing category: " + error.message,
            "error"
          );
        }
      }
    });
  };

  useEffect(() => {
    fetchCategories();
  }, [url]);

  return (
    <Container className="list-area2 add">
      {" "}
      <Row>
        <Col>
          <h3 className="text-center">All Categories List</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="list-table">
            <div className="list-table-format title">
              <b>#</b>
              <b>Name</b>
              <b colSpan="2">Actions</b>{" "}
            </div>
            {categories.map((category, index) => (
              <div className="list-table-format" key={category._id}>
                <p>{index + 1}</p>
                <p>{category.name}</p>
                <p>
                  <Button
                    variant="link"
                    className="edit-button"
                    onClick={() => onOpenModal(category)}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faPen} />
                  </Button>
                </p>
                <p>
                  <Button
                    variant="link"
                    className="delete-button"
                    onClick={() => removeCategory(category._id)}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </Button>
                </p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Modal open={open} onClose={onCloseModal} center>
        <h2 className="modal-title">Edit Category</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateCategory();
          }}
          className="modal-form"
        >
          {" "}
          <label>
            Category Name:
            <input
              type="text"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
              required
            />
          </label>
          <div className="modal-actions">
            <Button variant="primary" type="submit" className="update-btn">
              Update
            </Button>{" "}
            <Button
              variant="secondary"
              onClick={onCloseModal}
              className="cancel-btn"
            >
              Cancel
            </Button>{" "}
          </div>
        </form>
      </Modal>
    </Container>
  );
};

export default ListCategory;
