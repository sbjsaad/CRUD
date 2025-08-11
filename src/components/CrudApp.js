import React, { useState } from "react";
import {
  FaIdCard,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
  FaEnvelope,
  FaLock,
  FaTransgenderAlt,
  FaBirthdayCake,
  FaFacebook,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
import "./CrudApp.css";

export default function CrudApp() {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    location: "",
    hobby: "",
    gender: "",
    age: "",
  });

  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = formData;
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, formData]);
    }

    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      location: "",
      hobby: "",
      gender: "",
      age: "",
    });
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const newUsers = users.filter((_, i) => i !== index);
      setUsers(newUsers);
    }
  };

  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditIndex(index);
  };

  return (
    <div className="container">
      {/* Form Section */}
      <div className="form-section">
        <div className="card">
          <h2>User Login Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-icon">
              <FaIdCard />
              <input
                type="text"
                name="id"
                placeholder="ID"
                value={formData.id}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-icon">
              <FaUser />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-icon">
              <FaUser />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-icon">
              <FaEnvelope />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-icon">
              <FaLock />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-icon">
              <FaPhone />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-icon">
              <FaMapMarkerAlt />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-icon">
              <FaHeart />
              <input
                type="text"
                name="hobby"
                placeholder="Hobby"
                value={formData.hobby}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-icon">
              <FaTransgenderAlt />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="input-icon">
              <FaBirthdayCake />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            {/* Social Icons */}
            <div style={{ textAlign: "center", marginTop: "25px" }}>
              <p>Or Sign With..</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  fontSize: "28px",
                  cursor: "pointer",
                }}
              >
                <FaFacebook style={{ color: "#3b5998" }} />
                <FaTwitter style={{ color: "#1da1f2" }} />
                <FaGoogle style={{ color: "#db4437" }} />
              </div>
            </div>

            {/* Submit Button at Bottom */}
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <button type="submit" className="button">
                {editIndex !== null ? "Update" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-section">
        <div className="card">
          <h2>User List</h2>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Location</th>
                <th>Hobby</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.location}</td>
                  <td>{user.hobby}</td>
                  <td>{user.gender}</td>
                  <td>{user.age}</td>
                  <td>
                    <button
                      className="button button-warning"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>{" "}
                    <button
                      className="button button-danger"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="10">No users added yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
